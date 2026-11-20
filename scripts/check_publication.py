"""Check only the explicit publication tree. Never print matched secret values."""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
SKIP = {'.git', 'node_modules', 'dist', 'portfolio', '__pycache__'}
PATTERNS = {
    'private-key': r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',
    'github-token': r'\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b',
    'cloud-key': r'\b(?:AKIA|ASIA)[A-Z0-9]{16}\b',
    'ai-key': r'\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{24,}\b',
    'credential-url': r'https?://[^\s/:]+:[^\s/@]+@',
    'jwt': r'\beyJ[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,}\b',
    'private-machine-path': r'[A-Za-z]:[\\/]Users[\\/]',
    'credential-assignment': r'''(?i)(?:api[_-]?key|client[_-]?secret|password|access[_-]?token|refresh[_-]?token)\s*[:=]\s*["'][^"'\s]{8,}["']''',
}
ALLOWED_SUFFIXES = {'.md','.json','.js','.jsx','.mjs','.cjs','.css','.html','.py','.yml','.jpg'}
def files():
    for p in ROOT.rglob('*'):
        if p.is_file() and not any(part in SKIP for part in p.relative_to(ROOT).parts):
            yield p
def main():
    findings=[]
    checked=list(files())
    for p in checked:
        rel=p.relative_to(ROOT).as_posix()
        if p.name not in {'.gitignore','.gitleaks.toml'} and p.suffix not in ALLOWED_SUFFIXES:
            findings.append((rel,0,'unexpected-file-type'))
        if p.name.startswith('.env') or p.suffix in {'.key','.pem','.pfx','.db'} or p.name.endswith('.local'):
            findings.append((rel,0,'private-file-type'))
        if p.suffix == '.jpg':
            if rel != 'public/images/postiz-review.jpg' or not p.read_bytes().startswith(bytes([255,216,255])):
                findings.append((rel,0,'unreviewed-image'))
            continue
        text=p.read_text(encoding='utf-8')
        for label,pattern in PATTERNS.items():
            for hit in re.finditer(pattern,text):
                findings.append((rel,text[:hit.start()].count('\n')+1,label))
    for rel,line,label in findings: print(f'{rel}:{line}: {label}')
    print(f'Checked {len(checked)} publication files; findings: {len(findings)}')
    return bool(findings)
if __name__=='__main__': sys.exit(main())

import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { prepareTikTokMetadata } from '../src/fisigames/prepare-metadata.cjs';

// Portfolio-only endpoint: no credentials, account access or broadcasting controls.
export function createServer() {
  return http.createServer(async (req,res)=>{
    res.setHeader('Cache-Control','no-store');
    res.setHeader('X-Content-Type-Options','nosniff');
    const send=(status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(data));};
    const host=req.headers.host;
    if (!/^(127\.0\.0\.1|localhost):\d+$/.test(host||'')) return send(403,{error:'Invalid host'});
    if (req.headers.origin && !['http://127.0.0.1:5173','http://localhost:5173',`http://${host}`].includes(req.headers.origin)) return send(403,{error:'Invalid origin'});
    if (req.url==='/api/health' && req.method==='GET') return send(200,{status:'ok',mode:'portfolio-demo'});
    if (req.url!=='/api/metadata') return send(404,{error:'Not found'});
    if (req.method!=='POST') return send(405,{error:'Use POST'});
    if (!/^application\/json(?:;|$)/i.test(req.headers['content-type']||'')) return send(415,{error:'Use application/json'});
    let body='';
    try {
      for await (const chunk of req) { body+=chunk.toString(); if(Buffer.byteLength(body)>8192) return send(413,{error:'Request too large'}); }
      let draft; try { draft=JSON.parse(body); } catch { return send(400,{error:'Invalid JSON'}); }
      if(!draft || typeof draft!=='object' || Array.isArray(draft)) return send(400,{error:'Expected an object'});
      if(typeof draft.game!=='string' || draft.game.length>120 || typeof draft.title!=='string' || draft.title.length>160 || typeof draft.tags!=='string' || draft.tags.length>500 || !Array.isArray(draft.channels) || draft.channels.some(c=>typeof c!=='string')) return send(400,{error:'Invalid metadata fields'});
      try { return send(200,prepareTikTokMetadata(draft)); } catch(error){return send(422,{error:error.message});}
    } catch { if(!res.writableEnded) return send(400,{error:'Could not read request'}); }
  });
}
if (process.argv[1]===fileURLToPath(import.meta.url)) createServer().listen(4317,'127.0.0.1',()=>console.log('Portfolio demo API: http://127.0.0.1:4317'));

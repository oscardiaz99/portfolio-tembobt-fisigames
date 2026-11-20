import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useReducedMotion } from './tembo/useReducedMotion.js';
import { useLazyActivation } from './tembo/useLazyActivation.js';
import { ParallaxLayers } from './tembo/ParallaxLayers.jsx';
import './style.css';

function App() {
  const reducedMotion = useReducedMotion();
  const activation = useLazyActivation();
  const [title, setTitle] = useState('Una nueva partida');
  const [game, setGame] = useState('Juego de ejemplo');
  const [tags, setTags] = useState('#FisiGames #Gaming #gaming');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  async function preview(event) {
    event.preventDefault(); setBusy(true); setError(''); setResult(null);
    try {
      const response = await fetch('/api/metadata', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ game, title, tags, channels: ['tiktok'] }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'No se pudo preparar la vista previa.');
      setResult(data);
    } catch (cause) { setError(cause.message === 'Failed to fetch' ? 'Inicia la API local con npm run api.' : cause.message); }
    finally { setBusy(false); }
  }
  return <main>
    <header><a className="wordmark" href="#inicio">OD<span>.</span></a><nav aria-label="Principal"><a href="#proyectos">Proyectos</a><a href="#demo">Demo</a><a href="https://github.com/oscardiaz99">GitHub ↗</a></nav></header>
    <section className="hero" id="inicio"><p className="eyebrow">OSCAR OMAR DÍAZ OCHOA · ECUADOR</p><h1>Del problema real<br/>al software que ayuda.</h1><p className="intro">Desarrollo web, soporte y automatización. Una selección de trabajo en temboBT y FisiGames, con decisiones técnicas, código y límites documentados.</p><a className="action" href="#proyectos">Explorar proyectos ↓</a><p className="caption">JavaScript · React · Node.js · PHP / Laravel · SQL</p></section>
    <section id="proyectos"><div className="section-title"><p className="eyebrow">01 / TRABAJO SELECCIONADO</p><h2>Dos contextos.<br/>Un mismo criterio.</h2></div><div className="cards">
      <article className="card tembo"><div className="art"><ParallaxLayers reducedMotion={reducedMotion} scrollProgress={0.3}/><strong>tembo<span>BT</span></strong></div><div className="card-body"><p className="eyebrow">FRONTEND / EXPERIENCIA WEB</p><h3>Una base para experiencias inmersivas</h3><p>React y Next.js: componentes separados, activación diferida y respeto a las preferencias de movimiento.</p><ul><li>Hooks reales seleccionados del proyecto.</li><li>Intersección de viewport y limpieza de observers.</li><li>Animación decorativa accesible.</li></ul><a href="https://github.com/oscardiaz99/portfolio-tembobt-fisigames/blob/main/docs/tembobt.md">Leer el caso y ver código ↗</a></div></article>
      <article className="card fisi"><div className="art"><span className="signal">●</span><strong>FisiGames</strong><small>PREPARAR → VALIDAR → REVISAR</small></div><div className="card-body"><p className="eyebrow">BACKEND / AUTOMATIZACIÓN LOCAL</p><h3>Metadatos consistentes antes de un directo</h3><p>Un módulo Node.js valida el destino, exige título y juego, y elimina hashtags repetidos sin iniciar emisiones.</p><ul><li>Función extraída del proyecto real.</li><li>API y UI de demostración creadas para este portafolio.</li><li>Pruebas sin conexiones a cuentas externas.</li></ul><a href="https://github.com/oscardiaz99/portfolio-tembobt-fisigames/blob/main/docs/fisigames.md">Leer el caso y ver código ↗</a></div></article>
    </div></section>
    <section id="demo" ref={activation.ref} className="demo"><div><p className="eyebrow">02 / DEMO LOCAL</p><h2>Antes de publicar,<br/>revisar.</h2><p>Prueba la preparación de metadatos. Usa datos ficticios: esta demo no publica, no abre OBS ni se conecta a TikTok.</p><p className="caption">API local necesaria: <code>npm run api</code><br/>Movimiento reducido: {reducedMotion ? 'activado' : 'no solicitado'}. Sección detectada: {activation.isActive ? 'sí' : 'todavía no'}.</p></div><form onSubmit={preview}><label>Juego<input value={game} onChange={e=>setGame(e.target.value)} maxLength={120} required/></label><label>Título<input value={title} onChange={e=>setTitle(e.target.value)} maxLength={160} required/></label><label>Hashtags<input value={tags} onChange={e=>setTags(e.target.value)} maxLength={500}/></label><button disabled={busy}>{busy ? 'Preparando…' : 'Preparar vista previa'}</button>{error && <p role="alert">{error}</p>}{result && <pre aria-live="polite">{JSON.stringify(result,null,2)}</pre>}</form></section>
    <section className="about"><p className="eyebrow">03 / FORMA DE TRABAJAR</p><h2>Construir, comprobar<br/>y explicar.</h2><p>Trabajo asistido por herramientas de IA, con revisión del código, pruebas y documentación. Diferencio una implementación local, una demo y una validación en producción.</p><p>Español nativo. Lectura de documentación en inglés; conversación en inglés limitada.</p></section>
    <footer><span>Oscar Díaz · Desarrollo y automatización</span><a href="https://github.com/oscardiaz99/portfolio-tembobt-fisigames">Código y documentación ↗</a></footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<App/>);

"use client";

import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      {/* BOTÃO DO CLERK NO CANTO SUPERIOR */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
        <UserButton afterSignOutUrl="/" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        :root{
          --bg:#0e0f14;--surface:#16181f;--surface2:#1e2030;--border:#2a2d3a;
          --text:#e8eaf0;--muted:#8a8fa8;--muted2:#5a5f78;
          --c1:#5b8dee;--c2:#4ecba4;--c3:#f5a623;--c4:#e05c6b;
          --c5:#9b7fe8;--c6:#3dd4f5;--c7:#f0c040;--c8:#f06292;
          --radius:14px;--gap:18px;--sidebar:256px;
        }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;font-size:14px;line-height:1.55;min-height:100vh;overflow-x:hidden}

        #hub-screen{min-height:100vh;display:flex;flex-direction:column;position:relative;overflow:hidden}
        #hub-screen::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 20% 10%,rgba(91,141,238,.11) 0%,transparent 60%),radial-gradient(ellipse 60% 50% at 80% 80%,rgba(155,127,232,.08) 0%,transparent 55%),radial-gradient(ellipse 40% 40% at 50% 50%,rgba(78,203,164,.05) 0%,transparent 50%);pointer-events:none}
        .hub-header{text-align:center;padding:60px 24px 36px;position:relative}
        .hub-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(91,141,238,.1);border:1px solid rgba(91,141,238,.25);color:var(--c1);border-radius:99px;padding:5px 16px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:22px}
        .hub-title{font-family:'Syne',sans-serif;font-size:clamp(36px,7vw,70px);font-weight:800;letter-spacing:-.03em;background:linear-gradient(135deg,#fff 0%,rgba(255,255,255,.55) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.05;margin-bottom:10px}
        .hub-title span{background:linear-gradient(135deg,var(--c1) 0%,var(--c5) 60%,var(--c6) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .hub-sub{font-size:15px;color:var(--muted);letter-spacing:.04em;margin-bottom:4px}
        .hub-author{font-size:12px;color:var(--muted2);letter-spacing:.08em;display:inline-flex;align-items:center;gap:8px;margin-top:2px}
        .hub-author::before,.hub-author::after{content:'';width:22px;height:1px;background:var(--muted2)}
        .hub-divider{width:56px;height:3px;background:linear-gradient(90deg,var(--c1),var(--c5));border-radius:99px;margin:24px auto 0}
        .hub-content{max-width:1100px;margin:0 auto;padding:40px 24px 80px;width:100%;position:relative}
        .hub-section-label{font-family:'Syne',sans-serif;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted2);margin-bottom:18px;display:flex;align-items:center;gap:12px}
        .hub-section-label::after{content:'';flex:1;height:1px;background:var(--border)}
        .subjects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;margin-bottom:40px}
        .subject-card{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:26px;cursor:pointer;transition:all .25s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
        .subject-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--card-line,rgba(91,141,238,.5)),transparent);opacity:.8}
        .subject-card:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.12);box-shadow:0 16px 48px rgba(0,0,0,.4)}
        .sc-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px}
        .sc-icon{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;background:var(--icon-bg,rgba(91,141,238,.12));flex-shrink:0}
        .sc-status{font-size:10px;font-weight:700;font-family:'Syne',sans-serif;letter-spacing:.07em;padding:4px 10px;border-radius:99px;border:1px solid}
        .sc-status.active{background:rgba(78,203,164,.12);color:var(--c2);border-color:rgba(78,203,164,.3)}
        .sc-title{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;color:#fff;margin-bottom:5px;line-height:1.2}
        .sc-desc{font-size:12.5px;color:var(--muted);line-height:1.55;margin-bottom:16px}
        .sc-arrow{display:flex;align-items:center;justify-content:flex-end;gap:6px;padding-top:14px;border-top:1px solid var(--border);font-size:12px;font-weight:600;color:var(--card-color,var(--c1))}
        .hub-footer{text-align:center;padding:0 24px 40px;font-size:11px;color:var(--muted2);letter-spacing:.06em;text-transform:uppercase}
      `}} />

      <main id="hub-screen">
        <header className="hub-header">
          <div className="hub-badge">Administração PUCPR</div>
          <h1 className="hub-title">Hub de <span>Matérias</span></h1>
          <p className="hub-sub">Base de Conhecimento e Ferramentas</p>
          <div className="hub-author">PUCPR 2026</div>
          <div className="hub-divider"></div>
        </header>

        <section className="hub-content">
          <div className="hub-section-label">Matérias Disponíveis</div>
          
          <div className="subjects-grid">
            {/* CARD EXEMPLO 1 */}
            <div className="subject-card">
              <div className="sc-top">
                <div className="sc-icon">📊</div>
                <div className="sc-status active">DISPONÍVEL</div>
              </div>
              <h3 className="sc-title">Matemática Financeira</h3>
              <p className="sc-desc">Cálculos, fórmulas e simuladores para gestão financeira.</p>
              <div className="sc-arrow">ACESSAR CONTEÚDO →</div>
            </div>

            {/* CARD EXEMPLO 2 */}
            <div className="subject-card" style={{ ['--card-line' as any]: 'var(--c5)' }}>
              <div className="sc-top">
                <div className="sc-icon" style={{ background: 'rgba(155,127,232,0.12)' }}>📈</div>
                <div className="sc-status active">DISPONÍVEL</div>
              </div>
              <h3 className="sc-title">Estatística Aplicada</h3>
              <p className="sc-desc">Análise de dados, probabilidade e ferramentas de decisão.</p>
              <div className="sc-arrow" style={{ color: 'var(--c5)' }}>ACESSAR CONTEÚDO →</div>
            </div>
          </div>
        </section>

        <footer className="hub-footer">
          &copy; 2026 Administração PUCPR - Todos os direitos reservados
        </footer>
      </main>
    </>
  );
}

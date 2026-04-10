"use client";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      {/* BOTÃO DO CLERK NO CANTO SUPERIOR */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
        <UserButton />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        :root{
          --bg:#0e0f14;--surface:#16181f;--text:#e8eaf0;--muted:#8a8fa8;
          --c1:#5b8dee;--c5:#9b7fe8;
        }
        body{background:var(--bg);color:var(--text);font-family:sans-serif;margin:0}
        .hub-header{text-align:center;padding:60px 24px}
        .hub-title{font-size:50px;font-weight:800;color:#fff}
        .hub-title span{color:var(--c1)}
      `}} />

      <main>
        <header className="hub-header">
          <h1 className="hub-title">Hub de <span>Matérias</span></h1>
          <p style={{color: 'var(--muted)', textAlign: 'center'}}>Administração PUCPR</p>
        </header>
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            <p>Se você está vendo isso, o sistema está ONLINE!</p>
        </div>
      </main>
    </>
  );
}

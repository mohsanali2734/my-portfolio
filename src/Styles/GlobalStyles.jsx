export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body { font-family:'Manrope',sans-serif; background:#0b0f1a; color:#fff; overflow-x:hidden; }
    ::-webkit-scrollbar { width:5px; }
    ::-webkit-scrollbar-track { background:#0b0f1a; }
    ::-webkit-scrollbar-thumb { background:#2dd4bf40; border-radius:99px; }
    ::selection { background:#2dd4bf30; }
    a { text-decoration:none; color:inherit; }
    img { display:block; }

    @keyframes marquee      { from{transform:translateX(0)}    to{transform:translateX(-50%)} }
    @keyframes marqueeBack  { from{transform:translateX(-50%)} to{transform:translateX(0)}    }
    @keyframes blink        { 0%,100%{opacity:1} 50%{opacity:.3} }

    .marquee      { animation:marquee     30s linear infinite; }
    .marqueeBack  { animation:marqueeBack 24s linear infinite; }
    .blink        { animation:blink 2s ease-in-out infinite; }

    .teal         { color:#2dd4bf; }
    .teal-italic  { color:#2dd4bf; font-style:italic; }

    .section-badge {
      display:inline-flex; align-items:center; gap:8px;
      border:1px solid #2dd4bf33; background:#0d2a2a;
      border-radius:999px; padding:6px 18px;
      font-size:12px; font-weight:700; letter-spacing:.1em; color:#2dd4bf;
    }

    .nav-link { color:#94a3b8; font-size:15px; font-weight:500; transition:color .2s; }
    .nav-link:hover { color:#fff; }

    .btn-teal {
      background:linear-gradient(135deg,#2dd4bf,#0d9488);
      color:#0b0f1a; font-weight:800; font-size:14px;
      padding:11px 28px; border-radius:999px; border:none; cursor:pointer;
      display:inline-flex; align-items:center; gap:7px;
      transition:opacity .2s,transform .15s;
    }
    .btn-teal:hover { opacity:.88; transform:translateY(-1px); }

    .btn-white {
      background:#fff; color:#0b0f1a; font-weight:800; font-size:14px;
      padding:11px 28px; border-radius:999px; border:none; cursor:pointer;
      display:inline-flex; align-items:center; gap:7px; transition:opacity .2s;
    }
    .btn-white:hover { opacity:.88; }

    .btn-outline {
      background:transparent; color:#fff; font-weight:700; font-size:14px;
      padding:11px 28px; border-radius:999px; border:1.5px solid #334155; cursor:pointer;
      transition:border-color .2s,color .2s;
    }
    .btn-outline:hover { border-color:#2dd4bf; color:#2dd4bf; }

    .stat-card {
      background:#111827; border:1px solid #1e293b; border-radius:18px;
      padding:28px 16px; display:flex; flex-direction:column;
      align-items:center; gap:12px; text-align:center;
      transition:border-color .25s,transform .25s;
    }
    .stat-card:hover { border-color:#2dd4bf44; transform:translateY(-3px); }

    .card-dark {
      background:#0d1526; border:1px solid #1e293b; border-radius:20px;
      transition:border-color .25s,transform .25s;
    }
    .card-dark:hover { border-color:#2dd4bf33; transform:translateY(-4px); }

    .skill-pill {
      display:flex; flex-direction:column; align-items:center; gap:10px;
      background:#0d1526; border:1px solid #1e293b; border-radius:18px;
      padding:22px 18px; min-width:120px;
      transition:border-color .25s,transform .2s; flex-shrink:0;
    }
    .skill-pill:hover { border-color:#2dd4bf44; transform:translateY(-3px); }

    .svc-card {
      background:#0d1526; border:1px solid #1e293b; border-radius:22px;
      padding:32px 28px; display:flex; flex-direction:column; gap:18px;
      transition:border-color .3s,transform .3s; cursor:default; height:100%;
    }
    .svc-card:hover { border-color:#2dd4bf55; transform:translateY(-5px); }

    .svc-icon {
      width:56px; height:56px; border-radius:14px;
      background:#0a1628; border:1px solid #1e3a5f;
      display:flex; align-items:center; justify-content:center; flex-shrink:0;
    }

    .proj-card {
      background:#0d1526; border:1px solid #1e293b; border-radius:20px; overflow:hidden;
      transition:border-color .25s,transform .25s;
    }
    .proj-card:hover { border-color:#2dd4bf44; transform:translateY(-4px); }

    .tag {
      border:1px solid #2dd4bf33; color:#2dd4bf; border-radius:6px;
      font-size:12px; font-weight:700; padding:4px 12px; background:#0a2222; white-space:nowrap;
    }

    .wf-card {
      background:#0d1526; border:1px solid #1e293b; border-radius:18px;
      padding:28px 20px; display:flex; flex-direction:column; align-items:flex-start; gap:14px;
      transition:border-color .25s,transform .25s;
    }
    .wf-card:hover { border-color:#2dd4bf33; transform:translateY(-3px); }

    .faq-row {
      background:#0d1526; border:1px solid #1e293b; border-radius:14px;
      overflow:hidden; transition:border-color .2s; cursor:pointer;
    }
    .faq-row.open { border-color:#2dd4bf44; }

    .contact-row {
      background:#0d1526; border:1px solid #1e293b; border-radius:14px;
      padding:18px 22px; display:flex; align-items:center; gap:16px;
      transition:border-color .2s,background .2s;
    }
    .contact-row:hover { border-color:#2dd4bf55; background:#0a1f2e; }

    .fi {
      width:100%; background:#111827; border:1px solid #1e293b; border-radius:12px;
      padding:14px 18px; color:#fff; font-size:14px; font-family:'Manrope',sans-serif;
      outline:none; transition:border-color .2s; resize:none;
    }
    .fi:focus { border-color:#2dd4bf; }
    .fi::placeholder { color:#475569; }
    .fi option { background:#111827; }

    .filter-btn { padding:8px 22px; border-radius:999px; font-size:14px; font-weight:700; cursor:pointer; border:none; transition:all .2s; }
    .fa { background:#2dd4bf; color:#0b0f1a; }
    .fi2 { background:transparent; color:#94a3b8; border:1px solid #1e293b; }
    .fi2:hover { border-color:#2dd4bf44; color:#fff; }

    .footer-link { color:#64748b; font-size:13px; font-weight:600; letter-spacing:.07em; transition:color .2s; }
    .footer-link:hover { color:#2dd4bf; }

    /* --- ADDED CLASSES HERE --- */
    .mobile-only { display: none !important; }

    @media(max-width:900px){
      .g2 { grid-template-columns:1fr !important; }
      .g4 { grid-template-columns:repeat(2,1fr) !important; }
      .g3 { grid-template-columns:1fr !important; }
      .hide-sm { display:none !important; }
      .mobile-only { display:flex !important; } 
    }
    @media(max-width:600px){
      .g4 { grid-template-columns:1fr 1fr !important; }
    }
  `}</style>
);
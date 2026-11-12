import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setSc] = useState(false);
  const [menu, setMenu] = useState(false);
  
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  
  const links = ["Home", "About", "Services", "Experience", "Projects", "Contact"];
  
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, 
      padding: scrolled ? "12px 0" : "18px 0",
      background: scrolled ? "rgba(11, 15, 26, 0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(45, 212, 191, 0.12)" : "1px solid transparent",
      transition: "all 0.3s ease-in-out",
    }}>
      <div style={{ 
        width: "100%", 
        maxWidth: "1300px", 
        margin: "0 auto", 
        padding: "0 32px", 
        display: "grid", 
        gridTemplateColumns: "1fr auto 1fr", 
        alignItems: "center" 
      }}>
        
        {/* LEFT: LOGO */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "2px", textDecoration: "none", justifySelf: "start", flexShrink: 0 }}>
          <span style={{ color: "#2dd4bf", fontWeight: 900, fontSize: 20 }}>&lt;</span>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 18, letterSpacing: "-0.5px" }}>Mohsan Ali</span>
          <span style={{ color: "#2dd4bf", fontWeight: 900, fontSize: 20 }}>/&gt;</span>
        </a>

        {/* CENTER: NAV LINKS (Desktop) */}
        <ul style={{ display: "flex", gap: "28px", listStyle: "none", margin: 0, padding: 0, alignItems: "center", justifySelf: "center" }} className="hide-sm">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="nav-link" style={{ fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>{l}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE LOGO (Visible only on mobile when menu toggle takes over) */}
        <a href="#home" className="mobile-only" style={{ display: "none", alignItems: "center", gap: "2px", textDecoration: "none" }}>
          <span style={{ color: "#2dd4bf", fontWeight: 900, fontSize: 20 }}>&lt;</span>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 18, letterSpacing: "-0.5px" }}>Mohsan Ali</span>
          <span style={{ color: "#2dd4bf", fontWeight: 900, fontSize: 20 }}>/&gt;</span>
        </a>

        {/* RIGHT: RESUME BUTTON (Desktop) */}
        <div className="hide-sm" style={{ display: "flex", alignItems: "center", justifySelf: "end" }}>
          <a href="mailto:dev.khmohsanali@gmail.com" className="btn-teal" style={{ padding: "8px 20px", fontSize: 13, whiteSpace: "nowrap", flexShrink: 0 }}>
            Resume →
          </a>
        </div>

        {/* MOBILE HAMBURGER ICON */}
        <button 
          className="mobile-only" 
          onClick={() => setMenu(!menu)} 
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: 8, color: "#fff", justifySelf: "end" }} 
          aria-label="menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{ width: 22, height: 2, background: menu ? "#2dd4bf" : "currentColor", borderRadius: 99, display: "block", transition: "background 0.2s" }}/>
          ))}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menu && (
        <div style={{ display: "flex", flexDirection: "column", background: "rgba(11, 15, 26, 0.98)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderBottom: "1px solid rgba(45, 212, 191, 0.15)", padding: "20px 24px 28px", position: "absolute", top: "100%", left: 0, right: 0, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          {links.map(l => (
            <a 
              key={l} 
              href={`#${l.toLowerCase()}`} 
              onClick={() => setMenu(false)}
              style={{ display: "block", padding: "14px 0", color: "#e2e8f0", fontWeight: 600, fontSize: 15, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {l}
            </a>
          ))}
          <a href="mailto:dev.khmohsanali@gmail.com" className="btn-teal" 
          style={{ marginTop: 24, justifyContent: "center", width: "100%", padding: "10px 0" }}>
            Resume →
          </a>
        </div>
      )}
    </nav>
  );
}
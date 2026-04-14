import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setSc] = useState(false);
  const [menu, setMenu] = useState(false);
  
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 20); // Triggers the glass effect sooner
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  
  const links = ["Home", "About", "Services", "Experience", "Projects", "Contact"];
  
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, 
      padding: scrolled ? "12px 0" : "20px 0", // Shrinks slightly on scroll
      background: scrolled ? "rgba(11, 15, 26, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px)" : "none", // Safari support
      borderBottom: scrolled ? "1px solid rgba(45, 212, 191, 0.1)" : "1px solid transparent",
      transition: "all 0.3s ease-in-out",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* LOGO */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ color: "#2dd4bf", fontWeight: 900, fontSize: 22 }}>&lt;</span>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 20, letterSpacing: "-0.5px" }}>Mohsan Ali</span>
          <span style={{ color: "#2dd4bf", fontWeight: 900, fontSize: 22 }}>/&gt;</span>
        </a>

        {/* DESKTOP LINKS & RESUME */}
        <div className="hide-sm" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <ul style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="nav-link" style={{ fontSize: 14, fontWeight: 600 }}>{l}</a>
              </li>
            ))}
          </ul>
          <a href="mailto:dev.khmohsanali@gmail.com" className="btn-teal" style={{ padding: "8px 20px" }}>
            Resume →
          </a>
        </div>

        {/* MOBILE HAMBURGER ICON */}
        <button 
          className="mobile-only" 
          onClick={() => setMenu(!menu)} 
          style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 6, padding: 8, color: "#fff" }} 
          aria-label="menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{ width: 24, height: 2, background: menu ? "#2dd4bf" : "currentColor", borderRadius: 99, display: "block", transition: "background 0.2s" }}/>
          ))}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menu && (
        <div className="mobile-only" style={{ flexDirection: "column", background: "rgba(11, 15, 26, 0.98)", borderTop: "1px solid #1e293b", padding: "16px 32px 24px", position: "absolute", top: "100%", left: 0, right: 0 }}>
          {links.map(l => (
            <a 
              key={l} 
              href={`#${l.toLowerCase()}`} 
              onClick={() => setMenu(false)}
              style={{ display: "block", padding: "12px 0", color: "#e2e8f0", fontWeight: 600, fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {l}
            </a>
          ))}
          <a href="mailto:dev.khmohsanali@gmail.com" className="btn-teal" 
          style={{ marginTop: 20, justifyContent: "center", width: "100%" }}>
            Resume →
          </a>
        </div>
      )}
    </nav>
  );
}
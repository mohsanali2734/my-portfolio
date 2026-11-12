export default function Footer() {
  return (
    <footer style={{borderTop:"1px solid #1e293b",padding:"48px 32px 36px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:32,flexWrap:"wrap",marginBottom:40}}>
          <div>
            <div style={{marginBottom:12}}>
              <span style={{color:"#2dd4bf",fontWeight:900,fontSize:20}}>&lt;</span>
              <span style={{color:"#fff",fontWeight:900,fontSize:20}}> Mohsan </span>
              <span style={{color:"#2dd4bf",fontWeight:900,fontSize:20}}>Ali</span>
              <span style={{color:"#2dd4bf",fontWeight:900,fontSize:20}}> /&gt;</span>
            </div>
            <p style={{color:"#475569",fontSize:13,maxWidth:240,lineHeight:1.7}}>
              Associate Software Engineer (MERN) — passionate about building scalable and secure web applications.
            </p>
          </div>
          {[
            {
              label: "NAVIGATE", 
              links: [
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" }
              ]
            },
            {
              label: "CONNECT", 
              links: [
                { name: "LinkedIn", href: "https://www.linkedin.com/in/mohsan-ali-435495301/" },
                { name: "GitHub", href: "https://github.com/mohsanali2734" },
                { name: "Email", href: "mailto:dev.khmohsanali@gmail.com" }
              ]
            },
          ].map(g => (
            <div key={g.label}>
              <div style={{fontSize:11,color:"#2dd4bf",fontWeight:800,letterSpacing:".1em",marginBottom:16}}>{g.label}</div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {g.links.map(l => (
                  <a 
                    key={l.name} 
                    href={l.href} 
                    className="footer-link"
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{borderTop:"1px solid #1e293b",paddingTop:24,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <span style={{color:"#475569",fontSize:13}}>© 2026 Mohsan Ali • All Rights Reserved</span>
          <span style={{color:"#475569",fontSize:13}}>Built with React.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
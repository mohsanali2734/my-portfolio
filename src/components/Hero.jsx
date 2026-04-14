import { Reveal } from "./Reveal";
import { ILi, IGh } from "./Icons";

export default function Hero() {
  return (
    <section id="home" style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"130px 32px 80px",textAlign:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 55% at 50% -5%, #0d3030 0%, transparent 70%)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,maxWidth:900,width:"100%"}}>
        <Reveal>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:36,background:"#0d2a2a",border:"1px solid #2dd4bf44",borderRadius:999,padding:"8px 22px"}}>
            <span className="blink" style={{width:8,height:8,borderRadius:"50%",background:"#2dd4bf",display:"inline-block"}}/>
            <span style={{color:"#2dd4bf",fontSize:12,fontWeight:800,letterSpacing:".12em"}}>AVAILABLE FOR FREELANCE WORK</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 style={{fontSize:"clamp(2.4rem,5.5vw,5rem)",fontWeight:900,lineHeight:1.08,marginBottom:28,letterSpacing:"-.02em"}}>
            Hello, I'm <span className="teal">Mohsan Ali</span><br/>
            Full Stack Web & BlockChain<br/>Developer
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p style={{fontSize:17,color:"#94a3b8",lineHeight:1.8,maxWidth:620,margin:"0 auto 44px"}}>
            I specialize in building high-performance, user-centric web applications using the MERN stack.
            I bridge the gap between complex backend logic and seamless digital experiences across all platforms.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:80}}>
            <a href="https://www.linkedin.com/in/mohsan-ali-435495301" target="_blank" rel="noreferrer" className="btn-teal"><ILi/> LinkedIn</a>
            <a href="https://github.com/mohsanali2734" target="_blank" rel="noreferrer" className="btn-white"><IGh/> GitHub</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {[
              {e:"⊞",n:"3+",  l:"PROJECTS COMPLETED"},
              {e:"👥",n:"2",   l:"INTERNSHIPS"},
              {e:"💼",n:"1+",  l:"YEARS EXPERIENCE"},
              {e:"🌐",n:"10+", l:"TECH STACK"},
            ].map(s=>(
              <div key={s.l} className="stat-card">
                <div style={{width:48,height:48,borderRadius:12,background:"#0d2a2a",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>
                  <span style={{color:"#2dd4bf"}}>{s.e}</span>
                </div>
                <div style={{fontSize:"clamp(1.8rem,3vw,2.4rem)",fontWeight:900}}>{s.n}</div>
                <div style={{fontSize:10,color:"#64748b",fontWeight:800,letterSpacing:".1em"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
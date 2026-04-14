import { Reveal } from "./Reveal";
import { SERVICES } from "../constants/data";

export default function Services() {
  return (
    <section id="services" style={{padding:"100px 32px",borderTop:"1px solid #1e293b"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <Reveal style={{textAlign:"center",marginBottom:60}}>
          <div style={{marginBottom:20}}><span className="section-badge">WHAT I OFFER</span></div>
          <h2 style={{fontSize:"clamp(1.8rem,4vw,3.2rem)",fontWeight:900,marginBottom:14}}>
            Architecting Scalable Solutions for<br/>
            <span style={{color:"#475569",fontWeight:900}}>High-Impact Digital Products</span>
          </h2>
        </Reveal>
        <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
          {SERVICES.map((s,i)=>(
            <Reveal key={s.title} delay={i*70}>
              <div className="svc-card">
                <div className="svc-icon"><s.Icon/></div>
                <h3 style={{fontSize:20,fontWeight:800,lineHeight:1.3}}>{s.title}</h3>
                <p style={{color:"#64748b",fontSize:14,lineHeight:1.8,flexGrow:1}}>{s.desc}</p>
                <a href="#contact" style={{color:"#2dd4bf",fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6,marginTop:4}}>
                  Learn More →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Reveal } from "./Reveal";
import { EXPERIENCE } from "../constants/data";
import { IBrief, ICal } from "./Icons";

export default function Experience() {
  return (
    <section id="experience" style={{padding:"100px 32px",borderTop:"1px solid #1e293b"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div className="g2" style={{display:"grid",gridTemplateColumns:"320px 1fr",gap:60,alignItems:"flex-start"}}>
          <Reveal>
            <div className="sticky-desktop">
              <div style={{marginBottom:24}}><span className="section-badge">JOURNEY</span></div>
              <h2 style={{fontSize:"clamp(1.8rem,3vw,2.8rem)",fontWeight:900,lineHeight:1.2,marginBottom:20}}>
                Professional<br/><span className="teal-italic">Experience</span>
              </h2>
              <p style={{color:"#64748b",fontSize:14,lineHeight:1.8}}>
                I specialize in building full-stack enterprise solutions and scalable web applications with a focus on high performance and clean architecture.
              </p>
            </div>
          </Reveal>

          <div style={{display:"flex",gap:28}}>
            <div style={{width:2,background:"linear-gradient(to bottom,#2dd4bf,#2dd4bf44,transparent)",flexShrink:0,marginTop:8}}/>
            <div style={{display:"flex",flexDirection:"column",gap:40,flex:1}}>
              {EXPERIENCE.map((e,i)=>(
                <Reveal key={`${e.role}-${e.company}`} delay={i*120}>
                  <div style={{position:"relative"}}>
                    <div style={{position:"absolute",left:-43,top:32,width:18,height:18,borderRadius:"50%",border:"2px solid #2dd4bf",background:"#0b0f1a",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <div style={{width:6,height:6,borderRadius:"50%",background:"#2dd4bf"}}/>
                    </div>
                    <div className="card-dark" style={{padding:"30px 32px"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16,marginBottom:20,flexWrap:"wrap"}}>
                        <div>
                          <h3 style={{fontSize:22,fontWeight:900,marginBottom:4}}>{e.role}</h3>
                          <div style={{color:"#2dd4bf",fontWeight:700,fontSize:15}}>{e.company}</div>
                          <div style={{color:"#64748b",fontSize:12,marginTop:4}}>{e.location}</div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",gap:8}}>
                          {[{Icon:IBrief,label:e.type},{Icon:ICal,label:e.period}].map((b,j)=>(
                            <div key={j} style={{display:"flex",alignItems:"center",gap:6,background:"#111827",border:"1px solid #1e293b",borderRadius:999,padding:"5px 14px"}}>
                              <b.Icon/>
                              <span style={{fontSize:11,fontWeight:700,letterSpacing:".08em",color:"#94a3b8"}}>{b.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
                        {e.points.map((pt,j)=>(
                          <li key={j} style={{display:"flex",gap:12,color:"#94a3b8",fontSize:14,lineHeight:1.7}}>
                            <span style={{color:"#2dd4bf",flexShrink:0,marginTop:3}}>•</span>{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
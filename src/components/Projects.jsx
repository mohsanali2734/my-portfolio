import { useState } from "react";
import { Reveal } from "./Reveal";
import { ALL_PROJECTS } from "../constants/data";
import { IExt } from "./Icons";

export default function Projects() {
  const [filter,setFilter]=useState("All");
  const cats=["All","WebApp","Mobile"];
  const shown=filter==="All"?ALL_PROJECTS:ALL_PROJECTS.filter(p=>p.cat===filter);
  return (
    <section id="projects" style={{padding:"100px 32px",borderTop:"1px solid #1e293b"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <Reveal style={{textAlign:"center",marginBottom:48}}>
          <div style={{marginBottom:20}}><span className="section-badge">PORTFOLIO</span></div>
          <h2 style={{fontSize:"clamp(2rem,4vw,3.5rem)",fontWeight:900,marginBottom:16}}>
            Featured <span className="teal">Work</span>
          </h2>
          <p style={{color:"#64748b",fontSize:16,maxWidth:520,margin:"0 auto 36px"}}>
            Production-grade systems and scalable applications built to solve complex problems.
          </p>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            {cats.map(c=>(
              <button key={c} onClick={()=>setFilter(c)}
                className={`filter-btn ${filter===c?"fa":"fi2"}`}>{c}</button>
            ))}
          </div>
        </Reveal>
        <div style={{display:"flex",flexDirection:"column",gap:24}}>
          {shown.map((p,i)=>(
            <Reveal key={p.title} delay={i*80}>
              <div className="proj-card">
                <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:300}}>
                  <div style={{padding:"40px 44px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <div style={{color:p.color,fontSize:11,fontWeight:800,letterSpacing:".12em",marginBottom:12}}>{p.type}</div>
                    <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",marginBottom:14}}>
                      <h3 style={{fontSize:"clamp(1.3rem,2.5vw,1.8rem)",fontWeight:900}}>{p.title}</h3>
                      {p.badge&&<span style={{fontSize:11,background:"#0d2a2a",color:"#2dd4bf",border:"1px solid #2dd4bf33",borderRadius:999,padding:"3px 10px",whiteSpace:"nowrap"}}>{p.badge}</span>}
                    </div>
                    <p style={{color:"#64748b",fontSize:14,lineHeight:1.8,marginBottom:24}}>{p.desc}</p>
                    <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:28}}>
                      {p.tags.map(t=><span key={t} className="tag">{t}</span>)}
                    </div>
                    <a href="https://github.com/mohsanali" target="_blank" rel="noreferrer"
                      style={{display:"inline-flex",alignItems:"center",gap:8,color:"#fff",fontSize:14,fontWeight:700}}>
                      <IExt/> View Live Project
                    </a>
                  </div>
                  <div style={{background:`linear-gradient(135deg,${p.color}18 0%,#0d1526 100%)`,display:"flex",flexDirection:"column",justifyContent:"center",padding:"36px 32px",gap:12,borderLeft:"1px solid #1e293b"}}>
                    <div style={{fontSize:11,color:"#64748b",fontWeight:700,letterSpacing:".1em",marginBottom:8}}>KEY HIGHLIGHTS</div>
                    {p.points.map((pt,j)=>(
                      <div key={j} style={{display:"flex",gap:10,fontSize:13,color:"#94a3b8",lineHeight:1.6}}>
                        <span style={{color:p.color,flexShrink:0,marginTop:2}}>▸</span>{pt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
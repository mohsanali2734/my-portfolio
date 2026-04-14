import { Reveal } from "./Reveal";
import { WORKFLOW } from "../constants/data";

export default function Workflow() {
  return (
    <section style={{padding:"100px 32px",borderTop:"1px solid #1e293b"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <Reveal style={{textAlign:"center",marginBottom:60}}>
          <div style={{marginBottom:20}}><span className="section-badge">WORKFLOW</span></div>
          <h2 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,marginBottom:16}}>How I <span className="teal">Work</span></h2>
          <p style={{color:"#64748b",fontSize:16,maxWidth:500,margin:"0 auto"}}>My structured approach ensures transparency, speed, and high-quality results for every project.</p>
        </Reveal>
        <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
          {WORKFLOW.map((w,i)=>(
            <Reveal key={w.title} delay={i*80}>
              <div className="wf-card">
                <div style={{color:"#2dd4bf",fontSize:13,fontWeight:800}}>{w.num}</div>
                <div style={{width:56,height:56,borderRadius:14,background:w.bg,display:"flex",alignItems:"center",justifyContent:"center"}}><w.Icon/></div>
                <h3 style={{fontWeight:800,fontSize:17}}>{w.title}</h3>
                <p style={{color:"#64748b",fontSize:13,lineHeight:1.7}}>{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
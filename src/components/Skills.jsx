import { Reveal } from "./Reveal";
import { SKILLS } from "../constants/data";

export default function Skills() {
  const doubled = [...SKILLS,...SKILLS];
  return (
    <section style={{padding:"80px 0",borderTop:"1px solid #1e293b",overflow:"hidden"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",marginBottom:48,textAlign:"center"}}>
        <Reveal>
          <div style={{marginBottom:16}}><span className="section-badge">CORE SKILLS</span></div>
          <h2 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900}}>My Technical <span className="teal-italic">Stack</span></h2>
        </Reveal>
      </div>
      {[{cls:"marquee"},{cls:"marqueeBack",rev:true}].map(({cls,rev},ri)=>(
        <div key={ri} style={{position:"relative",marginBottom:ri===0?20:0,overflow:"hidden"}}>
          <div style={{position:"absolute",left:0,top:0,bottom:0,width:80,background:"linear-gradient(to right,#0b0f1a,transparent)",zIndex:2}}/>
          <div style={{position:"absolute",right:0,top:0,bottom:0,width:80,background:"linear-gradient(to left,#0b0f1a,transparent)",zIndex:2}}/>
          <div className={cls} style={{display:"flex",gap:16,width:"max-content"}}>
            {(rev?[...doubled].reverse():doubled).map((s,i)=>(
              <div key={i} className="skill-pill">
                <img src={s.logo} alt={s.name} style={{width:44,height:44,objectFit:"contain"}} onError={e=>{e.target.style.display="none";}}/>
                <span style={{fontSize:11,fontWeight:800,letterSpacing:".08em",color:"#94a3b8"}}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
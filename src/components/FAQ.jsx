import { useState } from "react";
import { Reveal } from "./Reveal";
import { FAQS } from "../constants/data";
import { IPlus } from "./Icons";

export default function FAQ() {
  const [open,setOpen]=useState(null);
  return (
    <section style={{padding:"100px 32px",borderTop:"1px solid #1e293b"}}>
      <div style={{maxWidth:900,margin:"0 auto"}}>
        <Reveal style={{textAlign:"center",marginBottom:56}}>
          <div style={{marginBottom:20}}><span className="section-badge">SUPPORT</span></div>
          <h2 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900}}>Got <span className="teal">Questions?</span></h2>
        </Reveal>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {FAQS.map((f,i)=>(
            <Reveal key={i} delay={i*50}>
              <div className={`faq-row ${open===i?"open":""}`} onClick={()=>setOpen(open===i?null:i)}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"22px 28px"}}>
                  <span style={{fontWeight:700,fontSize:15}}>{f.q}</span>
                  <div style={{width:32,height:32,borderRadius:"50%",background:"#111827",border:"1px solid #1e293b",display:"flex",alignItems:"center",justifyContent:"center",transition:"transform .2s",transform:open===i?"rotate(45deg)":"none",flexShrink:0}}>
                    <IPlus/>
                  </div>
                </div>
                {open===i&&(
                  <div style={{padding:"0 28px 22px",color:"#64748b",fontSize:14,lineHeight:1.8,borderTop:"1px solid #1e293b44"}}>{f.a}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
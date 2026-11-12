import { useState } from "react";
import { Reveal } from "./Reveal";
import { IMail, ILi, IGh, IPhone, IDl, ISend, IExt } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", reason: "Hiring", message: "" });
  
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the WhatsApp message text
    const phoneNumber = "923299531897"; // Country code + number without spaces/symbols
    const text = `*New Portfolio Message*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Reason:* ${form.reason}\n\n*Message:*\n${form.message}`;
    
    // Encode for URL safety
    const encodedText = encodeURIComponent(text);
    
    // Open WhatsApp chat with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" style={{padding:"100px 32px",borderTop:"1px solid #1e293b"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"flex-start"}}>
          
          {/* Left Column: Info & Links */}
          <Reveal>
            <div>
              <div style={{marginBottom:20}}><span className="section-badge">GET IN TOUCH</span></div>
              <h2 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,marginBottom:20}}>
                Let's Build <br/><span className="teal">Something Amazing</span>
              </h2>
              <p style={{color:"#64748b",fontSize:15,lineHeight:1.8,marginBottom:36}}>
                Whether you're looking to hire a full-stack engineer, collaborate on a Web3/MERN project, 
                or just want to chat about tech — my inbox is always open.
              </p>
              
              <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:36}}>
                {[
                  { Icon: IMail, label: "EMAIL", val: "dev.khmohsanali@gmail.com", href: "mailto:dev.khmohsanali@gmail.com" },
                  { Icon: ILi,   label: "LINKEDIN", val: "linkedin.com/in/mohsan-ali-435495301", href: "https://www.linkedin.com/in/mohsan-ali-435495301" },
                  { Icon: IGh,   label: "GITHUB", val: "github.com/mohsanali2734", href: "https://github.com/mohsanali2734" },
                  { Icon: IPhone, label: "WHATSAPP / PHONE", val: "+92 329 9531897", href: "https://wa.me/923299531897" },
                ].map(c => (
                  <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-row">
                    <div style={{width:42,height:42,borderRadius:10,background:"#0d2a2a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <c.Icon/>
                    </div>
                    <div style={{flex:1, overflow:"hidden"}}>
                      <div style={{fontSize:10,color:"#64748b",fontWeight:800,letterSpacing:".1em"}}>{c.label}</div>
                      <div style={{fontSize:14,fontWeight:700,marginTop:2,textOverflow:"ellipsis",overflow:"hidden"}}>{c.val}</div>
                    </div>
                    <IExt/>
                  </a>
                ))}
              </div>

              <a href="https://drive.google.com/file/d/1QOHlAqNJ_qy5AEBQrgub8FlinbCRmly4/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-teal" style={{width:"100%",justifyContent:"center",padding:"14px 0",fontSize:15}}>
                <IDl/> Download Resume
              </a>
              
              <div style={{display:"flex",alignItems:"center",gap:8,marginTop:16,justifyContent:"center"}}>
                <span className="blink" style={{width:8,height:8,borderRadius:"50%",background:"#22c55e",display:"inline-block"}}/>
                <span style={{color:"#64748b",fontSize:13}}>Available for full-time roles & freelance work</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Contact Form redirected to WhatsApp */}
          <Reveal delay={100}>
            <div className="card-dark" style={{padding:"36px 32px"}}>
              <h3 style={{fontSize:22,fontWeight:800,marginBottom:8}}>Send a Message</h3>
              <p style={{color:"#64748b",fontSize:13,marginBottom:28}}>Fill out the form to instantly start a WhatsApp chat with me.</p>
              
              <form onSubmit={handleSubmit}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
                  {[
                    { l: "NAME", k: "name", p: "Your name", t: "text" },
                    { l: "EMAIL", k: "email", p: "you@company.com", t: "email" }
                  ].map(f => (
                    <div key={f.k}>
                      <label style={{display:"block",fontSize:11,color:"#64748b",fontWeight:800,letterSpacing:".1em",marginBottom:8}}>{f.l}</label>
                      <input className="fi" type={f.t} placeholder={f.p} required value={form[f.k]} onChange={e => set(f.k, e.target.value)}/>
                    </div>
                  ))}
                </div>

                <div style={{marginBottom:14}}>
                  <label style={{display:"block",fontSize:11,color:"#64748b",fontWeight:800,letterSpacing:".1em",marginBottom:8}}>REASON</label>
                  <select className="fi" value={form.reason} onChange={e => set("reason", e.target.value)}>
                    {["Hiring", "Collaboration", "Project Idea", "Just saying hi"].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div style={{marginBottom:22}}>
                  <label style={{display:"block",fontSize:11,color:"#64748b",fontWeight:800,letterSpacing:".1em",marginBottom:8}}>MESSAGE</label>
                  <textarea className="fi" rows={5} placeholder="Tell me about your project, timeline, or opportunity..." required value={form.message} onChange={e => set("message", e.target.value)}/>
                </div>

                <button type="submit" className="btn-teal" style={{width:"100%",justifyContent:"center",padding:"14px 0",fontSize:15, cursor:"pointer"}}>
                  <ISend/> Send via WhatsApp
                </button>
                
                <p style={{color:"#475569",fontSize:12,textAlign:"center",marginTop:14}}>
                  Direct emails can also be sent to dev.khmohsanali@gmail.com
                </p>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
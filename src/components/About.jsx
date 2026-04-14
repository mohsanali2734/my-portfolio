import { Reveal } from "./Reveal";
import { IStar, Ic } from "./Icons";

export default function About() {
  return (
    <section id="about" style={{padding:"100px 32px",maxWidth:1200,margin:"0 auto"}}>
      <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
        <Reveal>
          <div style={{position:"relative"}}>
            <div style={{borderRadius:24,overflow:"hidden",border:"1px solid #1e293b",lineHeight:0,position:"relative"}}>
              <img
                 src="https://i.ibb.co/LXJVKM6G/Mohsan-Ali.jpg" 
                alt="Mohsan Ali" style={{width:"100%",height:700,objectFit:"cover",objectPosition:"top center",filter:"brightness(.82)"}}
              />
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,#0b0f1a 0%,transparent 55%)"}}/>
            </div>
            {/* Float: exp */}
            <div style={{position:"absolute",top:28,left:-20,background:"rgba(13,21,38,.96)",border:"1px solid #1e293b",borderRadius:14,padding:"12px 18px",display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:34,height:34,borderRadius:10,background:"#0d2a2a",display:"flex",alignItems:"center",justifyContent:"center"}}><IStar/></div>
              <div><div style={{fontSize:20,fontWeight:900}}>1+</div><div style={{fontSize:9,color:"#64748b",fontWeight:800,letterSpacing:".08em"}}>YEARS OF EXPERIENCE</div></div>
            </div>
            {/* Float: coffee */}
            <div style={{position:"absolute",bottom:70,left:-20,background:"rgba(13,21,38,.96)",border:"1px solid #1e293b",borderRadius:14,padding:"12px 18px",display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:34,height:34,borderRadius:10,background:"#0d2a2a",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>☕</div>
              <div><div style={{fontSize:20,fontWeight:900}}>500+</div><div style={{fontSize:9,color:"#64748b",fontWeight:800,letterSpacing:".08em"}}>CUPS OF COFFEE</div></div>
            </div>
            {/* Float: projects */}
            <div style={{position:"absolute",bottom:70,right:-20,background:"rgba(13,21,38,.96)",border:"1px solid #1e293b",borderRadius:14,padding:"12px 18px",display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:34,height:34,borderRadius:10,background:"#0d2a2a",display:"flex",alignItems:"center",justifyContent:"center"}}><Ic ch='<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'/></div>
              <div><div style={{fontSize:20,fontWeight:900}}>3+</div><div style={{fontSize:9,color:"#64748b",fontWeight:800,letterSpacing:".08em"}}>COMPLETED PROJECTS</div></div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
              <div style={{width:32,height:2,background:"#2dd4bf",borderRadius:99}}/>
              <span style={{color:"#2dd4bf",fontSize:12,fontWeight:800,letterSpacing:".12em"}}>WHO AM I</span>
            </div>
            <h2 style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:900,lineHeight:1.15,marginBottom:24}}>
              Building <span className="teal-italic">Seamless<br/>Digital Experiences</span><br/>with Passion
            </h2>
            <p style={{color:"#94a3b8",fontSize:15,lineHeight:1.85,marginBottom:20}}>
              I'm a motivated <span style={{color:"#2dd4bf",fontStyle:"italic"}}>Full-Stack Web Developer</span> with strong
              fundamentals in frontend and backend technologies. I'm proficient in the MERN stack and
              passionate about building scalable, secure web applications.
            </p>
            <p style={{color:"#94a3b8",fontSize:15,lineHeight:1.85,marginBottom:28}}>
              I have hands-on experience with <span style={{color:"#2dd4bf",fontStyle:"italic"}}>React.js, Node.js</span>, and
              blockchain technologies including Solidity and Ethereum — delivering seamless digital products
              that solve complex real-world problems.
            </p>
            <div style={{borderLeft:"3px solid #2dd4bf",paddingLeft:20,marginBottom:36,
              color:"#cbd5e1",fontSize:14,fontStyle:"italic",lineHeight:1.8}}>
              "I'm currently exploring the intersection of web development and blockchain/AI,
              aiming to merge decentralized solutions with modern applications."
            </div>
            {/* Education */}
            <div style={{background:"#0d1526",border:"1px solid #1e293b",borderRadius:14,padding:"18px 22px",marginBottom:16}}>
              <div style={{fontSize:11,color:"#2dd4bf",fontWeight:800,letterSpacing:".1em",marginBottom:8}}>EDUCATION</div>
              <div style={{fontWeight:800,fontSize:15}}>Bachelors in Computer Science</div>
              <div style={{color:"#2dd4bf",fontSize:13,fontWeight:600,marginTop:4}}>UAJK — Muzaffarabad, AJK</div>
              <div style={{color:"#64748b",fontSize:12,marginTop:4}}>Nov 2021 – Nov 2025</div>
            </div>
            {/* Certs */}
            {[
              {n:"MERN Stack Development",o:"Coursera",y:"2024"},
              {n:"Advanced JavaScript",o:"Udemy",y:"2024"},
              {n:"Web Development",o:"Digiskills",y:"2024"},
            ].map(c=>(
              <div key={c.n} style={{display:"flex",alignItems:"center",gap:10,background:"#0d1526",border:"1px solid #1e293b",borderRadius:10,padding:"10px 16px",marginBottom:8}}>
                <IStar/>
                <span style={{color:"#fff",fontSize:13,fontWeight:600,flex:1}}>{c.n}</span>
                <span style={{color:"#2dd4bf",fontSize:12}}>{c.o} · {c.y}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
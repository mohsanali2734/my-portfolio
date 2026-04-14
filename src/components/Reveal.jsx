import { useRef, useState, useEffect } from 'react';

function useVisible(t = 0.1) {
  const ref = useRef(null); const [v, sv] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) sv(true); }, { threshold: t });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [t]);
  return [ref, v];
}
export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, v] = useVisible();
  return <div ref={ref} style={{ opacity: v?1:0, transform: v?"translateY(0)":"translateY(28px)", transition:`opacity .65s ease ${delay}ms,transform .65s ease ${delay}ms`, ...style }}>{children}</div>;
}
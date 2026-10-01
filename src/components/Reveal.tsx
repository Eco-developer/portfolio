import { ElementType, HTMLAttributes, ReactNode, useEffect, useRef } from "react";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  [key: string]: any;
}

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }: RevealProps) {
  const ref = useRef(null);
  useEffect(() => {
    const el:any = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const cls = ['reveal', delay ? 'd' + delay : '', className].filter(Boolean).join(' ');
  const Component = Tag as any;
  return (
    <Component ref={ref} className={cls} {...rest}>
      {children}
    </Component>
  );
}

import { Reveal } from "./Reveal";

export function Section({ eyebrow, title, desc, children, id }: {
    eyebrow: any;
    title?: string;
    desc?: string;
    children: any;
    id: string;
}) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">{eyebrow}</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title ?? ""}} />
            {desc && <p className="section-desc" style={{marginTop:16}}>{desc}</p>}
          </Reveal>
        </div>
        {children}
      </div>
    </section>
  );
}
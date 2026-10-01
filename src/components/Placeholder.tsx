export interface PlaceholderProps {
  label: string;
}

export function Placeholder({ label }: PlaceholderProps) {
  return (
    <div className="ph">
      <div className="ph-stripes" />
      <span className="ph-label">{label}</span>
    </div>
  );
}
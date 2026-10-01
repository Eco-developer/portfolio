export function VariantSwitcher({ variant, setVariant }: {
  variant: string; 
  setVariant: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <div className="variant-switcher" role="tablist" aria-label="Design variation">
      <button className={variant === 'safe' ? 'on' : ''} onClick={() => setVariant('safe')}>Light</button>
      <button className={variant === 'bold' ? 'on' : ''} onClick={() => setVariant('bold')}>Dark</button>
    </div>
  );
}
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="paper-chip relative flex h-10 w-10 items-center justify-center rounded-lg p-1.5 shadow-md">
        <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 200 200" fill="none">
          <rect x="58" y="26" width="84" height="76" rx="5" fill="#fffdf8" stroke="#d8d0c3" strokeWidth="3" />
          <line x1="68" y1="43" x2="132" y2="43" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
          <line x1="68" y1="54" x2="118" y2="54" stroke="#a8b1bd" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 5" />
          <circle cx="70" cy="68" r="3.5" fill="#111827" />
          <line x1="79" y1="68" x2="129" y2="68" stroke="#c5ced8" strokeWidth="3" strokeDasharray="4 5" />
          <circle cx="70" cy="82" r="3.5" fill="#111827" />
          <line x1="79" y1="82" x2="121" y2="82" stroke="#c5ced8" strokeWidth="3" strokeDasharray="4 5" />
          <rect x="38" y="98" width="124" height="62" rx="10" fill="#1f2937" />
          <rect x="48" y="108" width="104" height="11" rx="5.5" fill="#374151" />
          <rect x="48" y="129" width="48" height="7" rx="3.5" fill="#4ade80" />
          <rect x="103" y="129" width="23" height="7" rx="3.5" fill="#facc15" />
          <rect x="131" y="129" width="14" height="7" rx="3.5" fill="#fb7185" />
          <rect x="50" y="146" width="22" height="7" rx="2.5" fill="#111827" />
        </svg>
      </div>
      <span className="font-semibold text-xl text-foreground tracking-tight">Print-It</span>
    </div>
  );
}

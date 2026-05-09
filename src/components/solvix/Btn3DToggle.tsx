import { useEffect, useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";

const STORAGE_KEY = "myzonic.btn3d";

export default function Btn3DToggle() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const enabled = saved === null ? true : saved === "1";
    setOn(enabled);
    document.documentElement.classList.toggle("btn3d", enabled);
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    document.documentElement.classList.toggle("btn3d", next);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[200] flex items-center gap-2 rounded-full border border-gold-soft bg-black/70 px-3 py-2 text-xs backdrop-blur-md shadow-[0_10px_30px_-10px_hsl(0_0%_0%/0.6)]">
      {on ? (
        <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--gold-3))]" />
      ) : (
        <RotateCcw className="h-3.5 w-3.5 text-muted-foreground" />
      )}
      <span className="text-muted-foreground">3D buttons</span>
      <button
        onClick={toggle}
        aria-pressed={on}
        aria-label="Toggle 3D embossed buttons"
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          on ? "bg-gold" : "bg-white/15"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
            on ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
      {!on && (
        <button
          onClick={toggle}
          className="ml-1 rounded-full border border-gold-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-[hsl(var(--gold-3))] hover:bg-white/5"
        >
          Revert
        </button>
      )}
    </div>
  );
}

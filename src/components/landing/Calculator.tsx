import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const RECOVERY_RATE = 0.6;

function useCountUp(target: number, duration = 700) {
  const [value, setValue] = useState(target);
  useEffect(() => {
    const start = value;
    const delta = target - start;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(start + delta * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return value;
}

export const Calculator = () => {
  const [serviceValue, setServiceValue] = useState(150);
  const [missedCalls, setMissedCalls] = useState(15);

  const annual = serviceValue * missedCalls * 52 * RECOVERY_RATE;
  const display = useCountUp(Math.round(annual));

  return (
    <section id="calculator" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Revenue recovery</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            See what missed calls actually cost you.
          </h2>
        </div>

        <div className="reveal grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 rounded-3xl glass p-7 md:p-9 space-y-10">
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm text-muted-foreground">Average service value</label>
                <span className="text-2xl font-semibold tabular-nums">${serviceValue}</span>
              </div>
              <Slider
                value={[serviceValue]}
                min={25}
                max={2000}
                step={25}
                onValueChange={([v]) => setServiceValue(v)}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$25</span>
                <span>$2,000</span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm text-muted-foreground">Missed calls per week</label>
                <span className="text-2xl font-semibold tabular-nums">{missedCalls}</span>
              </div>
              <Slider
                value={[missedCalls]}
                min={1}
                max={100}
                step={1}
                onValueChange={([v]) => setMissedCalls(v)}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1</span>
                <span>100</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Assumes a 60% recovery rate when Vocl answers calls you'd otherwise miss.
            </p>
          </div>

          <div className="md:col-span-2 rounded-3xl glass-strong p-7 md:p-9 flex flex-col justify-between min-h-[340px]">
            <div className="flex items-center gap-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              Annual revenue saved
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tabular-nums">
                ${display.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                ≈ ${Math.round(annual / 12).toLocaleString()} / month recovered with Vocl
              </div>
            </div>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow w-full">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

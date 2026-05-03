import { Button } from "@/components/ui/button";
import { Play, Phone, Calendar, Check, Sparkles } from "lucide-react";

const WaveBars = () => (
  <div className="flex items-center gap-1 h-8">
    {Array.from({ length: 28 }).map((_, i) => (
      <span
        key={i}
        className="w-[3px] rounded-full bg-gradient-to-t from-primary/40 to-primary animate-wave"
        style={{
          height: `${20 + (i % 7) * 8}%`,
          animationDelay: `${i * 60}ms`,
          animationDuration: `${900 + (i % 5) * 120}ms`,
        }}
      />
    ))}
  </div>
);

export const Hero = () => {
  return (
    <section className="relative pt-36 md:pt-44 pb-24 overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[640px] w-[1100px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--primary) / 0.35), transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Now in private beta · Real-time voice AI</span>
          </div>
          <h1 className="text-balance text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
            The End of{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Missed Appointments.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Vocl is the intelligent voice assistant that answers your business calls,
            syncs with your calendar, and recovers lost revenue. 24/7. Zero Latency.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12 px-7 text-base"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 text-base bg-transparent border-border hover:bg-muted/40"
            >
              <Play className="h-4 w-4 mr-2" />
              Listen to Demo
            </Button>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative mt-16 md:mt-20 max-w-5xl mx-auto reveal">
          <div className="relative rounded-3xl glass-strong shadow-elevated p-6 md:p-8 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{
                background:
                  "radial-gradient(60% 50% at 20% 0%, hsl(var(--primary) / 0.18), transparent 60%), radial-gradient(50% 50% at 80% 100%, hsl(var(--secondary) / 0.15), transparent 60%)",
              }}
            />
            <div className="relative grid md:grid-cols-5 gap-6">
              {/* Call card */}
              <div className="md:col-span-2 rounded-2xl glass p-5 flex flex-col gap-4 animate-float">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    Incoming call · 00:42
                  </div>
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Caller</div>
                  <div className="text-lg font-medium">Sarah M.</div>
                </div>
                <div className="rounded-xl bg-muted/40 px-3 py-3">
                  <WaveBars />
                </div>
                <div className="space-y-2">
                  <div className="rounded-xl bg-muted/50 px-3 py-2 text-sm">
                    "Hi, I'd like to book a cleaning for next Tuesday afternoon."
                  </div>
                  <div className="rounded-xl bg-primary/15 border border-primary/20 px-3 py-2 text-sm">
                    "Of course — I have 3:00 PM available with Dr. Lee. Shall I book it?"
                  </div>
                </div>
              </div>

              {/* Calendar card */}
              <div className="md:col-span-3 rounded-2xl glass p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Calendar className="h-4 w-4 text-primary" />
                    Calendar · This week
                  </div>
                  <span className="text-xs text-muted-foreground">Synced</span>
                </div>
                <div className="grid grid-cols-5 gap-2 text-xs">
                  {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
                    <div key={d} className="rounded-lg bg-muted/30 p-2 min-h-[110px] flex flex-col gap-1">
                      <div className="text-muted-foreground mb-1">{d}</div>
                      {i === 1 && (
                        <>
                          <div className="rounded-md bg-secondary/30 px-1.5 py-1 text-secondary-foreground/90">10:00 Consult</div>
                          <div className="rounded-md border border-primary/40 bg-primary/15 px-1.5 py-1 text-foreground animate-fade-in-up">
                            3:00 Sarah M.
                          </div>
                        </>
                      )}
                      {i === 0 && <div className="rounded-md bg-muted/60 px-1.5 py-1">9:30 Team</div>}
                      {i === 3 && <div className="rounded-md bg-muted/60 px-1.5 py-1">2:00 Review</div>}
                    </div>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs text-foreground">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  Booked: Tue 3:00 PM · Confirmation sent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

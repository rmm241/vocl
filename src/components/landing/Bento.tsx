import { Brain, CalendarCheck, GitBranch, ArrowRight, Phone } from "lucide-react";

const Card = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={`relative overflow-hidden rounded-3xl glass p-7 md:p-8 hover:border-primary/30 transition-colors ${className}`}
  >
    {children}
  </div>
);

export const Bento = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14 reveal">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Features</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            An assistant that actually does the work.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Vocl combines real-time voice intelligence with deep CRM action — not just
            transcribing, but resolving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 reveal">
          {/* Human-Level Nuance — large */}
          <Card className="md:col-span-4 md:row-span-2 min-h-[360px]">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs text-primary">
                  <Brain className="h-3.5 w-3.5" /> Human-Level Nuance
                </div>
                <h3 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight max-w-md">
                  Voices that understand intent, accents, and context.
                </h3>
                <p className="mt-3 text-muted-foreground max-w-md">
                  Sub-400ms response time. Vocl handles interruptions, idioms, and ambiguous
                  requests like a trained receptionist — not a script.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl glass-strong p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <Phone className="h-3.5 w-3.5 text-primary" />
                Live transcription
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-muted/60 px-4 py-2 max-w-[80%]">
                    "Yeah so my dog's been kinda limpin', think I can squeeze in tomorrow?"
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="rounded-2xl bg-primary/15 border border-primary/20 px-4 py-2 max-w-[80%]">
                    "Sounds urgent — I have 9:15 AM with Dr. Patel tomorrow. Want me to book it?"
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-end gap-1 h-10">
                {Array.from({ length: 40 }).map((_, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-full bg-primary/60 animate-wave"
                    style={{
                      height: `${20 + ((i * 13) % 80)}%`,
                      animationDelay: `${i * 40}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* Calendar action */}
          <Card className="md:col-span-2 min-h-[170px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/15 border border-secondary/30 px-3 py-1 text-xs text-secondary">
              <CalendarCheck className="h-3.5 w-3.5" /> Direct Calendar Action
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">
              Books, moves, and cancels — directly in your CRM.
            </h3>
            <div className="mt-5 rounded-xl glass-strong p-3 space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2">
                <span>Tue · 3:00 PM</span>
                <span className="text-primary">+ Created</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2">
                <span>Thu · 11:00 → 2:00</span>
                <span className="text-secondary">Rescheduled</span>
              </div>
            </div>
          </Card>

          {/* Smart redirect */}
          <Card className="md:col-span-2 min-h-[170px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs text-primary">
              <GitBranch className="h-3.5 w-3.5" /> Smart Redirection
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">
              Knows when to handle — and when to transfer.
            </h3>
            <div className="mt-5 flex items-center gap-2 text-xs">
              <span className="rounded-lg bg-muted/40 px-2.5 py-1.5">Routine</span>
              <ArrowRight className="h-3 w-3 text-muted-foreground" />
              <span className="rounded-lg bg-primary/15 border border-primary/20 px-2.5 py-1.5 text-primary">
                Vocl handles
              </span>
              <ArrowRight className="h-3 w-3 text-muted-foreground" />
              <span className="rounded-lg bg-secondary/15 border border-secondary/30 px-2.5 py-1.5 text-secondary">
                Live transfer
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

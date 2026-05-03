import { CalendarRange, Settings2, PhoneForwarded } from "lucide-react";

const steps = [
  {
    icon: CalendarRange,
    title: "Connect your calendar",
    desc: "One-click sync with Google, Outlook, Calendly, or your CRM. No engineering required.",
  },
  {
    icon: Settings2,
    title: "Define your business rules",
    desc: "Hours, services, pricing, escalation paths. Vocl learns your voice and your edge cases.",
  },
  {
    icon: PhoneForwarded,
    title: "Forward your calls",
    desc: "Point your number at Vocl. We'll answer in under 400 ms — every time, day or night.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14 reveal">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">How it works</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Three steps. Then Vocl takes it from there.
          </h2>
        </div>

        <div className="relative reveal">
          <div
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-[58px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="relative rounded-3xl glass p-7">
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-5xl font-semibold text-foreground/10 tabular-nums">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

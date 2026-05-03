import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0.18",
    suffix: "/min",
    desc: "Pay-as-you-go. Perfect for solo operators getting started.",
    cta: "Start Free Trial",
    featured: false,
    features: [
      "Up to 200 minutes / mo",
      "Calendar sync (Google, Outlook)",
      "SMS confirmations",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$249",
    suffix: "/mo",
    desc: "For growing businesses that don't want to think about minutes.",
    cta: "Start Free Trial",
    featured: true,
    features: [
      "2,500 minutes included",
      "Multi-line + smart routing",
      "CRM + Zapier integrations",
      "Custom voice & scripts",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "",
    desc: "For multi-location teams with advanced compliance needs.",
    cta: "Talk to Sales",
    featured: false,
    features: [
      "Unlimited minutes",
      "HIPAA / SOC 2 ready",
      "Custom integrations & SLAs",
      "Dedicated success manager",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14 reveal">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Simple plans. Real ROI from day one.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 reveal">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-7 md:p-8 flex flex-col ${
                t.featured
                  ? "glass-strong border-primary/40 shadow-glow"
                  : "glass"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-medium px-3 py-1">
                  Most popular
                </div>
              )}
              <div className="text-sm text-muted-foreground">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight">{t.price}</span>
                {t.suffix && <span className="text-muted-foreground">{t.suffix}</span>}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>

              <ul className="mt-7 space-y-3 text-sm flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 border border-primary/25 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full h-11 ${
                  t.featured
                    ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted/40 text-foreground hover:bg-muted/60 border border-border"
                }`}
              >
                {t.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

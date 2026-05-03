import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-10 md:p-20 text-center reveal">
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 0%, hsl(var(--primary) / 0.25), transparent 70%), radial-gradient(40% 50% at 80% 100%, hsl(var(--secondary) / 0.18), transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
              Ready to clear your desk?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Spin up your AI receptionist in under 10 minutes. Free for 14 days, no credit card.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12 px-8 text-base"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base bg-transparent border-border hover:bg-muted/40"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const items = [
  "Google Calendar",
  "Outlook",
  "Calendly",
  "Zapier",
  "Make.com",
  "HubSpot",
  "Salesforce",
  "Notion",
];

export const Marquee = () => {
  return (
    <section className="py-12 border-y border-border/60 bg-background/40">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Integrated with the tools you already use
        </p>
        <div className="relative mask-fade-x overflow-hidden">
          <div className="flex gap-10 w-max animate-marquee">
            {[...items, ...items].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-foreground/70 whitespace-nowrap"
              >
                <span className="h-2 w-2 rounded-full bg-primary/70" />
                <span className="text-base md:text-lg font-medium tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

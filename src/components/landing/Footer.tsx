const cols = [
  {
    title: "Product",
    links: ["Features", "Use Cases", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA", "Status"],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-12">
      <div className="container py-16">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                <span className="text-sm font-bold">V</span>
              </span>
              <span className="text-lg">Vocl</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              The intelligent voice assistant for modern businesses. Never miss another call.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-medium mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vocl, Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with care · 24/7 · Zero latency
          </p>
        </div>
      </div>
    </footer>
  );
};

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#calculator", label: "ROI" },
  { href: "#pricing", label: "Pricing" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <div
          className={`flex items-center justify-between rounded-full px-4 md:px-6 h-14 transition-all ${
            scrolled ? "glass-strong shadow-elevated" : "bg-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
              <span className="text-sm font-bold">V</span>
            </span>
            <span className="text-lg">Vocl</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
              Sign in
            </Button>
            <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
              Start Free Trial
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-1"
              >
                {l.label}
              </a>
            ))}
            <Button className="bg-gradient-primary text-primary-foreground w-full mt-2">
              Start Free Trial
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Scale, Wrench, Sparkles } from "lucide-react";

type Industry = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  blurb: string;
  conversation: { role: "caller" | "vocl"; text: string }[];
};

const industries: Industry[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Heart,
    blurb:
      "HIPAA-aware intake, triage routing, and same-day rescheduling. Reduce no-shows with automated confirmations and waitlist fills.",
    conversation: [
      { role: "caller", text: "Hi, I need to reschedule my Thursday cleaning." },
      { role: "vocl", text: "Of course. I see your 10 AM with Dr. Lee. I have Tuesday 3 PM or Friday 9 AM open." },
      { role: "caller", text: "Friday at 9 works." },
      { role: "vocl", text: "Done — confirmation texted to your number ending in 4421." },
    ],
  },
  {
    id: "legal",
    label: "Legal",
    icon: Scale,
    blurb:
      "Qualify intakes, capture matter details, and route urgent cases to the on-call attorney — without staff overhead.",
    conversation: [
      { role: "caller", text: "I was in a car accident yesterday and need a consultation." },
      { role: "vocl", text: "I'm sorry to hear that. Are you injured and is this an urgent matter?" },
      { role: "caller", text: "I'm okay, just need legal advice." },
      { role: "vocl", text: "Understood. I'll book a 30-minute intake with Attorney Reyes tomorrow at 11 AM." },
    ],
  },
  {
    id: "home",
    label: "Home Services",
    icon: Wrench,
    blurb:
      "Capture service address, problem, and urgency. Dispatch by zip code and pre-fill the technician's job ticket.",
    conversation: [
      { role: "caller", text: "My AC stopped working — can someone come today?" },
      { role: "vocl", text: "I have a 2–4 PM window with Marcus in your area. Service call is $89, applied if you book repair." },
      { role: "caller", text: "Yes please, book it." },
      { role: "vocl", text: "Booked. You'll get a text when Marcus is 30 minutes out." },
    ],
  },
  {
    id: "wellness",
    label: "Wellness & Beauty",
    icon: Sparkles,
    blurb:
      "Handle service menus, stylist preferences, deposits, and last-minute openings — turning every missed call into a booked chair.",
    conversation: [
      { role: "caller", text: "Do you have any openings for balayage this weekend?" },
      { role: "vocl", text: "Saturday 1 PM with Jamie or Sunday 10 AM with Priya. Both are 3 hours, $240." },
      { role: "caller", text: "Saturday with Jamie." },
      { role: "vocl", text: "Booked — a 20% deposit link was just texted to you." },
    ],
  },
];

export const IndustryTabs = () => {
  return (
    <section id="use-cases" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Use cases</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Built for every industry.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Vocl learns your business — its services, hours, pricing, and edge cases — and
            adapts its voice to match.
          </p>
        </div>

        <div className="reveal">
          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="bg-muted/30 border border-border p-1 h-auto flex flex-wrap gap-1 rounded-full w-fit">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <TabsTrigger
                    key={ind.id}
                    value={ind.id}
                    className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {ind.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {industries.map((ind) => (
              <TabsContent key={ind.id} value={ind.id} className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-3xl glass p-7 md:p-8">
                    <div className="text-sm text-primary mb-3">{ind.label}</div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Trained on your playbook.
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{ind.blurb}</p>
                    <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">→</span> Custom intake scripts</li>
                      <li className="flex gap-2"><span className="text-primary">→</span> Industry-specific compliance</li>
                      <li className="flex gap-2"><span className="text-primary">→</span> Automated confirmations & follow-ups</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl glass-strong p-6 md:p-7">
                    <div className="text-xs text-muted-foreground mb-4 uppercase tracking-[0.2em]">
                      Sample conversation
                    </div>
                    <div className="space-y-3">
                      {ind.conversation.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === "vocl" ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`rounded-2xl px-4 py-2.5 text-sm max-w-[85%] ${
                              msg.role === "vocl"
                                ? "bg-primary/15 border border-primary/20"
                                : "bg-muted/60"
                            }`}
                          >
                            <div className="text-[10px] uppercase tracking-wider mb-0.5 opacity-60">
                              {msg.role === "vocl" ? "Vocl" : "Caller"}
                            </div>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

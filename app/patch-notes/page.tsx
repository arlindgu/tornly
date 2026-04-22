import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const patches = [
  {
    version: "0.4.0",
    date: "2026-04-22",
    changes: [
      { type: "added", text: "Missions tracking — log completed missions automatically" },
      { type: "added", text: "Points market sell logs — track your market activity" },
      { type: "added", text: "Points card on the money dashboard" },
      { type: "added", text: "Settings page" },
    ],
  },
  {
    version: "0.3.0",
    date: "2026-04-10",
    changes: [
      { type: "added", text: "Site menu bar with quick navigation" },
      { type: "improved", text: "IndexedDB sync for offline log fetching" },
      { type: "removed", text: "Profile and performance pages" },
    ],
  },
  {
    version: "0.2.0",
    date: "2026-03-28",
    changes: [
      { type: "added", text: "Money dashboard with log saving and fetching" },
      { type: "added", text: "Card skeleton loading states" },
      { type: "improved", text: "Login flow and cookie handling" },
    ],
  },
];

const badgeVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  added: "default",
  improved: "secondary",
  removed: "destructive",
  fixed: "outline",
};

export default function PatchNotes() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-1">
          Patch notes
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          What has changed in Tornly.
        </p>

        <div className="space-y-10">
          {patches.map((patch, pi) => (
            <div key={patch.version}>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm font-mono font-medium text-foreground">
                  v{patch.version}
                </span>
                <span className="text-xs text-muted-foreground">{patch.date}</span>
              </div>
              <ul className="space-y-2">
                {patch.changes.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Badge
                      variant={badgeVariant[c.type] ?? "outline"}
                      className="mt-0.5 shrink-0 text-[10px] font-mono uppercase tracking-wider px-1.5 py-0"
                    >
                      {c.type}
                    </Badge>
                    <span className="text-muted-foreground">{c.text}</span>
                  </li>
                ))}
              </ul>
              {pi < patches.length - 1 && <Separator className="mt-10" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

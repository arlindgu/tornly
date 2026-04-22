import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen max-w-7xl overflow-hidden bg-background flex flex-col mx-auto">
      {/* Content */}
      <div className="flex flex-1 flex-col justify-center px-16 md:px-24 lg:px-32 max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-foreground max-w-2xl">
          The dashboard every Citizen needs, but doesn't deserve.
        </h1>

        <div className="mt-5 flex flex-col sm:items-start gap-4">
          <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
            Built for the Torn City community, by the Torn City community.
          </p>

          <Link
            href="/patch-notes"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors shrink-0"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            Added missions &amp; points market tracking
            <ArrowRight className="h-3 w-3 opacity-50 group-hover:opacity-80 transition-opacity" />
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Button asChild size="lg">
            <Link href="/dashboard">Open dashboard</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/login">Sign in</Link>
          </Button>
        </div>
      </div>

      {/* Footer links */}
      <div className="flex items-center gap-6 px-16 md:px-24 lg:px-32 py-6">
        <Link href="/patch-notes" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
          Patch notes
        </Link>
        <Link href="/compliance" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
          Compliance
        </Link>
      </div>
    </main>
  );
}

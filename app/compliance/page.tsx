import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tosRows = [
  {
    label: "Data Storage",
    question: "Will the data be stored for any purpose?",
    value: "Persistent — until account deletion",
    note: "Log data is stored in your account database and locally in your browser via IndexedDB.",
  },
  {
    label: "Data Sharing",
    question: "Who can access the data besides the end user?",
    value: "Nobody",
    note: "Your data is private. No other user, faction, or third party has access.",
  },
  {
    label: "Purpose of Use",
    question: "What is the stored data being used for?",
    value: "Public community tools",
    note: "Data is used exclusively to display personal statistics, logs, and dashboards to you.",
  },
  {
    label: "Key Storage & Sharing",
    question: "Will the API key be stored securely and who can access it?",
    value: "Stored in browser cookie / Used only for automation",
    note: "Your API key is stored in your browser cookies and transmitted to our servers solely to make read-only API requests to torn.com on your behalf. It is not shared with any third party.",
  },
  {
    label: "Key Access Level",
    question: "What key access level is required?",
    value: "Full Access",
    note: "Required for money, missions, and market selections.",
  },
];

export default function Compliance() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-1">
          Compliance
        </h1>
        <p className="text-sm text-muted-foreground mb-12 max-w-lg leading-relaxed">
          Tornly is compliant with the{" "}
          <a
            href="https://www.torn.com/api.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Torn API Terms of Service
          </a>
          . Below is a full disclosure of how your API key and data are handled.
        </p>

        <div className="space-y-14">
          {/* ToS Table */}
          <section>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Torn API ToS — Required Disclosure
            </h2>
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-44">Field</TableHead>
                    <TableHead>Question</TableHead>
                    <TableHead>Tornly's answer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tosRows.map((row) => (
                    <TableRow key={row.label}>
                      <TableCell className="font-medium text-foreground align-top">
                        {row.label}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs align-top">
                        {row.question}
                      </TableCell>
                      <TableCell className="align-top">
                        <p className="text-sm font-medium text-foreground mb-0.5">{row.value}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{row.note}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          <Separator />

          {/* Commitments */}
          <section>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-5">
              Our Commitments
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc list-inside marker:text-muted-foreground/40">
              <li>
                Your API key is used <span className="text-foreground font-medium">read-only</span>. Tornly will never request your Torn password.
              </li>
              <li>
                Your API key is stored in your browser cookies and transmitted to our servers solely to make server-side requests to torn.com on your behalf. It is never shared with third parties.
              </li>
              <li>
                We never sell, share, or expose your data or key to any third party.
              </li>
              <li>
                Tornly does not display advertising and is provided free of charge.
              </li>
              <li>
                All API requests are optimised to fetch only what is required, staying well within Torn's 100 requests/minute limit.
              </li>
              <li>
                Tornly is an unofficial community tool — not affiliated with or endorsed by the Torn City team.
              </li>
            </ul>
          </section>

          <Separator />

          {/* Contact */}
          <section>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Something look wrong?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              If you believe Tornly is not compliant, something seems off, or you have questions about how your data is handled — reach out directly.
            </p>
            <a
              href="https://www.torn.com/profiles.php?XID=2631792"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="font-mono font-medium">TRAPBILLIEJEAN</span>
              <span className="text-muted-foreground font-mono text-xs">[2631792]</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </section>

          <p className="text-xs text-muted-foreground/40 pt-2 border-t border-border">
            Last updated April 22, 2026 · Tornly
          </p>
        </div>
      </div>
    </main>
  );
}

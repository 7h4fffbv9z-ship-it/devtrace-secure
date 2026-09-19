import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Box,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock3,
  Code2,
  Download,
  ExternalLink,
  FileCode2,
  FileText,
  Github,
  KeyRound,
  LoaderCircle,
  Menu,
  PackageSearch,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevTrace AI — Code Security & License Compliance" },
      {
        name: "description",
        content: "Audit GitHub repositories for exposed secrets, vulnerable dependencies, and open-source license risk.",
      },
      { property: "og:title", content: "DevTrace AI — Automated Code Security Guard" },
      {
        property: "og:description",
        content: "Find security and license risks before they reach production.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevTraceDashboard,
});

const secrets = [
  { path: "src/config/aws.ts", line: "18", type: "AWS Access Key", secret: "AKIA••••••••7K2P", tone: "critical" },
  { path: ".github/workflows/deploy.yml", line: "42", type: "GitHub Token", secret: "ghp_••••••••9Qx4", tone: "high" },
  { path: "lib/auth/session.ts", line: "67", type: "JWT Secret", secret: "eyJ••••••••fQ", tone: "medium" },
];

const vulnerabilities = [
  { name: "next", version: "13.4.7", severity: "Critical", cve: "CVE-2025-29927", summary: "Authorization bypass in middleware handling." },
  { name: "axios", version: "1.6.1", severity: "High", cve: "CVE-2024-39338", summary: "Server-side request forgery via crafted URL." },
  { name: "postcss", version: "8.4.21", severity: "Medium", cve: "CVE-2023-44270", summary: "Parsing error may lead to line return confusion." },
  { name: "semver", version: "7.5.2", severity: "Low", cve: "CVE-2022-25883", summary: "Regular expression denial of service." },
];

const licenses = [
  { name: "react", version: "18.2.0", license: "MIT", status: "Safe" },
  { name: "typescript", version: "5.4.2", license: "Apache-2.0", status: "Safe" },
  { name: "chart-engine", version: "2.8.1", license: "GPL-3.0", status: "Conflict" },
  { name: "date-fns", version: "3.3.1", license: "MIT", status: "Safe" },
];

const recentAudits = [
  { repo: "acme/web-platform", score: 88, time: "12 min ago", status: "good" },
  { repo: "acme/payment-api", score: 64, time: "Yesterday", status: "risk" },
  { repo: "acme/design-system", score: 96, time: "Sep 16", status: "good" },
];

function StatusPill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: string }) {
  return <span className={cn("status-pill", `status-${tone}`)}>{children}</span>;
}

function DevTraceDashboard() {
  const [repository, setRepository] = useState("https://github.com/acme/web-platform");
  const [isScanning, setIsScanning] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [notice, setNotice] = useState("");

  const repoName = repository.replace("https://github.com/", "").replace(/\/$/, "") || "acme/web-platform";

  function startAudit(event?: FormEvent) {
    event?.preventDefault();
    if (!repository.trim()) return;
    setIsScanning(true);
    setNotice("");
    window.setTimeout(() => {
      setIsScanning(false);
      setNotice(`Audit complete for ${repoName}`);
    }, 1100);
  }

  function generatePatch() {
    setNotice("AI patch prepared: 3 secrets rotated and 4 dependency updates proposed.");
  }

  function exportSummary() {
    const report = `DevTrace AI Audit Summary\nRepository: ${repoName}\nSecurity score: 88%\nExposed secrets: 3\nVulnerable packages: 4\nLicense risk: 1 conflict\n`;
    const url = URL.createObjectURL(new Blob([report], { type: "text/plain" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "devtrace-audit-summary.txt";
    anchor.click();
    URL.revokeObjectURL(url);
    setNotice("Audit summary exported.");
  }

  return (
    <div id="dashboard" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1520px] items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="brand-mark"><Shield size={19} strokeWidth={2.4} /></div>
            <div className="font-display text-[17px] font-bold">DevTrace <span className="text-primary">AI</span></div>
          </div>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            <a className="nav-link nav-link-active" href="#dashboard">Dashboard</a>
            <a className="nav-link" href="#recent-audits">Scans History</a>
            <a className="nav-link" href="#results">Documentation</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="engine-badge hidden sm:flex"><span className="pulse-dot" /> Engine Active <span className="text-muted-foreground">v1.0</span></div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">
              {mobileNav ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {mobileNav && (
          <nav className="flex border-t border-border px-4 py-2 md:hidden" aria-label="Mobile navigation">
            <a className="nav-link nav-link-active" href="#dashboard">Dashboard</a>
            <a className="nav-link" href="#recent-audits">History</a>
            <a className="nav-link" href="#results">Docs</a>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-[1520px] px-4 py-8 lg:px-8 lg:py-10">
        <section className="mb-8">
          <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-primary"><TerminalSquare size={14} /> Repository scanner</div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">Ship code with confidence.</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">Scan any public GitHub repository for leaked credentials, vulnerable packages, and license conflicts.</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground"><CircleDot className="text-success" size={14} /> Last engine sync: 2 minutes ago</div>
          </div>

          <form className="scan-shell" onSubmit={startAudit}>
            <Github className="hidden shrink-0 text-muted-foreground sm:block" size={21} />
            <Input aria-label="GitHub repository URL" value={repository} onChange={(event) => setRepository(event.target.value)} placeholder="https://github.com/owner/repository" className="h-12 flex-1 border-0 bg-transparent px-0 font-mono text-sm shadow-none focus-visible:ring-0" />
            <Button type="submit" size="lg" className="h-11 px-5" disabled={isScanning || !repository.trim()}>
              {isScanning ? <LoaderCircle className="animate-spin" /> : <Search />}
              {isScanning ? "Scanning repository" : "Start Security Audit"}
            </Button>
          </form>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="mr-1">Quick try</span>
            {["facebook/react", "vercel/next.js", "expressjs/express"].map((repo) => (
              <Button key={repo} type="button" variant="outline" size="sm" className="h-7 bg-transparent font-mono text-[11px]" onClick={() => setRepository(`https://github.com/${repo}`)}>
                <Github size={12} /> {repo}
              </Button>
            ))}
          </div>
        </section>

        {notice && <div className="mb-5 flex items-center justify-between border border-success/30 bg-success/8 px-4 py-3 text-sm text-success"><span className="flex items-center gap-2"><CheckCircle2 size={16} />{notice}</span><Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setNotice("")} aria-label="Dismiss notification"><X /></Button></div>}

        <section aria-label="Audit overview" className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard icon={<ShieldCheck />} label="Security health score" trend="+4 since last audit">
            <div className="flex items-end gap-3"><div className="score-ring"><span>88</span><small>%</small></div><div className="pb-1"><StatusPill tone="success">Good</StatusPill><p className="mt-2 text-xs text-muted-foreground">4 checks need attention</p></div></div>
          </MetricCard>
          <MetricCard icon={<KeyRound />} label="Exposed secrets" trend="Across 3 source files">
            <div className="metric-number text-critical">3</div><p className="mt-1 text-sm text-muted-foreground">Credentials require rotation</p>
          </MetricCard>
          <MetricCard icon={<PackageSearch />} label="Vulnerable packages" trend="1 critical, 1 high">
            <div className="metric-number text-warning">4</div><p className="mt-1 text-sm text-muted-foreground">of 642 dependencies scanned</p>
          </MetricCard>
          <MetricCard icon={<FileText />} label="License risk" trend="88 licenses identified">
            <div className="mb-3 mt-4"><StatusPill tone="warning">Action needed</StatusPill></div><p className="text-sm text-muted-foreground">1 copyleft conflict detected</p>
          </MetricCard>
        </section>

        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <section id="results" className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div><h2 className="font-display text-xl font-semibold">Audit findings</h2><p className="mt-1 text-xs text-muted-foreground">Analyzed 1,284 files on the default branch</p></div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><Clock3 size={13} /> Completed in 38.4s</div>
            </div>
            <Tabs defaultValue="secrets" className="w-full">
              <TabsList className="h-auto w-full justify-start overflow-x-auto rounded-md border border-border bg-card p-1">
                <TabsTrigger value="secrets" className="gap-2"><KeyRound size={14} /> Secrets <span className="tab-count">3</span></TabsTrigger>
                <TabsTrigger value="dependencies" className="gap-2"><PackageSearch size={14} /> Dependencies <span className="tab-count">4</span></TabsTrigger>
                <TabsTrigger value="licenses" className="gap-2"><FileText size={14} /> Licenses <span className="tab-count">1</span></TabsTrigger>
              </TabsList>
              <TabsContent value="secrets" className="mt-3"><SecretsTable /></TabsContent>
              <TabsContent value="dependencies" className="mt-3"><VulnerabilityList /></TabsContent>
              <TabsContent value="licenses" className="mt-3"><LicensesTable /></TabsContent>
            </Tabs>
          </section>

          <aside className="space-y-4 xl:sticky xl:top-24">
            <Card className="overflow-hidden rounded-md border-primary/30 bg-card shadow-panel">
              <div className="border-b border-border bg-primary/6 p-5"><div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground"><Bot size={18} /></div><h3 className="font-display font-semibold">Resolve findings faster</h3><p className="mt-1.5 text-xs leading-5 text-muted-foreground">Generate a reviewed patch with safe dependency upgrades and credential removal.</p></div>
              <CardContent className="space-y-2 p-4">
                <Button className="w-full justify-between" onClick={generatePatch}><span className="flex items-center gap-2"><Sparkles /> Generate AI Security Patch</span><ArrowRight /></Button>
                <Button variant="outline" className="w-full justify-between" onClick={exportSummary}><span className="flex items-center gap-2"><Download /> Export PDF Audit Summary</span><ChevronRight /></Button>
              </CardContent>
            </Card>
            <Card id="recent-audits" className="rounded-md border-border bg-card shadow-panel">
              <div className="flex items-center justify-between border-b border-border px-4 py-3"><h3 className="text-sm font-semibold">Recent repo audits</h3><Button variant="ghost" size="sm" className="h-7 px-2 text-xs">View all</Button></div>
              <CardContent className="p-2">
                {recentAudits.map((audit) => <button key={audit.repo} className="recent-row" type="button" onClick={() => setRepository(`https://github.com/${audit.repo}`)}><span className="repo-icon"><Code2 size={14} /></span><span className="min-w-0 flex-1 text-left"><span className="block truncate font-mono text-xs text-foreground">{audit.repo}</span><span className="mt-1 block text-[11px] text-muted-foreground">{audit.time}</span></span><span className={cn("font-mono text-xs font-semibold", audit.status === "good" ? "text-success" : "text-warning")}>{audit.score}</span></button>)}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
      <footer className="mt-8 border-t border-border py-5 text-center text-xs text-muted-foreground">DevTrace Engine v1.0 · Ruleset updated September 19, 2026</footer>
    </div>
  );
}

function MetricCard({ icon, label, trend, children }: { icon: React.ReactNode; label: string; trend: string; children: React.ReactNode }) {
  return <Card className="metric-card rounded-md border-border bg-card"><CardContent className="p-5"><div className="mb-5 flex items-center justify-between"><span className="flex items-center gap-2 text-xs font-medium text-muted-foreground"><span className="text-primary [&_svg]:size-4">{icon}</span>{label}</span><ExternalLink size={13} className="text-muted-foreground" /></div>{children}<div className="mt-5 border-t border-border pt-3 text-[11px] text-muted-foreground">{trend}</div></CardContent></Card>;
}

function SecretsTable() {
  return <div className="data-panel"><div className="table-scroll"><table><thead><tr><th>File path</th><th>Line</th><th>Secret type</th><th>Masked secret</th><th>Status</th></tr></thead><tbody>{secrets.map((item) => <tr key={item.path}><td><span className="flex items-center gap-2 font-mono text-xs"><FileCode2 size={14} className="text-muted-foreground" />{item.path}</span></td><td className="font-mono text-muted-foreground">{item.line}</td><td><StatusPill tone={item.tone}>{item.type}</StatusPill></td><td className="font-mono text-xs text-muted-foreground">{item.secret}</td><td><span className="flex items-center gap-1.5 text-xs text-critical"><AlertTriangle size={13} /> Exposed</span></td></tr>)}</tbody></table></div><PanelFooter text="3 exposed credentials found" /></div>;
}

function VulnerabilityList() {
  return <div className="data-panel divide-y divide-border">{vulnerabilities.map((item) => <div key={item.cve} className="grid gap-3 p-4 sm:grid-cols-[minmax(150px,1fr)_100px_110px_2fr] sm:items-center"><div><div className="flex items-center gap-2 font-mono text-sm font-semibold"><Box size={15} className="text-muted-foreground" />{item.name}</div><div className="ml-6 mt-1 font-mono text-[11px] text-muted-foreground">v{item.version}</div></div><StatusPill tone={item.severity.toLowerCase()}>{item.severity}</StatusPill><a href={`https://nvd.nist.gov/vuln/detail/${item.cve}`} target="_blank" rel="noreferrer" className="font-mono text-xs text-primary hover:underline">{item.cve}</a><p className="text-xs leading-5 text-muted-foreground">{item.summary}</p></div>)}<PanelFooter text="4 vulnerable packages found in production dependencies" /></div>;
}

function LicensesTable() {
  return <div className="data-panel"><div className="table-scroll"><table><thead><tr><th>Dependency</th><th>Installed version</th><th>Detected license</th><th>Compliance status</th></tr></thead><tbody>{licenses.map((item) => <tr key={item.name}><td className="font-mono text-xs font-medium">{item.name}</td><td className="font-mono text-xs text-muted-foreground">{item.version}</td><td><StatusPill>{item.license}</StatusPill></td><td>{item.status === "Safe" ? <span className="flex items-center gap-1.5 text-xs text-success"><Check size={14} /> Safe</span> : <span className="flex items-center gap-1.5 text-xs text-critical"><ShieldAlert size={14} /> Conflict</span>}</td></tr>)}</tbody></table></div><PanelFooter text="88 licenses checked against your policy" /></div>;
}

function PanelFooter({ text }: { text: string }) {
  return <div className="flex items-center justify-between border-t border-border px-4 py-3 text-[11px] text-muted-foreground"><span>{text}</span><span className="flex items-center gap-1"><Shield size={12} /> DevTrace verified</span></div>;
}
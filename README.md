# DevTrace AI Guard

Build a modern developer tool dashboard called DevTrace AI — an Automated Code Security & License Compliance Guard. Use Tailwind CSS, Lucide icons, dark mode theme by default (slate/zinc palette), and a crisp UI layout with the following components:

Header Navigation:

App Title: 'DevTrace AI' with a shield/security icon.

Navigation links: 'Dashboard', 'Scans History', 'Documentation'.

Status badge: 'Engine Active (v1.0)'.

Hero Search Section:

Prominent search input box accepting a GitHub Repository URL (placeholder: [https://github.com/owner/repository](https://github.com/owner/repository)).

Primary call-to-action button: 'Start Security Audit'.

Sample quick-try buttons below the search bar: facebook/react, vercel/next.js, expressjs/express.

Audit Overview Cards (Metrics):

Security Health Score: Large gauge/percentage (e.g., 88% - 'Good').

Exposed Secrets: Count of leaked API keys or credentials.

Vulnerable Packages: Count of CVEs detected.

License Risk: Status tag (e.g., 'Compliant' or 'Action Needed').

Detailed Results Tabs:

Tab 1: Exposed Secrets & Credentials: Table displaying File Path, Line Number, Secret Type (e.g., AWS Key, JWT, GitHub Token), and Masked Secret (AKIA****1234).

Tab 2: Dependency Vulnerabilities: List showing Package Name, Installed Version, Severity Tag (Critical / High / Medium / Low), CVE ID, and Short Summary.

Tab 3: Open Source License Matrix: Table showing Dependency Name, Detected License (MIT, Apache 2.0, GPL-3.0), and Compliance Status (Safe vs Conflict).

Action Sidebar & Remediation:

'Generate AI Security Patch' button.

'Export PDF Audit Summary' button.

'Recent Repo Audits' list."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d9bbed8c-408c-49e8-bf2e-e34712ad38c5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

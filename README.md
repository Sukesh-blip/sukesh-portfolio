# Sukesh Biradar — Portfolio

Angular 17 + Tailwind CSS portfolio. Dark sidebar + light content layout.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
ng serve

# 3. Open browser
http://localhost:4200
```

---

## Project Structure

```
src/
├── app/
│   ├── common/
│   │   ├── profile/
│   │   │   ├── profile-details/     ← Sidebar: photo, bio, buttons, socials
│   │   │   └── social-icons/        ← LinkedIn, GitHub, Email icons
│   │   └── details/
│   │       ├── about/               ← Intro, education, skills, certs
│   │       ├── experience/          ← KodNest internship
│   │       ├── projects/            ← ShopNexa, AI Log Debugger, Skill-Sprint
│   │       └── contact/             ← Email, LinkedIn, GitHub, phone
│   ├── app.component.*              ← Navbar + layout shell
│   ├── app.routes.ts                ← Routing config
│   └── app.config.ts                ← App bootstrap config
├── styles.css                       ← Global styles + Tailwind + Google Fonts
└── index.html
```

---

## To Customise

### Add your profile photo
Replace the placeholder div in `profile-details.component.html`:
```html
<!-- Remove this div: -->
<div class="w-28 h-28 mx-auto rounded-full flex items-center ..." style="...">
  <span>Add your photo here</span>
</div>

<!-- Add this instead: -->
<img class="w-28 h-28 mx-auto rounded-full object-cover"
     src="assets/your-photo.jpg" alt="Sukesh Biradar">
```
Then place your photo at `src/assets/your-photo.jpg`.

### Add your resume for download
Place your resume PDF at: `src/assets/Sukesh_Resume.pdf`
The "Download CV" button in the sidebar already links to this path.

### Update GitHub links in projects
In `projects.component.ts`, update `githubUrl` for each project once deployed.

### Add AZ-102/AI-103 cert once completed
In `about.component.ts`, update the certification entry:
```ts
{
  name: 'Azure AI Engineer (AZ-102 / AI-103)',
  issuer: 'Microsoft Certified',
  // Remove the status line once completed:
  // status: 'In Progress',
},
```

---

## Routes

| Path           | Component     |
|----------------|---------------|
| `/about`       | AboutComponent |
| `/experience`  | ExperienceComponent |
| `/projects`    | ProjectsComponent |
| `/contact`     | ContactComponent |
| `/`            | Redirects to `/about` |

---

## Tech Stack

- Angular 17 (standalone components)
- Tailwind CSS 3
- Google Fonts: Syne (headings) + DM Sans (body) + Space Mono (code/mono)
- No external icon libraries — all SVG inline

---

## Deploy to Azure Static Web Apps

```bash
# Build for production
ng build --configuration production

# Output is in: dist/sukesh-portfolio/browser/
# Deploy that folder to Azure Static Web Apps
```

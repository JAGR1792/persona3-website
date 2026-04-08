# Persona 3 Portfolio Website

Stylized personal portfolio inspired by Persona 3 UI, built with React + Vite.

## Highlights

- Persona-style animated menu and page transitions
- Custom sections for About, Resume, Socials, and Side Projects
- Featured projects: Pokedex, Didasko, and Micelio
- Keyboard-first navigation support

## Tech Stack

- React
- Vite
- React Router
- Framer Motion

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Customization

- Edit [src/siteData.js](src/siteData.js) to swap the GitHub username, links, project list, and menu text.
- If you want to use this as a template, duplicate that file and replace the profile values with your own data.
- The main navigation and social/project panels read from that single source, so you do not need to edit each component separately.

## Reset Script

- Run `npm run reset:data` to overwrite [src/siteData.js](src/siteData.js) with neutral placeholder values.
- After that, replace the `YOUR_*` values with your own profile, projects, and links.
- This keeps the UI intact while clearing personal data in one step.

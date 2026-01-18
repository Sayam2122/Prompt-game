# 🎮 Who Did What? — AI Prompt Game

Interactive educational game to help learners distinguish between different types of AI by their actions: Search Bot, Traditional AI (Think Bot), Gen AI, and Agentic AI.

## Overview

This is a lightweight, client-side web game built with plain HTML, CSS and JavaScript. Players see a user prompt and four responses — one from each AI type — then answer a question identifying which AI performed a specified action.

The game is designed for classroom or self-directed learning and works offline by opening `index.html` in a browser. It is responsive and optimized for phones, tablets, and desktops.

## Features

- 10 sample prompts and responses illustrating Search / Think / Gen / Agentic behaviors
- Flip-card UI to reveal responses for each AI
- Quiz-style questions with instant feedback
- Learning breakdown screen for incorrect answers
- Mobile-first responsive layout (cards stack on small screens)

## Files

- `index.html` — Main game UI
- `style.css` — Styling and responsive rules
- `script.js` — Game logic and data
- `README.md` — This file

## How to run locally

Option 1 — Open directly (simple):
- Double-click `index.html` or open it in your browser. This works for static usage.

Option 2 — Serve via a local HTTP server (recommended for some browsers):

Using Python 3 (in the project folder):

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Using Node (http-server):

```powershell
npm install -g http-server
http-server . -p 8000
# then open http://localhost:8000
```

## Deployment

You can host this static site on GitHub Pages, Netlify, Vercel, or any static host.

### GitHub Pages
1. Push the repo to GitHub (already done).
2. On GitHub, go to Settings → Pages.
3. Under "Source", choose `main` branch and `/ (root)` folder, then Save.
4. The site will be published at `https://<your-username>.github.io/Prompt-game/` (allow a minute for the build).

### Vercel
1. Sign in to Vercel and import the project from GitHub.
2. Select the `main` branch and set the root directory to the repository root.
3. Vercel will auto-deploy the static site.

### Netlify
1. Create a new site from Git under Netlify.
2. Connect your GitHub repo and choose `main` branch.
3. No build command is required; set the publish directory to the repository root (`/`).
4. Deploy the site.

If you prefer, Netlify also supports drag-and-drop of the built site (just upload the folder contents).

## Notes & Tips

- The game is fully client-side — no server components required.
- If cards or assets look off on specific devices, try clearing the browser cache or testing in an incognito window.
- For classroom use, consider enabling GitHub Pages and sharing the Pages URL to students.

## Contributing

Feel free to add new prompts/responses in `script.js` (the `gameData` array). Add additional rounds and update the total rounds accordingly.

## License

This repository is provided as-is. Add a license file if you want to specify reuse terms (e.g., `MIT`, `Apache-2.0`).

---

If you want, I can also:
- Add a small `package.json` and a build script
- Add GitHub Pages workflow to automatically publish
- Add a simple demo link and badges to the README

Tell me which of these you'd like next and I'll add it and push the change.
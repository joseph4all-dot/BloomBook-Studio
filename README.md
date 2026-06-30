# BloomBook Studio

BloomBook Studio is a digital storytelling platform for premium interactive books.

## Sprint 1 – Foundation

Included in this first foundation package:

- Next.js + TypeScript project structure
- Design system CSS
- Dynamic background engine
- Cinematic cover screen
- Minimal reader shell
- Book configuration via `content/bloom/book.json`
- First book: **מניצן לפריחה**

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Repository setup

```bash
git init
git add .
git commit -m "Sprint 1 foundation"
git branch -M main
git remote add origin https://github.com/joseph4all-dot/BloomBook-Studio.git
git push -u origin main
```

## Next tasks

- Replace shell page transition with PageFlip engine
- Add real page-curl interaction
- Add thumbnail navigation
- Add theme engine
- Add mobile reading mode


## GitHub Codespaces

This repository is ready for GitHub Codespaces.

1. Open the repository on GitHub.
2. Click **Code → Codespaces → Create codespace on main**.
3. Run:

```bash
npm run dev
```

The app will be available on port `3000`.

---
name: kidclient-publish
description: Publishes new KidClient game episodes and site updates to GitHub (kidclient/kidclient), Cloudflare Pages (kidclient.pages.dev / kidclient.com), Itch.io (butler), and Game Jolt (gjpush). Use whenever the user finishes a game or episode with their child and wants to deploy or publish it.
---

# KidClient Episode Publishing Workflow

When publishing a new game episode or updating the KidClient Arcade:

## 1. Episode Directory Structure
Place each new episode inside `site/episodes/<episode-slug>/`:
- `site/episodes/<episode-slug>/index.html` — The playable single-file tablet-ready game.
- `site/episodes/<episode-slug>/BRIEF.md` — The 4-year-old Client's original brief and the prompts/iterations used during the episode.

## 2. Add to the Arcade Homepage & Offline Cache
1. Add a card for the new episode in `site/index.html`.
2. Add `/episodes/<episode-slug>/index.html` to `CORE_ASSETS` in `site/sw.js` and bump `CACHE_NAME` so tablets cache the new game for offline play.

## 3. Deploy to Cloudflare (`wrangler`)
Run from the workspace root (`/Users/jared/Documents/antigravity/calm-darwin`):
```bash
wrangler deploy
```

## 4. Commit & Push to GitHub (`gh` / `git`)
```bash
git add -A
git commit -m "Add episode: <episode-slug>"
git push origin main
```

## 5. Optional: Push Web Build to Itch.io (`butler`) & Game Jolt (`gjpush`)
To package a single episode for Itch.io or Game Jolt:
```bash
mkdir -p /tmp/kidclient-build
cp site/episodes/<episode-slug>/index.html /tmp/kidclient-build/index.html
cp site/shared/kidclient-shell.js /tmp/kidclient-build/kidclient-shell.js
# Push to Itch.io (once logged in via `butler login`)
butler push /tmp/kidclient-build kidclient/<episode-slug>:html5
```

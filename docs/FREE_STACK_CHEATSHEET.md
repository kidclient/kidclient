# 💰 The $0 Parent AI Game Studio Stack
### How to Build, Host, Save Data, and Play Offline with Your Kid for Free

You don't need expensive subscriptions, Unity licenses, or cloud servers to build a library of custom games with your child. Here is our complete **$0 stack** and how each piece fits together.

---

## 1. Free AI Models Parents Already Have Access To

| Tool | Free Tier Sweet Spot | Best Way to Use It with Your Kid |
| :--- | :--- | :--- |
| **Claude (Free Web / App)** | Turn on **Artifacts** | Paste `KID_GAME_SYSTEM_PROMPT.md` + your brief. Claude renders the game **live right next to the chat** so your kid can play it immediately! |
| **ChatGPT (Free Web / App)** | Use **Canvas** mode | Ask ChatGPT to build a single-file `index.html` game in Canvas and click **Preview** at the top right. |
| **Google AI Studio (Gemini)** | Free usage tier with massive context | Great when your single-file game grows large or when you want to upload a photo of your child's drawing for the AI to turn into code. |
| **Antigravity / VS Code** | Local workspace + direct deploy | Best when you're ready to save multiple episodes, use starter templates, and publish to the web in one command. |

---

## 2. How to Avoid Paying for 3D Models, Sprites, or Sound Effects

Buying asset packs breaks the flow when a 4-year-old suddenly changes their mind from *"I want a dinosaur"* to *"No, a flying toaster!"*

1. **Procedural 3D Lego-Style Primitives (Three.js):**
   AI is incredible at assembling recognizable monster trucks, sharks, castles, and robots out of basic shapes (`BoxGeometry`, `SphereGeometry`, `CylinderGeometry`). It loads in 0.1 seconds and never fails with a broken file link.
2. **Emoji-to-Canvas Textures:**
   Every iPad and Android tablet already has thousands of high-resolution vector artworks built right into the keyboard: **Emojis!** Painting `🦖`, `🍦`, `🚀`, or `🌈` onto an HTML5 Canvas gives you instant, colorful sprites for $0.
3. **Web Audio Synthesizer (`AudioContext`) + `speechSynthesis`:**
   Instead of hunting for `.mp3` files, our templates include a 40-line JavaScript sound synthesizer that generates jump *boings*, coin *dings*, laser *pews*, and spoken cheers (*"Way to go!"*) using the browser's built-in audio chip.

---

## 3. $0 Hosting & Sharing with Family (Cloudflare Pages & GitHub Pages)

Want to send your child's game to their iPad, or text a playable link to Grandma?

### Option A: Cloudflare Pages Drag-and-Drop (30 Seconds)
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) (Free account) -> **Compute (Workers & Pages)** -> **Pages**.
2. Click **Upload assets**, drag your game folder in, and get an instant `https://your-game.pages.dev` link!
3. Unlimited static bandwidth for $0.

### Option B: CLI One-Command Deploy (How we publish KidClient episodes)
```bash
wrangler pages deploy ./site --project-name=kidclient
```

---

## 4. Tiered Persistence & Multiplayer (From Offline to Co-op)

How do you save your child's progress and play together without paying for servers?

### Tier 1: Offline Save Data (`localStorage`)
* Built into all our templates via `KidShell.save('stars', 25)` and `KidShell.load('stars', 0)`.
* Keeps your child's unlocked colors, stickers, and star count saved directly on their iPad—even with Wi-Fi turned off.

### Tier 2: Same-iPad Couch Co-Op (Zero Network Code)
* **Touch + Bluetooth Controller:** Connect any Xbox, PlayStation, or Switch Joy-Con controller to the iPad via Bluetooth! The browser's native `navigator.getGamepads()` API lets the parent drive Player 2 while the child uses the touch screen.

### Tier 3: Device-to-Device Room Codes (`PeerJS` WebRTC)
* Uses free WebRTC signaling so a parent on their phone and a kid on their tablet can join a 4-digit room code (e.g., `1234`) and see each other driving around the same 3D world in real time with **$0 server cost**.

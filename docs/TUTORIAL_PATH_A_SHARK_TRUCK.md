# 🎬 Episode 01 Tutorial & Production Kit: Building "Path A: 3D Shark-Truck Island"

This guide contains **everything you need** to:
1. Build (or remix) **Path A: 3D Shark-Truck Island** with your child in under 10 minutes.
2. Film **Episode 01** of the **KidClient** YouTube channel (complete with shot-by-shot teleprompter script, B-roll cues, and teaching moments).

---

## 📋 Part 1: The Completed 4-Year-Old Client Brief (`BRIEF.md`)

When we sat down for our 5-minute "Client Discovery Call," here is what our 4-year-old Creative Director asked for:

```markdown
# CLIENT BRIEF: SHARK-TRUCK ISLAND (PATH A - 3D THREE.JS)

- **Client Name & Age:** Tiny Boss (Age 4)
- **Game Style:** 3D Driving & Stunt World (Three.js Single-File HTML5)

## 1. The Hero
- A bright blue monster truck that is ALSO a shark!
- Must have a dorsal shark fin on the roof, big monster tires with orange rims, googly eyes with yellow KidClient glasses, and a KidClient flag waving on the back.

## 2. The Goal
- Drive around a sunny tropical island and chomp giant floating ice cream cones!
- Every ice cream cone makes a happy chime and makes the Shark-Truck grow slightly bigger.
- Every 5 ice creams, the game cheers out loud ("5 ice creams! Way to go boss!").

## 3. The World & Obstacles (Zero "Game Over" Rule!)
- A round green island surrounded by blue ocean and a glowing red bouncy bumper ring so the truck can NEVER fall off or die—hitting the edge just bounces you back with a funny "BOING!"
- Purple stunt ramps that launch the truck high into the air.
- A giant drive-through KidClient Stadium Archway with our banner on top.
- Colorful stacks of 3D blocks (like in our KidClient logo!) that go flying when you crash into them or shoot pancakes at them, then magically rebuild themselves.

## 4. The "Big Silly Button"
- A giant glowing red arcade button labeled "SILLY BUTTON" that blasts 3 buttered pancakes out of the front of the truck with a funny horn sound!
```

---

## 🛠️ Part 2: Step-by-Step Build Guide for Parents (3 Iteration Loops)

Instead of asking the AI to write a massive game all at once and hoping it works, we teach kids **iterative development** in 3 quick rounds:

### Round 1: The 60-Second Prototype (Hero + Island + Touch Joystick)
1. Open Claude (Free with Artifacts), ChatGPT (Canvas), Gemini, or Antigravity.
2. Paste **[`KID_GAME_SYSTEM_PROMPT.md`](../prompts/KID_GAME_SYSTEM_PROMPT.md)** followed by the Client Brief above.
3. **What to show your child after 60 seconds:** Hand them the tablet as soon as the basic blue truck can drive on the green circle. Ask: *"Does it feel fast enough? Does the jump button bounce high enough?"*

### Round 2: The "AI Hallucination / Teaching Moment" Check
When AI builds 3D cars out of Three.js primitives (`BoxGeometry`, `CylinderGeometry`), it almost always makes one funny mistake on the first try:
* **Common AI Mistake #1:** The wheels rotate like coins spinning instead of rolling forward (`wheel.rotation.y` instead of `wheel.rotation.x`).
* **Common AI Mistake #2:** The shark fin points backward or floats 2 feet above the roof.
* **How to use this with your 4yo:** Point at the screen and laugh together! *"Look! The AI robot doesn't know how tires roll because it has never ridden in a car! Let's tell the robot: 'Rotate the wheels on the X axis so they roll forward!'"*

### Round 3: Adding "Juice" & Brand Materials
Once the driving feels great, prompt the AI to add the finishing touches:
* Add the **Glowing Red Silly Button** (`#btn-silly`) that launches 3D pancake cylinders (`THREE.CylinderGeometry(1.25, 1.25, 0.3, 18)`).
* Add **Knock-over Voxel Block Towers** that react to both the truck and flying pancakes.
* Load our custom KidClient artwork (`/assets/brand/kidclient-banner.png` and `/assets/brand/kidclient-logo-3d.png`) onto the 3D Stadium Archway and the truck's rear flag!

---

## 🎥 Part 3: YouTube Episode 01 Teleprompter Script & Shot List

* **Video Title Ideas:**
  1. *My 4-Year-Old Boss Hired Me to Build a 3D Shark-Truck Game (With AI)*
  2. *How I Teach My 4-Year-Old AI by Being His Game Dev Consultant*
* **Thumbnail Concept:** Split screen of your 4yo wearing yellow glasses/toy tie pointing at an iPad + the 3D Shark-Truck blasting pancakes through the KidClient banner (`site/assets/brand/kidclient-banner.png`).

| Timestamp | Segment | Visual / B-Roll Cue | Script / Talking Points |
| :--- | :--- | :--- | :--- |
| **0:00 - 0:45** | **The Hook** | Show 5 seconds of your 4yo laughing & tapping the giant red **SILLY BUTTON** on the iPad as pancakes blast blocks in 3D. Cut to KidClient 3D Logo animation. | *"Most parents worry that tablets turn their kids into passive zombies. So my 4-year-old and I made a deal: he isn't allowed to just consume random apps—instead, he's the Creative Director, I'm his AI Consultant, and we build his dream games together."* |
| **0:45 - 2:15** | **The 5-Min Client Pitch** | Sit at a table with your 4yo and the printed/tablet `CLIENT_BRIEF_TEMPLATE.md`. Ask the 4 questions. | *"When you work with a 4-year-old client, you have about 5 minutes before you lose the room. We use our 4-question KidClient Brief: 1. Who is the hero? (A Shark Monster Truck!) 2. What do we collect? (Ice cream cones!) 3. What happens instead of losing? (A bouncy bumper ring!) 4. What does the Big Red Silly Button do? (Blasts pancakes!)"* |
| **2:15 - 4:00** | **The System Prompt Secret** | Screen recording pasting `KID_GAME_SYSTEM_PROMPT.md` + the brief into the AI. Highlight the "Single-File + Tablet Joystick + Zero Broken Assets" rules. | *"If you just ask ChatGPT or Claude for a 3D game, it'll give you keyboard-only controls that don't work on an iPad, or broken image links. That's why we created the free `KID_GAME_SYSTEM_PROMPT.md` in our GitHub repo..."* |
| **4:00 - 6:00** | **V1 & Teaching AI Limitations** | Show the first prototype to your 4yo. Zoom in on a funny AI quirk (wheels spinning sideways or blocks floating). | *"Here's the most important part for parents: when the AI makes a silly mistake, don't fix it secretly! Show your kid. Right here, my 4-year-old noticed the tires were spinning sideways. That's how a 4-year-old learns that AI isn't magic—it's a pattern machine that needs a smart human boss."* |
| **6:00 - 7:45** | **Adding the KidClient Brand & Silly Button** | Show adding the KidClient 3D Archway, knock-over voxel block towers, and the glowing red Silly Button. Deploy with `wrangler deploy` to `kidclient.com`. | *"Finally, we added knock-over block towers, our KidClient 3D stadium banner, and deployed it live to `kidclient.com` so he can play it full-screen offline on his iPad."* |
| **7:45 - 8:30** | **Call to Action** | Show `kidclient.com` on an iPad. Point to description links. | *"You can play Shark-Truck Island right now on your kid's tablet at `kidclient.com`, and grab all our `.md` prompt templates for free on GitHub to build your first game tonight. Drop your kid's craziest game idea in the comments—my Tiny Boss and I might build it next!"* |

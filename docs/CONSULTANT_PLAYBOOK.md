# 👔 The Parent-Consultant Playbook
### How to Turn Screen Time into Co-Creation (and Teach a 4-Year-Old How AI Actually Works)

Most kids experience tablets as passive consumers: they tap icons someone else made and watch algorithms feed them videos.

When you flip the relationship—making **your child the "Client / Creative Director"** and **yourself the "AI Consultant"**—three magical things happen:
1. **They learn agency:** They realize games aren't magic boxes; they are built from ideas, rules, and iterations.
2. **They learn AI literacy early:** They see firsthand what AI is amazing at (generating a purple dinosaur car in 10 seconds) and what AI struggles with (putting the wheels on the roof or forgetting how gravity works).
3. **You build together:** Instead of fighting over turning off the iPad, you're high-fiving over fixing a bug together.

---

## ⏱️ Phase 1: The 5-Minute "Client Discovery Meeting"

A 4-year-old has an attention span of about 4 to 7 minutes before they want to see something moving on the screen. Keep your "intake meeting" fast, silly, and visual!

### The 4 Questions to Ask Your Tiny Client:
1. **"Who is the hero of our game today?"**
   * *Kid says:* "A monster truck that is also a shark!"
2. **"What does the hero want to get or do?"**
   * *Kid says:* "Eat all the ice cream cones and jump over lava!"
3. **"What happens when we press the BIG SILLY BUTTON?"**
   * *Consultant Tip:* Every game for a 3-to-6-year-old **must** have a "Silly Button" (fart sound, rainbow explosion, giant bounce, turbo spin, or raining tacos). It guarantees instant giggles even if the core gameplay is simple.
4. **"Can the hero lose, or does something funny happen instead?"**
   * *Consultant Tip:* **Never include "Game Over / You Died" screens for 4-year-olds.** Instead of dying in lava, have the lava bounce the shark-truck 100 feet into the air with a funny *"BOING!"* sound.

---

## 🤖 Phase 2: Generating V1 Fast (The 60-Second Rule)

Once you have their 4 answers, **do not spend 20 minutes tweaking code while your kid waits.**
1. Paste **[`KID_GAME_SYSTEM_PROMPT.md`](../prompts/KID_GAME_SYSTEM_PROMPT.md)** + their 4 answers into your AI tool.
2. Get **Version 1** on the screen in under 90 seconds—even if it's just blocky shapes!
3. Hand them the tablet/controller immediately and say: **"Okay Boss, test out Version 1 and tell me what the robot got wrong!"**

---

## 🧠 Phase 3: Teaching AI Abilities & Limitations (Through Play!)

When the AI generates something weird or buggy, **don't hide it or fix it silently.** That bug is the best teaching moment of the whole session!

| What Happened on Screen | What to Tell Your 4-Year-Old | The AI Lesson They Learn |
| :--- | :--- | :--- |
| **The shark-truck drives sideways or upside down** | *"Look! The AI robot knows what a shark and a truck look like, but it doesn't have eyes like you—it guessed which way is front! How should we tell it to fix it?"* | **AI doesn't "see" the real world; it predicts patterns and needs human direction.** |
| **The truck falls straight through the floor** | *"Uh oh! The robot forgot to make the floor solid! Should we tell the robot to turn on gravity and solid ground?"* | **AI only knows the rules we remember to give it (Specification & Edge Cases).** |
| **The AI invents a cool feature you didn't ask for** | *"Whoa, the robot added clouds in the sky all by itself! Do we want to keep that or change it?"* | **Human-in-the-loop curation: You are the boss of the AI, not the other way around.** |
| **The game is too hard or too slow** | *"You're the QA Tester! Tell me: should we make the truck 2 times faster or 10 times faster?"* | **Iterative testing, numbers/scale, and cause-and-effect.** |

---

## 🎨 Phase 4: Letting the Kid Contribute Real Assets

Even before your child can read or type, they can put their own voice and art into the game:
* **Voice Acting:** Record your kid making the *"VROOM!"*, *"CHOMP!"*, or *"YAY!"* sound on your phone, or use the browser's built-in Speech API.
* **Paper-to-Game Art:** Have them draw the monster on a piece of paper with markers, snap a photo, and use it as a sprite texture.
* **Color & Number Picking:** Let them see the numbers in the code (`speed = 5` -> *"What happens if we type a 5 and two zeros: `500`?!"*).

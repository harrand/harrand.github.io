---
title: "Projects"
draft: false
---

# Psyc
Compiler, 2024-Present, Language: C++, LLVM-IR

Psyc is a small compiler for a toy programming language, called Psy. Both the language and compiler are very early in development.

Psy is a statically-typed systems programming language, with a focus on the following:
- Compiler simplicity.
- Fast compile times.
- Competitive runtime performance.
- Internal build config/flags within source code. No build scripts; your source code directly gives the compiler all the information it needs.

Psy is what you get if you take C, gave it the syntax of [cppfront](https://github.com/hsutter/cppfront), and then sprinkled some functional programming features for ease-of-use. Unlike C++, it doesn't take an eternity to compile your code either.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/psyc)

---

# Topaz
{{< image src="/tz.png" alt="Topaz" style="border-radius: 8px; width: 2%; display: inline;" >}}
Engine, 2015-2024, Language: C++

Topaz is a 3D game engine, supported on Windows and Linux. Notable features include:
- Rich, low-level graphics API, against either a Vulkan or OpenGL backend - all configured at compile-time.
- Custom shader-language, called TZSL. A superset of GLSL specialised for Topaz. TZSL shaders compile cleanly down to GLSL (OpenGL), or SPIRV (Vulkan) without any modifications required.
- Alternatively, a higher-level rendering API is also provided to save you from reinventing the wheel to do common high-level tasks, such as 3d skeletal animation.
- Multi-threaded embedded Lua.
- Low-latency job system to spread work across multiple threads.
- GLTF model importing.
- Ability to embed arbitrary text-files within built executables.

The current version of Topaz is 4.2.0. More versions are planned, although development on the engine is currently only done as-needed by Red Nightmare until it ships.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/Topaz)
[{{< image src="/yt.png" alt="YouTube Development Playlist" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://www.youtube.com/playlist?list=PL6PSLdrGGe8I67_i6mNk8IUmOsP85Vhll)
[{{< image src="/doc.png" alt="Documentation" style="border-radius: 8px; width: 2%; display: inline;" >}}](/Topaz/)

---

# Red Nightmare
{{< image src="/red_nightmare.png" alt="Red Nightmare" style="border-radius: 8px; width: 2%; display: inline;" >}}
Topaz Game, 2022-2024, Language: C++, Lua

Red Nightmare is a high-fantasy roguelike with RPG elements. It initially served as a testbed for new Topaz features, only producing basic prototypes. In 2022 however, I began to develop it as a more serious game project rather than a subsidiary to an engine project.

Red Nightmare's game logic is heavily driven by embedded Lua, rarely calling directly into Topaz aside from the heavy-duty features such as rendering.

Red Nightmare is a 2d pixel game, although uses 3d skeletal animations aswell as the typical 2d frame-by-frame sprite animations (flipbooks). To do this, Topaz's heavy-duty 3D animation renderer is used to render an animated model into an offscreen image, which is then pixelated and then superimposed onto the output image, every frame.

Its older prototypes lack these novel features, as they were written against older Topaz versions 1.0 (2018) and 3.6.1 (2022). The full version of Red Nightmare is being developed against Topaz 4.2.0. The current game-design document can be found [here](https://github.com/harrand/Red-Nightmare/blob/master/GDD.pdf).

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/Red-Nightmare)
[{{< image src="/yt.png" alt="YouTube Development Playlist" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://youtube.com/playlist?list=PL6PSLdrGGe8JU5bsKL4Kohhi7e5aFSzTu)

---

# Parched
{{< image src="/parched.png" alt="Parched" style="border-radius: 8px; width: 2%; display: inline;" >}}
Topaz Game, 2022, Language: C++

Parched is a 2D physics-based sample game using Topaz 3.3. You spawn balls in a limited-size world.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/Parched)

---

### Comparison of some occlusion culling algorithms used in modern game engine development
Paper, 2019, 3D Graphics

Research project consisting of CPU-centric occlusion-culling approaches using Topaz, aswell as a writeup dissertation.

Compares a software-renderered occlusion culling approach against an older approach based on potentially-visible sets of nodes. Both are implemented in separate forks of Topaz 1.0. This was a dissertation for university.

Regrettably, the paper does not touch upon GPU-based approaches, which have become more popular now.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/Dissertation)

---


# Amethyst
{{< image src="/am.png" alt="Amethyst" style="border-radius: 8px; width: 2%; display: inline;" >}}
Library, 2018-2019, Language: C++

Amethyst is a cross-platform basic networking library. It is very low-level, dealing only in sockets.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/Amethyst)

---

# Maze Darwinism
{{< image src="/maze_darwinism.png" alt="Maze Darwinism" style="border-radius: 8px; width: 2%; display: inline;" >}}
Application, 2018, Language: Java

Maze Darwinism was an application which displayed a maze which would be solved automatically. The solution would evolve via natural selection until the maze was solved.

The natural selection was implemented in pure Java, and the graphics done in javax.swing.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/Maze-Darwinism)

---

# The Chimera of Gold
{{< image src="/chimera_banner.png" alt="Chimera of Gold" style="border-radius: 8px; width: 2%; display: inline;" >}}
Unity Game, 2018, Language: C#

The Chimera of Gold was a group-project at university where we created a 3D board-game in Unity. I was the group leader. It is based off of the ancient Indian game known as Pachisi.

It is a mountain-climbing board game for 2-5 players. Each player starts with 5 pawns at different camps at the base of the mountain. Your turn begins with a dice roll, which decides the number of tiles you can move at once.

Obstacles stand in your way. You can get past them by rolling the dice to move exactly onto its tile. Once you do this, you can move the obstacle to almost anywhere on the map. Isolate the obstacle to clear your path, or go out of your way to place them in the path of your opponents! If you land on the same tile as an opponents pawn, you send that pawn back to its base camp. You can also do this to your own pawns, so take care!

There is a golden tile at the summit of the mountain. A player wins when all five of their pawns reach the golden tile.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/The_Chimera_of_Gold)

---

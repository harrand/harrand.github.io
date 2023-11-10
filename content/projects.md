---
title: "Projects"
draft: false
---

# Topaz
{{< image src="/tz.png" alt="Topaz" style="border-radius: 8px; width: 2%; display: inline;" >}}
Engine, 2015-Present, Language: C++

Topaz is a 3D graphics engine. It supports linux/windows and can be configured to use opengl/vulkan under-the-hood.

The next version of Topaz is 4.1.0.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/Topaz)
[{{< image src="/yt.png" alt="YouTube Development Playlist" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://www.youtube.com/playlist?list=PL6PSLdrGGe8I67_i6mNk8IUmOsP85Vhll)
[{{< image src="/doc.png" alt="Documentation" style="border-radius: 8px; width: 2%; display: inline;" >}}](/Topaz/)

---

# Red Nightmare
{{< image src="/red_nightmare.png" alt="Red Nightmare" style="border-radius: 8px; width: 2%; display: inline;" >}}
Topaz Game, 2018-Present, Language: C++

Red Nightmare is a high-fantasy roguelike with RPG elements. It initially served as a testbed for new Topaz features, only producing basic prototypes. In 2022 however, I began to develop it as a more serious game project rather than a subsidiary to an engine project.

Its older prototypes written against Topaz versions 1.0 (2018) and 3.6.1 (2022). The full version of Red Nightmare is being developed against Topaz 4.1.0. The current game-design document can be found [here](https://github.com/harrand/Red-Nightmare/blob/master/GDD.pdf).

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

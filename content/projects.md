---
title: "Projects"
draft: false
---

# Topaz
{{< image src="/tz.png" alt="Topaz" style="border-radius: 8px; width: 2%; display: inline;" >}}
Engine, 2015-Present, Language: C++

Topaz is a 3D graphics engine. It supports linux/windows and can be configured to use opengl/vulkan under-the-hood.

As of writing, the most recent version is Topaz 3.5.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/Topaz)
[{{< image src="/yt.png" alt="YouTube Development Playlist" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://www.youtube.com/playlist?list=PL6PSLdrGGe8I67_i6mNk8IUmOsP85Vhll)
[{{< image src="/doc.png" alt="Documentation" style="border-radius: 8px; width: 2%; display: inline;" >}}](/Topaz/)

---

# Red Nightmare 2
{{< image src="/red_nightmare.png" alt="Red Nightmare 2" style="border-radius: 8px; width: 2%; display: inline;" >}}
Topaz Game, 2022-Present, Language: C++

Red Nightmare 2 is a complete rewrite of the original game, using Topaz 3.5, currently in development.

The game is a 2D action roguelite. There will be multiple playable characters, but the player originally controls a sorceress named Akhara. You must navigate through the story levels, defeating monsters on the way using Akhara's fireballs. Alternatively, you can play procedural levels, which are randomly generated, and last forever until you die.

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

# Red Nightmare
{{< image src="/red_nightmare.png" alt="Red Nightmare" style="border-radius: 8px; width: 2%; display: inline;" >}}
Topaz Game, 2018, Language: C++

Red Nightmare is an old sample game using Topaz 1.0. You play as a sorceress aswell as her magical elemental orb, but you are attacked by ghosts. You also have the power of telekinesis, which you can use to drag ghosts out of your way or into their doom.

The orb has different effects depending on its current elemental type. The fiery orb deals massive damage, the frost orb slows nearby ghosts, and the void orb sucks in ghosts and consumes them, growing in size.

After killing enough ghosts, a boss battle begins against Nightmare. Nightmare is a malevolent powerful ghost who can only be stopped with the combination of the orb and your telekinesis.

[{{< image src="/gh.svg" alt="Github Repository" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://github.com/Harrand/Red-Nightmare/tree/Topaz1.0)
[{{< image src="/yt.png" alt="YouTube Development Playlist" style="border-radius: 8px; width: 2%; display: inline;" >}}](https://youtu.be/Ps6-L03zkuA)

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

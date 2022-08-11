So you can't find a Linux version of that software you want to install? Our last step is to try [https://appdb.winehq.org/ Wine]. Wine is a compatibility layer that tries to translate Window Binaries (.exe) calls into Linux calls. Sometimes this works really well, and other times nothing happens at all. Wine will create a windows environment, with c drive, task manager and everything else.

== Games ==
For Steam games you can just use [[Steam]]. For games that are not on Steam, use [[Lutris]]. For Epic games and GOG you can use [[Heroic]] (or Lutris). For other programs, [[Bottles]] might be good option. Check [https://www.protondb.com/ protondb] for Steam games, and [https://appdb.winehq.org winehq appdb] for compatibility with all other games. While it is possible to use the existing game library on an NTFS drive, it is not recommended due to compatibility issues. It might work, but you could run into weird problems.

== Other Software ==
You can find all kinds of programs in the wine [https://appdb.winehq.org/ AppDB].

[https://wiki.archlinux.org/index.php/Wine Here's an in-depth guide of wine stuff] but again, google and find how stuff works and it works. If you don't understand, please ask! The community is usually happy to help!

There are also other programs that try to help you with Wine, like [https://www.playonlinux.com/en/ PlayOnLinux].

There is also a paid for solution called [https://www.codeweavers.com/ Crossover] made by CodeWeavers. CodeWeavers are the same minds behind Valve's Proton so you should expect a pretty good product in general. They have a [https://www.codeweavers.com/compatibility search feature that you should also use]. But usually you will not need it if you don't want to spend money.
==Manually running wine==
You typically would not want to do this, this is just for educational purpose.

First, let's install Wine.<pre>sudo apt install wine</pre>On some systems, installing Wine allows you to double click an .exe and it will try to run just like in Windows, but if not, you would open a terminal and type (credit to [[U/whyhahm|/u/whyhahm]] for suggesting <code>cd</code> to directory before running):<pre>cd /path/to/program; wine file.exe</pre>
==DXVK/D9VK/Gallium Nine/VKD3D==
What are DXVK/D9VK/VK9/Gallium Nine? I'll let the projects explain themselves:

[https://github.com/doitsujin/dxvk DXVK]: Vulkan-based D3D11, D3D10, and now D3D9, implementation for Linux / Wine

[https://github.com/Joshua-Ashton/d9vk D9VK]: Used to be separate from DXVK, but now they are one project. Kept separate on this page for searching.

[https://github.com/iXit/wine-nine-standalone Gallium Nine]: Gallium Nine allows to run any Direct3D 9 application with nearly no CPU overhead, which provides a smoother gaming experience and increased FPS. Gallium Nine requires you to be using the Mesa3D driver though, so Nvidia users are out of luck. (Thanks to [[U/MicroToast|/u/MicroToast]] for the clarification)

[https://source.winehq.org/git/vkd3d.git/ VKD3D] (and its currently more active [https://github.com/HansKristian-Work/vkd3d-proton -proton fork]): Translates D3D12 to Vulkan. Still in its early stages, but is already capable of running most games.

Okay, but what does that mean?

Direct3D (the graphical part of the DirectX API) is what most Windows game built after ~2000 use. You don't really need to know any technically details about it other than the fact that it's a Windows' only API. For the longest time, one of the biggest bottle necks for gaming on Linux was translating the Direct3D calls to OpenGL (a cross platform graphical API that works on Linux/most other OSes).

All of these projects attempt to translate Direct3D calls to something that Linux understands. As far as I'm aware, the most used one is DXVK.

Proton and [[Lutris]] both have support for automatically using these technologies, so you don't have to worry about what to do in order to take advantage of them.

Using these technologies you can get very good performance, sometimes even better than on Windows! Cyberpunk 2077 for example gets 40% more FPS in [https://www.youtube.com/watch?v=sL_d_5MWPfQ this video]. Note, that this is not true for all games, though. Some games still run with less FPS, in general you can expect about the same performance. Also note, that this is not the default experience, but a heavily [[Improving performance|optimized Linux install]]. Your default experience will be worse.


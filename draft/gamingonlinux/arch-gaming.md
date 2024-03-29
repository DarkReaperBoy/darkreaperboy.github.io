 
[[Category:Gaming]]

Linux is considered an "unofficial" gaming platform; the support and target audience provided to it is not a primary priority for most gaming organizations. This has seen some change starting from 2021 onward, as big players like [[Wikipedia:Valve Corporation|Valve]], the [[Wikipedia:CodeWeavers|CodeWeavers]] group and the [[Wikipedia:Open-source software development|community]] have made tremendous changes over the past few months, allowing Linux to truly become a viable platform for gaming. Further, more and more indie development teams strive to use cross-platform rendering engines in order to have their game able to compile and run on Linux.

When it comes to gaming, the majority of user's thoughts are often directed towards popular [[Wikipedia:AAA games|AAA games]] which are usually written for the [[Wikipedia:Microsoft Windows|Microsoft Windows]] platform. This is understandable, however, it is not the only and sole availability. Please refer to [[#Game environments]] and [[#Getting games]] further down the page where you can find software to run games from other platforms.

If you however are fixated on getting games written for [[Wikipedia:Microsoft Windows|Microsoft Windows]] to work on Linux, then a different mindset, tools and approach is required; understanding internals and providing functional substitution. Please read [[#Game technicality]] below.

== Game technicality ==

There are ultimately ''two major problems'' that arise from attempting to play [[Wikipedia:AAA games|AAA games]] on Linux. They are:

* '''Graphics SDK'''
** Games written and compiled for an API that Linux does not recognize (such as [[Wikipedia:DirectX|DirectX]]).
* '''Graphics Hardware'''
** Drivers necessary to handle game rendering. (such as [[Wikipedia:Nvidia|Nvidia]] Drivers)

From these problems, further ''two complications'' arise, in particular:

* '''General Library Dependencies'''
** Libraries necessary for doing general purpose operations during gameplay, such as saving ingame, loading config. (e.g Microsoft Visual C++, MFC, .NET)
* '''Incompatible Interfaces'''
** Aside from the frameworks mentioned above, there is a further problem with binary formats and compiled code generated by Windows which Linux does not recognize.
** Lastly, lacking the appropriate driver to do the rendering results in a horseless cart situation.

The APIs above forward their graphical calls to the underlying driver which then proceeds to talking to the GPU hardware. AMD users fortunately have opensource drivers released by AMD itself. This is already a huge issue resolved. Nvidia users have to rely on other alternatives, which often comes packed as blobs. (microcode and firmware being fed through, as a result of Nvidia driver reverse engineering)

A huge amount of games use [[Wikipedia:DirectX|DirectX]] as their main driving SDK. Linux, natively supports only [[Wikipedia:OpenGL|OpenGL]] and [[Wikipedia:Vulkan (API)|Vulkan]]. Linux by itself does not support [[Wikipedia:DirectX|DirectX]] or any of the aforementioned technologies (Visual C++, MFC, .NET).

Instead, several opensource equivalents have been written which attempt to provide '''identical''' functionality, ultimately achieving the same result from a graphics point of view. These equivalents have their "own" written substitutes which attempt to "re-invent" what the original SDK calls would possibly achieve from a [[Wikipedia:black box|black box]] point of view. Popular ones include:

* [[Wine]] (Wine is Not Emulator) [provides a "loader vm", self written dependencies, interop and more]
* [[Proton]] (forked Wine project, optimized for Steam by Valve)
* [[Wikipedia:Mono (software)|Mono]] (.NET alternative)
* [[Wikipedia:Media Foundation|MF-Media]] (media foundation dependencies)

For example, a call to load, transform and shade vertices on [[Wikipedia:DirectX|DirectX]] may be re-written from scratch in a new .dll/.so owned by Wine, providing their own "hypothetical" belief on what the function may be doing underneath, and forward it instead to an [[Wikipedia:OpenGL|OpenGL]] alternative, effectively trying to achieve similar results. Since these calls are direct equivalents and treated "as if" DirectX was running, performance is not impacted. (with the exception of the starting overhead to interop with these)

These tools are often brought in the distribution together on the system at the same time. A '''prefix''' (Wine's terminology for a directory mimicking a Windows sandbox) is created and configured. Dependencies are installed '''inside the prefix''' (the "sandbox" still needs the game's [[Wikipedia:Library (computing)|redistributables]]), often with [https://wiki.winehq.org/Winetricks winetricks], followed by an attempt to run the game "as if" it was executed from Windows.

This, nowadays, fortunately works for most games (aside from [https://www.keengamer.com/articles/features/opinion-pieces/kernel-level-anti-cheat-and-7-games-or-programs-that-use-it/ anticheat protected ones], which require a kernel driver that Wine/Proton does not yet have). If a game does not work, it is usually as a result of incompatible packages, missing dependencies or unimplemented functionality by Wine/Proton.

If you are to run Wine/Proton, please make sure you use versions past '''5.x''' as this is where most of the recent patches have been made into.

Lutris is a piece of software that provides runners and sandboxes that handle dependencies for you when you install games, if the above process is found tedious and/or complicated.

== Common game dependencies ==

In order to gain a more in-depth understanding of what you will intend to do if you decide to go the Wine/Proton route, it is worthwhile to cover the common dependencies that games require in order to execute. Architecture also needs to be considered in mind, whether x86 or x64, preferably both.

A prefix would need to have the following populated into it in order to run '''most''' Windows games.

=== Mandatory (for high coverage) ===

{{Style|Links to wiki articles that contain package links (e.g. [[Fonts]]) should be used here}}

* Microsoft Core Fonts
* Microsoft Visual C++ 2015 (2017 has the most coverage, recommended) [2005, 2008, 2010, 2012, 2013, 2015, 2017-2018, 2019]
* DirectX 9.0 (11.0 has the most coverage, recommended) [June SDK update 2010] {which consists of, to name a few:}
** Direct3D
** Direct2D
** DirectShow
** DirectInput
** DirectPlay
** DirectSound
** DXGI
** XAudio2
* .NET Framework (3.5 has most coverage)
* OpenGL
** OpenAL
** OpenAI
** OpenCL
* Vulkan

=== Optional (but still common) ===

* XNA
* PhysX
* Media Foundation
* Quicktime
* Adobe Reader 11
* Java SRE (e.g Minecraft)

=== Rare (less common) ===

* Gamespy
* MIDI driver
* ACDSee

== Machine requirements ==

It is not enough to just populate a prefix with the dependencies the game will need. The kernel itself has to have the substitution it will provide to the calls the game will make. As already mentioned, drivers and alternatives are available.

=== Drivers ===

* AMD drivers: see [[ATI]] and [[AMDGPU]].
* Intel drivers: see [[Intel graphics]].
* NVIDIA drivers: see [[NVIDIA]].

=== Dependency for the machine & substitutes ===

* [[Wine]]
* {{Pkg|wine-gecko}}
* {{Pkg|wine-mono}}
* [[Vulkan]]
* [[OpenGL]]
* [[Proton]] Redistributables (optional, but it may help)
* {{AUR|wine-ge-custom}} or [https://github.com/Tk-Glitch/PKGBUILDS/tree/master/wine-tkg-git TKG] (optional, unless unsuccessful) : specially compiled wine versions containing patches for certain games.

'''This is mostly informative. Some of these packages install themselves once you install the major ones.'''

== Game environments ==

Wine/Proton are not the only approaches to play games. Different environments exist to play games in Linux, and have just as many (or more) games than on Windows:

* Native – games which have builds targeting the Linux platform, shipping with OpenGL and/or Vulkan graphics API support.
* [[Wikipedia:Emulator|Emulator]]s – required for running software designed for other architectures and systems. Most games run out of the box once the ROM is fed in to the emulator and issues are rarely encountered. Below are the most popular ones in use today:
** PPSSPP - PSP Emulator.
** Dolphin - Gamecube and Wii Emulator.
** DeSMuME - Nintendo DS emulator.
** Citra - 3Ds emulator.
** Bluestacks - Android emulator.
** PCSX2/RPCS3 - PlayStation emulators.
** Dosbox - DOS game emulator.
** Yuzu - Nintendo Switch emulator.

* [[Java]] - write once, run everywhere platform. Examples of popular games that run on Linux are [[Minecraft]], [[RuneScape|Runescape]], [[Wikipedia:Wurm_Online|Wurm Online]], [[Wikipedia:Puzzle_Pirates|Puzzle Pirates]].
* Web – games running in a web browser.
** HTML5 games use canvas and WebGL technologies and work in all modern browsers.
** [[Flash]]-based – you need to install the plugin to play.
* [[Wine]] – Windows compatibility layer, allows to run Windows applications (and a lot of games) on Unix-like operating systems. Supports DirectX to Vulkan translation in runtime with the addition of [[Wine#DXVK]], which improves performance in games which only support DirectX.
* [[Virtual machine]]s – can be used to install compatible operating systems (such as Windows). [[VirtualBox]] has good 3D support. As an extension of this, if you have compatible hardware you can consider VGA passthrough to a Windows KVM guest, keyword is [https://docs.kernel.org/driver-api/vfio.html "virtual function I/O" (VFIO)], or [[PCI passthrough via OVMF]].
* [https://steamcommunity.com/games/221410/announcements/detail/1696055855739350561 Proton/DXVK] – Fork of Wine designed for use in the proprietary {{Pkg|steam}} platform, enabling better support for games than Wine. See [[Steam#Proton Steam-Play]] for more information.
== Getting games ==

Just because games are available for Linux does not mean that they are native; they might be pre-packaged with Wine or DOSBox.

For list of games packaged for Arch in [[official repositories]] / the [[AUR]] see [[List of games]].

* {{App|Flathub|Central [[Flatpak]] repository, has small but growing game section.|https://flathub.org/apps/category/Game|{{Pkg|flatpak}}, {{Pkg|discover}}, {{Pkg|gnome-software}}}}
* {{App|[[Wikipedia:GOG.com|GOG.com]]|DRM-free game store.|https://www.gog.com|{{AUR|lgogdownloader}}, {{AUR|wyvern}}, {{AUR|minigalaxy}}}}
* {{App|[[Wikipedia:itch.io|itch.io]]|Indie game store.|https://itch.io|{{AUR|itch-setup-bin}}}}
* {{App|Legendary|A free and open-source replacement for the Epic Games Launcher.|https://github.com/derrod/legendary|{{AUR|legendary}}}}
* {{App|Heroic Games Launcher|A GUI for legendary, an open-source alternative for the Epic Games Launcher.|https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher|{{AUR|heroic-games-launcher-bin}}}}
* {{App|Rare|Another GUI for legendary, based on PyQt5.|https://github.com/Dummerle/Rare|{{AUR|rare}}}}
* {{App|[[Wikipedia:Lutris|Lutris]]|Open gaming platform for Linux. Gets games from GOG, Steam, Battle.net, Origin, Uplay and many other sources. Lutris utilizes various [https://lutris.net/runners runners] to launch the games with fully customizable configuration options.|https://lutris.net|{{Pkg|lutris}}}}
* {{App|[[Steam]]|Digital distribution and communications platform developed by Valve.|https://store.steampowered.com|{{Pkg|steam}}}}
* {{App|Athenaeum|A libre replacement to Steam.|https://gitlab.com/librebob/athenaeum|{{AUR|athenaeum-git}}}}
* {{App|Play.it|Automates the build of native packages. Also supports [[Wine]], [[DOSBox]] and ScummVM games.|https://www.dotslashplay.it/|{{AUR|play.it}}}}
* {{App|Bottles|Open-Source wine and proton prefix manager. Run windows software and games.|https://usebottles.com/|{{AUR|bottles}}}}

== Configuring games ==

Certain games or game types may need special configuration to run or to run as expected. For the most part, games will work right out of the box in Arch Linux with possibly better performance than on other distributions due to compile time optimizations. However, some special setups may require a bit of configuration or scripting to make games run as smoothly as desired.

=== Multi-screen setups ===

Running a multi-screen setup may lead to problems with fullscreen games. In such a case, [[#Starting games in a separate X server|running a second X server]] is one possible solution. Another solution may be found in the [[NVIDIA#Gaming using TwinView|NVIDIA article]] (may also apply to non-NVIDIA users).

=== Keyboard grabbing ===

Many games grab the keyboard, noticeably preventing you from switching windows (also known as alt-tabbing).

Some SDL games (e.g. Guacamelee) let you disable grabbing by pressing {{ic|Ctrl-g}}.

{{Note|SDL is known to sometimes not be able to grab the input system. In such a case, it may succeed in grabbing it after a few seconds of waiting.}}

=== Starting games in a separate X server ===

In some cases like those mentioned above, it may be necessary or desired to run a second X server. Running a second X server has multiple advantages such as better performance, the ability to "tab" out of your game by using {{ic|Ctrl+Alt+F7}}/{{ic|Ctrl+Alt+F8}}, no crashing your primary X session (which may have open work on) in case a game conflicts with the graphics driver. The new X server will be akin a remote access login for the ALSA, so your user need to be part of the {{ic|audio}} group to be able to hear any sound.

To start a second X server (using the free first person shooter game [https://www.xonotic.org/ Xonotic] as an example) you can simply do:
 $ xinit /usr/bin/xonotic-glx -- :1 vt$XDG_VTNR
This can further be spiced up by using a separate X configuration file:
 $ xinit /usr/bin/xonotic-glx -- :1 -xf86config xorg-game.conf vt$XDG_VTNR
A good reason to provide an alternative ''xorg.conf'' here may be that your primary configuration makes use of NVIDIA's Twinview which would render your 3D games like Xonotic in the middle of your multiscreen setup, spanned across all screens. This is undesirable, thus starting a second X with an alternative configuration where the second screen is disabled is advised. Please note, that the X configuration file location is relative to the {{ic|/etc/X11}} directory.

A game starting script making use of Openbox for your home directory or {{ic|/usr/local/bin}} may look like this:

{{hc|~/game.sh|<nowiki>
if [ $# -ge 1 ]; then
        game="$(which $1)"
        openbox="$(which openbox)"
        tmpgame="/tmp/tmpgame.sh"
        DISPLAY=:1.0
        echo -e "${openbox} &\n${game}" > ${tmpgame}
        echo "starting ${game}"
        xinit ${tmpgame} -- :1 -xf86config xorg-game.conf || exit 1
else
        echo "not a valid argument"
fi
</nowiki>}}

After making it [[executable]] you would be able to do:

 $ ~/game.sh xonotic-glx

{{Note|If you want to avoid loading configs from /etc/X11/xorg.conf.d, you should also use the -configdir option, pointing to an empty directory.}}

=== Adjusting mouse detections ===

For games that require exceptional amount of mouse skill, adjusting the [[mouse polling rate]] can help improve accuracy.

=== Binaural audio with OpenAL ===

For games using [[Wikipedia:OpenAL|OpenAL]], if you use headphones you may get much better positional audio using OpenAL's [[Wikipedia:Head-related transfer function|HRTF]] filters. To enable, run the following command:

 echo "hrtf = true" >> ~/.alsoftrc

Alternatively, install {{AUR|openal-hrtf}} from the AUR, and edit the options in /etc/openal/alsoftrc.conf

For Source games, the ingame setting `dsp_slow_cpu` must be set to `1` to enable HRTF, otherwise the game will enable its own processing instead. You will also either need to set up Steam to use native runtime, or link its copy of openal.so to your own local copy. For completeness, also use the following options:

 dsp_slow_cpu 1 # Disable in-game spatialiazation
 snd_spatialize_roundrobin 1 # Disable spatialization 1.0*100% of sounds
 dsp_enhance_stereo 0 # Disable DSP sound effects. You may want to leave this on, if you find it does not interfere with your perception of the sound effects.
 snd_pitchquality 1 # Use high quality sounds

=== Tuning PulseAudio ===

If you are using [[PulseAudio]], you may wish to tweak some default settings to make sure it is running optimally.

==== Enabling realtime priority and negative nice level ====

Pulseaudio is built to be run with realtime priority, being an audio daemon. However, because of security risks of it locking up the system, it is scheduled as a regular thread by default. To adjust this, first make sure you are in the {{ic|audio}} group. Then, uncomment and edit the following lines in {{ic|/etc/pulse/daemon.conf}}:

{{hc|1=/etc/pulse/daemon.conf|2=
high-priority = yes
nice-level = -11

realtime-scheduling = yes
realtime-priority = 5}}

and restart pulseaudio.

==== Using higher quality remixing for better sound ====

PulseAudio on Arch uses speex-float-1 by default to remix channels, which is considered a 'medium-low' quality remixing. If your system can handle the extra load, you may benefit from setting it to one of the following instead:

 resample-method = speex-float-10

==== Matching hardware buffers to Pulse's buffering ====

Matching the buffers can reduce stuttering and increase performance marginally. See [https://forums.linuxmint.com/viewtopic.php?f=42&t=44862 here] for more details.

=== Double check your CPU frequency scaling settings ===

If your system is currently configured to properly insert its own cpu frequency scaling driver, the system sets the default governor to Ondemand. By default, this governor only adjusts the clock if the system is utilizing 95% of its CPU, and then only for a very short period of time. This saves power and reduces heat, but has a noticeable impact on performance. You can instead only have the system downclock when it is idle, by tuning the system governor. To do so, see [[Cpufrequtils#Tuning the ondemand governor]]. Recent Intel CPU (SandyBridge +) use frequency scaling driver `intel_pstate` that does not work with ondemand governor. You can switch from "powersave" (default) to "performance", but the difference is minimal.

== Remote gaming ==

[[Wikipedia:Cloud gaming|Cloud gaming]] has gained a lot of popularity in the last few years, because of low client-side hardware requirements. The only important thing is stable internet connection (over the ethernet cable or 5 GHz WiFi recommended) with a minimum speed of 5–10 Mbit/s (depending on the video quality and framerate).

See [[Gamepad#Gamepad over network]] for using a gamepad over a network with services that do not normally support this.

{{Note|Most of the services that work in browser usually mean to be only compatible with {{AUR|google-chrome}}.}}

{| class="wikitable sortable" style="text-align: center;"
! Service
! class="unsortable" | Installer
! In browser client
! Use your own host
! Offers host renting
! Full desktop support
! Controller support
! class="unsortable" | Remarks
|-
| [https://dixper.gg/ Dixper] || {{-}} || {{Yes}} || {{Y|Windows-only}} || ? || ? || ? || {{-}}
|-
| [https://reemo.io/ Reemo] || {{-}} || {{Yes}} || {{Yes}} || {{Yes}} || {{Yes}} || {{Y|Windows-only}} || Linux installer are only available on Debian-Based Distributions and Fedora
|-
| [https://xbox.com/play Xbox Cloud] || {{AUR|xbox-cloud-gaming}} || {{Yes}} || {{No}} || {{No}} || {{No}} || {{Yes}} || You need Game Pass Ultimate to be able to use XCloud.
|-
| [[GeForce Now]] || {{-}} || {{Yes}} || {{No}} || {{No}} || {{Yes}} || {{Yes}} || You must have games on Steam, Epic Client or GOG to use this service. Not all games are available.
|-
| [https://moonlight-stream.org/ Moonlight] || {{AUR|moonlight-qt}} || {{No}} || {{Yes}} || {{No}} || {{Yes}} || {{Yes}} || This is only a client. Host machine must use either GeForce Experience (windows only) or [https://github.com/SunshineStream/Sunshine Sunshine] (multiplatform).
|-
| [https://parsec.app/ Parsec] || {{AUR|parsec-bin}} || {{Yes}} (experimental) || {{Y|Windows-only}} || {{No}} || {{Yes}} || {{Yes}} || Cloud hosting [https://support.parsecgaming.com/hc/en-us/articles/360031038112-Cloud-Computer-Update no longer available]
|-
| [https://github.com/mbroemme/vdi-stream-client VDI Stream Client] || {{AUR|vdi-stream-client}} || {{No}} || {{Y|Windows-only}} || {{No}} || {{Yes}} || {{No}} || VDI client with 3D GPU acceleration and built-in USB redirection
|-
| [https://playkey.net/ Playkey] || {{AUR|playkey-linux}} || ? || ? || ? || ? || ? || {{-}}
|-
| style="white-space:nowrap" | [https://www.playstation.com/en-gb/ps-now/ps-now-on-pc/ PlayStation Now] || Runs under [[Wine]] or [[Steam]]'s proton || {{No}} || {{No}} || {{-}} || {{No}} || {{Yes}} || Play PS4, PS3 and PS2 games on PC. Alternatively, you can use [[Video game platform emulators|emulators]].
|-
| style="white-space:nowrap" | [https://www.playstation.com/en-us/remote-play/ PlayStation Remote Play] || {{AUR|chiaki}} || {{No}} || {{Yes}} || {{-}} || {{Yes}} || {{Yes}} || Play games from your PS4 and/or PS5 on PC.
|-
| [https://rainway.com/ Rainway] || Coming in 2019 Q3 || {{Yes}} || {{Y|Windows-only}} || {{No}} || {{Yes}} || ? || {{-}}
|-
| [https://shadow.tech/ Shadow] || '''Stable:''' {{AUR|shadow-tech}} <br> '''Beta''': {{AUR|shadow-beta}} || {{No}} || {{No}} || {{Yes}} || {{Yes}} || {{Yes}} || Controller support is dependent on USB over IP, and currently AVC only as HEVC is not supported
|-
| [[Steam#Steam_Remote_Play|Steam Remote Play]] || Part of {{pkg|steam}} || {{No}} || {{Yes}} || {{No}} || {{No}} || {{Yes}} || {{-}}
|-
|-
| [https://stadia.google.com Stadia] || {{-}} || {{Yes}} || {{No}} || {{No}} || {{Yes}} || {{Yes}} || {{-}}
|-
| [https://vortex.gg/ Vortex] || {{-}} || {{Yes}} || {{No}} || {{-}} || {{No}} || ? || {{-}}
|-
| [[VNC]] || {{pkg|tigervnc}} or {{pkg|x11vnc}} || {{No}} || {{Yes}} || {{No}} || {{Yes}} || {{No}} || General purpose remote desktop protocol, but the latency should be low enough to use it for gaming over a LAN. See [[Gamepad#Gamepad over network]] for gamepad support.
|-
| [[xrdp]] || {{AUR|xrdp}} || {{No}} || {{Yes}} || {{No}} || {{Yes}} || {{No}} || Another general purpose remote desktop protocol, has both OpenGL and Vulkan support after configuring [[xrdp#Graphical_acceleration|graphical accleration]]. Recommended for gaming over a LAN. See [[Gamepad#Gamepad over network]] for gamepad support.
|-
| [[X11 forwarding]] || {{pkg|openssh}} || {{No}} || {{Yes}} || {{No}} || {{No}} || {{No}} || X forwarding over SSH with [[VirtualGL]] supports OpenGL and works for some but not all games. See [[Gamepad#Gamepad over network]] for gamepad support.
|}

== Improving performance ==

See also main article: [[Improving performance]]. For Wine programs, see [[Wine#Performance]].

=== Utilities ===

==== Gamemode ====

[[Gamemode]] is a Daemon/lib combo for Linux that allows games to request a set of optimisations be temporarily applied to the host OS. This can improve game performance.

=== ACO compiler ===

{{Note|The method shown below '''only''' works on AMD GPUs running the '''[[AMDGPU]]''' drivers.}}
See [[AMDGPU#ACO compiler]]

=== fsync patch ===

See [[Steam#fsync patch]].

=== Reducing DRI latency ===

Direct Rendering Infrastructure (DRI) Configuration Files apply for all DRI drivers including Mesa and Nouveau. You can change the DRI configuration systemwide in {{ic|/etc/drirc}} or per user in {{ic|$HOME/.drirc}}. If they do not exist, you have to create them first. Both files use the same syntax; documentation for these options can be found at https://dri.freedesktop.org/wiki/ConfigurationOptions/. To reduce input latency by disabling synchronization to vblank, add the following:

 <driconf>
    <device>
        <application name="Default">
            <option name="vblank_mode" value="0" />
        </application>
    </device>
 </driconf>

=== Improving frame rates and responsiveness with scheduling policies ===

Most games can benefit if given the correct scheduling policies for the kernel to prioritize the task. These policies should ideally be set per-thread by the application itself.

For programs which do not implement scheduling policies on their own, application known as {{Pkg|schedtool}}, and its associated daemon {{AUR|schedtoold}} can handle many of these tasks automatically.

To edit what programs relieve what policies, simply edit {{ic|/etc/schedtoold.conf}} and add the program followed by the ''schedtool'' arguments desired.

==== Policies ====

{{ic|SCHED_ISO}} (only implemented in BFS/MuQSSPDS schedulers found in -pf and -ck [[kernel]]s) – will not only allow the process to use a maximum of 80 percent of the CPU, but will attempt to reduce latency and stuttering wherever possible. Most if not all games will benefit from this:

 bit.trip.runner -I

{{ic|SCHED_FIFO}} provides an alternative, that can even work better. You should test to see if your applications run more smoothly with {{ic|SCHED_FIFO}}, in which case by all means use it instead. Be warned though, as {{ic|SCHED_FIFO}} runs the risk of starving the system! Use this in cases where -I is used below:

 bit.trip.runner -F -p 15

==== Nice levels ====

Secondly, the nice level sets which tasks are processed first, in ascending order. A nice level of -4 is recommended for most multimedia tasks, including games:

 bit.trip.runner -n -4

==== Core affinity ====

There is some confusion in development as to whether the driver should be multithreading, or the program. Allowing both the driver and program to simultaneously multithread can result in significant performance reductions, such as framerate loss and increased risk of crashes. Examples of this include a number of modern games, and any Wine program which is running with [[Wikipedia:OpenGL Shading Language|GLSL]] enabled. To select a single core and allow only the driver to handle this process, simply use the {{ic|-a 0x''#''}} flag, where ''#'' is the core number, e.g.:

 bit.trip.runner -a 0x1

uses first core.

Some CPUs are hyperthreaded and have only 2 or 4 cores but show up as 4 or 8, and are best accounted for:

 bit.trip.runner -a 0x5

which use virtual cores 0101, or 1 and 3.

==== General case ====

For most games which require high framerates and low latency, usage of all of these flags seems to work best. Affinity should be checked per-program, however, as most native games can understand the correct usage.
For a general case:

 bit.trip.runner -I -n -4
 Amnesia.bin64 -I -n -4
 hl2.exe -I -n -4 -a 0x1 #Wine with GLSL enabled

etc.

==== Optimus, and other helping programs ====

As a general rule, any other process which the game requires to operate should be reniced to a level above that of the game itself. Strangely, Wine has a problem known as ''reverse scheduling'', it can often have benefits when the more important processes are set to a higher nice level. Wineserver also seems unconditionally to benefit from {{ic|SCHED_FIFO}}, since it rarely consumes the whole CPU and needs higher prioritization when possible.

 optirun -I -n -5
 wineserver -F -p 20 -n 19
 steam.exe -I -n -5

== Peripherals ==

=== Mouse ===

You might want to set your [[mouse acceleration]] to control your mouse more accurately.

If your mouse have more than 3 buttons, you might want to see [[Mouse buttons]].

If you are using a gaming mouse (especially Logitech and Steelseries), you may want configure your mouse such as DPI, LED... using {{Pkg|piper}}. See [https://github.com/libratbag/libratbag/tree/master/data/devices this page] for a full list of supported devices. Or {{Pkg|solaar}} for logitech devices only

=== LEDs ===

You can change the motherboard and ram lighting with {{AUR|openrgb}}

== See also ==

* [https://www.reddit.com/r/linux_gaming/] - Forum on reddit.com with gaming on linux as its topic, subpages: [https://www.reddit.com/r/linux_gaming/wiki/index Wiki], [https://www.reddit.com/r/linux_gaming/wiki/faq FAQ].

Gaming performance on Linux varies from game to game, and is ''very'' hardware dependent. Some of your games might run better than on Windows, some may run worse. But even with the same game where you would get a performance gain with one GPU you might take a performance hit with another. So it's impossible to say how your performance will compare to Windows.

BUT: Generally, you should be expecting about the same performance (±5%) as on Windows. If your experience is much worse, there is probably an issue. Most Linux distributions aren't properly configured for gaming ''at all''.

The good thing is, that this is very easy to change. Your performance should be OK if you do all ''major tweaks''.

You don't have to go further if that is good enough for you and you don't want to bother reading the rest of the article. Everything else isn't as important, only situational, or might come with drawbacks. But if you still have issues, you should definitely read it. There is much that can be done to get an additional bit of performance, less input lag, less FPS drops, and significantly more performance on severely under-powered systems.

== Major tweaks ==
These are the important tweaks, they will give a ''huge'' boost for all games. You should do all these tweaks, otherwise you will not have a good gaming experience:
*[[Compositor|Disable composition]].
**You don't need to do this if you use Gnome (the default on Pop!_OS)
**You only need to do this [[Misc#Test whether you use X11 or Wayland|if you use X11]].
*Use [[Gamemode|GameMode]]
*[https://github.com/lutris/docs/blob/master/InstallingDrivers.md Install the correct drivers]
**Do '''NOT''' download anything manually. Use the link above.
**If you have an old Nvidia card that is not supported by the current driver, look at the Nvidia specific section.
**If you don't have an Nvidia GPU, the correct drivers are probably already preinstalled. However, you won't do anything wrong if you use the guide above. On some distributions this will also give you a more recent version.
*[[Misc#Watching the temperature|Look at your thermals]], and if they are too high, adapt the fan speed.
**There are tools to do this inside Linux, but it's probably easier to do it in the BIOS.
==AMD/Nvidia specific==
These tweaks are depending on what type of '''GPU''' you have. Your CPU type is not important.

===AMD ===
It's probably worth doing, but if everything is fine and you think this is too complicated, you can ignore this section. However, they can make quite a difference in performance, depending on the situation.
*Set your GPU to high performance.
**The default (automatic) is probably fine for most games, but it might make a big difference for some games. For example, if a game has a capped frame rate, the GPU might not clock to the highest speed which will result in sub optimal performance.
**You can use [[CoreCtrl]] to add performance profiles for your games, set fan speeds, and overclock/undervolt. You can also set CPU performance here, it will overrule the GameMode settings.
**Alternatively, you can also use gamemode, however this is probably a bit more complicated.

*There are two Vulkan drivers available for AMD GPUs: amdvlk and vulkan-radeon (RADV, MESA). The vulkan-radeon (RADV, MESA) one is the open-source version and is preferable due to better performance in most cases. It should be the one that is installed as default, so usually you would not have to do anything.
** If you experience sub-par performance, you can check which driver you are using. On Arch and Ubuntu based distros (for example Manjaro, or Pop!_OS), you can check which Vulkan implementations are installed on the system with this [[Terminal|command]]: <code>ls /usr/share/vulkan/icd.d/</code>. It should say <code>radeon_icd.x86_64.json</code>. If you have the 32bit version installed, it will (also) say <code>radeon_icd.i686.json</code>. There might be others (intel for example), just be sure that there is not <code>amd_icd64.json</code>. The system will use amdvlk by default if both are installed
**Do '''NOT''' download stuff from their website. This is the ''"official"'' way, offered by AMD, but it's also the worst possible thing you can do.
===Nvidia===
{{Needs work|Problem=Not complete, and most is just copied from a reddit post. You may find better information somewhere else, I really don't know as I don't have an Nvidia GPU. If you have experience with Nvidia, and you know how to simplify this guide, please do so, maybe split the tweaks in important/less important or so}}
*Use DKMS. DKMS is a prerequisite for using custom kernels like Zen, Xanmod or tkg with the Nvidia driver. It also lets you update to newer kernel versions without waiting for an Nvidia driver update. <ref>https://wiki.archlinux.org/title/Dynamic_Kernel_Module_Support</ref> Every distro that has proprietary Nvidia driver support offers a DKMS version.
*The [https://wiki.archlinux.org/title/NVIDIA/Tips_and_tricks#Overclocking_and_cooling Arch Wiki] is the best place to start. Enable coolbits as the link explains. Good is, setting the coolbits value to 28 on anything currently supported (post-Fermi) to enable full control over the GPU (at least, as much control as you're allowed to be given).
* Use [https://gitlab.com/leinardi/gwe GreenWithEnvy] for overclocking, setting power limits (raise or lower) and fan curves. It's the closest alternative we have to MSI Afterburner.
*Make sure to use a Proton version of 6.3, Experimental, Proton-6.21-GE-2 or later for Proton-GE and Proton-tkg/wine-tkg-git of 6.17 or greater (or build your own) for DLSS support. For Steam, you need to put <code>PROTON_HIDE_NVIDIA_GPU=0 PROTON_ENABLE_NVAPI=1 %command%</code> in your launch options (side note: there should only ever be one <code>%command%</code>).
*For non-Steam games, use the latest lutris or wine-ge-custom build, '''with [[Lutris]]''', and make sure to toggle on DLSS support in the Configure -> Runner options menu. For non-Steam games, you also need a dxvk.conf file with <code>dxgi.nvapiHack = False</code> in it. You can just create one (mine is <code>~/Documents/dxvk.conf</code>) and set <code>DXVK_CONFIG_FILE=/path/to/dxvk.conf</code> in your <code>/etc/environment</code>.
*For Arch-based distributions, use TKG's <code>nvidia-all</code> [https://github.com/frogging-family/nvidia-all repo],  with <code>_dkms=""</code> set to true in <code>customization.cfg</code>.<ref>https://www.reddit.com/r/linux_gaming/comments/sc9dv7/need_help_writing_wiki_article_about_how_to_tweak/hu54e1g/?context=3</ref>
*If you have an old GPU, it might not be supported by the current driver. In this case you have to install an old one. You can use their website to determine which version you need.
**''TODO: How to actually install them? On Arch you can use the AUR, but I don't know about any other distribution. Maybe actually download it from their website?''

== Minor tweaks ==
These will not make a difference as big as the major tweaks. It might give you some FPS, or lower your input lag, but you don't have to do these tweaks if you think this is too complicated.

*Enable <code>Fsync</code>. You need to use a compatible Kernel (like <code>zen</code>, <code>tkg-pds</code>, or <code>Xanmod</code>; '''kernel above 5.16 is compatible with F-sync out of the box'''), and enable it in Lutris: Right click the game -> <code>Configure</code> -> <code>Runner options</code> -> Enable <code>Fsync</code>
**If you can't or don't want to install a kernel that is Fsync compatible, you can also enable Esync. The performance boost is usually not as large, though.
*Install an optimized kernel like <code>linux-zen</code>, <code>linux-tkg-pds</code>, or <code>Xanmod</code>. This will also prevent the system from becoming unresponsive when under heavy CPU load.
**<code>linux-zen</code> and <code>linux-tkg</code> kernels are for Arch-based distros, <code>Xanmod</code> for Ubuntu-based distros. However, they should also work with other distributions, but you should always make sure to have a functioning way to update them. Don't do it if you don't know what to do if things go wrong.
**<code>linux-tkg-pds</code> ([https://github.com/Frogging-Family/linux-tkg linux-tkg] with PDS scheduler) seems to perform better than <code>zen</code><ref>https://www.youtube.com/watch?v=qNzd57b0h08</ref>, and has lower input lag (this is definitely noticeable in competitive shooters). Some people recommend using <code>linux-tkg-bmq</code> (linux-tkg with BMQ scheduler) to get more consistent frame times. You can get it from [https://aur.chaotic.cx/ chaotic AUR] ([https://archlinux.pkgs.org/rolling/chaotic-aur-x86_64/ list of available packages]). To get all benefits you have to compile it yourself, though.
**You don't need to fear that you might destroy your system. Installing a new kernel does not remove the old one. You can select the kernel you want to boot in GRUB. If things get messed up, just select your old kernel and you're fine.
==Optional==
These tweaks come with some drawback. You might want to apply them, but maybe only for some games.
*If you don't get enough FPS, use [[FSR - FidelityFX Super Resolution|FSR]]. This might ''dramatically'' improve your framerate in GPU limited games but will definitely hurt the image quality.
*[[Environment variables]]:
**<code>DXVK_ASYNC=1</code>: Display frames even if they are not completely rendered. This will reduce stuttering a lot, but it could theoretically trigger anti cheat, even though this never actually happened. Your DXVK version needs to be compatible or patched to use it. Proton-GE comes with a compatible version. For Non-Steam games you can't use Proton, and need a [https://github.com/Sporif/dxvk-async/releases patched DXVK-Version]. For Lutris you need to copy it to <code>~/.local/share/lutris/runtime/dxvk/</code>, and manually select the version inside Lutris (just type in the name manually).

*Use [https://github.com/ishitatsuyuki/LatencyFleX LatencyFleX] (warning: may trigger anticheat): Similar to NVIDIA Reflex (but works with AMD and Nvidia). Lowers input lag. Manually frame capping your game (so that your GPU never exceeds 80%) should be equally good. (If you use MangoHud to do this, this might add additional input lag!)
*You might want to have a look at the extensive [https://wiki.archlinux.org/title/Gaming#Improving_performance Arch Wiki page].

=== Only AMD ===

* To lower your input lag even more (after doing all major and minor tweaks), you can disable page flipping (this will result in more tearing).
** This only works on X11, but if you care ''that much'' about input lag, you shouldn't use Wayland anyways.
**Create the file <code>/etc/X11/xorg.conf.d/20-amdgpu.conf</code> with content: <syntaxhighlight lang="bash">
Section "Device"
        Identifier "AMD"
        Driver "amdgpu"
        Option "TearFree" "false"
        Option "EnablePageFlip" "false"
EndSection</syntaxhighlight>

*[[Environment variables]]:
**<code>RADV_FORCE_VRS=2x2</code>: Variable rate shading. This will improve performance, but reduce quality of shadows. Alternative values: <code>2x1</code> or <code>1x2</code> to use VRS only in one (x or y) direction<ref>https://www.basnieuwenhuizen.nl/a-first-foray-into-rendering-less/</ref>. (TODO: which is which?)
**<code>RADV_PERFTEST=sam</code>: Force enable resizable bar/smart access memory. Might improve, but might as well reduce performance.
**<code>RADV_DEBUG=novrsflatshading</code>: disable VRS for [https://graphics.fandom.com/wiki/Flat_shading flat shading] (only on GFX10.3+)
**<code>RADV_PERFTEST=nggc</code>: enable NGGC. Can slightly improve performance on RX6000 series, but may reduce performance for other cards<ref>https://www.phoronix.com/scan.php?page=article&item=radeon-radv-nggc</ref>.
**You may find more here: https://docs.mesa3d.org/envvars.html
==Differences between Desktop Environments, and X11/Wayland==
{{Needs work|Problem=Might be outdated, and there is missing data for various desktop environments and window managers.}}

Desktop Environments may affect your performance. Your overall performance may be bad, or you might have good FPS, but high input lag.

Regarding input lag: It should be noted that we are talking about milliseconds here (the best value is 20ms, the worst is 90ms). If you are not susceptible to this (for example because you only play slow games), you may not even notice. But generally speaking, the game will feel more responsive if your input lag is low. You might also notice stuttering when the frame times are fluctuating.

=== X11 ===
X11 is currently the best choice if you want minimal input lag.<ref name=":0" />

Generally you should be fine if you can disable [[Compositor|composition]]. This is not possible in Gnome, but Gnome uses unredirection (the same thing, Windows does) instead, which is almost as good.

KDE Plasma (X11) with no composition appears to be a good choice. Gnome is also ok.<ref>https://www.reddit.com/r/linux_gaming/comments/cii545/linux_input_lag_analysis_v26des_windows_10_1809/</ref> You should avoid Cinnamon and Pantheon. Cinnamon requires you to completely disable composition, Pantheon has no option to disable composition at all.

=== Wayland ===
The best way to achieve low input latency on a Wayland compositor is to enable Freesync. Currently, Sway and KDE support Freesync for AMD GPU's only. Other wlroots compositors may also support Freesync.

If you cannot enable Freesync, then you will effectively always have Vsync on, regardless of your in game settings. Vsync has seen very wide use across PC's and consoles and a majority of games ship with it enabled by default. If you already play games with Vsync enabled then you shouldn't notice much or any additional latency gaming on Wayland.

Enabling Vsync in game can cause significant additional latency if you are using a Wayland compositor without Freesync. The compositors Vsync implementation can interact with the games Vsync implementation in unpredictable ways. In general there should be no need for in game Vsync if you are using a Wayland compositor, as either Wayland or Freesync will control synchronization. Bear in mind that most games enable Vsync by default.

If you are using KDE and you have FreeSync enabled, the performance and input lag should be close to KDE X11 with composition disabled.<ref name=":0">https://zamundaaa.github.io/wayland/2021/12/14/about-gaming-on-wayland.html</ref> The input lag will increase by the "half frame" that is displayed with tearing. It's basically the question whether or not you want to wait for the frame to complete before displaying it.<ref name=":1" />

Gnome will introduce greater input lag (comparable to composition on KDE, but without the FPS problems).<ref name=":1">https://www.reddit.com/r/linux_gaming/comments/rghr60/about_gaming_and_latency_on_wayland/hpox61p/?context=3</ref>

==Troubleshooting==
*Limiting FPS with MangoHud can introduce input lag. (I assume it adds one frame delay. It might as well be a bug, and only happen in specific scenarios. If you know more, why this happens, if, or how it can be avoided, please add information here.)
*You might have a distribution that uses PulseAudio instead of Pipewire. Pulseaudio introduces heavy audio delay. You should [[Common tweaks#Use Pipewire instead of PulseAudio|switch to Pipewire]].

==References and notes ==
<references />


[[Misc#Test whether you use X11|If you use a DE with X11]], then you probably have a compositor. The compositor does nice things like window shadows, animations, transparency, blur, or other effects. But it also reduces fps, adds input lag, and introduces stuttering. That's why you should disable it when running a game.

==Disabling composition for your games==

Disabling composition will dramatically improve performance, input lag, and ''"smoothness"''. Here is how to do it:

===Gnome===
This is the default DE on Pop!_OS.

You don't have to do anything. Gnome uses unredirection (the same thing Windows does), which is almost as good as disabling compositon. Disabling composition in Gnome is not possible.

===KDE===
There are many options to disable composition:

* You can use [https://store.kde.org/p/1502826/ Autocomposer]. This should make it unnecessary to do anything of the following.

*For Lutris:
**To disable it for a single game: Right click the game -> <code>Configure</code> -> <code>System options</code> -> <code>Disable desktop effects</code>.
**To disable it for all games: Click <code>...</code> in the top right corner -> <code>Preferences</code> -> <code>Global options</code> -> <code>Disable desktop effects</code>
*You can manually disable composition with <code>shift</code> + <code>alt</code> + <code>f12</code> before launching a game. The same combination re-enables it.
*If you want to use a terminal command (for example for automation, launch options for Steam, [[Gamemode]] etc):
** disable: <code>qdbus org.kde.KWin /Compositor suspend</code>
** enable: <code>qdbus org.kde.KWin /Compositor resume</code>

===Xfce===
*Disable composition with <code>$ xfconf-query -c xfwm4 -p /general/use_compositing -s false</code><ref>https://wiki.archlinux.org/title/Xfwm#Configuration</ref>
*Enable it again with <code>$ xfconf-query -c xfwm4 -p /general/use_compositing -s true</code>
* In Steam, you can automate disabling/enabling with the launch option: <code>xfconf-query -c xfwm4 -p /general/use_compositing -s false; %command%; xfconf-query -c xfwm4 -p /general/use_compositing -s true</code><ref>https://www.reddit.com/r/GlobalOffensiveLinux/comments/6b3cs5/comment/dhjw7z7/?context=3</ref>

=== Mate ===

* Disable composition: <code>gsettings set org.mate.Marco.general compositing-manager false</code><ref>https://wiki.archlinux.org/title/MATE#Disabling_compositing</ref>
* Enable composition: <code>gsettings set org.mate.Marco.general compositing-manager true</code>

===Cinnamon ===
Unfortunately, you have to disable composition completely. This might lead to visual degradation in desktop mode (no effects, no shadows, no transparency, no window previews, more tearing), but all other options yield bad gaming performance. If you want a DE that looks a bit like Windows, you might want to have a look at KDE Plasma instead.

To disable it: <code>System Settings</code> -> <code>General</code> -> <code>Disable compositing</code>

=== Pantheon ===
Unfortunately it appears to not support disabling composition.<ref>https://elementaryos.stackexchange.com/questions/4483/how-can-i-disable-composite-and-effects-in-elementary-os</ref>

== References and notes ==
<references />


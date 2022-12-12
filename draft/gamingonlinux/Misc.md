Various stuff that doesn't (yet) deserve an own article but might be useful.

== Watching the temperature ==
You can use <code>lm_sensors</code>. Before running it for the first time, run <code>sudo sensors-detect</code>.

After that, type <code>sensors</code> to see your temperatures. If you want to monitor them for a longer time, type <code>watch sensors</code>.

== Changing Mouse settings (DPI, lift of distance, etc) ==
Settings are usually stored in the mouse, so it is sufficient to boot Windows once, and change stuff there. You can also boot a VM (with KVM) and pass through the mouse. After that, the settings should be kept in Linux.

== Audio stuff ==

=== Noise Cancelling ===
You can use [https://github.com/wwmm/easyeffects EasyEffects] or [https://github.com/noisetorch/NoiseTorch NoiseTorch].

=== Equalizer and more ===
EasyEffects also has various other audio processing options, like crystalizer, noise gate, equalizer, filter, and much more. NoiseTorch can only cancel noise, but also has the option to tweak how aggressive it cancels noise.

=== Patching Audio ===
If you want to have a patchbay to route your audio to various destinations, [https://gitlab.freedesktop.org/rncbc/qpwgraph qpwgraph] or [https://gitlab.freedesktop.org/pipewire/helvum Helvum] might be what you're looking for.

== Make the game look good ==

=== Downsampling ===
You can use [[Gamescope]].

=== Post Processing ===
You can use [https://github.com/DadSchoorse/vkBasalt vkBasalt] for additional rendering like anti aliasing or reshade (you might want to use [[reshade]] instead)
==Using GitHub/GitLab==
You might find yourself in the situation where you want to download something from GitHub or GitLab. Don't do it, as long as it's not absolutely necessary. This is usually a bad idea. Try again to find a better solution, for example, read the description about how to install it, there might be a package for your distribution, a ppa (for Pop!_OS, Ubuntu, etc), an AUR package (for Garuda, Manjaro, Arch, etc.), or something similar for your distribution. Or post in a forum, and try to get help there. But here is how to do it:
#Install git. If you're on Pop!_OS or other Ubuntu/Debian-based distributions: <code>sudo apt install git</code>
#On GitLab there is a button called ''&quot;Clone&quot;'', on GitHub it's called ''&quot;Code&quot;''. Click it. You will see an URL like this: <code><nowiki>https://gitlab.com/some/stuff</nowiki></code>. Copy it (for example by clicking the button right next to it).
#Open a terminal, and navigate to the folder where you want your stuff. For example, by typing <code>cd repos</code> if you have a folder <code>repos</code> in your home folder.
#Type <code>git clone</code> (and type a space). Then paste the URL by pressing <code>ctrl</code> + <code>shift</code> + <code>v</code>. Then press <code>Enter</code>.
#Follow the instructions in the readme.

== Using Checksums ==
When downloading a file, you might have seen something like <code>sha512: 497907d020870e564b814bb6c4f7eef2f3abdf5d0159ccbd96501a26cef155a8d771a420a16c9348525fa4ce7de3c137ad5ff15a013c84f327edbdea6495d86b  easyanticheat_x64.so</code>

This is a checksum, or more precise: An <code>sha512</code> checksum for the file <code>easyanticheat_x64.so</code>. This number is for verifying that you have the correct file, and not something that is manipulated or inaccurately transmitted.

'''Usage''': Download file, open [[terminal]], and <code>cd Downloads</code>.

Then you execute <code>sha512sum easyanticheat_x64.so</code>. The number you see there, should be ''exactly'' the same.

Btw: <code>sha512</code> is better than <code>sha256</code>, and ''especially'' better than <code>md5</code>. <code>md5</code> is trash, don't use it.

== Game Streaming ==
You can use [https://github.com/loki-47-6F-64/sunshine sunshine] to stream games from your computer to a client running [https://github.com/moonlight-stream moonlight]

== RGB ==
You can use [https://gitlab.com/CalcProgrammer1/OpenRGB OpenRGB].

== Razer control driver ==
For razer hardware, you can use this driver: https://github.com/openrazer/openrazer

== Logitech control software ==
Solaar is a Linux device manager for Logitech devices. You can do stuff like changing DPI, or button mappings, etc. https://github.com/pwr-Solaar/Solaar

== Suspend/resume of applications (games, an others) ==
You can use [https://github.com/Merrit/nyrna nyrna]. Unortunately it doesn't (yet) "survive" reboots.

== Test whether you use X11 or Wayland ==
Open a [[terminal]] and input <code>echo $XDG_SESSION_TYPE</code>. If it says <code>x11</code>, then you use X11. If it says <code>wayland</code>, you use wayland.

== Disable swapping for a game ==
You can do it like [https://www.reddit.com/r/linux_gaming/comments/u02y88/psa_disable_swap_for_games_and_dont_submit_bogus/ this].

== Simultaneously play two different games on the same device ==
https://www.reddit.com/r/tuxedocomputers/comments/ucdvj7/finally_did_it_two_different_users_playing/


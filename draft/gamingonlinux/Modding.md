 
Game mods modify games in some way. A good source for mods is https://www.nexusmods.com. Sometimes they work in the same way as on Windows, but that's not always the case. [[Reshade]] is an example for a modding tool. If you're using Steam, [[Steam#Steam Tinker Launch|Steam Tinker Launch]] may make your life a lot easier.

== Mod Manager ==
Mod managers that are not native will not set dll overrides. If the installed mod uses dlls, you have to [[Installing dlls#DLL overrides|set the overrides manually]].

=== Install mod managers with Wine ===
You can try installing mod Managers from [[Lutris]], if there is an install script. For example there are scripts (for older versions of) Vortex and NMM.

Otherwise, you can try installing them in the same wine prefix. You could do this for example in the following way:

* Copy the executable into the wine prefix of your game: <code>~/Games/<your_game>/drive_c/users/<your_name>/Downloads/</code>
*Run it in the same prefix as your game:
** Lutris: Click your game, then click on the arrow next to the wine bottle on the bottom of the window. Click <code>Run EXE inside Wine prefix</code>. Locate the exe, and run it.
**Steam: todo
**Heroic: todo
* If it works, you can locate the executable of the installed mod manager, and run it in this way. Otherwise, you can also create a new "game" in the same wine prefix and select the executable there. TODO: describe how.

=== Install mod managers in a VM ===
If a mod manager is not working well with wine, you can install Windows in VirtualBox, share your game folder with the VM, and install the mod manager inside the VM. You need to install the guest additions for it to work. The folder will be mounted as network drive Z. This will not work with every mod manager and every mod. For example it will not work with MO2 (however, MO2 is working in Wine<ref>https://github.com/Modorganizer2/modorganizer/issues/372</ref>).

If you want to mod a Linux native game, you can try creating a fake .exe in order for the mod manager to detect the game.

In more detail:

# Install the game on Linux, for example with Lutris, Heroic, or Steam.
# Install Windows in a VM
# Share the game folder with the Windows VM
# Install a mod manager in the Windows VM
# Use the mod manager to install a mod
# Play the game that is now modded (on Linux, without VM)
Optional: Disable internet access for the VM, and enable drag/drop to copy files easily to the VM. This way, Windows can not send telemetry data, or do unnecessary updates that just take space and processing time. You might even use older (and lighter) versions like Windows 7 if the mod manager is compatible. In this case, you will have to manually download mods, though.

== Manual Installation ==

=== Installing dlls ===
In many cases (for example reshade, specialK) you just need one dll in your game folder. Just download the exe, extract it, and [[Installing dlls#Manual|manually install the dll]].

You might have to rename it, for example to

* <code>d3d9.dll</code> if your game uses Directx9 (this is more likely for older games)
* <code>dxgi.dll</code> if your game uses Directx11 (this is more likely for newer games)

or something like that.

Also note that you should use a dll that has the architecture of your game, so if the game is 32 bit, you might need to choose another dll than if your game is 64 bit (often indicated by a 32 or a 64 in the dll filename).

=== Path names ===
Linux paths are case sensitive, while Windows paths are not. This leads to mod developers using different folder names when referring to the same folder, for example ''folderName'' and ''Foldername''. If your mod doesn't work, this might be the issue, and you can try changing the names so that they are consistent. You can also use ext4 with [https://www.collabora.com/news-and-blog/blog/2020/08/27/using-the-linux-kernel-case-insensitive-feature-in-ext4/ case folding].

== Trainer ==
{{Needs work|Problem=I didn't test any of these, and just copied some links from answers to reddit posts asking about this kind of stuff. Maybe some are redundant or not working well. Please edit this if you have any idea what these tools do}}
*[https://github.com/leaty/tuxtrain tuxtrain]
* [https://github.com/korcankaraokcu/PINCE PINCE]
* [https://github.com/scanmem/scanmem scanmem]
* [https://linuxhint.com/use-gameconqueror-cheat-engine-linux/ gameconqueror]
* [https://github.com/evg-zhabotinsky/libspeedhack libspeedhack]

== Linux native modding tools ==
There are some game specific Linux native modding tools, you may find a list [[Game specific modding tools|here]].

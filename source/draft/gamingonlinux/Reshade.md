 
Reshade let's you apply extra shaders. While it's theoretically possible to do this with vkBasalt, it's not yet fully working. You might also want to use some mods that are written for reshade.

==How to install==

===Automatic===
You can use [https://github.com/kevinlekiller/reshade-steam-proton/blob/main/reshade-linux.sh this script]. Note, that executing external scripts is a security risk. You should always read and understand the content of the script before executing it.

===Manual<ref>https://www.reddit.com/r/linux_gaming/comments/b2hi3g/reshade_working_in_wine_43/</ref>===
{{Needs work|Problem=dll name for dx12 is missing}}
*Get the architecture of your application. If you don't know it, run <code>file /path/to/your/game.exe</code>. The output will either contain '''x86-64''' (64 bit) or '''80386''' (32 bit).
*Install d3dcompiler_47 (for example with [[Installing dlls#With winetricks or protontricks|winetricks or protontricks]]).
*Download the latest version of Reshade: https://reshade.me/ (alternatively download this older version, it should work: https://reshade.me/downloads/ReShade_Setup_4.9.1.exe)
*Move it to some folder, and extract with 7zip:
**<code>7z e ReShade_Setup_x.y.z.exe</code> (modify x y and z according to the version you downloaded, for example <code>7z e ReShade_Setup_4.9.1.exe</code> for Reshade version 4.9.1)
**Take <code>ReShade64.dll</code> or <code>ReShade32.dll</code> based on whether your game is 32 or 64 bit, and rename it to
***<code>d3d9.dll</code> if your game uses Directx9 (this is more likely for older games)
***<code>dxgi.dll</code> if your game uses Directx11 (this is more likely for newer games)
*Set [[Modding#DLL overrides|dll override]] in winecfg, for example with Lutris:
**Open Lutris, click your game, on the bottom, click the up-arrow right next to the wine bottle icon, click <code>Wine configuration</code>, click <code>Libraries</code>, insert the name of the dll (without the .dll) in the text box under <code>New override for library</code>:
***Depending on whether your game uses DX9 or DX11:
****<code>d3d9</code> for DX9
****<code>dxgi</code> for DX11
***select it in the list, click <code>Edit</code> and select <code>native (Windows)</code>
*Get the shaders and textures: <code>git clone <nowiki>https://github.com/crosire/reshade-shaders.git</nowiki></code> and copy the folders <code>Shaders</code> and <code>Textures</code> into the folder where your game executable is in.
* Run your application
*Open Reshade (by pressing <code>home</code> or <code>Pos1</code>)
*Open settings tab, and add the path <code>./Shaders</code> for shaders and <code>./Textures</code> for textures.

== References and notes ==
<references />

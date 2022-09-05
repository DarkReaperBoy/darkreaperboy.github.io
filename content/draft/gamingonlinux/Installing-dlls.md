== With winetricks or protontricks ==
Open [[Winetricks|Winetricks or Protontricks]] -> select default wineprefix -> install dll -> select the dll you want to install, click ok.

== Manual ==
Download the dll. You can either download it from some website, or you can download an exe that contains it. If you downloaded an exe, extract the dll with 7zip: <code>7z e some_program.exe</code>

Copy the dll in the game folder, and set a dll override for it.

===DLL overrides===
More info on [https://wiki.winehq.org/Wine_User%27s_Guide#DLL_Overrides winehq].

The game can either use ''native'' dlls that come with the game, or use ''builtin'' dlls that come with wine. It (sometimes?/usually?) uses only the ''builtin'' dlls.

On Windows, the game would do it the other way around, and first use ''all'' dlls in the game directory, and only if the dll is not there, look somewhere else.

Now if you put a different dll from a mod inside the game directory, this will not (not always?) work.

That's why you have to tell wine, that it should use the dll from the mod.
====Example====
For example, if you want to tell wine to use the ''d3dcompiler_47.dll'' that's in your game folder, and only use the builtin dll if it can't find any dll in the game folder, you would do the following:

Open Lutris, click your game, on the bottom, click the up-arrow right next to the wine bottle icon, click <code>Wine configuration</code>, click <code>Libraries</code>, and
*insert the name of the dll (without the .dll) <code>d3dcompiler_47</code> in the text box under <code>New override for library</code>.
*select it in the list, click <code>Edit</code> and select <code>native, then builtin</code>
Alternatively, you could also set <code>WINEDLLOVERRIDES="d3dcompiler_47=n,b"</code> as an [[Environment variables|environment variable]].


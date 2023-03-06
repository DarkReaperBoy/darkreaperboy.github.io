# Unity Porting - Unofficial Porting
This is a document in building, I aim to make it easy to follow but it is not in that state right now.


1. We look at the contents of the Plugins directory (not Managed). If there are a lot of * Native * .dlls, we start to panic - because we have to look for all this in the form of .so. We do not pay attention to the * Managed * .dll files - some game / plugin developers for some reason shove mono-bytecode into native places - all this garbage can be deleted.
2. We determine the version of the engine: we look at the beginning of the mainData file, or any other in * _Data
Linux support has appeared since version 4.0.0.
3. We slip the Unity player and Mono from the correct version of the engine. I'm here for the occasioncollected a collection of these... Alternatively, Padarokcollects too и Hryundelyok... There is alsoscript, which downloads the players of the required version.
4. 
    a. Rename the players according to what is written in the name of the * _Data directory, leaving .x86 and .x86_64 at the end. Those. if we have a SuperPuperGame_Data directory, then the players will be SuperPuperGame.x86 and SuperPuperGame.x86_64, respectively. (the names themselves are not important in 99% of cases, the only important thing is the correspondence between the player name and the _Data directory)
    b. * _Data / Mono is simply replaced with the corresponding one from the Linux build. Inside should be the x86 and x86_64 directories (and possibly etc).
    c. In * _Data / Plugins, we throw the x86 and x86_64 directories with the ScreenSelector.so file from the Linux assembly.
5. Start the player with the key
```sh
./SuperPuperGame.x86 -logfile out.log
```

and look at the results.
6. We are looking for the missing native plugins and place them accordingly

About Steamworks: <br>
I came across 3 options for interacting with Steam:<br><br>
a) The project "Steamworks.NET" (github).
Distinctive features: the presence of CSteamworks.dll files in * _Data / Plugins - sometimes 32 and 64 bits.
It is the most convenient option. We just download the desired release from the github, pull out libCSteamworks.so and put it in Plugins.<br>
b) The project "Ludosity's Steamworks Wrapper" (github, website).
Distinctive features: the presence of files SteamworksManaged.dll, SteamworksNative.dll -happens only under 32 bits!<br>
Actions are similar to the previous point, only the result will be a 32-bit only game.
c) The game developer himself implements the interfaces for accessing the stim.
The most enchanting option, because you may need to just slip the medicine in the form of libsteam_api.so, and implement a native pad before it.<br>

Convert the picture for the screen mode selection dialog (if it exists in principle) - in Shin versions this is the file `_Data / ScreenSelector.bmp`, Linux needs `_Data / ScreenSelector.png`... Therefore,

```sh
convert ScreenSelector.bmp ScreenSelector.png
```

Additionally, we extract the icon from the exe-player, pull out the 128x128 picture and place it in `_Data / Resources / UnityPlayer.png`
```sh
wrestool -x --type=14 SuperPuperGame.exe | convert ico:-[6] SuperPuperGame_Data/Resources/UnityPlayer.png
```
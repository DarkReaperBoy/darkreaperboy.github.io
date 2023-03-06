# Unofficial porting of Unity Games
- Pulled information from gamingonlinux.com to be modfied to our liking.

- From Unity 4, Linux is supported target platform for Unity games. Since Unity is based on Mono, only appropriate Linux executables are needed, so it is possible to manually "port" a Unity game made for another platform, that does not ship with Linux executables by locating and placing appropriate executable, as long as the game have OpenGL, OpenGLES or Vulkan renderer enabled, uses GLSL or SPIR-V shaders and doesn't use plugins that are impossible to obtain for Linux.

- For older Unity 5+ games before Metal, porting from Mac version can alleviate the problems with pink shaders, since instead of DirectX/Direct3D HLSL shaders common OpenGL GLSL shaders were used. 

## Porting a Windows or Mac game

### Obtaining game files

First, files for the game to port needs to be obtained. Unless trying to fix a broken Linux game or add support for 32-bit or 64-bit for games shipping with only 32-bit or 64-bit executable in Linux (which should be possible by adding the respective files), files for the Windows or Mac version of the game need to be obtained. If the game is installed on Windows, Mac or Wine/Proton, these files can be used. If not, it is usually possible to download (and extract if they are archived) the files under Linux natively:

    For Steam, use Proton (macos-depot-download for Mac), SteamCMD or Steam console to download a Windows or Mac depot (search SteamDB for the actual depot numbers of the game). It is also possible to download an old version of the game that way.
    For GOG.com, download a Windows installer and extract its files using innoextract --gog setup_whatever_game.exe[1]. For Mac, most (if not all) installers come as .pkg files, which are in fact xar archives. After extracting its contents, the next step is to find a file called 'Scripts' in a subdirectory (cannot remember its exact name right now), which is actually a gzipped cpio archive. After renaming it to Scripts.gz, gunzipping it, and extracting the resulting cpio archive, it is possible to finally get to the game content [2].
    For itch.io, download and extract a Windows version with 7z x Game.exe. For Mac, simply extract the .zip file, ex. unzip Game.zip.
    For Mac's .dmg files, mount them with sudo mount -o loop,ro -t hfsplus image.dmg mountpoint.
    For other sources, extract Windows installers with innoextract, 7za or similar tools.

For Windows games, obtained folder structure with GameName.exe and GameName_Data is the same as Linux.

For Mac games, the file structure is different and it is needed to move and rename some files around [3]: 
```sh
mv GameName.app/Contents/Resources/Data GameName_Data
mv GameName.app/Contents/Resources/unity\ default\ resources GameName_Data/Resources/unity\ default\ resources
mv GameName.app/Contents/Resources/UnityPlayerIcon.png GameName_Data/Resources/UnityPlayer.png
```
The executable is stored in GameName.app/Contents/MacOS/GameName, but it will not be used. The rest of the files are not needed, as they will be replaced with contents from the Linux Unity player later on.

GameName is the Unity project game name. Renaming Linux executables to it will be needed later on.
Checking Unity version of the game

Secondly, a version of the Unity the game is using needs to be checked. Probably the easiest way is to use find-engine.py Python script from https://github.com/vetleledaal/game-engine-finder but it can also be done without it by at least two ways:

    Navigate to the GameName_Data folder of the game to be checked. Inside this folder there should be multiple of files, most of which contain the string for the Unity version. Executing strings command on one of them can help getting the exact version. Majority of games include level0 file in them, so navigating to the folder and executing this command should print the actual Unity version on the terminal:

    strings level0 | head -1

    If nothing is returned, it's a very old Unity engine version, which has the version information towards the end of the file, but for which no Linux support exists anyway.
    If any Linux Unity Player executable is available, it is possible to put this executable in the same level as GameName.exe and GameName_Data and launch the game from terminal or with -logfile /location/to/file.txt command line parameter to force the game write a log to /location/to/file.txt and inspect the output. A similar to this should be looked for in log:

    Expected version: 5.6.3p3. Actual version: 5.6.4p1.

    Expected version is the version of the executable, in that case Unity Patch Release 5.6.3p3.
    Actual version is the version of the executable needed, in that case Unity Patch Release 5.6.4p1.
    Also, PCGamingWiki keeps track of Unity games engine build versions via Property:Unity engine build – it is possible to look at which games have the specific version there. To see the list of games along their Unity engine version, this query can be used. Keep in mind that the data there is contributed by users, so it can be out of date and not all the games may have it filled properly! The date of last version check can often be found noted as a reference on actual pages.

Obtaining Unity files

Knowing the exact game version, Unity Linux Playback Engine files needs to be obtained. These can either be taken from another Linux Unity game of the same version, or can be extracted from official Unity Linux Build Support ~100 MB exectuable (Unity 5+) or ~1.5 GB Unity Editor (Unity 4).

The files that are essential to work are:

For 32-bit version:

    GameName.x86 (.x86 part is sometimes omitted in newer Unity versions, leaving only GameName in some games)
    GameName_Data/Mono/x86/libmono.so
    GameName_Data/Mono/x86/libMonoPosixHelper.so (since Unity 5.5)
    GameName_Data/Plugins/x86/ScreenSelector.so (since Unity 4.3)

For 64-bit version:

    GameName.x86_64 (.x86_64 part is sometimes omitted in newer Unity versions, leaving only GameName in some games)
    GameName_Data/Mono/x86_64/libmono.so
    GameName_Data/Mono/x86_64/libMonoPosixHelper.so (since Unity 5.5)
    GameName_Data/Plugins/x86_64/ScreenSelector.so (since Unity 4.3)

Sometimes additional .so plugin files need to be put in either the GameName_Data/Plugins/x86 directory for 32-bit version or GameName_Data/Plugins/x86_64 for 64-versions. It's not needed in most cases, but if the game needs them, the names can be deducted from .dll files stored in GameName_Data/Plugins directory for Windows, or from .bundle directories in GameName.app/Contents/Plugins for Mac.

Some common plugins include [4]:

    AkSoundEngine.dll – ???.so. There's a lot of versions of precompiled plugins available, but it's difficult to find out which one might be needed. Part of Audiokinetic.
    CSteamworks.dll – libCSteamworks.so. Available from GitHub - rlabrecque/Steamworks.NET: Steamworks wrapper for Unity / C#.
    fmod.dll – ???.so. There's no source, only precompiled plugins for 32 and 64-bit. Difficult to find the one needed. Available from FMOD Download - FMOD for registered users.
    FMODUnity.dll – ???.so. Source is available from FMODUnity .NET Plugin at SquareTangle (archived by Wayback Machine).
    steam_api.dll – libsteam_api.so. Access to the Steam API by itself. It is only needed to find this precompiled file.
    SteamworksManaged.dll ???.so(32-bit only). Available from GitHub - reallyjoel/Ludosity-s-Steamworks-Wrapper: Fully managed .NET wrapper for Steamworks API.
    SteamworksNative.dll ???.so (32-bit only). Available from GitHub - reallyjoel/Ludosity-s-Steamworks-Wrapper: Fully managed .NET wrapper for Steamworks API.
    UWKPlugin.dll – ???.so. Source is available, but no precompiled Linux plugins. Used to be available from uWebKit/uWebKit · GitHub (archived by Wayback Machine).
    XInputInterface.dll – ???.so. Apparently comes from speps/XInputDotNet: C# wrapper around XInput, works with any Mono or .NET application (eg. Unity3D).

File archives

Some people already extracted the appropriate files. It is possible to either look for the pre-made versions posted on the game forums if someone already did the job (see the table below), but there are also some mirrors of the extracted Unity files, which saves the trouble downloading and extracting the Linux Playback Engine or Unity Editor files or rummaging through the collection of Linux Unity games:

    Builds / Облако Mail.Ru – original file repository, includes some precompiled plugins.
    ! Builds / Облако Mail.Ru – another file repository.
    Unity Linux - Google Drive – Faalagorn's Google Drive folder (mainly for Escape from Tarkov).

Manually extracting files

It is also possible toalso manually extract the files needed. For that, appropriate version of UnitySetup-Linux-Support-for-Editor-X.Y.Z.ab.exe needs to be downloaded (for Unity 5+) or either UnitySetup-4.Y.Z.exe for full releases or UnitySetup_update-4.Y.Zab.exe for patch/beta releases, where X.Y.Zab and similar is the Unity version detected.

First, the appropriate version of Unity from one of those locations needs to be obtained:

    Full Releases (X.Y.Zf1*—∞)
    Patch Releases (X.Y.Zp1—∞)
    Beta Releases** (X.Y.Zb1—∞ for Beta versions and X.Y.Zf1—∞ for Release Candidate versions)
    Linux Releases (X.Y.Zx***f/p/b1—∞)

*Some full releases start with with number higher than 1, that means that the previous versions were release candidates, obtainable from beta archive.
**Only the current beta releases are available for download, so if an old beta executables is needed, then unless it is 5.4.0b10, 5.4.0b13, 5.4.0b15, 5.4.0b16, 5.4.0b18, 5.4.0b21, 5.4.0b23, 5.5.0b1, 5.5.0b2, 5.5.0b5, 2017.2.0b11, 2017.3.0b1, 2018.1.0b8, 2018.1.0b13, 2018.2.0b2, 2018.2.0b5 or 2018.2.0b7 available from Linux Releases, archived release somewhere else or another game using it needs to found (see Finding files in own game library section).
***The xb/xf/xp notation was only used for the Linux Editor builds of Unity 5.5.0p1—2017.1.1f1 (inclusive) and 2017.2.0b6 – i.e. the builds published between 2016-12-13 and 2017-09-05.

    For Unity 5 and above, Unity Setup for Linux weighting around 100 MB needs to be downloaded. To do so, the version needed needs to be located on the links above, then URL to any component download link (except the Unity Installer for full releases, as it uses a different download scheme link) contains 12-character hexadecimal build ID, for example d597d0924185 for Unity 2017.1.2p4. Knowing the build ID, it is possible to download UnitySetup-Linux-Support-for-Editor-X.Y.Zab.exe from the following link:

    https://download.unity3d.com/download_unity/xxxxxxxxxxxx/TargetSupportInstaller/UnitySetup-Linux-Support-for-Editor-X.Y.Zab.exe

    or

    https://beta.unity3d.com/download/xxxxxxxxxxxx/TargetSupportInstaller/UnitySetup-Linux-Support-for-Editor-X.Y.Zab.exe

    xxxxxxxxxxxx is the build ID and X.Y.Zab is a detected Unity version. Generally, regular link works for full releases while beta and patches releases use the latter link, but sometimes the files are even available in both locations.
    Relative location of files Unity downloader downloads is also stored in unity-win.ini file which can be acccssed in

    https://download.unity3d.com/download_unity/xxxxxxxxxxxx/unity-win.ini

    or

    https://beta.unity3d.com/download/xxxxxxxxxxxx/unity-win.ini


    Alternatively, is is also possible to access the links in a more human-readable format (only in beta.unity3d.com) in

    https://beta.unity3d.com/download/xxxxxxxxxxxx/download.html

    Here are examples for Unity 2017.1.2p4:
        UnitySetup-Linux-Support-for-Editor-2017.1.2p4.exe (download.unity3d.com))
        UnitySetup-Linux-Support-for-Editor-2017.1.2p4.exe (beta.unity3d.com))
        unity-win.ini (download.unity3d.com)
        unity-win.ini (beta.unity3d.com)
        download.html

    For Unity 4, a full executable needs to be downloaded, weighting around 1.5 GB.

After obtaining the installers, files from them needs to be extracted. The archives are an NSIS installers and can be extracted with p7zip. Navigate to the location of the downloaded file for example using cd in terminal and extract the files with e.g. 7z x UnitySetup-version.exe, where version is either the respective version of Linux Support for Editor for Unity 5+ or the full installer for Unity 4 downloaded. For Unity 5+, the files needed will be located in $INSTDIR$_XX_/Variations/ folder, where XX is a random number, and for Unity 4 in Data/PlaybackEngines/linuxstandalonesupport/Variations/ folder. The variations needed are most likely the linux64_withgfx_nondevelopment_mono and/or linux32_withgfx_nondevelopment_mono, but feel free to experiment.

There is a bash script to automatically handle downloading and extracting the required files by passing only the Unity version. It repeats the procedures explained above and was posted on the original Russian forums, but it is largely untested: [5] (click "скрытый текст" to show it). Dependencies include: p7zip-full (p7zip in Arch), curl, grep, cut, tr.

Only the files mentioned in Obtaining Unity files section are needed, so feel free to remove the rest – replacing the files that ship with Windows game may result in game not starting otherwise!

Renaming LinuxPlayer to GameName and Data directory to GameName_Data is also needed, where GameName is the game name (see Obtaining game files section.)
Finding files in own game library

An alternative route is to search through own installed game library, looking for the executables needed. When looking for a specific executablea following command can be typed in terminal, where . indicates the current directory and can be changed to a different one and X.Y.Zab is the executable searched for:

find . -name level0 -print0 | xargs --null grep --with-filename "X.Y.Zab"

This command will only scan the directory in which it is invoked (or passed instead of .) and all its sub-directories, so it's a good idea to run it where all the games are installed (e.g. ~/games).[6] [7]
Porting from other platforms

It could also be possible to port games from other platforms, including Android, iOS, tvOS, Samsung Smart TV, Tizen, WebGL, Facebook Gameroom and historically Unity Web Player – possibly even consoles if one could get hands on the files. It may also be possible to port to non-Linux platforms that way, however it all mostly remains to be tested.

The Russian Mac porting guide did not succeed porting an Android game to a x86 system due to a different CPU architecture, so an ARM Linux distro (for example on Raspberry Pi) may be needed [8].
Testing

Here are all the games tested for working on Linux. For now, the table only includes one entry per game, sorted alphabetically by game name – in case of new tests, update the existing entry with up to date info. Link the game name to the source you obtained the game from. Alternatively, if you feel the results are vastly different, feel free to add a new entry below the old test and discuss it in the talk page!

Feel free to add pre-Unity 4 games to the list as well and mark them appropriately – it will let other tester know why this Unity game does not work and in case of engine upgrade, could be easily retested.

For Platform column, state the platform you used the files from, most commonly Windows or Mac but other options are possible as well – see Porting from other platforms section.

Only use Yes in the Works column if the game is actually playable as if it were native. If you encounter any game-breaking issues such as game not starting or pink shader textures, mark it as a firm "No" and state the reason in Description column – try to be as descriptive as possible, in case that will help someone else to get the game working by finding the issue.

For tester name, type the last tester name. If you are the one doing tests, you can use your wiki name, e.g. User:Faalagorn.

For the last tested date use YYYY-MM-DD format.

Games with the shader problems would basically require to decompile Managed/Assembly-CSharp.dll and replace the shaders to use there, or to extract the .asset files and create them anew. Some of these games are playable as they are, but certain things will show up pink. [15] 
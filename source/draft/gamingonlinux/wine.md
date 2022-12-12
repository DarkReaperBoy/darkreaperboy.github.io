# Wine

Wine (recursive acronym for Wine Is Not an Emulator) is a free and open source compatibility layer software application that aims to allow applications designed for Microsoft Windows to run on Unix-like operating systems. Wine also provides a software library, known as Winelib, against which developers can compile Windows applications to help port them to Unix-like systems.

### Wine explained
 ### Is Wine an Emulator?

        No, it's not. It's a compatibility layer. Wine does not try to emulate or virtualize e.g the machine's CPU it's running on. It might, in some cases, present certain hardware components, to the running Windows software, in a different fashion than it does to the underlying Linux system; But it's ultimately the same physically existing hardware being accessed by the Windows software, as with any Linux software the user is running.
Security notice: Windows software being run in Wine will have access and privileges just like, and to, anything the Linux user running the software has. The Windows software is really no more isolated or restricted, than any native Linux software the user runs. If security is a major concern, consider trying virtual machines instead.

### Will all Windows software and games work perfectly on Wine?

No, they will not. For information on what software works on Wine check out the Wine Application [Database](https://appdb.winehq.org/). Keep in mind that compatibility problems often can be solved through proper Wine prefix configuration, overriding or installing native Windows DLL's and Frameworks or by taking advantage of CrossOver, PlayOnLinux or Winetricks.

### What is a Wine Prefix?
    Extremely simplified, one might think of a Wine Prefix as one installation of a Windows operating system. The Wine prefix folder most often carries a "c_drive" folder that represents the C: partition, a virtual Windows Registry and a description of the Windows version (whether it's 32bit or 64bit, Vista or XP edition, what DLL's and Libraries to override or supplant etc).
        With Wine, it's possible to have multiple Prefixes. Because of this it can be quite easy to run software that is compatible only with Windows 95 but not, for example, Windows XP or Windows 7. Often running software exclusive to, for example, Vista and Windows 2000 simultaneously is even easier on Wine than on a single native Microsoft Windows installation.

### How can i choose Prefix?
While the default Wine prefix is usually ~/.wine it's possible to choose the prefix by changing the variable WINEPREFIX. To target a specific prefix when running a termnial command, run
$ export WINEPREFIX=~/my_wine_prefix_folder wine ~/my_windows_program.exe. This would run "my_windows_program.exe" in Wine, using the prefix folder at ~/my_wine_prefix_folder.


## Installing Wine
From terminals and shells using Package Managers
(wine-staging)[https://www.wine-staging.com/] and [wine-staging-nine](https://wiki.ixit.cz/d3d9) included in Arch repositories are the testing versions of Wine, which include latest patches and options that can yeild improved performance and/or compatibility with games. Gallium nine-enabled version is a patched wine-staging version with alternative implementation of Wine's [CMST patch](https://github.com/wine-compholio/wine-staging/wiki/CSMT) for Mesa drivers (Intel, AMD and open source NVIDIA drivers (Nouveau)).

## Winecfg
Winecgf is perhaps the most common tool used when manually configuring Wine and any Wine Prefixes. When installing Wine on Linux, usually winecfg will get installed alongside it. See https://wiki.winehq.org/Winecfg for more information.

## PlayOnLinux
PlayOnLinux is a free software similar to CrossOver, except it's community based and is not directly related to Wine development. It is solely based on Wine though, so the application support is roughly the same, except it allows you to use a different Wine version in case the game won't run on the newest one. It makes setting up, configuring and managing multiple Wine-prefixes, even installing and updating multiple versions of Wine, a whole lot easier. For gamers who intend to play Windows games on their Linux system PlayOnLinux is strongly recommended and it's often preferred over the much similar solution called Winetricks for beginners. Keep in mind that PlayOnLinux bugs should be reported in PlayOnLinux, as the game support is separate from raw Wine or CrossOver.

### Using PlayOnLinux
With PlayOnLinux's Wine Version Manager, having numerous Wine versions installed on your system is easy. Some of the Wine versions that are listed, alongside stable and cutting-edge versions, might even be tailored just to run one specific Windows game or program optimally. And the available versions outnumber those commonly found in most distro's repositories.

### Installing Windows Games
PlayOnLinux software manager makes installing Windows software and games so much easier. When using this manager, a Wine prefix for the game you chose is automatically created. Then you are presented with a wizard, depending on the actual install script for that game. Unless chosen option requires a physical medium or installation executable, it will simply begin downloading the game of your choice and installing it to it's Prefix along with any DLL's or applying Prefix settings tweaks considered optimal for that specific game or software.

## Winetricks
Winetricks is a helper script to download and install various redistributable runtime libraries needed to run some programs in Wine. These may include replacements for components of Wine using closed source libraries. More info about Winetricks can be found on the [Winetricks page on the Wine wiki](https://wiki.winehq.org/Winetricks).

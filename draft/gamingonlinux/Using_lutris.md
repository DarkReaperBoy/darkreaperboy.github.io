# Using Lutris - BeginnerInfo

Since as a Linux Pirate you are thrown out of the comfy Steam client like a stray dog, here is some useful information on how to use Lutris in a more advanced way.

- Before anything, enable advanced mode.

- If you are trying to get a game working, disable Esync, Fsync and gamemode. You must first be sure that the game is running, improvements come later.

- Lutris will provide their wine builds or the option to use system's wine. That's not acceptable when you're trying to run a game that's not working wih those.

- Here are trusted source for Wine/Proton builds that you can try to make a game work:
1. [Wine-TKG/Proton-TKG](https://github.com/Frogging-Family/wine-tkg-git/releases)
2. [Proton-GE](https://github.com/GloriousEggroll/proton-ge-custom/releases)
3. [Kron4ek](https://github.com/Kron4ek/Wine-Builds/releases)

- To run them on lutris, first extract them, then set the wine runner to custom and select the wine executable as wine-build/bin/wine

* As mentioned on the libraries page, running these builds may require dependencies to be installed on your system.
* TKG builds won't work on distros that have older versions of glibc such as Ubuntu.

## How to use winedebug
Winedebug can be useful on finding out what causes the crash or other problem of a game.

You can enable it on Lutris on Runner settings. By setting it to enabled, you will receive a pretty small output, it may be sometimes useful but there is more that can be found.

For that, you can set it to Inherit from Environment and go to System settings where you add environment.
```sh
winedebug = +all,-heap (usually the best way to use winedebug)
```

## How to make the winedebug output be saved
This applies if you use the builds mentioned above.

- Create a file in wine/bin/ with contents: (and give it permission to run as program)
```sh
#!/bin/sh
"${0%+}" "$@" &> wine.log
```
Go to Runner options and select custom wine and select the created file as the wine executable.
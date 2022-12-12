# r/LinuxCrackSupport

## 1. Introduction
This post is supposed to provide resources regarding gaming on Linux and pirated/cracked
games. Since there are subreddits for both of these topics, it will start as a collection of links to
existing resources (see 4.). If you feel like anything is missing or wrong, feel free to create a
new post discussing the issue.

Sometimes you will see links to [the Arch wiki](https://wiki.archlinux.org/), which is a great resource for Linux in general and
not just for Arch Linux, so don't worry.

### 1.1 The basics of gaming on Linux.

#### 1.1.1 What is Wine?
[Wine](https://wiki.archlinux.org/title/Wine) is a compatibility layer that makes it possible to run Windows applications on Linux. It
usually creates a so-called [wineprefix](https://wiki.archlinux.org/title/Wine#WINEPREFIX) in your home directory which mimics a Windows-like
folder-structure, in which every application is installed. When using default Wine it's advised to
install [winetricks](https://wiki.archlinux.org/title/Wine#Winetricks), [DXVK](https://wiki.archlinux.org/title/Wine#DXVK) and other useful tools.

_For Wine-GE take a look at the section about Proton-GE._

#### 1.1.2 What is Proton?
[Proton](https://tinyurl.com/fe5zmz3t) is based on Wine and developed by Valve. It incorporates some libraries, patches and
improvements that Wine doesn't, for example it includes [DXVK](https://github.com/doitsujin/dxvk) (a translation layer from
[Direct3D 9](https://en.wikipedia.org/wiki/Direct3D), 10 and 11 to Vulkan) and VKD3D (a translation layer from Direct3D 12 to [Vulkan](https://wiki.archlinux.org/title/Vulkan)).
Proton can be used to play Windows games on Linux using Steam, but it can also be used with
Lutris.

1.1.3 What is Proton-GE?
Proton-GE or GE-Proton as of late is a fork of Valve's Proton by a developer called Glorious
Eggroll. It incorporates even more patches than the original Proton like DXVK patched with
Async, AMD FSR support or Protonfixes, which enable more games to be playable on Linux.
GE-Proton is meant for use with Steam. If you want to use Proton with Lutris, take a look at
Glorious Eggroll's Wine-GE.
Here is also a recent post by Glorious Eggroll himself explaining the differences between
Proton-GE and Wine-GE.
Thanks to u/rookielmfao's post for inspiration.

2. Steam Deck
The Steam Deck is running a usual Linux distribution called Arch Linux. That means, everything
in this wiki should equally apply to playing cracked games on the Steam Deck. Take your time
and read at least through the following section and the linked article, as it explains all the basics
about gaming on Linux.
Here is also a very thorough guide for the Steam Deck.
There are currently difficulties installing Lutris on the Steam Deck. Please take a look at this
post on how to install Lutris and preferably leave some feedback.
If you still have any issues, feel free to create a new post in this subreddit and ask for support!

2.1 Controller profiles for non-Steam games.
Here's a guide on how to use community controller profiles on non-Steam games.

3. How To Play On Linux
Here is a introductory article about using Steam with Proton and Lutris to play games on Linux.

3.1 Using Steam
You can also add a non-Steam game to Steam and then play it on Linux using Proton. Follow
these steps to do so. This also applies to the Steam Deck!

1. Open Steam and make sure that Steam Play is activated.
2. Click on "Steam" in the top left, click on "Preferences" and "Steam Play" at the bottom.
3. There tick both the box "Enable Steam Play for supported titles" and "Enable Steam Play
for all other titles".
4. Choose the latest Proton version for "Run other titles with:".
5. Close the windows and return to Steam.
6. In the bottom left click on "+ Add a game" and then on "Add a Non-Steam Game...".
7. In the new window click on "Browse...".
. On the bottom select "File type: All Files".
9. Browse to the directory in which your game is saved.
10. Select the game's executable e. g. game-launcher.exe".
11. Click "Open" and then "Add selected programs".
12. The game is now in your Steam library.
13. Right-click the game and select "Properties...".
14. Check that "Target" contains the path and the game's executable. This might not be
visible on Steam Deck, in that case copy the path from a file browser (like Dolphin) and
paste it into the field. Make sure to include quotation marks, e. g.
/home/arjab/games/Elden Ring/eldenring.exe.
15. Check that "Start in" contains only the path from the previous section, but not the
executable, e. g. /home/arjab/games/Elden Ring/.
16. Check that "Launch options" is empty if not specified otherwise.
17. Close the window, it saves automatically.
1. Hit the "Play"-button. Enjoy!
That's it.
1. If the game doesn't run, open "Properties..." again.
2. On the left, switch to the section "Compatibility".
3. Tick the box "Force the use of a specific Steam Play compatibility tool".
4. Choose a different Proton version or a custom version like Proton by Glorious Eggroll.
5. Close the window and start the game.

3.1.1 Steam's wineprefix directory
Steam saves a wineprefix for every game in the following directory:
/home/$user/.steam/steam/steamapps/compatdata/$appid/pfx/
Replace $user with your username and $appid with Steam's application ID for the game. You
can find the app ID by right-clicking on the game and selecting "Properties...". Than switch to
the tab "Updates" on the left and you will see for example "App ID: 1234567" at the bottom.
The above path is a link to the actual path, which can be found in
/home/$user/.local/share/Steam/....

3.2 Using Lutris
Follow these steps to play a cracked game using Lutris:
It's not necessary to install a game using Lutris as described here. But for some (cracked)
games it works better or as described below is necessary insofar as you need a different runner
for e. g. the installation of FitGirl repacks. So if you have an already installed game, skip steps 6
to 12.
1. Obtain your desired game from a respected source.
2. Install Lutris and open it.
3. Click on to top left "+"-button to add a game.
4. Enter the name of the game and select the Runner "Wine".
5. Change to the tab "Game options".
6. Click on the top right button "Browse.." to select the game's executable.
7. Browse to the directory of your downloaded game and select the installer's *.exe.
. Click "Save", you'll see your game's installation has been added to Lutris.
9. Double-click on it or use the bottom-left button "Play".
10. The installation should start, follow the on-screen instructions.
11. After the installation is done, right-click the game in Lutris and click "Configure".
12. Go to "Game options" and click the top right button "Browse..".
13. Browse to the directory in which you've installed the game.
14. Select the game's executable and click the bottom right "Save".
15. Double-click the game in Lutris to start it or use the bottom left button "Play".
Optional: If a game doesn't work or has poor performance, click "Configure" on the game and
tick the bottom left box "Show advanced options". Now you can edit the game's options,
change the runner, etc.

3.2.1 Lutris' wineprefix directory
Lutris uses the default wineprefix for all games which is located in "/home/$user/.wine".
Sometimes it's necessary to create a new wineprefix and point to it in the game's Lutris
configuration.

3.2.2 Using custom DXVK in Lutris
Lutris uses it's own fork of DXVK, but you can also use a custom version of DXVK with Lutris.
Simply install DXVK for example downloading the latest release or by installing the AUR
package and copy or symlink it to the following directory:
~/.local/share/lutris/runtime/dxvk/custom
You can name the customdirectory anything you want, but it must contain the "x64" and "x86"
folders. Now open any game's configuration in Lutris, chek the "Show advanced options" box
and type the folders name into the "DXVK version" field.
Here's the official tutorial by Lutris including a video.
The same can be done for VKD3D, but Lutris already uses a fork of VKD3D-Proton.

3.2.3 Installing repacks return error
Thanks to u/hackedyak there is an easy fix for failing repack installations related to isdone.dll
or unarc.dll..
1. When you run the installation using Lutris, right-click on the game in Lutris and select
"Configure".
2. Select the right-most tab called "System options".
3. Scroll down to "Environment variables".
4. Click the "Add"-button on the bottom right.
5. Click into the field labeled "Key" and enter the following:
WINE_LARGE_ADDRESS_AWARE - if you're using a Wine/Lutris runner.
PROTON_LARGE_ADDRESS_AWARE - if you're using a Proton runner.
More on the installation of FitGirl repacks can be found here.
1. Now click into the field labeled "Value" and enter 0.
2. Click on "Save" in the bottom right and start the installation.
You should change this back to 1 after the installation though!
4. Linux Crack Tips Database
We're trying to build a database on how to get certain games to work here.
5. Useful resources

5.1 General information
GNU/Linux Pirates on the TOR network (link only works in TOR browser!)

5.2 Gaming on Linux
r/linux_gaming (About gaming on Linux in general)
r/wine_gaming (About gaming on Linux using Wine)
r/SteamPlay (About gaming on Linux using Steam Play/Proton)
r/Lutris (About gaming on Linux using Lutris)

5.3 Compatibility databases
ProtonDB for games that run through Steam Play or using Proton in e. g. Lutris.
LutrisDB for games that run through Lutris.
Wine AppDB for software that runs through Wine including games.
List of Linux games or a shorter version on Wikipedia.

5.4 Cracked/pirated games
r/Piracy and it's megathread.
r/PiratedGames and it's megathread.
r/CrackWatch
r/CrackSupport
r/FREEMEDIAHECKYEAH

6. Tips and tricks

6.1 Native Linux repacks/releases

6.1.1 Johncena141
The group johncena141 offers games including a specific version of Wine and other tweaks to
run on Linux out-of-the-box. You can find them on 1337x. (Be aware that the website is
changing quite frequently, you'll find the correct website in the latest releases on 1337x.)
Here's a quick guide on how to install and play johncens141's releases.
There's also a GUI to download, manage and play Johncena141's repacks.
There are also some Linux builds for games on RuTracker (thanks u/iamnotstanley).
6.1.2 Linux RuleZ
There are native repacks/releases by Linux RuleZ to be found on Zamuda and Torrminatorr
(related post).

6.2 Vortex Mod Manager
It is possible to use the Vortex Mod Manager on Linux through a Lutris install script as explained
in this video. Another possible solution is to use a virtual machine according to this post.
It's also possible to install it using Steam Tinker Launch.
6.3 Use Proton with Lutris
Some games will only run using Proton, which is obviously not possible when you try to play a
cracked game via Lutris. Luckily, it's fairly easy to use Proton with Lutris, by either using Steam
or getting it from Github directly.
1. Get Proton, either using Steam or by downloading it from Github. Some distros offer
Proton in their repositories, for example it's available on Arch Linux in the AUR.
2. Locate the installation directory of Proton. If you installed it through Steam it's one of the
following. ~/.steam/steam/steamapps/common/Proton
~/.local/share/Steam/steamapps/common/Proton If you have downloaded Proton
manually, navigate to the directory where you have saved it or where you installed it
without Steam.
3. Inside the directory you'll find a folder called dist (or files) it should contain the
subfolders bin, lib, lib32, share, which contains the files we need for Lutris. Check the
following directory, where the runners of Lutris are located:
~/.local/share/lutris/runners/wine/
4. Create a folder in that directory with the name of the respective Proton version, e. g.
Proton-5.13 or Proton-Experimental. If you have simply downloaded Proton, simply copy
the respective files into that directory and skip the next step.
5. Now we create a softlink from the folder we just created, that's pointing to the dist (or
files) folder. ln -s ~/.steam/steam/steamapps/common/Proton/dist/*
~/.local/share/lutris/runners/wine/Proton/ or ln -s
~/.steam/steam/steamapps/common/Proton/files/*
~/.local/share/lutris/runners/wine/Proton/
6. Now there should be the content of the dist folder inside the Proton folder, you've just
created. Start Lutris (or restart it, if it's open) and select a game, go to Configure →
Runner options → Wine version and select Proton.
7. Save everything and start the game!
The popular Proton build by Glorious Eggroll does not support to be used with Lutris and could
potentially break your things. If you want to use Proton outside of Steam, Glorious Eggroll
provides a Wine build for the use with Lutris etc.

6.4 Playing FitGirl repacks using Lutris and Proton
When you have an error during installation, take a look at this section.
u/TermoZour mentioned to add tips on how to play FitGirl repacks on Linux and for now it
seems like this is simply possible by running them using Proton.
Another solution would be to use this script, which I haven't tested for now and which isn't
maintained anymore.
Here's another short tutorial.
And yet another tutorial

6.5 Steamworks and online fix using Steam Tinker Launch
Here's a quick guide on how to run a Steamworks and online fix using Steam Tinker Launch and
Proton.

6.6 Tools, tweaks and miscellaneous
Proton GE - special build of Proton with various patches and fixes included. (Here's a
great article about it.)
ProtonUp and ProtonUp-Qt for easy installation of Proton GE.
Protonutils a CLI-tool for managing you Proton versions.
VKD3D-Proton - VKD3D-Proton is a fork of VKD3D, which aims to implement the full
Direct3D 12 API on top of Vulkan.
Winetricks
Wine GE - a special build for use with Lutris.
wine-tkg, proton-tkg and wine-proton-tkg - Wine-tkg is a build-system aiming at easier
custom wine builds creation.
Tk-Glitch and Frogging Family's work in general.
Steam Tinker Launch is a "tool for use with the Steam client which allows customizing and
start tools and options for games quickly".
LibreGaming for downloading distro-specific dependencies for gaming.
Chad Launcher for launching pirated games (discontinued).
Rum is the successor of Chad launcher.
DXVK - DirectX 9, 10 and 11 implementation using Vulkan.
dxvk-tools - DXVK & vkd3d-proton script to build/patch/install/update, Lutris and Protontkg compatible.
DXUP - A D3D9 and D3D10 → D3D11 translation layer (archived!).
VKD3D - The VKD3D 3D Graphics Library using a similar API to Direct3D 12.

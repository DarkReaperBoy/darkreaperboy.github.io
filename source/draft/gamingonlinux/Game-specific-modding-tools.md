=== Sekiro: Shadows Die Twice ===
* [https://github.com/Lahvuun/sekirofpsunlock sekirofpsunlock] - Unlock FPS for Sekiro
=== World of Warcraft ===
* [https://github.com/WowUp/WowUp WoWUp] - World of Warcraft addon updater
=== Bethesda Games ===

==== The Elder Scrolls III: Morrowind ====

* Use [https://openmw.org/downloads OpenMW] and follow this awesome [https://modding-openmw.com wiki].

==== Skyrim:SE / Fallout 4 ====

Please read through this whole section thoroughly as it's very easy to miss some step!

===== Game specific tweaks =====
* If you're experience sound issues, try to add this line to launch options: WINEDLLOVERRIDES=”xaudio2_7=n,b” PULSE_LATENCY_MSEC=90 %command%
* If you're modding Fallout, you also need to enable modding, to do this, go to ".../SteamLibrary/steamapps/compatdata/377160/pfx/drive_c/users/steamuser/Documents/My Games/Fallout4/" and edit Fallout4.ini and in the [Archive] section add these two lines below.
<nowiki>bInvalidateOlderFiles=1</nowiki>

<nowiki>sResourceDataDirsFinal=</nowiki>
* Whenever you need to edit any config file, make sure to edit the files ".../SteamLibrary/steamapps/compatdata/377160/pfx/drive_c/users/steamuser/Documents/My Games/Fallout4/", or ".../SteamLibrary/steamapps/compatdata/489830/pfx/drive_c/users/steamuser/My Documents/My Games/Skyrim Special Edition/" for Skyrim, as these are the only ones that are being used by the game

===== ProtonGE =====
* Download [https://github.com/GloriousEggroll/proton-ge-custom ProtonGE]
* Install as described on their [https://github.com/GloriousEggroll/proton-ge-custom/wiki wiki]

===== Script Extender =====
[[File:Screenshot 2022-05-20-13-12-12.png|thumb|Example of Skyrim directory after adding SKSE]]
* Grab script extender 7z File for [https://skse.silverlock.org Skyrim] or [https://f4se.silverlock.org Fallout]. DOWNLOAD ANNIVERSARY EDITION FOR SKYRIM SPECIAL EDITION EVEN IF YOU DO NOT HAVE ANNIVERSARY EDITION DLC!
* Extract the contents of the newly downloaded file
* Copy the contents of the script extender to the game folder ".../SteamLibrary/steamapps/common/Skyrim Special Edition/"
* Rename SkyrimSELauncher.exe to SkyrimSELauncher.exe.old
* Rename skse64_loader.exe to SkyrimSELauncher.exe

===== Adding Mods =====
[[File:Screenshot 2022-05-20-12-41-18.png|thumb|Vortex: Manually adding game]]
* Grab [[Vortex]] from [[Lutris]]
* Run Vortex and make sure to login with your account
* In the games section you should be able to view your already installed games, if not, make sure to manually add them by clicking on the Supported section and manually setting the location, the location should be something like "Z:\...\SteamLibrary\steamapps\common\Skyrim Special Edition"
* The newly added game should managed, if not make sure to click on Activate in Manage section
* Grab your favorite mods from [https://www.nexusmods.com/ Nexusmods], use manual download, as mod manager download doesn't work, I highly recommend creating a new folder for example Skyrim Mods, for your new downloads.
* Drag'n'drop your mods into the Vortex' Mods Section
[[File:Screenshot 2022-05-20-13-19-192.png|thumb|Mod ready to be installed and enabled]]
* Make sure to click on Install and Enable
* Vortex should automatically deploy all your mods, once you're done, close Vortex and do not forget the last step!
* Now, all that's required is to copy plugin list from Vortex to the game's folder, you can do this by running this script with the correct path to your libraries (I highly recommend you to write a script for this task)
cp ".../LutrisLibrary/vortex-mod-manager/drive_c/users/yourusername/Local Settings/Application Data/Skyrim Special Edition/plugins.txt" ".../SteamLibrary/steamapps/compatdata/489830/pfx/drive_c/users/steamuser/Local Settings/Application Data/Skyrim Special Edition/plugins.txt"

or for Fallout:

cp ".../LutrisLibrary/vortex-mod-manager/drive_c/users/yourusername/Local Settings/Application Data/Fallout4/plugins.txt" ".../SteamLibrary/steamapps/compatdata/377160/pfx/drive_c/users/steamuser/Local Settings/Application Data/Fallout4/plugins.txt"


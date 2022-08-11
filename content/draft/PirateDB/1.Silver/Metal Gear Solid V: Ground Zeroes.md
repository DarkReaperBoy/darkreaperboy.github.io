# Metal Gear Solid V: Ground Zeroes [Wine]

### Requires
Wine ≥ 5.13, Proton ≥ 5.13-1, or Proton-GE ≥ 5.9-GE-3-ST

#### In-game full screen settings are cropped and show top of desktop screen
Enable Wine Virtual Desktop to resolve this issue or if using KDE Plasma use KWin to set full screen with a shortcut key.

#### Texture stream bug (Perhaps an isolated incident)
On startup with settings maxed out textures do not load in fully and are not detailed. To fix this lower the "Resolution" and "Textures" graphic options to the lowest setting and apply. Next raise the "Textures" option to the highest setting and apply. Finally raise the "Resolution" option to the highest setting and apply. This has to be done on each startup and the issue can still happen randomly during gameplay after the fix.

#### Keyboard/mouse input lag
Play the game using the in-game "Windowed" graphic option or use Wine Virtual Desktop to resolve this.

#### Optional missions:
Rename "data_00.g0s" in the game install directory. This file contains a MGSV teaser trailer that plays after the end game credits. If you want view it you can do so through your file explorer or view online. After renaming this file, continue from your previous save, the trailer will be skipped, and the optional missions should unlock.
# PirateDB - Crack Scene
Compatibility information for pirated games on Linux, be it Native or through Wine.
<br>

## Crack groups general compatibility:

### Working:

`3DM` - `ALI213` - `Baldman` - `RELOADED` - `HOODLUM` - `SKIDROW` - `STEAMPUNKS`

------------------------------------------------------------------------------------------------------------------

#### CPY

- All recent cracks work but some of them require workarounds. See PirateDB for more information.

#### EMPRESS and C0000005

Working: Tekken 7 Red Dead Redemption 2 Borderlands 3 Middle-Earth Shadow of War SoulCalibur VI Middle Earth: Shadow of War`<br>
Not Working: Planet Zoo

- Middle-Earth Shadow of War only works with Wine 5.10 or earlier.

- SoulCalibur VI works on Wine 5.11 or earlier. Changes will be upstreamed to Wine 5.19 to fix the regression.

- Middle Earth: Shadow of War. Will work on Wine 5.19.

#### PARADOX
The few Denuvo games cracked by this group do not work on Wine. Similar to CODEX.

- The only exception we found so far is Monster Hunter World which works with Wine. More testing should be done.

#### VOKSI
Denuvo games cracked by Voksi do not work on WINE.

#### CODEX
Working Denuvo cracks: HITMAN 2

- The majority of Denuvo games cracked by CODEX do not work on WINE, the cause is unkown but we are certain it's NOT because of anti-debugging software such as VMProtect.

- Games with Steam protection cracked by CODEX may not work, to be more specific, CODEX crack for Steam protection from 2018 to 2019 normally do not work on WINE, but cracks made before that, or after that work on WINE without any issues, but if they do not work with you, you can replace them with Goldberg Steam emulator

    - To do that: just delete all dll files of CODEX except the cracked executable, and copy Goldberg Steam emulator that can be download it from this link >> [Goldberg Emulator](https://mr_goldberg.gitlab.io/goldberg_emulator/)
        - `steam_api.dll` is for 32bit games, and `steam_api64.dll` is for 64bit games, but you need also to add `steam_appid.txt` next to the dll. You need to add `steam_appid` of this game (you can get this number from [ProtonDB](https://www.protondb.com))

# Red Dead Redemption 2 [EMPRESS v2] [Wine/Proton] 
[Preconfigured torrent](https://1337x.to/torrent/4701658/Red-Dead-Redemption-2-v1311-23-EMPRESS-V2-Linux-Wine/)<br>

**Required:**
Set `Windows 10` mode on winecfg.
Wine-staging/tkg mingw 5.20 from [Kron4ek](https://github.com/Kron4ek/Wine-Builds/releases/tag/5.20). Other versions of wine may work.

Run the game with this [script](http://it7otdanqu7ktntxzm427cba6i53w6wlanlh23v5i3siqmos47pzhvyd.onion/johncena141/Linux_Game_Pirates/src/branch/master/PirateDB/Games/2.Bronze/run_rdr2.sh)

TKG builds may need vulkan SDK forced:
    Copy `vulkan-1.dll` from [Vulkan RT](https://sdk.lunarg.com/sdk/download/latest/windows/vulkan-runtime-components.zip) to game folder, add it to overrides on winecfg.

**Other mentions:**
Add env: PULSE_LATENCY_MSEC="60" to fix crackling sound.
For nvidia users: add to commandline.txt -adapter 1 to use Nvidia Optimus.
You should trigger prefix update or create it from 0.
Disable DXVK or change dxgi to builtin,native on winecfg. (This game uses Vulkan)
Delete SGA files in prefix/user/.... to fix ERR_GFX

**Things you need to do if you didn't use the script:**

- Start the game with rdr2.exe on Lutris then run this in terminal multiple times until it's starting:
```sh
PID=$(pgrep RDR2.exe); kill -s SIGSTOP $PID; kill -s SIGCONT $PID
```
- Freeze fix:
To use this, install cpulimit. Now go to Lutris game settings and add argument:
```sh
cpulimit --limit=400 %command%
```
The value 400 means the percent of how much the CPU can be used. Meaning 100% limit 4 times.
So this should  be adaptable to how many threads you have, 800 for 8 threads.
It doesn't matter if the limit is at 100%. just the usage of cpulimit seems to fix the freezes.

Problems that can't be fixed for now:
Some people will experience frequent crashes, espeacially in Saint Denis. Crash reports are not limited to crack users on linux, as it also happens on Windows. Some users on cs.rin.ru claim that changing the date may fix some things. There is no conclusion about this issue and would be best if EMPRESS will release a crackfix (which is unlikely).
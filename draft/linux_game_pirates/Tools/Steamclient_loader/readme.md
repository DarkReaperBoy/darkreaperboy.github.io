# Steamclient Loader - Goldberg

This is used to pirate native games like Shadow of the Tomb Raider, Life is Strange 2 or Total War Three Kingdoms.<br>

- All files here need to be present in order to work.

- It is expected that the user of this tool has knowledge in how Linux works and how to adapt the script to a specific game.

- Steam Runtime needs to be provided as well in the same dir. See [Runtime Installer](http://it7otdanqu7ktntxzm427cba6i53w6wlanlh23v5i3siqmos47pzhvyd.onion/johncena141/Linux_Game_Pirates/src/branch/master/Tools/Runtime-Installer)

```sh
#!/bin/bash
APP_PATH=$(dirname "$0";)
APP_NAME="./game.sh"
APP_ID=779340
CONFIG_PATH=$(dirname "$0")
STEAM_RUNTIME="steam-runtime/run.sh"

CUR_DIR=$(pwd)
cd "$CONFIG_PATH"
mkdir -p ~/.steam/sdk64
mkdir -p ~/.steam/sdk32
#make a backup of original files
mv ~/.steam/steam.pid ~/.steam/steam.pid.orig || true
mv ~/.steam/sdk64/steamclient.so ~/.steam/sdk64/steamclient.so.orig || true
mv ~/.steam/sdk32/steamclient.so ~/.steam/sdk32/steamclient.so.orig || true
#copy our files
cp x86/steamclient.so ~/.steam/sdk32/steamclient.so
cp x86_64/steamclient.so ~/.steam/sdk64/steamclient.so
echo $BASHPID > ~/.steam/steam.pid
cd "$APP_PATH"
if [ -z "$STEAM_RUNTIME" ]
then
SteamAppPath="$APP_PATH" SteamAppId=$APP_ID SteamGameId=$APP_ID "$APP_NAME"
else
SteamAppPath="$APP_PATH" SteamAppId=$APP_ID SteamGameId=$APP_ID "$STEAM_RUNTIME" "$APP_NAME"
fi

cd "$CUR_DIR"
#restore original
rm -f ~/.steam/steam.pid
rm -f ~/.steam/sdk64/steamclient.so
rm -f ~/.steam/sdk32/steamclient.so
mv ~/.steam/steam.pid.orig ~/.steam/steam.pid
mv ~/.steam/sdk64/steamclient.so.orig ~/.steam/sdk64/steamclient.so || true
mv ~/.steam/sdk32/steamclient.so.orig ~/.steam/sdk32/steamclient.so || true
```
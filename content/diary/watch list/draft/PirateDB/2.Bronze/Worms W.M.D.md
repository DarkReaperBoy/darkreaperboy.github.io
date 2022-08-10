# Worms W.M.D [Native]

- libstdc++ needs to be deleted if existing, it causes crash at startup.
	
- Using steam-runtime on this game seems to actually break it, explaining the crash reports by owners of the game on Steam.

- Some systems require this setting for the game to launch.<br>
```
DBUS_FATAL_WARNINGS=0
```
- Replacing the ACTiVATED version of steam_api.so with Goldberg will enable Multiplayer.
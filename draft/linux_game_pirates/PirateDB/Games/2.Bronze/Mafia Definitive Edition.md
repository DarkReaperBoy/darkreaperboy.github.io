# Mafia Definitive Edition [CPY] [Wine]

- Game works on latest wine-tkg but might have sever sound issues. For now it is the most stable on [proton-ge-custom-stable-bin 5.9](https://mega.nz/file/HGpCXYZQ#Lmo2MtC21RB5fvbhApQpmI-5mAIWs5NVoWx8TuiTJ4M) (not 5.21)
- delete /usr/share/steam/compatibilitytools.d/proton-ge-custom-stable/dist/lib64/wine/steamclient64.dll (you need sudo)
- run
```sh
proton-ge-custom-stable 1030840 ./mafiadefinitiveedition.exe
```

**Black screen fix:**
- Run the game once then go to<br>
`/game/prefix/drive_c/users/steamuser/My Documents/My Games/Mafia Definitive Edition/Saves/videoconfig.cfg`
and modify to<br>
```sh
`0 0 [you width] [your height] 0 0 0 0 0`
```

- Then make videoconfig.cfg read-only.  
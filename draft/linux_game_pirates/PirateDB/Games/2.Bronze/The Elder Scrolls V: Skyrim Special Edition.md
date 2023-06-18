## The Elder Scrolls V: Skyrim Special Edition [Wine]

- You need to use this command to fix the audio:
```sh
PULSE_LATENCY_MSEC=90
WINEDLLOVERRIDES="xaudio2_7=n,b"
```
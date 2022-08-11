## Destroy All Humans [Wine]

- If you experience sound stutters, this might be useful:

Revert `load-module module-udev-detect tsched=0` to the default form `load-module module-udev-detect` in `/etc/pulse/default.pa` the edited line which includes `tsched=0`
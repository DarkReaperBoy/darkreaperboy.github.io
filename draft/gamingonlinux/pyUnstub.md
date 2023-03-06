# pyUnstub fork - Steam Stub Remover
- This script removes validation checks in executables for steam games. It works for native games and should be used when Goldberg Steam Emu alone doesn't work.

How to run:

```sh
pip3 install -r requirements.txt

if ['$0' == 'yes']; then
   echo "Hello world!"
fi
```

```sh
python pyUnstub.py game-executable
```

## Mentions

If requirements.txt gives you an error about lief, you must modify lief== with the current version that is available on your distro. For example on arch it is at 0.10.1 currently.

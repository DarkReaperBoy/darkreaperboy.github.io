# PirateDB - Repackers
Compatibility information for pirated games on Linux, be it Native or through Wine.
<br><br>

## Fitgirl's Repacks

- [Run with script](https://github.com/Francesco149/protonfit) created by Francesco149.

- Modifications got upstreamed to Wine 5.17, you can install vcrun2015 and vcrun2017 instead of using the script above.

- Even if wine compatility improves, the usage us freearc compression will always be unstable and we can't guarantee your bandwidth won't be wasted.
<br>

## DODI's Repacks

- No tests were made after 5.17 update of Wine which fixed Fitgirl's Installer at least.

- Installing vcrun2015 or vcrun2017 is still recommended.

- Works like Fitgirl, freearc usage.

## Darck Repacks

- Working fine. Tested on 5.17

## IGGGAMES

- As far as compatibility goes, it's working fine. They have a pretty bad reputation though.

## ElAmigos
ElAmigos Repacks installation immediately fails with the error below beginning from Kron4ek-Wine-TKG-5.20 through Kron4ek-Wine-TKG-6.0rc1, Wine Staging 5.21, and lutris-5.21-2. You can still play games with these versions of Wine, it is just the installer that fails.

"ISDone.dll"

An error occurred when unpacking: unable to write data to disk!
Unarc.dll returned an error code: -5
ERROR: archive data corrupted (decompression fails)"

Solution
Using versions Kron4ek-Wine-TKG-5.19 and lower install fine (tested from version Kron4ek-Wine-TKG-5.17-Kron4ek-Wine-TKG-5.19). You can also use vanilla Wine Staging (tested from 5.17-5.20, 5.22, and 6.0rc1).
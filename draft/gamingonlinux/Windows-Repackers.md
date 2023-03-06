# PirateDB - Repackers
List of Windows repackers and how their installers work on wine.
<br>

## DODI's Repacks

The recent repacks are no longer using freearc and lolz compression from what I can tell. Making them much more stable comparing to fitgirl which continues to use these broken methods.

Installing vcrun2015 or vcrun2017 is recommended.

## Fitgirl's Repacks

Modifications got upstreamed to Wine 5.17, you can install vcrun2015 and vcrun2017 instead of using the script above.

Even if wine compatility improves, the usage of freearc and lolz will always be unstable and we can't guarantee your bandwidth won't be wasted.

## ElAmigos
ElAmigos Repacks installation immediately fails with the error below beginning from Kron4ek-Wine-TKG-5.20 through Kron4ek-Wine-TKG-6.0rc1, Wine Staging 5.21, and lutris-5.21-2. You can still play games with these versions of Wine, it is just the installer that fails.

"ISDone.dll"

An error occurred when unpacking: unable to write data to disk!
Unarc.dll returned an error code: -5
ERROR: archive data corrupted (decompression fails)"

Solution
Using versions Kron4ek-Wine-TKG-5.19 and lower install fine (tested from version Kron4ek-Wine-TKG-5.17-Kron4ek-Wine-TKG-5.19). You can also use vanilla Wine Staging (tested from 5.17-5.20, 5.22, and 6.0rc1).

## IGGGAMES

As far as compatibility goes, it's working fine. They have a pretty bad reputation though.

## =nemos=

Based on one install, it is reported as working without problems.

## Xatab

From my tests, it is pretty broken on wine. isskin.dll error can be fixed with vcrun6 and mfc42 but then there are access violation errors I have no idea on how to fix. Best to avoid this.

## Darck Repacks

Not recommended at all. Extremely high RAM usage. It reaches around 14GB alone on repacks larger than 20GB.
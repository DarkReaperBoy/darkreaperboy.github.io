#!/bin/bash

### johncena141 repacking group's fork of wine standalone script created by Kron4ek

## Settings
export WINEESYNC=1
export WINEFSYNC=1
export WINE_LARGE_ADDRESS_AWARE="1"
export WINEDEBUG="-all"
export USESYSWINE="no"
export WINDOWED="yes"
export RESOLUTION="1366x768"
export FIXRES="no"

# Forbid root rights
if [ ! "$ROOT" ] && [ "$EUID" == "0" ]
then
echo -e "\e[91m"
echo "Don't use the sudo command or the root user to execute these scripts!"
exit
fi

# User
export USER="$(id -u -n)"

# Directory
export SCRIPT="$(readlink -f "${BASH_SOURCE[0]}")"
export DIR="$(dirname "$SCRIPT")"

if [ "$USESYSWINE" == "yes" ]
then if [ -f "$DIR/syswine" ]
	then source "$DIR/syswine"
	fi
	if [ ! -f "$WINE" ]
	then if [ -f "/usr/bin/wine" ]
	then export WINE="/usr/bin/wine"
		export REGEDIT="/usr/bin/regedit"
		elif [ -f "/usr/bin/wine-development" ]
	then export WINE="/usr/bin/wine-development"
		export REGEDIT="/usr/bin/regedit-development"
		elif [ -f "/usr/local/bin/wine" ]
	then export WINE="/usr/local/bin/wine"
		export REGEDIT="/usr/local/bin/regedit"
		fi
	if [ "$WINE" ]
	then rm -f "$DIR/syswine"
		echo "export WINE='$WINE'" >> "$DIR/syswine"
		echo "export REGEDIT='$REGEDIT'" >> "$DIR/syswine"
		fi
	fi
	
elif [ -f "$DIR/syswine" ]
then rm "$DIR/syswine"
fi

export WINEPREFIX="$DIR/game/prefix"
export WINEDLLOVERRIDES="mscoree,mshtml="
export UPDATEPREFIX="yes"

# Get native screen resolution
if [ "$FIXRES" == "yes" ]
then if [ "$WINDOWED" == "no" ] && [ ! "$1" == "-sw" ] && [ -f "/usr/bin/xrandr" ]
	then export RESOLUTION="$(xrandr -q | awk -F'current' -F',' 'NR==1 {gsub("( |current)","");print $2}')"
	else export FIXRES="no"
	fi

fi
"./game/wine/bin/wine" "game/files/bin/x64/Cyberpunk2077.exe"

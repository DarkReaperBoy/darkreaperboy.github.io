#!/bin/bash

#author          :nirala
#description     :This script is included in johncena141's repack for linux.
#title           :run_rdr2.sh
#version         :1.1

CPULIMIT_ENABLED=1
CPUS=$(grep -c ^processor /proc/cpuinfo)
CPUPERCENT=100
PULSE_LATENCY_MSEC=60
VERBOSE=0
WINEESYNC=1
WORKDIR=$PWD
WINEPREFIX=$WINEPREFIX
WINDOWED="yes"

EXECUTABLE="RDR2.exe"               # name of the executable
SIGCONT_PATTERN="^.*WerSetFlags \([0-9]+\).*$" # pattern to match from wine log after which sigstop/sigcont is called
SLEEP_MAX=5                         # max seconds to sleep before calling sigcont
TITLE=RDR2-Linux-Fixed              # release name

function usage {
    echo "Run Red Dead Redemption 2 by johncena141 [wine]"
    echo ""
    echo "Usage:"
    echo "  $(basename $0) [OPTION]..."
    echo ""
    echo "Arguments:"
    echo "  -d \$work_dir            Working directory"
    echo "  -e                      Disables WINEESYNC"
    echo "  -g \$rdr2_exe            Path to game (RDR2.exe)"
    echo "  -p \$latency             Pulseaudio latency (msec)"
    echo "  -w \$wine_binary         Path to wine binary"
    echo "  -x \$wine_prefix         Wine prefix, defaults to \$WINEPREFIX"
    echo ""
    echo "  -v                      Verbose logging"
    echo "  -h                      Print help and exit"
}

while getopts "d:g:p:w:x:ehv" opt; do
    case $opt in
    d)
        WORKDIR=$OPTARG
        ;;
    e)
        WINEESYNC=0
        ;;
    g)
        GAMEPATH=$OPTARG
        ;;
    p)
        PULSE_LATENCY_MSEC=$OPTARG
        ;;
    w)
        WINEPATH=$OPTARG
        ;;
    x)
        WINEPREFIX=$OPTARG
        ;;
    h)
        usage
        exit 0
        ;;
    v)
        VERBOSE=1
        ;;
    *)
        echo "Invalid option: -$OPTARG" >&2
        exit 1
        ;;
    :)
        echo "Option $OPTARG requires an argument." >&2
        exit 1
        ;;
    esac
done

# use the defaults provided in the release if not specified otherwise
if [[ -z ${GAMEPATH+x} ]]; then
    GAMEPATH="$WORKDIR/game/$EXECUTABLE"
fi
if [[ -z ${WINEPATH+x} ]]; then
    WINEPATH="$WORKDIR/wine/bin/wine"
fi

function check {
    re='^-?[0-9]+$'
    if ! [[ $PULSE_LATENCY_MSEC =~ $re ]]; then
        echo "pulse latency was not a number: $PULSE_LATENCY_MSEC"
        exit 1
    fi
    if [ ! -f "$GAMEPATH" ]; then
        printf "Gamepath is not a file: $GAMEPATH\n"
        exit 1
    fi
    if [ ! -f "$WINEPATH" ]; then
        printf "Winepath is not a file: $WINEPATH\n"
        exit 1
    fi
    local cpu_limit=$(which cpulimit 2>&1)
    if [ ! -x "$cpu_limit" ]; then
        if [[ $VERBOSE -ge 1 ]]; then
            printf "Disabled cpulimit suppport; binary not found in PATH\n"
        fi
        CPULIMIT_ENABLED=0
    fi
}

function info {
    printf "[lgp] Starting $TITLE"
    if [[ $VERBOSE -ge 1 ]]; then
        printf "\n - game"
        printf "\n     path: $GAMEPATH"
        printf "\n     wine: $WINEPATH"
        printf "\n     wine_prefix: $WINEPREFIX"
        printf "\n - environment"
        printf "\n     $CPUS cpus @ $CPUPERCENT%%"
        printf "\n     PULSE LATENCY: $PULSE_LATENCY_MSEC"
        printf "\n     WINEESYNC: $WINEESYNC"
        printf "\n     WINEPREFIX: $WINEPREFIX"
    fi
}

function wine_cmd {
    local cmd="
        PULSE_LATENCY_MSEC=$PULSE_LATENCY_MSEC \
        WINEESYNC=$WINEESYNC"

    if [[ ! -z "${WINEPREFIX}" ]]; then
        cmd="$cmd WINEPREFIX=$WINEPREFIX"
    fi

    if [[ $CPULIMIT_ENABLED -eq 1 ]]; then
        local real_limit=$(($CPUS * CPUPERCENT))
        cmd="$cmd cpulimit --limit=$real_limit"
    fi
    cmd="$cmd \"$WINEPATH\" \"$GAMEPATH\""

    if [[ $VERBOSE -ge 1 ]]; then
        echo "executing command $cmd"
    fi

    eval $cmd
}

function start_game {
    while read b; do
        if [[ $VERBOSE -ge 1 ]]; then
            printf "\n[wine] %s" "${b}"
        fi
        if [[ $b =~ $SIGCONT_PATTERN ]]; then
            return 0
        fi
    done < <(wine_cmd 2>&1)
    return 1
}

function sig_stop_cont {
    DELAY=$((1 + $RANDOM % $SLEEP_MAX))
    if [[ $VERBOSE -ge 1 ]]; then
        printf "\n[lgp] SIGSTOP/SIGCONT, starting game in $DELAY seconds.."
    fi
    printf "\n"
    sleep $DELAY
    PID=$(pgrep $EXECUTABLE)
    kill -s SIGSTOP $PID
    kill -s SIGCONT $PID
}

# perform some sanity checks on the input parameters
check
info
# spawn the game in a background process
start_game &
# wait until the game sent the appropriate signal (cf. SIGCONT_PATTERN)
wait $!
if [[ $? -ne 0 ]]; then
    printf "\nError starting game."
    exit 1
fi
# call SIGSTOP/SIGCONT to really start the game
sig_stop_cont

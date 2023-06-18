# SquashFS Compression - Tutorial

Notes:
- I will be explaining below how to use SquashFS compression on Games in combination with SquashFUSE. This is used to reduce the size of a game while also being able to play it at any time without requiring any extra space.
- The compressed files will be read-only so if you compressed config files, the settings made in-game won't be taken into effect. That's why it is recommended that you only compress the big files. for example if a game has 95% of it's size on /game/data/paks/, you should only compress paks and place the paks.squashfs file in /game/data/
- Don't have high expectations. Many games are not very compressible and this will cause some performance impact, on some games this impact might be unnoticeable. Especially with ZSTD instead of LZMA.

### Compression Settings

- The method of compression I recommend is zstd. It has almost the same compression ratio as lzma and half of the performance impact, making it perfect for this use.

```sh
mksquashfs [source folder] [SquashFS target file]  -b 1048576 -comp zstd -Xcompression-level 22
```

- The settings above may or may not cause minor lag issues.

- Lower compression settings:

```sh
mksquashfs [source folder] [SquashFS target file]
```

- By default easier compression settings are used, they are less likely to cause lag but the compression result is a lot smaller.

### Mounting

- An example of the mounting script is this:

```sh
#!/bin/sh

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${CURRENT_DIR}"
chmod -R 0700 tools mount
mkdir -p game
cd "${CURRENT_DIR}"/tools
./squashfuse "${CURRENT_DIR}"/image.squashfs "${CURRENT_DIR}"/where you want to mount it
```
- The squashfuse file is available for download in this directory. This file is necessary in order to mount the squashfs image and be readable by the game. (Without root privileges)

### Ejecting

- An exemple of the ejecting script is this:
```sh
#!/bin/sh

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${CURRENT_DIR}"
chmod -R 0700 tools mount
umount "${CURRENT_DIR}"/where-its-mounted && rm -R "${CURRENT_DIR}"/where-its-mounted
 ```
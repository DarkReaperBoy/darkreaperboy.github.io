/// Before gaming ///

You have installed:
Nvidia driver:  https://developer.nvidia.com/vulkan-driver/


Set in nvidia-settings :
OpenGL settings > Image Settings: High Performance
Sync to Vblank > false
Antialiasing settings > Use application settings
Anisotropic Filtering > Override > x16

Install CUDA:
sudo apt install nvidia-cuda-toolkit

In your Wine-Config add the Libraries for:
nvapi
nvapi64
nvcuda
nvcuvid

In dxvk.conf:
dxgi.nvapiHack = False



/// When starting gaming ///

Set the PowerMizer to Perform:
nvidia-settings -a "[gpu:0]/GpuPowerMizerMode=1"

Adding to your usual Export:
WINEDEBUG=-all 
__NV_PRIME_RENDER_OFFLOAD=0 
__GLX_VENDOR_LIBRARY_NAME=nvidia 
__GL_SYNC_TO_VBLANK=0 
__GL_THREADED_OPTIMIZATIONS=1 
__GL_SHADER_DISK_CACHE_PATH="/pick/a/fast/nvme/CACHE" 
__GL_SHADER_DISK_CACHE_SIZE=2147483648
__GL_SHADER_DISK_CACHE_SKIP_CLEANUP=1 
__GL_SHADER_DISK_CACHE=1
__GL_SYNC_DISPLAY_DEVICE="HDMI-0"
DXVK_STATE_CACHE=1 
DXVK_STATE_CACHE_PATH="/pick/a/fast/nvme/CACHE"
DXVK_LOG_LEVEL=none 
DXVK_LOG_PATH=none


Note:
"/pick/a/fast/nvme/CACHE" - location where the cache files will be saved
"HDMI-0" - the ID of the display you will be syncing, found in nvidia-settings


// BUGS and GLITCHES
Screen tearing:
Turn off your other displays, if you have more than 1, make sure you have one display detected,
then log-off and log back in your OS

!Smooth 60fps:
Capping fps to 60 may result in 1-2 frames/second missing the sync.
Increasing the "max fps" to something like 62fps, fixes the issue.

In-Game glitches (seen here only in FC5 so far):
Glitches appear as objects missing or blinking textures.
Those are problems most probably from freed resources that discard FBOs or/and shaders(?), 
but once the shaders are cached, glitches disappear. 
Keeping the GPU load under 100%, will probably avoid the issue altogether.
Quick-fix: Enter in the menu>Options, then go back to gaming (the cache will be flushed, and glitches disappear)

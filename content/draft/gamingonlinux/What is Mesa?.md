 
# What is Mesa?

You’ve most likely heard the term “Mesa” thrown around a lot, but you might not quite understand what it is. This is an attempt to clear up the question of “What exactly is Mesa and do I need it?”.

**Note**: This is an attempt to keep things simple for the average user to understand, so keep it simple.

Mesa is a term used to encompass the different open source graphics drivers available on Linux, so it can be what powers your GPU. I say can be, since AMD and NVIDIA also have their own closed-source proprietary drivers (what you would download from their website on Windows, if that makes that clearer).

Originally, Mesa began only to serve as an open source Linux implementation of OpenGL, but it has since grown to be a lot more than that. Mesa was started in 1993 by Brian Paul, but now it has many more developers, some of which are employed by the likes of AMD, Intel, Valve and others. Linux game porters like Feral Interactive have also contributed code to Mesa. Plenty of people also help with Mesa development in their spare time too.

Mesa itself is not a driver, as you will be using a different part of Mesa for each graphics card vendor. Still with me? Okay!

Mesa implements various API’s (Application programming interface) like OpenGL, OpenGL ES, OpenCL, OpenMAX, VDPAU, VA API, XvMC and Vulkan.

## Mesa versioning
Something also worth noting, is that Mesa has switched to a year-based release numbering scheme. This is why Mesa jumped from 13 to 17 in release numbers.

Usually, it is recommended to update to a new major version of Mesa once they have done the first round of bug fixing. If you're concerned with stability and reliability stick to point release numbers like 17.0.1.

## How to find your current version of Mesa

Do this in terminal:

```glxinfo | grep Mesa```

Which will give you something like this:

``OpenGL core profile version string: 4.5 (Core Profile) Mesa 17.0.1
OpenGL version string: 3.0 Mesa 17.0.1
OpenGL ES profile version string: OpenGL ES 3.1 Mesa 17.0.1
So you can see your Mesa version, along with what version of OpenGL support you have. This will likely show nothing if you're not using Mesa.``

## Intel
The story for Intel is mostly pretty simple, if you’re using Intel integrated graphics, you will be using Mesa. Except for the ‘PowerVR’ based chips in the GMA 500, GMA 600, GMA 3600, GMA 3650 series.

Intel usually supports Mesa quite well and even have their own Mesa update tool named ‘Intel® Graphics Update Tool’ to give certain distributions the latest version of Mesa.

Intel also have the ‘anv’ Vulkan driver, which seems to be largely feature complete and should work.

## AMD

There are a number of different Mesa drivers available for AMD cards, you can see a little information on that here.

The latest AMD cards use the ‘amdgpu’ kernel driver (the proprietary AMDGPU-PRO also uses a version of this, which has been accepted into 4.15 Linux kernel), whereas all older cards use the ‘radeon’ kernel driver. Each part of Mesa listed below hooks into one of those kernel drivers, which part depends on your graphics card model.

As mentioned, the kernel driver (either ‘radeon’ or ‘amdgpu’) is paired with one of these:

radeon - R100 series
r200 - R200 series
r300g - R300, R400, and R500 series
r600g - R600, R700, HD 5000 and HD 6000
radeonsi - HD 7000, HD 8000 and RX 200, RX 300, RX 400, RX 500 and RX Vega.
You also have the ‘radv’ driver for Vulkan, which was officially added in Mesa 13. It’s still in development right now, so it’s to be considered in beta.

Right now, most AMD graphics cards have pretty good support in Mesa, with the closed source driver often not being needed. [Our own statistics](https://www.gamingonlinux.com/users/statistics) have users telling us that less than 10% (and decreasing) of Linux gamers with an AMD GPU use the proprietary AMD driver as of October 2017.

## NVIDIA

NVIDIA isn’t quite such a nice story, as NVIDIA doesn't help towards development of Mesa, since they prefer their own closed-source proprietary drivers. For NVIDIA cards Mesa is typically quite far behind the closed drivers in terms of performance and features due to this. Mesa also typically doesn’t work well, if at all with the very latest generation of NVIDIA graphics cards.

With Mesa, you have the nouveau (pronounced like nu-vo) kernel driver, but like AMD, NVIDIA uses nouveau plus another part of Mesa depending on your graphics card model.

Later generations of NVIDIA cards require something called ‘signed firmware’ in order for Mesa to interact with them and NVIDIA has been quite slow to release it.

The ‘Pascal’ generation in particular right now has very little support, as NVIDIA has only recently provided the signed firmware required.

For NVIDIA, it’s usually best to stick with the proprietary driver. Older generations have reasonable support in Mesa now, but you will still see better performance with the proprietary NVIDIA driver.

### See also
* [Mesa Matrix](https://mesamatrix.net/) - table illustrating OpenGL support situation in various Mesa drivers.

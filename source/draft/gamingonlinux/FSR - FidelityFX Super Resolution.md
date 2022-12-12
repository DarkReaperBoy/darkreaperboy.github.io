 
FSR can be used to get better performance in games at the cost of visuals. It is comparable with DLSS, but can be applied to every game. There are several modes from ultra quality to maximum performance. For example, it is possible to double your FPS with very little visual loss. FSR only works if the game is GPU limited (your GPU runs at 100%).

Note that the image degradation is noticeable. Full HD + ultra high graphics + FSR might not be worth it. However FHD + low settings + FSR with 60 FPS might be significantly better than having 30 FPS with the same settings and no FSR. The performance difference might be even bigger if your VRAM is not big enough. The image degradation is not as noticeable with high resolution, so 4k ultra high + FSR might fit your needs.

== Setup with Wine ==

=== Basic setup ===

* Set <code>WINE_FULLSCREEN_FSR=1</code> as [[Environment variables|environment variable]]

* In game set your setting according to the table on page 10 of [https://github.com/GPUOpen-Effects/FidelityFX-FSR/blob/master/docs/FidelityFX-FSR-Overview-Integration.pdf this] document: For example, if you want to have Ultra Quality, and your output resolution (the resolution of your actualy monitor) is 1920x1080, you set your ingame resolution to 1477x831. Setting your ingame resolution to your output resolution disables FSR.
* In game
** Enable anti aliasing (TAA, MSAA, FXAA, ...)
** Disable effects that generate noise (like Motion Blur, Blur, Chromatic Aberration, Sharpening, etc.)
* As of now you need to use the tkg version of wine, and MIP-Bias is not yet implemented.

=== More configuration options ===
You can add more options with [[environment variables]]:

* <code>WINE_FULLSCREEN_FSR_STRENGTH=4</code>

This sharpens the image. 4 is an example value. 0 is maximum sharpness, higher values mean less sharpening. (I think 5 is the maximum. If you know more, please edit this.) The default is 2 but this is probably too much for your game. Just experiment with different values.

* <code>WINE_VULKAN_NEGATIVE_MIP_BIAS=45</code>

This results in textures with higher resolution. 45 is an example value. AMD recommends:
{| class="wikitable"
!Quality Setting
!MIP Bias
|-
|Ultra Quality
|38
|-
|Quality
|58
|-
|Balanced
|79
|-
|Performance
|100
|}

* <code>WINE_VULKAN_BIAS_ALL_SAMPLER=1</code>

This applies the MIP Bias to everything. 1 is enabled, 0 is disabled. This can result in weird game behaviour.

=== Examples ===

* [https://www.reddit.com/r/linux_gaming/comments/q3dl6y/witcher_3_fsr_is_working_great/ Witcher 3]

== Setup with Gamescope ==
You can enable FSR in Gamescope with <code>gamescope -U --fsr-sharpness 4 --</code> as command prefix. 4 is an example value, replace it by something between 0 (max) and 20 (min). This also works for native games.

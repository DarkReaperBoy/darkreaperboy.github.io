 
Hardware compatibility with Linux is sometimes tricky. You can not buy just anything and expect it to work. Some manufacturers don't support Linux at all, and sometimes the support is not good.

This page aims to make buying recommendations for problematic hardware categories.

'''PLEASE NOTE:''' Regarding specific recommendations. Old or unavailable hardware is to be removed, and the list should be short. Best case would be one device that is good, cheap, and available in all countries. If this doesn't exist, there may be different recommendations for different countries and/or different price categories. Every price is to be provided with a timestamp in the form YYYY-MM. Mentioned devices should have great out-of-the-box experience. If there are no devices with great out-of-the-box experience available, there might also be devices mentioned that require as little tweaking as possible. Tweaking steps are to be mentioned in these cases. Feel free to add categories to further distinguish between different features.

You may find a more extensive list of hardware that is known to work [[Working Hardware|here]].

== Problematic Hardware ==
You should be wary not to buy the wrong stuff. If you buy wrong, you might end up with completely incompatible hardware.

=== WiFi Sticks ===
Many models provide no drivers, and will not work.

The important thing in the sticks is the chip. Manufacturers sometimes have the same model with different chips. Chips that often work, are Qualcomm Atheros, and [https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html Intel].

=== Bluetooth Sticks ===
Many models provide no drivers, and will not work.

Recommendations: To be done.

=== Printer/Scanner ===
Many models provide no drivers, and will not work.

Recommendations: To be done.

== Less problematic Hardware ==
Your chance of picking a device that straight up doesn't work, is much lower. However, you might face some jank, some features might not work, and stuff might not be flawless.

=== GPUs ===
This topic is subject of discussion. If you want to read more about it, you might find something in [https://www.reddit.com/r/linux_gaming/comments/tdmup7/unpopular_opinion_i_feel_like_the_whole_nvidia/ this reddit post]. AMD and Nvidia both work, and you'll ''probably'' be fine with either. However:
* If you want as little problems as possible, buy an AMD GPU that is at least a couple months old. The drivers typically take a bit of time to mature.
** If you want FOSS drivers, AMD is your only option. There are FOSS drivers for Nvidia (Nouveau), and Nvidia even released their kernel module, but they are no option for gaming (at least yet).
**If you want long support, AMD is the way to go, as support is essentially never dropped.
* Nvidia provides proprietary day one drivers with full functionality, however they are not well integrated, due to not being FOSS. There might be some delayed features, or some bugs. But as said, you're ''probably'' going to be fine. If you're not, [https://www.youtube.com/watch?v=MShbP3OpASA&t=2894s blame Nvidia].
** If you want DLSS, Nvidia is your only option. However, AMD (and Nvidia) support [[FSR - FidelityFX Super Resolution|FSR]] and FSR 2.0, which works in a similar way.
* If you buy a very old GPU, make sure that it has Vulkan support.

=== Gaming Laptops ===
If you don't want to do gaming on your laptop, many devices should be ok, the problem is basically just WiFi and Bluetooth, and even those often work. You might face problems if you have a device with two GPUs (should be solvable), or other special components (fingerprint reader, etc - might not be solvable).
* Manufacturers with good support. You can't do anything wrong if you buy one of those (as long as the performance is good enough for you):
** System 76
** Tuxedo
**Slimbook
* Specific recommendations for a gaming laptop:
**Lenovo IdeaPad Gaming 3 15ACH6 | EU | around 800-1 000 € (multiple similar models available) | Available without OS | Out of the box full compatibility (WiFi since kernel 5.16, on older manual installation of driver<ref>https://github.com/lwfinger/rtw89</ref> needed)

=== Bluetooth Headphones ===
TODO: Is this category problematic?

==== Noise Cancelling ====

* Over Ear
** Premium: [https://www.rtings.com/headphones/reviews/sony/wh-1000xm4-wireless Sony WH-1000XM4] | EU | 250€ | 2022-03<!-- Features: Great noise cancelling, great audio quality. Good latency when connected via audio jack. No battery charge required when not using ANC, and connected via audio jack.

Problems: High latency when connected via Bluetooth. No Bluetooth/ANC possible while charging. No sound via USB. Hissing while charging (possibly because bad charger). -->

==== Non Noise Cancelling ====

* Headsets
** Premium: [https://www.rtings.com/headphones/reviews/logitech/g933-wireless-gaming-headset Logitech G933] | EU | 290€ | 2022-03

=== Mainboard ===
Mainboards should do their job for the core functionality. However, features like fan control, Bluetooth, WiFi, or RGB may not be supported out of the box. If you don't need any of this, just buy whatever you want.

Since Mainboards usually just work, recommended devices should have special features that are working. Please mention all features that you tested.

==== AMD ====

* AM4
** [https://it.msi.com/Motherboard/B350-TOMAHAWK-ARCTIC/Specification MSI Tomahawk Arctic B350]

=== USB Digital/Audio converter ===
TODO: Is this category problematic?
*Good value: Sharkoon Gaming DAC Pro S V2 | EU | 30€ | 2022-03 | Small form factor | Problems: Slight hissing when playing no audio

=== USB microphones ===
TODO: Is this category problematic?
* Good value: Samson Meteor Mic | EU | 45€ | 2022-03

=== Mice ===
If you just want something that works, and you are ok with [[Misc#Changing%20Mouse%20settings%20(DPI%252C%20lift%20of%20distance%252C%20etc)|booting Windows once to change the settings]] (and you don't need to change them all the time), buy whatever you want.

If you want native support, you can have a look at [https://pwr-solaar.github.io/Solaar/devices Solaar] (for logitech) or [https://github.com/openrazer/openrazer OpenRazer].

*
=== Keyboards ===
If you just want a standard keyboard, buy whatever you want. Everything will work. Problematic features are just stuff like special makro buttons, or RGB.

If you want native support, you can have a look at [https://pwr-solaar.github.io/Solaar/devices Solaar] (for logitech) or [https://github.com/openrazer/openrazer OpenRazer].

== Hardware with RGB support ==
Hardware in this category is unproblematic, other than for RGB support. If you don't care for that, just buy whatever you want.

Recommendations:

* To be done

== Generally unproblematic hardware categories ==

* Monitors
* Headphones/Speaker with audio jack
*CPUs

== References ==
*

*

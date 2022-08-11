 
{{Infobox non-game
|cover        = Tux Linux Mascot.svg
|developers   =
{{Infobox game/row/developer|Linus Torvalds}}
|release dates =
{{Infobox game/row/date|Linux|September 17, 1991}}
|winehq       =
|wikipedia    = Linux
}}

'''Key points'''
{{++}} Wide variety of distributions (distros) available, allowing unparalleled user choice and customizability.
{{ii}} Some native Linux games may perform better or worse when compared to other operating systems.
{{ii}} Many [[:Category:Windows|Windows]] games can be played on Linux using [https://github.com/ValveSoftware/Proton Proton] or [[#Wine|Wine]].

'''Resources'''
{{ii}} [https://distrowatch.com/ DistroWatch] - page dedicated to Linux distributions
{{ii}} [https://linuxjourney.com/ Linux Journey] - a beginner-friendly page about learning Linux in general
{{ii}} [https://www.protondb.com/ ProtonDB] - crowdsourced database of Proton (Steam Play) games performance
{{ii}} [https://www.phoronix.com/ Phoronix] - website dedicated to hardware and benchmarking in Linux
{{ii}} [https://openbenchmarking.org/ OpenBenchmarking] - a list of user-made benchmarks in Linux
{{ii}} [https://flightlessmango.com/ FlightlessMango] - a list of user-made benchmarks in Linux
{{ii}} [[ARM]] - info on Linux ARM distros, devices, and software support
{{ii}} [https://wiki.archlinux.org/ ArchWiki] - wiki intended for Arch but is useful for other distros
{{ii}} [https://wiki.gentoo.org/wiki/Main_Page Gentoo Wiki] - wiki intended for Gentoo but is useful for other distros

'''Communities'''
{{ii}} [https://gamingonlinux.com Gaming On Linux] - a large community dedicated for gaming on Linux
{{ii}} [https://www.reddit.com/r/linux_gaming/ /r/linux_gaming] - Linux gaming subreddit
{{ii}} [https://www.reddit.com/r/linux4noobs/ /r/linux4noobs] - subreddit dedicated for Linux newbies
{{ii}} [https://www.reddit.com/r/linuxquestions/ /r/linuxquestions] - subreddit dedicated to Linux-related questions
{{ii}} [https://www.reddit.com/r/linuxhardware/ /r/linuxhardware] - subreddit dedicated to Linux hardware

==General==
* The strength and weakness of Linux is its freedom of user choice.
* There are no best distros; it all depends on the user's need. It is common to switch between distros ("distro hopping") until settling on one.
* Always refer to the documentation of the chosen distro in case there is a problem. It's advisable to check the [https://wiki.archlinux.org/ ArchWiki] regardless of the distro as it is broadly and succinctly written. In addition, reaching out to the distro's community for support is always an option.
* Use virtual machines to test distros.
** Some Linux distributions (all major ones, but not every single one) are supported by a tool called [https://www.ventoy.net/en/plugin_vtoyboot.html Ventoy], which allows you to install the distro into a virtual machine virtual disk file, and then boot it on your physical hardware. This allows you to try out distributions and even games on your real physical hardware without having to commit to removing your existing operating system or dual booting.

==Distributions==
There are two types of release models for Linux distros.

===Fixed release===
{{++}}Offers stable packages.
{{++}}Most distros are beginner-friendly.
{{++}}Very little maintenance.
{{--}}Package versions are usually tied to distro version, so the OS needs to be updated to get the latest packages.
{{--}}Stable packages typically don't have the newest features. This is especially important in the case of [[Glossary:Graphics card|GPU]] drivers.<br> This issue is alleviated by the fact that the vast majority of user-facing applications are now available as a [[w:Flatpak|Flatpak]], [[w:Snap (software)|Snap]] or and [[w:AppImage|AppImage]] which allow you to run the latest version of the application regardless of what exact version of underlying OS you have.
{{--}}Manual intervention is required to add user-made repositories in some distros.
{{ii}} Updating a distro to the latest version doesn't normally require a fresh install, but can take up to several hours.
{{ii}} Many Debian-based distros offer [https://help.ubuntu.com/community/UbuntuBackports "backports"] and/or [https://wiki.debian.org/DebianTesting "testing"] modes that provide newer versions of some packages than what the stable version does.

{| class="wikitable sortable"
|-
! Distribution !! Based on !! Desktop(s) <ref group="fr note">Default options are marked in bold</ref> !! Release cycle !! Supported by<ref group="fr note">look at Official Support TODO: add it</ref> !! Description
|-
||'''[https://www.ubuntu.com/download/desktop Ubuntu] and [https://www.ubuntu.com/download/flavours Ubuntu flavours]''' || Debian || GNOME, KDE Plasma, LXQt, Budgie, MATE, Xfce, UKUI || 6 months, 2 years for LTS || Steam, GOG, many commercial developers ||style="text-align: left;"| The most popular distribution. Ubuntu LTS (Long Term Support) is officially supported by Steam. Ubuntu non-LTS is updated more often and contains newer packages and functionality. Ubuntu flavours offer different [[Linux#Desktop environments|desktop environments]] with the same compatibility of Ubuntu.
|-
|| '''[https://system76.com/pop Pop!_OS]''' || Ubuntu || '''GNOME''' || 6 months || same as Ubuntu<ref name=support group="fr note">Support is not official, but the distros are similar enough that everything which works for Ubuntu will work in Pop!_OS.</ref> || style="text-align: left;"| An Ubuntu-based distro created and maintained by System76 which utilizes its own repository. Unlike Ubuntu, it includes much more recent drivers for graphics cards, the installer ships with Nvidia supporta, and it's generally more recommended for beginners.
|-
||'''[https://linuxmint.com/ Linux Mint]''' || Ubuntu LTS || Cinnamon, MATE, XFCE || Up to 2 years || same as Ubuntu<ref name=support group="fr note" /> || style="text-align: left;"| The most popular beginner-friendly Linux distribution. LMDE 2 Edition is based on Debian. Packages may be much older compared to Ubuntu LTS releases. The main advantage of Linux Mint is the built-in kernel upgrader.
|-
||'''[https://neon.kde.org KDE Neon]''' || Ubuntu LTS || '''KDE Plasma''' || Up to a year || same as Ubuntu<ref name=support group="fr note" /> || style="text-align: left;"| A distro created by the KDE community. Compared to Kubuntu (A KDE Plasma-flavoured Ubuntu), it provides the latest version of the KDE Plasma desktop environment, while simultaneously being able to use packages from Ubuntu LTS.
|-
||'''[https://getfedora.org/ Fedora] and [https://spins.fedoraproject.org/ Fedora Spins]''' || Independent || GNOME, KDE Plasma, XFCE, MATE, Cinnamon, LXDE, LXQT, SUGAR ||6 months|||| style="text-align: left;"| Fedora is a very stable, independent distribution sponsored by Red Hat Enterprise. GNOME is its default desktop environment, but Fedora Spins offer many alternatives. It is as user-friendly as Ubuntu, but tends to be more willing to move to new technologies. Spins offer different desktop environments, but when it comes to compatibility, they are the same as Fedora.
|-
|| '''[https://get.opensuse.org/leap/ openSUSE Leap]''' || Independent || GNOME, KDE Plasma, XFCE || 1 year for each new release ||  || style="text-align: left;"| Leap uses source from SUSE Linux Enterprise (SLE), which gives it a great level of stability. openSUSE has YaST, which is a user-friendly GUI to install packages, manage the system, and install [[Nvidia]] proprietary drivers in a simple way.
|-
||'''[https://store.steampowered.com/steamos/ SteamOS]''' || Arch Linux(starting with version 3.0) Debian(old versions)<ref>{{Refurl|url=https://www.debian.org/releases/|title=Debian releases|date=2021-06-26}}</ref> || '''KDE Plasma''' || Varies || Steam || style="text-align: left;"| Linux distribution made by [[Company:Valve Corporation|Valve Corporation]] specifically for the Steam Machine or couch gaming. It currently provides the latest stable Linux kernel along with newer GPU drivers and an option to act as a desktop system. It may be behind in terms of packages updates.<br>{{--}} As of June 2021, SteamOS is based on Debian Jessie, meaning that non-Steam packages have not been updated since 2016.
|}

<references group="fr note" />

===Rolling release===
{{++}}Provides the latest version of packages once as soon as they're released by the upstream developers.
{{++}}No distro upgrade procedure is required, as most distros have only one version.
{{--}}A package update may cause stability issues, as extensive testing is usually limited.
{{--}}No currently-listed rolling release distribution has official support from any digital distribution store, due to the distros' reliance on <code>.rpm</code> binaries instead of <code>.deb</code>.
{{ii}}Some distros offer a semi-rolling release, meaning that packages will be tested before releases.

{| class="wikitable sortable"
|-
! Distribution !! Based On !! Desktop(s)<ref group="rr note">Default options are marked in bold</ref> !! Description
|-
||'''[https://archlinux.org/ Arch Linux]''' || Independent || GNOME, KDE Plasma, XFCE, MATE, Cinnamon, LXDE, LXQT, SUGAR, Deepin, Budgie, UKUI || style="text-align: left;"| Arch Linux is a distribution designed for advanced users looking to customize every aspect of their system, building from the ground up rather than the top down. There is a huge number of packages available through the [[w:Arch_Linux#Arch_User_Repository_.28AUR.29|AUR (Arch User Repository)]]. Arch Linux does not have a graphical installer and requires research on the user's part to properly install.<br>{{ii}}If you're new to Linux, '''Arch most definitely should not be your first choice'''.
|-
||'''[https://manjaro.org/ Manjaro]''' || Arch Linux || GNOME, KDE Plasma, Xfce || style="text-align: left;"| Manjaro is based on Arch Linux and offers a user-friendly experience out of the box. By default, it comes with Nvidia's proprietary drivers, which makes it straightforward to install. It uses the Pamac app to install native, AUR, Flatpak, and Snap packages in a simple way.
|-
||'''[https://get.opensuse.org/tumbleweed/ openSUSE Tumbleweed]''' || Independent || GNOME, KDE Plasma, XFCE|| style="text-align: left;"| A rolling version of openSUSE which uses automated testing to provide more stability than many other rolling releases. When used with BTRFS on a root partition, snapshots are taken before and after updates, allowing easy restores if there is an update breakage.
|-
||'''[https://getsol.us/ Solus]''' || Independent || Budgie, GNOME, MATE, KDE Plasma || style="text-align: left;"| Despite following the rolling release model, it provides stable packages and features great hardware compatibility with any GPU. It includes a special tool called Linux Steam Integration (LSI) which allows users to easily customize Steam, ranging from using the libraries from the system (native mode) or a forced 32-bit mode. Only stable releases of library and software are added, with very few exceptions—such as Nvidia's Vulkan beta drivers.
|}
<references group="rr note" />

==Desktop environments==
By default, Linux is a text/command-line based operating system. However, the Linux community has created varieties of desktop environments to offer a user-friendly GUI experience. Most include their own basic software for common use cases, such as a file explorer or word processor.

As a rule of thumb, environments with heavy RAM use typically add another 500 MB to the operating system's RAM requirements (which usually range from 500 MB to 4 GB), compared to environments with light RAM use.

{| class="wikitable sortable" style="nowrap;"
|-
! Name !! RAM use !! Description
|-
| [https://www.gnome.org/ GNOME] || Heavy || style="text-align: left;"|
One of the oldest desktop environments that is still continuously updated. Offers the most radical departure from the traditional Windows-style paradigm of start-menu-and-a-taskbar.<br> It has historically been considered slow, but has made huge strides in improving the fluidity and responsiveness in the last few years, particularly on gaming-grade machines. Offer variety of customizations via GTK3/4 themes and Gnome Extensions.
|-
| [https://www.kde.org/plasma-desktop KDE Plasma] || Heavy || style="text-align: left;"|
The first major comprehensive desktop environment released for Linux, which sees regular maintenance and feature updates. Out of the box, it offers a familiar Windows-like experience, but also allows nearly limitless ability to customize the functionality and look and feel of the desktop.
|-
| [https://getsol.us/home/ Budgie] || Heavy || style="text-align: left;"|
Created by a Solus developer and currently maintained by Solus Team. It serves as an alternative for GNOME with a much more desktop-like interface, which bears similarities to modern Windows.
|-
| [http://developer.linuxmint.com/ Cinnamon] || Heavy || style="text-align: left;"|
Created by Linux Mint Team, Cinnamon offers an experience that is very similar to Windows 7.
|-
| [https://xfce.org/ XFCE] || Light || style="text-align: left;"|
Starting off as a clone of a Unix-like desktop environment called CDE, it became its own with a Windows XP-like appearance and light memory usage. XFCE is well-suited for low-end hardware and people who like to settle on one user experience and never change it (while still getting the security and maintinence updates).
|-
| [https://mate-desktop.org MATE] || Light || style="text-align: left;"|
MATE spawned as a spiritual successor to GNOME 2 after a controversial change in GNOME 3. It is recommended for Windows and Mac users while providing its own feature set such as mouse hover audio previewing.
|-
| [https://www.lxde.org/ LXDE] || Light || style="text-align: left;"|
LXDE (Lightweight X11 Desktop Environment) is a lightweight and fast, feature-rich desktop environment. It is designed to be user-friendly and slim, while keeping resource usage low. LXDE strives to be modular, so each component can be used independently with few dependencies.
{{ii}}Original team which created LXDE has largely moved on to LXQT due to controversial changes in GTK framework, however, a community of loyal users and developers continues to use and maintain it.
|-
| [https://lxqt-project.org/ LXQT] || Light || style="text-align: left;"|
Despite its limited features (as it is essentially a rewrite of LXDE with a different UI framework) along with the lack of compositor, it is perfectly suited for the lowest end hardware.
|}

==Kernel==
{{mm}} [https://en.wikipedia.org/wiki/Linux_kernel Wikipedia page]
{{ii}} It is important to update the Linux kernel as new versions provide security updates, bugfixes, better performance, and support for hardware. A distro's repository contains all the supported versions for that distro.

There are two main releases of the official Linux kernel:
* Long Term Support (LTS) is slightly behind in terms of hardware support and features, but offers better stability and has longer support.
* Stable release (sometimes called the current release) offers the best hardware support and the newest features. It should be the default choice for a gaming machine and be avoided only if it causes issues.

Despite these differences, both releases offer the same security updates.

===Kernel replacement===

{{ii}} '''This section is meant for advanced users, you can easily break your OS, if you don't know what you are doing!'''

While both stable and LTS Linux kernel releases can be used for gaming, there are also community-made ones which add features and improvements. These kernels may or may not improve one's gaming experience, and may require DKMS (dynamic kernel module support) versions of drivers and headers to make hardware usable with multiple kernels.

The most notable releases:
* [http://www.users.on.net/~ckolivas/kernel/ Linux CK]
* [https://github.com/zen-kernel/zen-kernel Linux Zen]
* [https://liquorix.net/ Liquorix]

{{ii}} For help with installing different kernels on a distro, consult the kernel's official website or the distro's knowledge base.
{{ii}} It is advised to keep the current official kernel in case of issues.
{{ii}} [https://teejeetech.in/ukuu/ UKUU] is an useful utility for swapping kernels on Ubuntu (and Ubuntu derivatives).

===Microcode===
{{mm}}[https://wiki.archlinux.org/index.php/Microcode ArchWiki article]
It is vital to install the microcode for the CPU as the manufacturer provides security and stability updates, although most often your distribution will push those updates directly to you. Most distributions use either package manager or some kind of firmware/drivers manager to update the microcode.

==Hardware==
===Graphics===
{{++}} Generally speaking, if you use AMD graphics, you're likely to have a flawless experience as AMD makes open source drivers available and Linux developers integrate them directly into the kernel.
{{--}} Generally speaking, if you use Nvidia graphics, you're likely to have to make some independent efforts to either install or enable Nvidia drivers, as Nvidia does not offer any open-source drivers which makes the distribution maintainers hesitant when it comes to packaging or enabling Nvidia drivers by default.<br> Nvidia's drivers are also of worse quality than either AMD's own Linux drivers or Nvidia's Windows driver, with features that exist in the Windows drivers missing in the same card's Linux driver. This is entirely Nvidia's choice, and Linux developers and maintainers can do almost nothing to rectify the consequences of Nvidia's behaviour.

{{ii}} [https://wiki.archlinux.org/index.php/ATI ArchWiki's ATI] and [https://wiki.archlinux.org/index.php/AMD_Catalyst Catalyst] Article
{{ii}} [https://wiki.archlinux.org/index.php/AMDGPU ArchWiki's AMDGPU/AMDGPU Pro Article]
{{ii}} [https://wiki.archlinux.org/index.php/NVIDIA ArchWiki's Nvidia] and [https://wiki.archlinux.org/index.php/Nouveau Nouveau] Article
{{ii}} [https://wiki.archlinux.org/index.php/Intel_graphics ArchWiki's Intel Graphics Article]

{| class="wikitable"
|-
! Brand !! Driver type !! Kernel driver !! Library !! Supported GPU !! Vulkan support
|-
| style="background: red; color: white;" rowspan="4" | '''AMD/ATI''' ||rowspan="2" | Open Source || Radeon || rowspan="2"| Mesa (GLX and DRI) || GCN 2 and older architecture || No
|-
|rowspan="2"| AMDGPU || GCN and newer architecture<sup>1</sup> || Yes (RadV, AMDVLK)
|-
|rowspan="2"| Proprietary || AMDGPU Pro || GCN and newer architecture || Yes
|-
| Fglrx || Catalyst GL Library || GCN 3 and older architecture ||rowspan="2"| No
|-
| style="background: #84DE02;" rowspan="7"| '''Nvidia''' || Open Source || Nouveau || Mesa (GLX and DRI) || Any Nvidia GPU
|-
|rowspan="6"| Proprietary || Nvidia || Nvidia GLX || From Kepler based GPUs to recent || rowspan="2"| Yes
|-
| Nvidia 390 || Nvidia 390 GLX || From Fermi based GPUs to recent
|-
| Nvidia 340 || Nvidia 340 GLX || For Tesla based GPUs ||rowspan="4"| No
|-
| Nvidia 304 || Nvidia 304 GLX || From GeForce 6 series to Tesla based GPUs
|-
| Nvidia 173 || Nvidia 173 GLX || GeForce 5 FX series (NV30 to NV36)
|-
| Nvidia 96 || Nvidia 96 GLX || From GeForce 2/3/4 MX/Ti
|-
| style="background: #21ABCD; color: white;" rowspan="2" | '''Intel''' ||rowspan="2" | Open Source || Xorg Intel<sup>2</sup> || rowspan="2"| Mesa (GLX and DRI) || rowspan="2" | Any Intel HD Graphics GPU || rowspan="2"| Yes (ANV)
|-
|Xorg modesetting
|-
|}
<sup>1</sup> <small>- GCN 1 and 2 architecture support in AMDGPU is experimental.</small><br />

<sup>2</sup> <small>- Do not use it on Intel HD 4000 series and newer GPU.</small><br />

Generally, AMD/ATI users should use [[Mesa|the open source driver]] as it provides the best performance and support compared to the proprietary ones, while Nvidia users should stick to the proprietary ones. There are some things to remember:
* '''Try not to install drivers from the GPU manufacturer's website unless forced to''', as distro maintainers package the driver to be offered from the package manager.
* If forced to use Catalyst, Nvidia 173, or Nvidia 96 drivers, one must downgrade Xorg to the last supported version.
* Before using the open source driver '''one must install LLVM and Linux Firmware packages'''.

====Installing drivers====
'''Ubuntu (and Ubuntu-derived distros such as Mint, Pop!_OS, and Neon)'''

Use <code>sudo add-apt-repository <PPA repository></code> to add one. Make sure to run <code>sudo apt update</code> in order to update the repository list after adding one.
{{Standard table|Repository|Description|content=
{{Standard table/row|ppa:paulo-miguel-dias/pkppa|[https://launchpad.net/~paulo-miguel-dias/+archive/ubuntu/pkppa/ Padoka Stable Mesa]. For AMD/Intel/Nouveau GPU drivers, also contains Wayland.}}
{{Standard table/row|ppa:paulo-miguel-dias/mesa|[https://launchpad.net/~paulo-miguel-dias/+archive/ubuntu/mesa Padoka Unstable Mesa]. Same as the previous, however it is the developer version. Mind the issues you may encounter. }}
{{Standard table/row|ppa:graphics-drivers/ppa|[https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa "Graphics  Drivers" Teams' PPA]. Contains the recent proprietary Nvidia drivers and the Vulkan drivers for that GPU. }}
{{Standard table/row|ppa:ubuntu-x-swat/updates|[https://launchpad.net/~ubuntu-x-swat/+archive/ubuntu/updates Ubuntu X Team's Stable Mesa]. For AMD/Intel/Nouveau GPU drivers, also contains Wayland.}}
}}

'''Fedora'''

To install Nvidia drivers on Fedora, it is usually sufficient to install the latest Nvidia drivers from the software center. Simply search for Nvidia and install the driver with the highest version number.

If you have a more complex setup, such as an Optimus laptop, or the above instructions do not work for you, you can also user '[https://github.com/t0xic0der/nvidia-auto-installer-for-fedora-linux NVIDIA Auto Installer for Fedora Linux]'. It is a set of scripts which can handle both normal installs and more advanced configurations.

To use it, execute the following in the terminal:

<code>
sudo dnf install dnf-plugins-core -y && sudo dnf copr enable t0xic0der/nvidia-auto-installer-for-fedora -y && sudo dnf install nvautoinstall -y
</code>

Once installed, type in <code>nvautoinstall</code> into your terminal. The program will show you the options you can use.

The most basic installation is performed by issuing the following command:

<code>sudo nvautoinstall rpmadd && sudo nvautoinstall drive</code>.

To install support for Vulkan API (will be functional only if you have a Vulkan capable GPU and driver), execute the following command <code>sudo dnf install vulkan-loader vulkan-loader.i686</code>

{{Fixbox|fix=
# Launch the terminal and update/reboot system: <code>sudo dnf update && reboot</code>
# Launch the terminal and add the official repos: <code>sudo dnf install fedora-workstation-repositories</code>
# Enable the Nvidia driver repo: <code>sudo dnf config-manager --set-enabled rpmfusion-nonfree-nvidia-driver</code>
# Reboot, then verify the addition of the repository using the following command: <code>sudo dnf repository-packages rpmfusion-nonfree-nvidia-driver info</code>
# Open the software app, select Add-ons > Hardware Drivers > NVIDIA Linux Graphics Driver > Install
}}

If you used nvautoinstall above, you can also install Vulkan API via <code>sudo nvautoinstall vulkan</code>.

'''openSUSE'''

[https://opensuse.github.io/openSUSE-docs-revamped-temp/install_proprietary/ Please refer to the openSUSE User Documentation Project for instructions.]

====Optimus support====
{{ii}} [https://www.reddit.com/r/linux_gaming/comments/6ftq10/the_ultimate_guide_to_setting_up_nvidia_optimus/ Nvidia Optimus Linux guide]
{{--}} Optimus support in Nvidia GPUs is still considered to be troublesome.
In case of laptops which has Nvidia Optimus support, it is recommended to have PRIME enabled, which can be done by installing an additional package. Follow the distro’s documentation to set this up.

AMD users only require running the game with the <code>DRI_PRIME=1</code> command.

===Audio===
{{ii}}[https://wiki.archlinux.org/index.php/Sound_system ArchWiki page]

Linux has several sound systems available. The most common one is PulseAudio, but a new system called PipeWire is looking to supersede and consolidate all previous systems into one. For most games, PulseAudio will work.

In the case of MIDI, installing the Timidity or Fluidsynth package is required along with either a soundfont or the FreePats package. Depending on the distro, it will either be set up automatically or require manual intervention.

===Input devices===
{{ii}}[https://wiki.archlinux.org/index.php/Libinput Libinput ArchWiki article]
{{ii}}[https://wiki.archlinux.org/index.php/Touchpad_Synaptics Touchpad ArchWiki article]
{{ii}}[https://wiki.archlinux.org/index.php/Keyboard_configuration_in_Xorg Keyboard Configuration in Xorg ArchWiki article]
{{ii}}[https://wiki.archlinux.org/index.php/Touchscreen Touchscreen ArchWiki article]

Linux supports a vast array of input devices, including legacy hardware. Many programs exist for gaming peripherals in case further customization is needed.

'''General'''
* [https://github.com/libratbag/piper/ Piper] - Configure gaming mice

There are some other ones made for products from specific companies:

'''Razer'''
* [https://openrazer.github.io/ OpenRazer] - Open-source driver for Razer peripherals
* [https://polychromatic.app/ Polychromatic] - Frontend for OpenRazer
* [https://github.com/z3ntu/RazerGenie RazerGenie] - Configurator for Razer mice, keyboard, headsets, and more
* [https://github.com/GabMus/razerCommander RazerCommander] - Razer device manager
* [https://bues.ch/cms/hacking/razercfg RazerCFG] - A much more simplified configurator for Razer products

'''Roccat'''
* [https://sourceforge.net/projects/roccat/ Roccat Configurator] - An official configurator for Roccat products

====Controller support====
All DirectInput and XInput controllers are supported. In case of issues with XInput controllers, it is recommended to install [https://gitlab.com/xboxdrv/xboxdrv/ xboxdrv].

If dealing with a game that has a very limited or no controller support at all, the [https://github.com/AntiMicroX/antimicroX AntiMicroX] program offers a solution. It allows the user to bind keyboard and mouse inputs to the controller. However, it currently only works with Xorg.

Additionally, a user can use Steam Input in the Steam app to configure their controller.

==Other==
===Disk partitioning===
{{ii}} '''ext4''' is the default file system used by most Linux distributions.
{{mm}} While the file system used on Windows, NTFS, is supported, it is generally not recommended to use as it may cause compatibility issues.

The most important aspect of the disk partitioning is often the swap partition; it generally acts as RAM replacement. The absence of it will cause software to shut down due to low memory, and it is also used to offload memory from RAM when entering power saving modes such as Hibernation or Sleep. The size of the swap disk depends on how much RAM is available in the computer; if less than 8 GB of RAM, increase the swap disk, or if more than 8 GB of RAM, decrease the swap disk.

It is generally recommended to partition disks in this particular order:

# / (Root)
# Home
# Swap disk

A user can create multiple partitions for each directory with a specific disk size to use or use the entire free space on Root and leave some for swap.

===Display server===
{{++}} Wayland is newer than Xorg and is considered to be technically superior.
{{--}} Wayland is not supported by older proprietary games.

Linux utilizes a display server system in order to present a graphical environment with which the user can interface. The two prominent ones are [https://wiki.archlinux.org/title/Wayland Wayland] and [https://wiki.archlinux.org/title/Xorg Xorg].

While Wayland offers more a modern and secure backend, Xorg has legacy support and will generally be more compatible than Wayland. In addition, Wayland is still in active development and is missing features that would provide a gaming experience in parity with Xorg.

===Benchmarking===
{{ii}}[https://wiki.archlinux.org/index.php/Benchmarking ArchWiki article]

Benchmarking in Linux can be achieved with the [https://www.phoronix-test-suite.com Phoronix Test Suite]. It is easy to use despite not offering a user-friendly GUI. The biggest advantage is it saves the information as a webpage, making comparing tests much easier.

Steam users can use Valve's [https://github.com/ValveSoftware/voglperf voglpref], which requires Steam.

===PCI passthrough===
{{ii}}[https://wiki.archlinux.org/index.php/PCI_passthrough_via_OVMF ArchWiki page]
{{ii}}[https://www.reddit.com/r/VFIO/ /r/VFIO reddit page]
Since Linux 3.9 and recent QEmu version, it is possible to passthrough a graphics card, motherboard, or even other hardware into a virtual machine. The main advantage of it is having a native GPU working on Windows in a virtual machine, which allows you to play Windows games on it while using Linux.

There are some disadvantages:

* A second GPU for PCI passthrough is required
* GPU must support UEFI
* CPU must support hardware virtualization and IOMMU
* Motherboard must support IOMMU
* It is not an easy process for beginners

==[[Wine]]==
{{ii}}[https://www.winehq.org/ Main page]
{{ii}} [https://www.reddit.com/r/wine_gaming/ /r/wine_gaming]
{{mm}}[https://appdb.winehq.org/ Application Database]
Wine (Wine Is Not an Emulator) is a compatibility layer which allows users to run Windows programs in Linux. Its main advantage is a wide support of Windows versions ranging from 3.11 to Windows 10, both 32-bit and 64-bit architectures. There are multiple versions of Wine each with their own differences:

* Normal
* Staging - Provides additional features such as CSMT which may or may not improve the performance of the game and contains community-made patches which improves the compatibility.
* [https://github.com/ValveSoftware/Proton Proton] - A fork of Wine created by Valve and CodeWeavers which includes special patches and additional addons such as DXVK, FAudio, and ESync. It is intended for gaming and does not require Steam to use.
* [https://github.com/GloriousEggroll/proton-ge-custom Proton-GE] - A fork of Proton by GloriousEggroll which has FFmpeg enabled for FAudio by default, and all of Proton's patches ported over to be applied to WINE, as well as Wine-Staging and VKD3D. Proton-GE will generally work better with games, and some specific games only work on GE. The ProtonDB will contain pertinent information.
* [https://github.com/Frogging-Family/wine-tkg-git tkg] - Considered to be a "Wine to rule them all!" it contains a large set of patches and features from other community projects to provide the best performance and compatibility for games. It can be easily customized. It was mainly made for Arch Linux and its derivatives, but it is possible to use it in other distributions.
* Gallium Nine - Uses Gallium3D State Tracker, which dramatically improves the performance for games using DirectX 9, as it won’t translate Direct3D calls into OpenGL. So far only AMD, Nvidia graphics cards which rely on open source drivers and Intel graphics using Iris or Crocus driver have a support for Gallium 3D Nine which greatly benefits the compatibility and performance with DirectX 9-based games.

There are many frontends to Wine, which improves the experience with using it:

{| class="wikitable"
|-
! Name !! Release !! Notes
|-
| [https://lutris.net/ Lutris] || Free || style="text-align: left;"|
{{++}} Can also act as a client for games and emulators.
{{++}} Provides community-maintained scripts for installing games on Wine.
{{++}} Can provide different Wine version for specific games.
{{++}} Can install multiple editions of Wine, including community ones.
{{--}} May be a difficult to manually install a game with it.
|-
| [https://usebottles.com/ Bottles] || Free || style="text-align: left;"|
{{++}} Provides access to nearly all WINE/Proton's features through a well-thought-out and easy to understand interface.
{{++}} Can provide different WINE/Proton version for specific games, and makes it easy to download a particular older version as it is required for a specific game.
{{++}} Provides versioning features, allowing you to roll back to a known working version of the settings.
{{++}} Provides easy access and guided installation for community provided WINE/Proton editions, such as WINE-GE and Proton-GE.
{{++}} It is available as a Flatpak, which is crucial for [[Steam Deck]] users.
{{++}} Offers community installer scripts for nearly all PC storefronts.
{{--}} Does not have nearly as many automated installer scripts as Lutris does.
|-
| [https://www.playonlinux.com PlayOnLinux] || Free || style="text-align: left;"|
{{++}} Beginner friendly
{{++}} Includes precompiled scripts for automatic installation
{{--}} Very slow development
{{--}} The precompiled installation scripts are outdated, along with third-party libraries.
{{--}} The precompiled scripts '''may even damage your system'''. It is recommended to use the option to install the software on your own.
|-
| [https://www.codeweavers.com/products/crossover-linux Crossover] || Commercial || style="text-align: left;"|
{{++}} Superior in terms of compatibility than PlayOnLinux
{{++}} Provides patches and improvements which are later on added to Wine Staging
{{ii}} Buying the product will also provide support for Wine development
|-
| [http://q4wine.brezblock.org.ua/ Q4Wine] || Free || style="text-align: left;"|
{{++}} Moderately easy to use
{{++}} Implemented Winetricks, providing latest version of third-party libraries (Manual update is required)
{{++}} Implemented AppDB for checking the software compatibility on the go.
{{--}} Manual compiling/installing other Wine versions is required for more than one.
|-
|}

==Stores and clients==

{| class="wikitable"
|-
! Name !! Client available !! Registers Linux sales? !! Notes
|-
| [https://store.steampowered.com Steam] || Yes || Yes || style="text-align: left;"|
* By default, the client includes libraries required for native games to run (Runtime mode), but it is possible to make the software use libraries from your system instead (Native mode)
* Includes Proton by default (may require manual installation from Tools tab).
|-
| [https://www.humblebundle.com/ Humble Bundle] || No || Yes || style="text-align: left;"|
* The store does not provide with information about required dependencies for the game.
|-
| [https://www.gog.com GOG.com] || No || Yes || style="text-align: left;"|
* Game's store page shows required dependencies to run.
* Uses MojoSetup as an installer.
* Running the <code>start.sh</code> script may cause issues. Run the binary executable directly to bypass issues.
|-
| [https://itch.io/ Itch.io] || Yes (Optional) || Yes || None
|-
| [https://store.feralinteractive.com/ Feral Store] || No || Yes || style="text-align: left;"|
* Sells only Mac and Linux ports they have made.
|-
| [https://gamejolt.com/ Game Jolt] || Yes (Optional) || Unknown || style="text-align: left;"|
|-
| [https://flathub.org/apps/category/Game Flathub] || No || No || style="text-align: left;"|
* Offers open-source freeware games. Overlap with the distros' own package repositories is high.
|-
| [https://snapcraft.io/search?category=games Snap Store] || Yes (Optional) || No || style="text-align: left;"|
* Offers a mix of open-source freeware games and preconfigured Wine games.
* Offers some games for [[List of Linux ARM games|ARM]], [[List of Linux PowerPC games|PowerPC]] and ''System z'' distro installations.
|-
| [https://www.zoom-platform.com/search/any/any/any/any/any/linux/any/any ZOOM Platform] || No || Unknown ||
* Very small game selection (10 games total) as of March 2021.
|}

==Improvements==
===Hardware===
'''Disable mitigations for transient execution CPU vulnerabilities'''
{{--}} Be aware that disabling these will cause your PC to be susceptible to multiple vulnerabilities such as Spectre, Meltdown, ZombieLoad etc. Use it with discretion.
{{ii}} Outside of specific microbenchmarks, disabling the default mitigations should result into an average performance increase of 5-10%. The following parameter used in here is available only in 5.1.13 kernel or newer <small>(or backports to 3.16.68, 4.4.180, 4.9.176, 4.14.119 and 4.19.43)</small>, for others see [https://make-linux-fast-again.com/ this parameters string].

{{Fixbox|description=Edit the GRUB settings|fix=
Open up the <code>grub</code> file found in <code>/etc/default/</code> with a text editor as root and in <code>GRUB_CMDLINE_LINUX_DEFAULT=</code> add <code>mitigations=off</code> at the end.

Re-generate the grub.cfg using one of these commands as root:
<pre>
grub-mkconfig -o /boot/grub/grub.cfg

update-grub     # Used by Ubuntu based distros, easy version of the 1st one.
</pre>
}}

'''Disable mouse acceleration in Xorg'''
{{ii}} Some desktop environments offer an option to set up the mouse acceleration directly from the settings menu (Such as KDE Plasma, GNOME and later on MATE)
{{Fixbox|description=Create a new Xorg rule|fix=
Create a config file in '''/etc/X11/xorg.conf.d/''' as '''<code>any number</code>-<code>custom name</code>.conf''' (for example '''50-mouse-acceleration.conf''', keep in mind that it does not accept spaces in names) as super user/root and add the following script:
<pre>
Section "InputClass"
	Identifier "My Mouse"
	Driver "libinput"
	MatchIsPointer "yes"
	Option "AccelProfile" "flat"
EndSection
</pre>
Then restart the system or Xorg (In most distros its {{key|Ctrl}}+{{key|Alt}}+{{key|Backspace ←}})
}}

'''Improve shutdown time in systemd'''
{{Fixbox|description=Edit the system.conf|fix=
In some desktop environments such as LXQt, the system shutdown or restart process may take longer due to Systemd having the time to stop the session set to 1 minute 30 seconds by default.
# Edit as a root the system.conf file located in <code>/etc/systemd/</code>
# Find '''DefaultTimeoutStartSec''' and '''DefaultTimeoutStopSec''', uncomment them if necessary and set the time limit in seconds.
# Type <code>sudo systemctl daemon-reload</code>

OR

Install '''watchdog''' package and enable/run the watchdog service.
}}

'''Resolution scaling with xrandr'''

It is entirely possible to scale the resolution through multiplications (<code>--scale</code>) or by resolution (<code>--scale-from</code>) with <code>xrandr</code> command. Provided that you input the monitor name and your current resolution, which can be learned by using <code>xrandr -q</code> command (It will also list available resolutions).

Here are some examples:
* <code>xrandr --output VGA1 --mode 1024x768 --scale 0.5x0.5</code> - this will downscale the resolution by 0.5 while using 1024x768 resolution in VGA1 monitor.
* <code>xrandr --output VGA3 --mode 1920x1080 --scale-from 1440x900</code> - This command will imitate the 1440x900 resolution under 1080p in your VGA3 monitor.

===Software===
'''Use Feral Game Mode to improve the performance'''
{{ii}} Most distros includes the software in their repository, it is recommended to install both 64 and 32 bit versions to apply in every game, if not, the source code can be found in the [https://github.com/FeralInteractive/gamemode GitHub page].
{{++}} Supports custom scripts
{{++}} Developers can use it to implement in their games.
Feral Game Mode is used by Feral Interactive to provide optimization in their games (From Rise Of The Tomb Raider) when being ran, it provides changes to these following processes:
* CPU governor
* Input/Output priority
* Process niceness
* Kernel scheduler
* Screensaver inhibiting
* GPU performance mode (Nvidia and AMD), GPU overclocking (Nvidia)

Once the package is installed, you can activate it when running other games with <code>gamemoderun *game executable/launcher*</code>, on Steam add <code>gamemoderun %command%</code> into Launch Options.

'''Enable 32-bit support for your distro'''
{{Fixbox|description=Enable 32-bit library support in Ubuntu/Debian based distros||fix=
As Ubuntu/Debian 64-bit distros have 32-bit libraries disabled by default, this can cause compatibility issues with the software (Especially with upgrading Wine). To enable it you must use these following commands:
<pre>
sudo dpkg --add-architecture i386
sudo apt update
</pre>

{{ii}} In Debian unstable, one can optionally also add support for x32 with <code>sudo dpkg --add-architecture x32</code>, although [[List of Linux games for uncommon architectures|not all that many games support it]].

}}

'''List missing dependencies'''
{{Fixbox|description=List the missing dependencies|fix=
As GOG, Steam and other stores mostly support Ubuntu due to its popularity in both making another distribution (Such as Linux Mint) or wide use, there can be a limited support for the other distros such as Arch Linux, Fedora, etc. Mostly in terms of requiring dependencies to run the game or a software.

The <code>ldd</code> command can be used to check which dependency does it require and if they are in your system.
<pre>
ldd <binary file>
</pre>
After running the command, it'll list all the *.so files the software uses, if there is a "Not found" somewhere, this is the moment to learn which package does it contain the file.

The missing dependency checkup can be even easier with the inclusion of the <code>grep</code> command.
<pre>
ldd <binary_file> | grep "Not found"
</pre>

This will only look for the lines related to "Not found" only, if nothing shows up then you have everything you need.
}}
{{Fixbox|description=Improve compiling speed in AUR (Manjaro, EndeavourOS, Arch Linux)|fix=
Open makepkg.conf as root and under '''MAKEFLAGS''' add <code>-j#</code>. Where <code>#</code> is the sum of (number of CPU cores you wish to use) + 1</code> (so if you wish to use 4 cores, you need to put -j5 for example)
{{ii}}Keep in mind that some programs requires using one core for the stability sake.
}}

'''Create a script which the game uses libraries from your system instead'''
{{Fixbox|description=Make a native executable for your game|fix=
{{ii}} This method may improve the compatibility and sometimes even improve the performance of it on your Linux system. Can be useful in older Linux games that rely on older SDL interface such as [[Majesty]].
# Create an empty text file and open it with any text editor.
# Add this following script:
<pre>
#!/bin/sh
LD_LIBRARY_PATH=/path/to/library /path/to/executable
</pre>
3. Replace <code>/path/to/library</code> with one of these paths:
* If the game is 64-bit <code>/usr/lib64</code>
* If the game is 32-bit and you are using a 64-bit system <code>/usr/lib32</code>
* If the game is 32-bit <code>/usr/lib</code>
4. Once done, save it and make it executable using either <code>chmod</code> command or via Properties with your file manager.

'''Notes'''
* You are required to learn which library does the game uses and install them if not available. Each game has its own library folder which you may learn about it.
}}

==Common fixes==
===Hardware===
{{Fixbox|description=The Nvidia DKMS driver won't install after updating it|fix=
{{ii}} If none of them won't work, you may have to downgrade your kernel and wait for the update that fixes it. Provided that you or someone else reported this issue.
'''Text Mode'''
# Boot up to your kernel
# Enter the text mode by pressing {{key|Ctrl}}+{{key|Alt}}+{{key|F2}}-{{key|F10}} and if necessary, stop the display manager.
# Type in as root, <code>dkms install nvidia/<version> --all</code>. If everything is done successfully type <code>reboot</code>.

'''LiveCD/LiveUSB'''
# Boot to the LiveCD/LiveUSB
# Mount your partition(s) using <code>mount /dev/sd<disk and partition</code> and Chroot it with <code>chroot <root partition></code> (In Arch Linux system it's <code>arch-chroot</code> instead).
# Type in <code>dkms install nvidia/<version> --all</code>. Once it's done without any errors, you can restart the system.
}}

{{Fixbox|description=Set up a primary monitor in multi-monitor setup|ref={{cn|date=February 2017}}|fix=
# Install <code>xrandr</code> using your linux distribution's package manager.
# Run <code>xrandr</code> from a terminal emulator and find the name of the monitor you want to set as the primary (i.e. "HDMI-0").
# Run <code>xrandr --output <name> --primary</code>.

'''Notes'''
{{++}} To automate this when the system starts, prepend the command to your <code>~/.xinitrc</code>-file, or your desktop environment's equivalent.
}}

{{Fixbox|description=No sound|ref={{cn|date=February 2017}}|fix=
Open the Terminal and type as root <code>gpasswd -a <username> audio</code>, if that did not work then:
# Open the <code>group</code> file as root in a text editor located in '''/etc''' folder.
# Find the following line <pre>audio:x:29:pulse</pre>
# Add a comma and your username ex: <pre>audio:x:29:pulse,tux</pre>
}}

{{Fixbox|description=Crackling sound/audio delay in PulseAudio||fix=
Type in terminal this command to stop and then start PulseAudio at the same time:
<pre>
pulseaudio -k && pulseaudio --start
</pre>
{{ii}}You can bind this command as a keyboard command in your DE.
}}

===Software===
{{Fixbox|description=Screen tearing|fix=
{{ii}} You may also use GNOME, Cinnamon and KDE Plasma which use their own compositor that directly communicates with the GPU without any performance loss from Nvidia side.
Nvidia users can fix the screen tearing by enabling '''Force Composition Pipeline''' in Nvidia Settings, if it persists, enable '''Force Full Composition''' (Keep in mind that it reduces the performance in games even more).

AMD and Intel HD users do not have to do anything as DRI3 handles the refresh rate by default without compromising the performance, provided the compositor contains the Present extension.

If it persists, chances are you may be required to install and use a 3rd party compositor such as Compiz, Compton etc.
}}
{{References}}
<references />

[[Category:Guide]]

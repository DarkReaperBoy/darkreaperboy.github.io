# Virtualization

In computing, virtualization refers to the act of creating a virtual (rather than actual) version of something, including virtual computer hardware platforms, operating systems, storage devices, and computer network resources.

## Use in gaming

Using virtualization you can run a games developed for another system, including Windows, under virtual machine. This approach ensures compatibility without the need of dual booting, however the graphic performance may suffer, depending on the virtual machine software. However, with the increasing popularity of virtualization, it is possible to give virtual machine a direct access to your video card via PCI(-E) passthrough on a supported hardware, ensuring in near bare-metal performance for unsupported games without the need of dual booting.

## GPU passthrough

With supported hardware, it is possible to give virtual machine a direct access to a PCI, USB and other devices, which includes your graphic card. With this approach, you can launch a virtual machine under your operating system, without needing to reboot, while ensuring near bare-metal gaming performance due to the fact the GPU is directly accessed by a virtual machine.

### Requirements and caveats
This approach have it's drawbacks, as it requires relatively new CPU, GPU and motherboard, supporting IOMMU (or I/O MMU) virtualization (Intel VT-x or AMD-V), two separate graphics card (though if you have Intel or AMD integrated GPU on your processor, only one dedicated card is required) and some time and effort to set it up the way you want. Due to the fact laptops generally don't have two graphics cards or even if they do, the motherboard does not support IOMMU, it is generally available only for desktop PCs. You most likely will need two separate monitors, since the virtual machine will gain exclusive access to a whole monitor, leaving Linux running in a second screen. It is possible to use it with only one monitor with two sources, but you will have to switch sources each time you want to switch between a virtual machine and Linux, making it extremely inconvenient. You will also want to have an additional set of monitor cables to connect the monitor to the integrated card for the time virtual machine is running and an extra pair of mouse and keyboard for the virtual machine operating system installation and configuration.
When properly set up, it is possible to switch to a virtual machine easily using a preconfigured bash script and switch input between host and guest with a keystroke. Keep in mind, though, that for the time virtual machine is running, Linux will only have access to your secondary GPU (the one it is not passed-through), and the virtual machine will reserve a portion of your RAM, depending how much RAM you have, so enough RAM to ensure two systems are running is required.
Currently it is only possible to pass through one GPU and one monitor, so SLI/Crossfire on guest is currently not possible with this approach.

## Configuration
*Arch and similar systems can refer to [PCI passthrough via OVMF](https://wiki.archlinux.org/index.php/PCI_passthrough_via_OVMF) guide on ArchWiki, though the guide may be handy to other operating systems as well.
* For Debian, you can follow the [Play games in Windows on Linux! PCI passthrough quick guide](https://wiki.archlinux.org/index.php/PCI_passthrough_via_OVMF) on Level1Techs.

For more info, [/r/VFIO](https://www.reddit.com/r/VFIO/) community on reddit may be helpful.

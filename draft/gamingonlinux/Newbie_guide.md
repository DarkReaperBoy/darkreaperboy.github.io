# Newbie's Guide to Gaming on Linux

## Introduction

In February 2013, Valve released the Steam client for Linux. This made playing modern PC games natively on Linux possible. GOG, another PC games distribution service, also offered support for Linux last August 2014. Prior to that, you needed to use [Wine](https://www.winehq.org/) to play modern games on Linux. However, there is a large performance gap between [Windows and Wine on Linux](https://www.youtube.com/user/PenguinRecordings/search?query=wine), and many games don't even run properly under Wine.

Many modern games have been made to work natively on Linux since Valve released the Steam client for Linux. However, not all modern games have been made available on Linux. This is probably because Windows dominates the desktop PC market. Almost all pre-built desktop PC's from known vendors such as Acer, HP, and Dell come installed with Windows. In offices and schools, desktop PC's are using Windows. Here is a [video](https://www.youtube.com/watch?v=IGVNCygfB4g&feature=youtu.be&t=3920) explaining why Linux is not as big as it should be.


## Getting Started

### Hardware

First of all, you need a decent gaming PC if you will be playing the latest games at 1920 x 1080 resolution. Here are the minimum specifications we would recommend for a gaming PC:
CPU: Intel Core i3 6100 3.7 GHz or AMD FX-6300 3.5 GHz
GPU: NVIDIA GeForce GTX 950 or AMD Radeon R7 370
RAM: 8GBx1 DDR4 2400 CL15
Drive: 1TB HDD or 500GB SSD

Choosing a distribution
Now, you have to choose what Linux distribution you will use. The two most popular Linux distributions are Ubuntu and Mint. Both of them are user-friendly to newbies, but Mint has a user interface similar to Windows. Ubuntu MATE or Xubuntu are good alternatives if you want a more classic look and feel. To find out what other distrubutions are popular among Linux gamers, check out the GOL statistics page.


The installers are in .ISO format. You can burn it onto a DVD or use it to create a bootable USB installer. It's much easier to use a bootable USB installer using [Rufus](https://rufus.akeo.ie/) or [Etcher](https://etcher.io/). You will need a USB flash drive with at least 2GB capacity. It's also much faster to use a bootable USB installer compared to a DVD media.



### Installing the OS

Almost all PC hardware component (built-in LAN card, sound card, etc.) will work right away without having to install drivers. By default, Linux uses an open-source driver for your GPU. While these open drivers have made strides in performance recently, you may need to install a vendor-specific (AMD or NVIDIA) driver to be able to play games. To change a driver for your GPU, go to System Settings then look for Driver Manager. Once there, you would see a list of available drivers for your GPU then select the vendor-specific driver. After that, you need to restart your PC. If you are using Intel graphics you won't need to worry about this, as the open source driver is the officially supported one. As of late 2016 the open source AMD drivers have also become the main gaming drivers and many AAA games will not support the proprietary AMD drivers.


### Installing and Playing Games

There are no retail discs for Linux versions of PC games, but there exists a number of different distribution services for digital Linux games, as shown in this article. Two of the most popular distributors are Steam and GOG. Games on GOG are being sold without DRM which means you can install the game on any PC and playing it does not require online validation. However, many Linux games are only available at Steam.
To buy games on GOG, go to GOG's website then create an account. Once you have an account at GOG, proceed to the store section and buy the games you want. GOG supports both Ubuntu and Mint and games bought on GOG will be downloaded from the website in the form of an ".sh" file. The downloaded file will work similarly as the ".exe" installers of Windows programs. Open the ".sh" file and a dialog box will appear which will guide you on the installation of the game. After installation, just look for [game name].sh and double-click on it to run the game.

On Steam, you need to install the Steam client which can be downloaded here or through your distributions package manager. If you choose to download the installer, just go to the folder where you downloaded the file and double left-click on it to run the installer. After the installation is done, open the terminal by pressing "Ctrl + Alt + T" on your keyboard. Type "steam" then press Enter. The Steam app will start and download the remaining files of the Steam client. Download size is around 250MB. Once the installation is complete, run the Steam client then start browsing the store for games you want to buy. Steam officially supports only Ubuntu but it should run fine on most common Linux distributions.
A tip is to install your games on a separate partition, not on the root or home. By doing this you can keep all your games if you have to delete your Linux installation because it got corrupted or because you want to try a different Linux distribution.
Now, you might be wondering how many modern games you can play natively on Linux. A good way to find out is to look at the native Linux games available through Steam.

### Using game pads

Using game pads
(The instructions below are from [Feral Interactive](https://support.feralinteractive.com/en/guides/linux_gamepad/) and assumes you are using Ubuntu 14.04.2. The instructions should work well for most other common distributions as well.)

Set up a wired Xbox 360 controller

1. To set up a wired Xbox 360 controller, simply connect it to your computer via a USB port. That's it: you're good to go!

Set up a wireless Xbox 360 controller

1. Plug the Wireless Gaming Receiver into a USB socket on your computer.
2. Turn on your Xbox 360 controller by pressing the Xbox button.
3. Press the button on the Wireless Gaming Receiver. The light will flash green, indicating that it's scanning for a controller to connect to.
4. Press the connect button on the back of your Xbox 360 controller. This will pair your Xbox 360 controller with the Wireless Gaming Receiver. You only need to do this the first time you set up your controller. (Known issue: If you’re using a wireless Xbox 360 controller, the green connection LED will continue to flash even after pairing.)
5. Your computer will recognize the wireless controller and you'll be good to go.
(The instructions below assumes you are using Ubuntu MATE 15.10. The instructions should work well for most other common distributions as well.)

Set up a Sony Dual Shock 3 controller

1. To use a Sony Dual Shock 3 controller for gaming on Linux, simply connect it to your computer via a USB port and press the PS button. It works properly without having to install anything. I have already tested it on Transistor and Middle-earth: Shadow of Mordor.

## Measuring Performance

To measure gaming performance, you need to use [GLXOSD](https://glxosd.nickguletskii.com/index.html) to record the frame rate and frame times. It is not that user-friendly but it's the closest thing to FRAPS when it comes to benchmarking games on Linux. As I have tested, GLXOSD works on Ubuntu 14.04 LTS, Ubuntu 15.10, and Mint 17.3. Just use the installation instruction for Ubuntu 14.04 LTS.
Alternatively, you can use the game's built-in benchmark tool for measuring performance if you want a simpler approach. However, not all games have a built-in benchmark tool.
You can find a list here of games that have a built-in benchmark on Linux.

If you just want a frame rate counter, open the Steam client, click "Steam" in the main menu bar, then choose "Settings". Another window will open, click on "In-Game" then look for "In-game FPS counter" and enable it. If you are playing a non-Steam game, you need to use GLXOSD to display the frame rate.

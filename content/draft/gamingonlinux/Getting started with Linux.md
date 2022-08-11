 
== Prelude ==

This is a community-maintained version of the [https://www.reddit.com/r/linux_gaming/comments/edaq0s/guide_migrating_to_linux_in_2020 Guide: Migrating to Linux in 2020] written by u/PBLKGodofGrunts.

I recommend reading the whole article, but if you feel overwhelmed with too much information or too many options, [[Getting started (short version)|here is a short version that should work]].

I recommend reading the short version first, it will give a good overview about what to expect.

== Getting Started ==

So, you want to get started in Linux. The most important thing you need to remember is that you're using '''Linux'''.

Now that might seem obvious, but you'd be surprised how often you'll see &quot;Why isn't this easy like in Windows?&quot; or &quot;I just want it to act like my Mac.&quot;

While I do understand that it's hard to get used to something you're not familiar with, I promise that, in time, it will be just as comfortable as Windows or macOS.

Curious to see Linux gaming in action before getting your feet wet? /u/PCgamingFreedom has an [https://redd.it/aneayg amazing thread with a huge list of Youtubers that play games on Linux.]

Want to checkout the latest news for Linux gaming? Take a trip to [https://www.gamingonlinux.com/ GamingOnLinux]. They also have a great [https://www.gamingonlinux.com/wiki/ wiki] that covers more topics.

== Software ==

Perhaps the biggest hurdle of using Linux is compatibility issues with the software you currently use. Before you get started on your journey, I would '''highly''' recommend you do a bit of prep work here.
* Which software do I commonly use?
** Get a pen and paper and start writing a list. Include your most played games (and the ones that you are sure that you will want to play in the future) and the software you need for a computer to be your daily driver (Office, Photoshop, etc).

Now that you have a list, let's check. There are four possible outcomes for each item in your list.

* You will be able to run it natively.
** This is almost always the best case scenario, since it's the one where you will get all the performance and compatibility without drawbacks.
* You will be able to run it, but not natively.
** You'll most often find this with Proprietary software and is the nature of using closed source software. We have a few tricks up our sleeves that we can try and we'll get to those a little later.
* Cloud Software (SaaS or Software as a Service)
** Though not ideal, especially in a world where owning your own software is becoming less and less common, a lot of business and professional software can be run &quot;in the cloud&quot;. Office 365 is a prime example and allows people like me to work on Linux computers at work since I can still access all the Microsoft Office applications required to interact with my coworkers.
* You won't be able to run it.
** This is the big one, the one that will hold you back. Sometimes, and it's not your fault, there is a killer app that you absolutely need in order for your computer to be useful to you. While it would be great if the OSS community provided a good alternative to you, we understand that this is not always the case. There's no shame in this. Thank you for trying.

In order to catalog your list into these four outcomes, you grab the first item on the list. If it's a game, check in [https://steamdb.info/ SteamDB] if the game does have Linux support (Note: Sometimes the game offers Linux support even if it's not listed here or in steam). In 2018, Valve released a compatibility software called [https://steamcommunity.com/games/221410/announcements/detail/1696055855739350561 Proton] that is based on [https://appdb.winehq.org/ Wine]. Check [https://www.protondb.com/ ProtonDB (used to be called Steam Compatibility Reports)] to see if your Windows only games run fine under it. If it's software, just check in the official website if there's a Linux version.

=== Windows Compatibility ===
Full article: [[Windows Compatibility]]

If there's no Linux support, we go to the next step.

For Steam games you can just use [[Steam]]. For games that are not on Steam, use [[Lutris]]. For other programs, [https://github.com/bottlesdevs/Bottles Bottles] might be good option. Check [https://www.protondb.com/ www.protondb.com] for Steam game compatibility, and [https://appdb.winehq.org appdb.winehq.org] for other games.

If what you want to run shows as garbage in there (and most of the times bronze, you seriously want to read the reports to see what works and what doesn't) you just put it in the &quot;I won't be able to run it&quot; section. Now repeat with each element of the list until you've gone through your list.

I will mention that some games are more problematic than others. For example, League of Legends is notorious for needing custom versions of Wine to get working. Thankfully, it has a dedicated subreddit [https://www.reddit.com/r/leagueoflinux /r/leagueoflinux] which has the latest news and tends to be very helpful.

Otherwise, if your software is not mentioned there, bring up [https://www.winehq.org/search the Wine AppDB] and put there the name of your software. Click on the link that fits the most your search (Usually the first link, ignore all the [Bug XXXXX] results) and check the rating of the game. Generally you'll be able to use it if it's not bronze or garbage. If you click in the version of the software, you'll see reports of people who have tried to run it, known bugs and general instructions and steps to follow. For now we're just cataloging the software, so we'll see how to actually install it later. If there's no search results there's still hope. Do a quick google search (probably &quot;NameOfTheSoftware Wine support&quot;) and see what happens. If the software you want to use is really small and unknown probably nobody tried it, but just leave it marked as &quot;dubious&quot; or something because you may be able to run it anyways.

=== Other Solutions ===
You got your list and a general idea of what you can run and what you can't run and at which degree you will be able to use it. If you have something that needs to be run but you can't run, here's a small list of alternatives you can use.

* Look for an alternative. If it's a game I'd say that you should look for games with similar tags in steam. If it's software use something like [http://alternativeto.net/ alternativeto], or just search for ''"<task to achieve> Linux"''.
* Use a windows VM. Useful if the software you want to run is not resource intensive (99% of the time games won't like this, so don't use this for games unless you're going to attempt the GPU passthrough option)
* Dual boot.
* GPU passthrough. This is hard. You need to meet a lot of requirements and invest time, but if you can pull it out you can get the best of both worlds. The [https://forum.level1techs.com/tags/passthrough Level1Techs forum] has been one of the driving forces behind using this technology and has a lot of information on the subject. (You can also check out their [https://www.youtube.com/channel/UCOWcZ6Wicl-1N34H0zZe38w Linux Youtube channel])
== Distributions, or &quot;versions&quot; of Linux==

If you are here, congratulations! You want to get started with Linux and you have all your software narrowed down. In order to get started in the odyssey of Linux, you have to think about what distribution (informally referred to as <code>distro</code>) you want to use. The distribution is just the flavor of Linux you want to use. Just to be clear from the start, '''pretty much every distribution is equally capable of gaming and running software.''' The differences between them are:
* The preinstalled software.
** Some are more minimalist than others, but all of them can run the same software. With enough patience, you can turn one distribution into another just by installing and removing stuff.
* The update frequency.
** Some distros release updated software faster than others. Distros that push out updated software with minimal testing are known as <code>bleeding edge</code> distros or <code>rolling release</code> distros. If you want to be up to date with features, you want a bleeding edge distro, but in exchange for the latest and greatest features you run an increase risk of running into bugs. <code>Stable Release</code> distros usually have to wait longer for updates, but those updates are often heavily vetted before being pushed out.
* The community.
** Different distros have different communities. The distros that are perceived to be easier or more user friendly tend to have communities that are quicker to help with easy to follow instructions.
* The other minor things including default configurations, art, fonts, etc.
*The package manager.
**This is the program that installs, upgrades, configures, and removes packages. Packages are archives containing all of the compiled files of an application, and metadata(data providing info about other data) such as application name, version, dependencies(other packages required in order to function), etc.
**Every package manager has a package format that it uses.
**For example, APT, which is used by Debian and its derivatives(Ubuntu, Pop!_OS, Linux Mint), manages DEBs. DNF, which is used by Fedora and its derivatives, manages RPMs. Pacman, used by Arch and it's derivatives, uses .pkg.tar.zst, and so on and so forth.
But the most obvious difference is the desktop environment (also called ''DE''). The desktop environment is what you see, what you interact with, and what you would probably think "is Linux". You don't like that you can't put icons on your desktop? This is not a limitation of Linux, this is a limitation of the DE you chose. Your windows look ugly? Also the DE (or probably rather a theme for the DE). You don't like the menu system? This is also part of the DE and there are alternatives. The most popular desktop environments are KDE Plasma, Gnome, Mate, Cinnamon, LXDE, LXQt, and Xfce. Out of this list, KDE and Gnome are the most modern desktops, and also have the best support for gaming.

=== Avoid Problems ===
If you want to avoid problems:

* Choose something with KDE or Gnome.
* Don't choose a &quot;stable&quot; distribution because &quot;stable&quot; usually means &quot;old&quot;.
* Don't choose a niche distribution because this probably means that you don't have good software availability.
* Don't choose something with Wayland if you can't use FreeSync.
*Some distributions make problems if you change the default desktop environment. For example, if you want to use Ubuntu with KDE, choose Kubuntu.

Now that I've explained that, let's have a look at different distributions.

=== Recommendations ===
First a list of some &quot;easy&quot; distributions:

{| class="wikitable"
|+ Easy distributions
!Distribution !! Explanation
|-
| [https://system76.com/pop Pop!_OS]
| Pop!_OS is a Linux distribution developed by System76 based on Ubuntu, using the GNOME Desktop Environment. Has an Nvidia and an AMD/Intel image for convenience. ([https://www.youtube.com/watch?v=Co6FePZoNgE Recommended by LTT]) <code>'''If you don't know what to choose, pick this one.'''</code>
|-
|[https://nobaraproject.org/ Nobara]
|Based on Fedora, but specifically made to be great for gaming.
|}

If you're feeling particularly adventurous, there are other distributions, that might work great for you. Particularly Arch and Arch based distributions are known to work great for gaming, but also to require more knowledge. You ''might'' have a good experience, ''if'' you have the knowledge to fix a couple minor problems.

{| class="wikitable"
|+ Advanced distributions
!Distribution !! Explanation
|-
| [https://garudalinux.org/ Garuda]
| Garuda is an ArchLinux based distro. Uses the offical ArchLinux software repositories. Ships with useful software for gaming, and useful presets like Zen kernel. Is made to be a user-friendly gaming-distribution. Comes highly themed and with many effects like wobbly windows. This can be disabled if you don't like it.
|-
| [https://manjaro.org/ Manjaro]
| Based on ArchLinux, but uses its own repositories and includes other features like automatic graphic card drivers installation. Is made to be user friendly. ([https://www.youtube.com/watch?v=Co6FePZoNgE Recommended by LTT])
|-
|[https://getfedora.org/ Fedora]
|Made by Red Hat, one of largest open source companies, and has a lot of [https://spins.fedoraproject.org/ officially supported desktop environments]. Packages are up to date, but well tested.
|-
| [https://www.ubuntu.com/download/desktop Ubuntu LTS]
| The latest Ubuntu LTS (22.04 as of this writing). Ubuntu also has a new-user-friendly community but is heavily discussed because of some design choices. Comes with Gnome, but also offers other ''flavors'' with different desktop environments, for example Kubuntu with KDE Plasma.
|-
|[https://endeavouros.com/ EndeavourOS]
| EndeavourOS is an ArchLinux based distro. Uses the offical ArchLinux software repositories. Very minimal. You will need to use the terminal. Basically a graphical installer for Arch, and coming with a very helpful community. If you want to try Arch, but don't want to go through the installation process, this is a good choice.
|-
|[https://getsol.us/home/ Solus]
|Solus brings updates to its users by means of a curated rolling release model.
|-
|[https://www.opensuse.org/ openSUSE]
| Offers both a rolling release (Tumbleweed) and a regular release (Leap) option. You probably want to use Tumbleweed.
|-
|[https://gamer-os.github.io/ GamerOS]
|If you are looking for a Steam-centric, couch-gaming-friendly Linux distribution, this might be what you are looking for. Don't use this if you want a traditional desktop experience.
|-
|Others
| There are a ton of Linux distros out there. Just know that they might come with problems. The mentioned distros are popular for a reason, and this reason is that they work well.
|}

<div style="border: 1px solid #cc8400; background: #fff6e5; margin: 5px 0 5px 0; padding: 10px;">
If you really want to use a distribution that's not mentioned here, '''don't use one of the following!'''
{| class="wikitable"
|+Anti recommendations: DO NOT USE THESE DISTRIBUTIONS!
!Distribution
!Explanation
|-
|Deepin
|It might look pretty, but it '''ships with spyware!''' Do not use it!
|-
|Puppy Linux
|Sometimes recommended as being extra light weight. You might think this makes it great for gaming, but this is not the case! It's not secure, not good to use, and doesn't come with good driver support!
|-
|Tiny Core
|Same as Puppy
|-
|AmogOS
| It might have a funny name, and even good ideas. But it's not a mature distribution.
|-
|Arch
|It's actually a great distribution, especially for gaming. BUT: It's very complicated, and if you're reading this guide, you're probably not even able to install it. You will not have a good time, and you will probably hate Linux. However, the [https://wiki.archlinux.org/ Arch wiki] is a great source of information. If you're able to read and understand it, you might actually be fit to try to [https://wiki.archlinux.org/title/Installation_guide install] it. Installing Arch is valuable experience that helps you understand how Linux works.
|-
|Gentoo
|Same as Arch, but it's even more complicated. Unlike Arch, Gentoo focuses on compiling programs from source rather than using prebuilt binaries (executables). Although this allows for extra performance, compiling programs is a very slow and time intensive process.
|-
|LFS
|Even more complicated than Gentoo, it involves building your own system. No one should use this (unless for your own education on how Linux works), especially since there is no package manager.
|-
|Kali
|Not meant for daily usage. This distribution is meant for pentesting and (ethical) hacking only! Your games will probably not work, and you might have all kinds of problems like no audio.
|-
|Debian
|Has a strong focus on reliability and not changing much. That's great for servers or if you just need something that works for basic tasks, but unless you know ''why'' you want Debian, it's probably not the best choice for gaming.
|-
|[https://linuxmint.com/ Linux Mint]
|Nice distribution, but probably not the best for gaming. You might face weird bugs<ref>https://www.reddit.com/r/Lutris/comments/i66650/comment/g0w24so/?context=3</ref><ref>https://github.com/lutris/website/pull/581</ref>. Cinnamon has issues with performance, and [[Compositor#Cinnamon|with disabling composition]]!
Offers two versions. &quot;Linux Mint&quot; is based on Ubuntu and &quot;LMDE&quot; is based on Debian.
|-
|[https://elementary.io/ elementary OS]
|Based on Ubuntu, elementary OS strives to be user-friendly and deliver a cohesive and aesthetic user experience. Comes with Pantheon, a modern, good looking DE that is only available here. Unfortunately it is not possible to [[Compositor|disable composition]] which makes it a bad choice for gaming.
|}
</div>

'''If you are having trouble deciding, Pop!_OS is good for beginners.''' It's not the flashiest, but you're almost guaranteed to find an answer to your problem if you search &quot;My Problem Pop!_OS&quot; or &quot;My Problem Ubuntu&quot; (Pop!_OS is very similar to Ubuntu) in your favorite search engine (make sure to limit the search to only things from the past year). You can always switch later.

Most of them will let you install next to Windows and set up a dual boot automatically. Be careful though, Windows Updates have a bad habit of changing the boot loader and it will look like your Linux OS vanished. '''REMEMBER TO DO BACKUPS.''' Things can always go wrong and you don't want to lose anything. It's FOSS has a [https://www.youtube.com/watch?v=u5QyjHIYwTQ video on dual booting] if you'd like a visual example, but it basically boils down to you clicking an option that says &quot;Install along side Windows&quot;.

==What to do after the installation==

So, you've installed your distro and you have your computer running Linux. Congratulations! The absolute most important part of becoming a Linux user is to consistently use Linux! The last step is to get all of your software back running so you can use your computer as a daily driver.

A few things first:

This is rather controversial, but you do not be afraid of the terminal. While the terminal is absolutely not required to do your normal day to day activities, you'll often find solutions to your problems require you to enter a few lines into the terminal. This isn't any sort of magic and it's nothing to be fearful of using, if you want you can think of it a bit like a voice assistant that works with text. The reason for this is because the terminal is, generally, distro agnostic and it's easier to explain one line of code instead of having lots of different pictures showing you what to click in each distro.

Second, use the internet! Everyone starts as a beginner at some point. You might be very comfortable in Windows or macOS now, but at some point you had no idea what you were doing. That's very normal! As you use Linux more and more you'll gain the knowledge and experience needed and eventually it will feel like home. There's absolutely no shame in asking questions!

===Installing Software===
If you are coming from Windows, you are probably used to search for an .exe and install it by double clicking. Things are way different here. Installing software individually is often discouraged. The reasons for this varies, but security and compatibility are the main reasons. So what do you do in Linux? You use a package manager. Think of it as being similar to the Play store, but instead of random people uploading software to it, everything is maintained by your distribution's software team. This also applies to drivers, including GPU drivers, even though AMD and Nvidia both offer a download. '''Don't use it! It will probably break your system!'''

Package managers have a lot of benefits that may not be immediately obvious to new users. The package manager knows what other software is required to work on your system and can manage updating all of the software pieces you have without you manually having to handle it. As I mentioned earlier, since your distribution's software team creates these packages, the chances of installing malware on your system is very slim.

Remember when I said don't be afraid of the terminal? Here's a good example as to why. To install [[Steam]] on Ubuntu, Linux Mint, Pop!_OS, or most other distros that derive from Debian, all you have to do is open a terminal and type:

<pre>sudo apt install steam</pre>
[https://www.youtube.com/watch?v=iRu1FysEf6w Video example]. And that's it. Steam is installed, from a trusted source and with everything it needs. Do you want to update all the stuff installed in your system?

<pre>sudo apt upgrade</pre>
Let's break those two lines down a bit so you know what's going on. <code>sudo</code> stands for &quot;super user do&quot;. You can think of this like right clicking and choosing the &quot;Run As Administrator&quot; in Windows. <code>apt</code> is the package manager's name. <code>apt</code> is used by distributions based on Debian. <code>install</code> is <code>apt</code>'s command for installing programs. <code>steam</code> is the Steam software. So in English we just said. &quot;Please install the &quot;steam&quot; program as administrator (called root on Linux).&quot;

Now, if you wanted to use the graphical way, I'd have to post pictures from Ubuntu, Mint, etc and they all look slightly different and you have to find their front end in different places. It's just easier this way.

So what do you do if the software you need isn't in your package manager? The next best thing is to add a 3rd party repository to your package manager. As an (educational) example, let's add Google Chrome. Note, that the following procedure is not recommended for various reasons, including, but not limited to Chrome being considered spyware<ref>https://fossforce.com/2021/10/googles-new-spyware-in-chrome-94/</ref>. UbuntuUpdates.org give the following instructions<ref>https://www.ubuntuupdates.org/ppa/google_chrome</ref>:

<pre>wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo &quot;deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main&quot; &gt;&gt; /etc/apt/sources.list.d/google.list'
sudo apt-get update
sudo apt-get install google-chrome-stable</pre>
That looks a bit scary, but it's just adding the security key and repository to your system and then installing Google Chrome. You'll want to use a PPA of your software when possible since it will update with the rest of your system.

However, what about distros that don't use apt? For example, let's say you installed Fedora instead. Fedora uses DNF. Unfortunately, Steam is not in Fedora's default repository, so we will have to enable the RPMFusion repositories with this command:
 sudo dnf install <nowiki>https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm</nowiki> -E %fedora).noarch.rpm <nowiki>https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm</nowiki> -E %fedora).noarch.rpm
Then we enter:
 sudo dnf install steam
As you can see, instead of using apt to call in apt, we used dnf to call in dnf.

===Improving performance===

Since you want to play games, you probably want to have the best performance that your hardware is capable of. The default settings are usually bad, though. Read [[Improving performance|this article]] to see how you can improve them for a flawless experience.

===Nice things===
Look at other articles in this wiki to see what you might want to use. Most of what you are used to from Windows is possible, including [[Misc#Game Streaming|game streaming]], [[modding]], [[FSR - FidelityFX Super Resolution|up]]-/[[Misc#Downsampling|downscaling]], [[Misc#Noise Cancelling|noise cancelling]], and much more.
===Going further===

Learn using the [[terminal]]. While you might not necessarily need it, it makes many things easier.

==Troubleshooting==
*Google
*Join the IRC channel of the distribution that you are using
*Join the [https://discord.gg/linuxgaming /r/linux_gaming discord channel]
*[https://www.reddit.com/r/linux_gaming Ask in one of the linux subreddits]
*Ask in forums

When asking about your problems, remember to give as much info as you can. For example, include what Distro you're on, what you have already tried, any error messages that come up, anything you've changed recently, etc.

===Common issues===

'''Vulkan games (native, Proton, Wine with DXVK) don't run (no Vulkan support)'''
*Ensure that Vulkan drivers are installed, including the 32-bit drivers
*For users of older AMD GCN 1 or 2 cards, [https://www.reddit.com/r/linux_gaming/wiki/drivers#wiki_amd_hd_7xxx_and_newer ensure that the AMDGPU kernel driver is used instead of radeon]
==The end==
u/PBLKGodofGrunts put this guide under the [http://www.wtfpl.net/txt/copying/ WTFPL License.] Please attach this license when sharing or modifying this guide. I hope that this is helpful to someone.

<references />

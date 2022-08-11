Linux gaming has progressed over the past few years to become, in some respects, a viable competitor to Windows for gaming. But should ''you'' swap to Linux? The answer to this question is: '''it depends'''. What matters is whether the games you care about work, and whether you are willing to commit the time to get everything working.

You should really see how you like Linux as a general desktop experience first, and then try gaming on it. Windows is often significantly easier to game on, so the Linux desktop experience is what would make Linux gaming worth it for you.

== General expectations ==

Running Windows-native games on Linux affects the amount of frames per second (FPS) and general performance that you get in the game. You usually can get up to 15% better or worse FPS compared to Windows, '''depending on the game and your computer'''. Typically, its worse by around ~5%, though you can lessen this performance penalty in [https://linux-gaming.kwindu.eu/index.php?title=Improving_performance a lot of ways], to the point where your performance might even be a lot better.

By using [[FSR - FidelityFX Super Resolution|FSR]], you might get significantly better performance than on Windows, but this comes at the cost of image quality. However, depending on your setup (your GPU is bad, but supports Vulkan), this might be worth it for you. Note that the image degradation is noticeable. Full HD + ultra high graphics + FSR might not be worth it. However FHD + low settings + FSR with 60 FPS might be significantly better than having 30 FPS with the same settings and no FSR. The image degradation is not as noticeable with high resolution, so 4k ultra high + FSR might fit your needs.

== Genres ==

If you play mostly indie games, single-player games, older games, do game emulation, etc., you'll likely have a satisfactory gaming experience on Linux.

=== Problematic genres ===

If you care the most about these parts of gaming, you're more likely to run into some issues on Linux. These issues range from something you can troubleshoot and fix, to something you can't:

==== Competitive First Person Shooters (FPS) ====

Many competitive shooters have [[anti-cheat software]] which currently lock out Linux. It depends on the game, though - CS:GO, Overwatch, Splitgate, Apex Legends, and more are playable on Linux.

==== AAA Games ====

Again, it depends on the game. If it's a single-player AAA game, it's a lot more likely to work in the first few days of release. But if you're looking to play the new AAA multiplayer game on day one, Linux may not be the best platform for that. Again, it mostly depends on anti-cheat and DRM. Elden Ring for example, worked on day one.

==== Virtual Reality ====

Virtual reality is doable on Linux, mainly through the Valve Index headset. But it currently lacks many quality of life features, and isn't really worth recommending as of right now.

==== Racing Simulators ====

Much racing sim equipment isn't well-supported on Linux.

==== Game Modding ====

[[Modding|Game modding]] is a hit or miss on Linux. Some games support it, especially through the Steam Workshop, but it really depends on the individual tools the modding community uses. It's often not as easy, and sometimes you have to put some extra work into it to make it work.

==== Conclusion ====

Again, things really depend game by game. Use the websites [[ProtonDB]], [https://appdb.winehq.org/ wine AppDB] and [https://areweanticheatyet.com/ Are We Anti-Cheat Yet?] to check game compatibility!

== Advantages ==
Now, if everything is so complicated, why should you even ''want'' to switch?

Linux has multiple advantages:

* Privacy. It will not spy on you.
* It doesn't nag you to use Edge, Skype, or Teams, and it doesn't show ads in the file explorer, or Bing results in the start menu.
*It basically has no system requirements. Linux can run on anything, ranging from a micro controller to a supercomputer. It doesn't need a TPM, and it will not show watermarks or threaten you to stop updates if your CPU is "unsupported" by Windows 11. 4GB or RAM is plenty for normal tasks like office and browsing, even 1GB is usable (not for serious gaming of course). And your old 15 years old CPU might suddenly feel snappy again. It won't magically turn your old PC into a performance monster, though. But it has significantly less overhead than Windows, so if that's the problem it will definitely help. For example, it might revive your old Laptop.
* It's free. You don't have to pay anything to use it.
*It's also free as in freedom. It respects your choices. If you don't want to do updates ''now'', it will not force you. If you want to change your browser, it will let you do it. If you want to uninstall your bootloader, it will let you do it (you shouldn't do the last one, though—you won't be able to boot anymore).
* It's customizable. You want to change how your taskbar looks? Sure. You want other icons, or the close button for windows to be on the left side? No problem. You want a dock instead of a taskbar? Go on. You want all windows to be tiled, you don't want a task bar, a dock, or window decorations, or you want to use your system entirely with hotkeys? It's possible. You can choose between many different file managers, thousands of themes, task bars, start menus, docks, and all kind of other things. There are multiple collections of these things, called "Desktop Environments" which all look and feel vastly different. The looks range from something like Windows to something like MacOS to something like Android to weird things you may have seen in some movies. And this is not even close to everything, there is basically nothing that is not customizable. If you want your system to look or feel in a specific way, your chances are good that it's possible. You can even change and customize the ''kernel'', which is the heart of the system, and replace it with something that is optimized for a specific task. For example, you can build your own customized kernel where you can decide the maximum amount of input lag that you tolerate. Some examples of what Linux can look like:
**KDE Plasma: [https://www.gamingonlinux.com/uploads/articles/tagline_images/528481101id19192gol.jpg 1][https://news-cdn.softpedia.com/images/news2/kde-plasma-5-15-desktop-environment-officially-released-here-s-what-s-new-524922-8.jpg 2][https://www.lffl.org/wp-content/uploads/2021/01/garuda-linux-dr460nized-1400x788.png 3][https://ubuntuhandbook.org/wp-content/uploads/2017/04/preview-arc-dark.jpg 4][https://4.bp.blogspot.com/-RQLcqtqS-YA/XHTsrV6x_-I/AAAAAAAAU0Y/eKJma9C7vsITXzcDklMTaOXgUdVqBIvWgCLcBGAs/s1600/Screenshot_20190226_073620.png 5][https://preview.redd.it/ovvztl9yb8e41.png?auto=webp&s=82f9340fc4918150e3816d3dbb66d6ec02e8993f 6][https://i.redd.it/lvubg0sxnl641.png 7][https://preview.redd.it/ovvztl9yb8e41.png?auto=webp&s=82f9340fc4918150e3816d3dbb66d6ec02e8993f 8][https://i.redd.it/8mz4z5kybs631.png 9][https://i.redd.it/jup9nde0f0l81.png 10][https://i.ytimg.com/vi/FEMS88kEx_8/maxresdefault.jpg 11][https://i.redd.it/f6ywf9pncpy31.png 12][https://i.imgur.com/kYX3ewJ.png 13][https://forum.endeavouros.com/uploads/default/original/2X/6/6e6c1619652607552c45b001ad2dbfb9d01ea21d.jpeg 14][https://i.redd.it/e4w1uvk48fr81.jpg 15][https://i.redd.it/0x4pz8o10xq81.png 16][https://i.redd.it/7a5mwp393jo81.png 17][https://i.redd.it/cv5gc2tne4r81.png 18] [https://i.redd.it/t65bae91v3s81.jpg 19] [https://64.media.tumblr.com/9bda2b57523402c142d4f797c8ad0093/d629d44890280e21-7d/s1280x1920/ad696bc813582410c77f9879cc0334b76ab252ea.jpg 20] [https://www.reddit.com/r/unixporn/comments/eor4up/plasma_cyberpunk_desktop/ 21] [https://www.reddit.com/r/unixporn/search/?q=plasma&sort=top and] [https://store.kde.org/browse?cat=104&ord=rating more]
**GNOME: [https://forum.garudalinux.org/uploads/default/optimized/2X/e/e6d6150878051d075fb6d8548f5314fcf6c7bf28_2_1035x646.jpeg 1][https://www.cmscritic.com/wp-content/themes/cmscritic/img/cloudinary/pop-os-review-4_hhslpt.png 2][https://i.redd.it/jt3xl3e2qak61.png 3][https://pingvinus.ru/files/news/manjaro-20-1/manjaro-20.1-gnome.jpg 4][http://www.jetestelinux.com/wp-content/uploads/2018/01/manjaro_gnome_1710_mode_nuit.jpg 5][https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f8e04f89-e155-4926-972e-76e0955933eb/dak2iyb-e5931cb1-e722-43f8-a1ed-63361f901ab9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4ZTA0Zjg5LWUxNTUtNDkyNi05NzJlLTc2ZTA5NTU5MzNlYlwvZGFrMml5Yi1lNTkzMWNiMS1lNzIyLTQzZjgtYTFlZC02MzM2MWY5MDFhYjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zwpBVOqCfSFqWRDNz1fnEgVkyyXgrj_3NoJNLa0Zlzw 6][https://i.redd.it/b06ms6vfe0r81.png 7][https://i.redd.it/uvenc4r0dun81.png 8][https://i.redd.it/kw1enzggqmo81.png 9][https://i.redd.it/gdtwdhbk4tr81.png 10][https://i.redd.it/uk9uihckcsd41.png 11] [https://www.reddit.com/r/unixporn/search/?q=gnome&restrict_sr=1&sr_nsfw=&sort=top and] [https://www.gnome-look.org/browse?ord=rating more]
**Tiling window managers: [https://pic3.zhimg.com/v2-bad01545e1f69cc0a94633ff771b72e3_1200x500.jpg 1][https://preview.redd.it/f2jg3znpr1g31.png?width=960&crop=smart&auto=webp&s=9b64dde84ccb1e0ba20e8bba5ee6516123273bd2 2][https://pingvinus.ru/cr_images/userpicture/n/1938-0.png 3][https://i.redd.it/rpojcv4d3nr81.png 4][https://i.redd.it/lkviraiador81.png 5][https://i.redd.it/or7veqoicdq81.png 6][https://i.redd.it/ptbibz0gdk861.png 7]
**[https://www.reddit.com/r/unixporn/ and many more]
* Game compatibility. No joke, old Windows games might run better. They also have no issues with incompatible dependencies (when two games want to install the same thing but two different versions of it, for example c++ redistributable), because all games live in their own personal Windows filesystem. Of course this doesn't apply to all games, so your mileage may vary.
* Performance. If you [[Improving performance|tweak your system accordingly]], you might have significantly better performance in some games. You might also have worse performance in other games, though, so (again) your mileage may vary.
* Security. It's significantly less likely to get malware (viruses and others) on Linux.
* Software. Almost all software is completely free, comes without ads, and without trial versions. Installing software is much easier, you don't need to search shady websites for downloads, you just open your software center, and download whatever you want, pretty much like on Android or iOS. You have the option to install software in other ways, too, but that's typically not the best option.

== Future ==

With the further development of Linux as a gaming platform, these hurdles can be overcome! Things to watch for:

*The release of [https://www.steamdeck.com/en/ Valve's Steam Deck] (Linux gaming device) has already lead to Linux [[Anti-cheat software|Easy Anti-Cheat and BattleEye support]], which is already used by many games like Apex Legends and Elden Ring (which had support from day one). Many other games are currently testing support.
* Amazon [https://www.phoronix.com/scan.php?page=news_item&px=Amazon-Linux-Graphics-Jobs putting funding and development into Proton] (from December 2021 onwards) for their ''Amazon Luna'' cloud gaming platform.
*'''Rumors''' of [https://libreddit.kavin.rocks/r/linux_gaming/comments/sd0wyb/valves_next_vrheadset_speculated_to_be_a/ an upcoming Valve Linux-powered VR headset], which would, if it comes out, improve Linux compatibility with VR games
* And more...
Valve is constantly investing in the development of Linux gaming software such as Proton, so circumstances significantly improve year by year.

Lastly, heavily depending on the amount of work invested into it, Linux has some potential of becoming the '''best''' gaming platform in the future. Compared to Windows, Linux is much more lightweight, and gets better performance in [https://www.pcgamingwiki.com/wiki/List_of_Vulkan_games Vulkan games]. Linux can also be modified and optimized at its core a lot more easily than Windows thanks to to its open source nature, which opens up a wide door for impactful gaming optimizations. Further development and more Linux-native games could mean better performance in games compared to Windows.

== See more ==


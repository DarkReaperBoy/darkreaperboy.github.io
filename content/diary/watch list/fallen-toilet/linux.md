Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [8:54:45 AM]
flatpak repos:

elementary os's flatpak:
flatpak remote-add --if-not-exists elementary https://flatpak.elementary.io/repo.flatpakrepo

fedora's flatpak:
flatpak remote-add --if-not-exists fedora oci+https://registry.fedoraproject.org

fedora beta's flatpak:
flatpak remote-add --if-not-exists fedora-testing oci+https://registry.fedoraproject.org#testing

flathub (main):
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

flathub (beta):
flatpak remote-add --user --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo

kde's flatpak:
flatpak remote-add --if-not-exists kdeapps --from https://distribute.kde.org/kdeapps.flatpakrepo

gnome's nightly flatpak (fk gnome):
flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo

note:
it can be added on any distro

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [8:55:26 AM]
systemctl --user restart pipewire.service

curl --socks5 127.0.0.1:9050 http://checkip.amazonaws.com/


add nix app shortcuts to start menu:
ln -s ~/.nix-profile/share/applications/* ~/.local/share/applications/ && chmod +x ~/.local/share/applications/*

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [9:24:40 AM]
some linux Universal third party repos:
1) nixpkg:
install it (it's a bash script):
https://nixos.org/download.html

search package:
https://search.nixos.org/

basic guide for commands:
https://christitus.com/nix-package-manager/

real guide:
https://nixos.org/learn.html
محشره! ولی وقتی vulkan و opengl میشه (یعنی هرچی غیر گیمینگه اوکیه), بیچاره کنندس
https://github.com/guibou/nixGL/
باید اینو بزنی, opengl کار میکنه ولی vulkan برا nvidia عوضی بازی در میاره 
https://github.com/guibou/nixGL/issues/96
https://github.com/guibou/nixGL/issues?q=nvidia

2) flatpak
it's installed by default in your distro, but not all distro use flathub (has everything you will need), like fedora
https://flatpak.org/setup/Fedora
the commands are basic like (same with dnf): 
flatpak install X, flatpak remove X, flatpak search X

some linux universal binary:

1) appimage,
it's exe equivalent for linux, it's supported by all (most) distros, you can check out
https://github.com/AppImageCommunity/awesome-appimage
by using things like
https://github.com/TheAssassin/AppImageLauncher
it feels like a native application (and in some instances, it's better than native version)

2) linux binary
sometimes, things like telegram and nekoray, you need a tar.gz from official github release bcz telegram in repos always suck, you need to add them to /opt/ and add manually to your application menu

some linux universal IDK WTF I AM DOING IN MY LIFE:
1) distrobox
https://github.com/89luca89/distrobox
install linux distros in docker/podman with shared /home
not fully isolated like flatpak (by default)

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [9:25:01 AM]
Nako Kumar, [2:40:14 PM]
add package to system (example: nvidia):
sudo transactional-update pkg install (???)

opensuse unimmutable shell mode: 
sudo tukit --continue execute fish

(in order to make appimage work, install "fuse")
(Also "farsi-fonts" for...)


--------------------
nvidia:

1- add repo
sudo zypper addrepo -f https://download.nvidia.com/opensuse/tumbleweed NVIDIA

2- update repo
zypper ref && zypper dup

3- install nvidia
zypper install x11-video-nvidiaG05 nvidia-glG05 nvidia-computeG05 nvidia-gfxG05-kmp-default

(replace G05 with your current gen (https://en.opensuse.org/SDB:NVIDIA_drivers#Install))


---------------

list repo:
zypper lr -d 
(find repo's number)

To disable repo number;
zypper mr -d -F (number)

To Remove;
zypper rr (number)

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [1:32:15 PM]
https://ohmyz.sh/#install

https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/themes

https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins-Overview

https://github.com/zsh-users/zsh-autosuggestions
https://github.com/zsh-users/zsh-syntax-highlighting

https://medium.com/wearetheledger/oh-my-zsh-made-for-cli-lovers-installation-guide-3131ca5491fb

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [1:45:54 PM]
توی ویندوز سرویس های اضافی روببند. از لاگ گیری ها گرفته تا قسمت های exploit monitor
فایروال یا سرویس های و استارت اپ های تحت بوت.
ابزار io driver booster هم نصب کن.درایورها رو بروز کن.
میتونی از ابزار wise care استفاده کنی. برای بعضی از کارها

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [2:36:27 PM]
https://wiki.supreme-gamers.com/guides/run-android-x86-on-linux-distro/
https://linuxjourney.com/
https://t.me/linuxtnt
https://wiki.supreme-gamers.com/guides/run-android-x86-on-linux-distro/

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [2:38:11 PM]
figlet

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [2:40:40 PM]
https://linuxjourney.com/

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [3:00:24 PM]
برای اضافه کردن دستور اتوماتیک هنگام باز کردن ترمینال
nano ~/.bashrc 
و اخرین خط دستور رو وارد میکنیم

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [3:00:31 PM]
fortune | cowsay | lolcat

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [3:01:19 PM]
Fedora Fonts:
Install most important fonts (google mono will do almost of the job):
sudo dnf install google-noto-sans*

install ALMOST EVERY fonts:
sudo dnf install *-fonts*.noarch

install persian Vazir font:
https://github.com/rastikerdar/vazirmatn/releases

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [3:59:28 PM]
گروه فدورا فارسی:
https://t.me/Fedorair

Fallen Reaper 『リーパーボーイ』⁪⁬⁮ 🦦, [4:45:43 PM]
https://liquorix.net/


https://xanmod.org/
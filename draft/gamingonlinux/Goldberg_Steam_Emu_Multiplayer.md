# Goldberg's Steam Emu: Multiplayer


## Introduction

For most games patched with Goldberg's Lan Steam Emu, you can play with your friends online, providing the game utilizes the Steam network.
By default, you can only play with those on your LAN. However, this can be extended to friends outside your LAN via tools such as Zerotier, or Hamachi.

For this guide, we will be using Zerotier, and I highly recommend you use it over something like hamachi. 
In my experience, hamachi on Linux can break pretty often with system upgrades, and hamachi has a lot of problems on both windows, and Linux that tend to cause it to break anyways. Zerotier on the other hand, is better in almost every way. There is a much higher limit to the amount of people you can allow on your network for free. You approve
people when they try connect to your network, instead of setting a password. Zerotier has much better mangement tools.

No matter what OS your friends use, they will be able to make use of this method. The method for windows is mostly the same, and really simple. They have a GUI.

## Creating a zerotier network

Managing, and creation of a zerotier network is done entirely via web browser.
You must first go to https://www.zerotier.com/ and create an account. Then you may login and create a new network under the networks tab.
Keep note of the network ID of your network. You will be using this later to connect, and for others who you wish to connect with.

## Install Packages

Arch Linux 
```sh
sudo pacman -S zerotier-one
```
Ubuntu/Debian 
```sh
sudo snap install zerotier-one
```

## Using Zerotier

You must first either start the Zerotier service, or enable it to start on boot.
```sh
sudo systemctl start zerotier-one
```
or
```sh
sudo systemctl enable zerotier-one
```
Then you run Zerotier:
```sh
 sudo zerotier-one -d
```
And connect to the network: 
```sh
sudo zerotier-cli join <network ID>
```
You must finally approve those who are attempting to join to your network. This is done via zerotier website under members section in your network. You just click the auth tickbox, and I recommend adding a name tag so you know who is who.

You should be able to find those connected on the network in any game with LAN capabilities.
Zerotier will now run in the background, and you are connected to the network! 

## Multiplayer

The easiest way to connect to friends in-game is via lobby browsers. 
If the game you're playing is using a lobby browser. Then chances are, you can simply make a lobby, and your friend will be able to see it and connect.

If the game only allows connection via IP. Then you have to use the hosts public IPv4.

For certain games, you can only join via steam friends list.
In these cases, you will have to either use a lobby connect tool, which in my experience can be pretty buggy. So I'd avoid this method if you can help it. However, this is the only option that I found to work with Linux Native games for now.
You can download the lobby connect tool from this gitea, or from Goldberg's Gitlab repository - https://mr_goldberg.gitlab.io/goldberg_emulator/
```sh
./lobby_connect_x64
./lobby_connect_x86
```
There will be a list of connections. You should be able to see your friend if they're hosting a lobby, and can connect to them as if you were joining via steam friends list by typing their corrosponding number.
I have only tested this between myself on Linux, and friends on windows. So your experience with it may differ. 

However, an easier way to connect to friends if the game only allows connections via friends list is only available for games ran under wine currently.
This is done through Goldberg's overlay. This is only accessible if you use the experimental version of his steam emu. Allowing you to press shift+tab to open an overlay with a simple friends list, chat feature, join function.
You simply create a lobby, and your friends use the join function in the overlay to join your server.

There is a Linux version of this overlay for Native games. However, I believe it is broken as all the games I've tested it on; it does not work at the current moment. I will update this if I manage to get it working.

I recommend changing your username so you, and your friends don't have the same name. This can be done in two ways. Either by changing your global username, which will affect all games using Goldberg's Steam Emu, or by using force_account_name.txt in the game's steam_settings folder, which will only affect that game specifically.

Native:
```sh
$HOME/.local/share/Goldberg SteamEmu Saves/settings
```
Wine:
```sh
C:\Users\<Your windows user name>\AppData\Roaming\Goldberg SteamEmu Saves\settings
```
## Additional notes

- You need to make sure 47584 TCP and UDP is allowed through your firewall or this won't work. This is the default port.

- This works for Wine, and Linux Native games.

- This will not work unless steam_interfaces.txt is setup properly.

- In the experimental overlay, achievements are implemented if setup properly. Currently they should only pop up when triggered. 

- Zerotier source code: https://github.com/zerotier/ZeroTierOne

- Goldberg's Steam Emu source code: https://gitlab.com/Mr_Goldberg/goldberg_emulator

- Thank you Goldberg for making this possible <3
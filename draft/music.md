# Slav Art Beginner Information
This is a brief overview of some important information that will help you with using our music bots.
## Table of contents:
- [Choosing download quality](https://rentry.org/slavart#choosing-download-quality)
- [Getting a proper artist & playlist URL from Qobuz](https://rentry.org/slavart#getting-a-proper-artist-playlist-url-from-qobuz)
- [Zip file only contains album cover?](https://rentry.org/slavart#zip-file-only-contains-album-cover)
- [Additional information](https://rentry.org/slavart#additional-information)

### Choosing download quality
ID | Quality
-| -
0 | 128 kbps MP3 or AAC
1 | 320 kbps MP3 or AAC
2 | 16 bit, 44.1 kHz (CD)
3 | 24 bit, ≤ 96 kHz
4 |  24 bit, ≤ 192 kHz

To choose a different quality, simply add the quality ID behind your dl command like so:
`!dl <url> <quality id>`
**Example: ** `!dl https://www.deezer.com/en/album/305629827 3`

The quality argument is **completely optional**, you do not need to specify the quality every time, **it will default to the highest available quality.**
Keep in mind this **only** works for Deezer, Qobuz and Tidal (Soundcloud, Apple and Spotify don't support this. They are limited to max 256kbps M4A and 320kbps OGG respectively)

### Getting a proper artist & playlist URL from Qobuz
Downloading Qobuz artist profiles requires a URL that contains their artist ID. The normal artist links will not work.

How to get that url without an account:
1. Go to the artist profile, right click the button that says "Listen on Qobuz" and copy the link
2. The link will look like this: `qobuzapp://artist/<id>`   Copy that id
3. Your link should now look like this:  `https://play.qobuz.com/artist/<id>`
**Example**: https://play.qobuz.com/artist/5243973

** OR **

You can use this User Script that let's you easily copy the artist link for Slav Art.
First you are going to need ViolentMonkey for your web browser, you can get it here: [https://violentmonkey.github.io](https://violentmonkey.github.io/get-it/).
Once you have it installed click on [this](https://gist.github.com/crackhub-dev/cce7799296a9b34eec94d74247b8fc1e/raw/19b2b0aaa2767330c33390a33f67825dfcd74083/qobuz_artist_slavart.user.js) link and hit "Confirm installation".
Now if you visit a www.qobuz.com artist page, you should find a new button that reads "Copy Slav Art link", it will copy the proper URL to your clipboard!

Same goes for playlists
instead of `https://www.qobuz.com/us-en/playlists/<id>` use `https://play.qobuz.com/playlist/<id>`
**Example**: https://play.qobuz.com/playlist/892501 


### Zip file only contains album cover?
If the zip file you got from one of the bots only contains the album cover instead of the music files, that means the album you tried to download was blocked in the region of our account for that streaming service. 
**Our account regions are currently:**
Deezer: ? (?)
Qobuz: 🇺🇸 (USA)
Spotify: 🇺🇸 (USA)
Tidal: 🇺🇸 (USA)
Apple: 🇺🇸 (USA)
If you face the issue mentioned above (or other geo-related errors), try requesting an upload of the album you want in [#request](https://discord.com/channels/919093551541940284/924738637172723853) maybe someone in the community has access to an account in a region where it's not blocked.


### Additional information
 **Q: How to download from Spotify, JioSaavn, YouTube and Apple?**
A: You can only download in (Main Bot) [#music-dl-request](https://discord.com/channels/964393818260647946/964393818378084371)

**Q: How to download entire artist profiles and playlists?**
A: You can download entire artist profiles and playlists in [#music-dl-request-4](https://discord.com/channels/919093551541940284/922098215896113162), [#music-dl-request-5](https://discord.com/channels/919093551541940284/924479289947222067) and [#music-dl-request-6](https://discord.com/channels/919093551541940284/924479317579288616)

**Q: Why is #music-dl-request-x locked?**
A: The artist/playlist channels are closed while they're processing requests (that's why there's 3 of them). This is to prevent the bots from filling the disk. If you want to download a track or an album (or a playlist on Spotify!) use [#music-dl-request](https://discord.com/channels/919093551541940284/941798832210075648) the bot handles requests all at once without the need to lock the channel so you won't have to wait.

**Q: How to access archived music / albums already downloaded on Slav Art?**
A: Use the Discord search bar and find stuff located in one of the upload channels.
This is useful for finding music that has been deleted from streaming services.

**Q: How to transfer playlists from/to TIDAL, Apple Music, YouTube, Amazon Music, Pandora and many more?**
A: [This site](https://www.tunemymusic.com/) can help you achieve that.
**iOS siri shortcut for slavart.gamesdrive.net**
Created by HenryThe6th#2791
https://www.icloud.com/shortcuts/212cac62016b4478b2be3f4f18f445fe
== Introduction ==
Hardware accelerated video makes it possible for the video card to decode/encode video, thus offloading the CPU and saving power.

This article gives detail on enabling hardware video acceleration in browsers used in Linux. This article details them for Firefox and Chromium, but similar instructions apply to other browsers based on the above two.

== Firefox ==
Firefox currently supports hardware acceleration on both x11 and Wayland. This is tested on Firefox 96 (nightly). The following settings need to be changed in <code>about:config</code>:<syntaxhighlight lang="bash">
media.ffmpeg.vaapi.enabled  true
gfx.webrender.all           true
media.ffvpx.enabled         false
</syntaxhighlight>In addition, while running X11, Firefox should be launched with variable <code>MOZ_X11_EGL=1</code> . Also, users should ensure that vaapi is available by installing/running <code>vainfo</code> in terminal. In cases where GPU only supports h.264 decode, its beneficial to install [https://addons.mozilla.org/en-US/firefox/addon/h264ify/ h.264ify].

What works:

# both 30fps/60fps or higher videos play smoothly at resolutions supported by GPU decoder.
# CPU usage is significantly reduced while playing videos

The problems:

# The color of videos appears washed out. (0,0,0) is mapped to (16,16,16) and (255,255,255) to (235,235,235). [https://bugzilla.mozilla.org/show_bug.cgi?id=1726186 Bug 1726186] (Fixed on Firefox 96+!)
# Nvidia users out of luck (for now)

== Chromium ==
Chromium also supports hardware acceleration in x11 and Wayland. This too was tested in chromium-dev 97. To enable it, first set <code>chrome://flags/#ignore-gpu-blocklist</code> to <code>disabled</code>. Then launch chromium with the following flags:<syntaxhighlight lang="bash">
--use-gl=desktop --enable-features=VaapiVideoDecoder
</syntaxhighlight>In theory, <code>--use-gl=desktop</code> should not be required in Wayland, but the wiki editor couldn't get it to work without it. Also h.264ify will be required as stated above.

What works:

# both 30fps/60fps or higher videos play smoothly at resolutions supported by GPU decoder, unless Vulkan backend is enabled through flags. However there is little reason to enable it for now
# Videos are played color accurately

The problems:

# CPU usage reduction is minimal. I could not observe significant improvement in reduction of CPU load or improved battery life ( on different machine) despite confirming that hardware video acceleration was working while playing videos
# Nvidia users out of luck again

=== Google chrome and other flavors ===
Same should work for google chrome (and other chromium-based browsers like Brave, Vivaldi, edge etc.)

There is a config file for google chrome located at ''$HOME/.config/chrome-flags.conf'' (if file does not exist, create it), where you can put flags that chrome should start with by default (because starting browser with parameters sometimes can be hard/pain).
{{Warning|Problem='''NEEDS SPECIFYING:''' Does this file work for other chromium based browsers and chromium itself?}}

$HOME/.config/chrome-flags.conf:
<pre>
--enable-features=VaapiVideoDecoder
--use-gl=desktop
</pre>

=== Nvidia GPUs ===
For full GPU acceleration with Nvidia GPUs it's required to set 2 additional flags:<syntaxhighlight lang="bash">
--ignore-gpu-blocklist --enable-zero-copy
</syntaxhighlight>

=== Optimizing performance ===
For better performance it is recommended to set 2 additional flags:<syntaxhighlight lang="bash">
--enable-gpu-rasterization --canvas-oop-rasterization
</syntaxhighlight>

== Epiphany/Gnome Web ==
Based on GTKwebkit, it provides another option for users that may be not as powerful as chrome or Firefox, but still fairly usable for modern web. To enable hardware accelerated video, first install <code>gstreamer-vaapi</code> for AMD/Intel GPUs or <code>gst-plugins-bad</code> and <code>nvidia-utils</code> for Nvidia GPUs. Then [[Terminal|run]]:<syntaxhighlight lang="bash">
gsettings set org.gnome.Epiphany.web:/ hardware-acceleration-policy 'always'
</syntaxhighlight>What works:

# both 30fps/60fps or higher videos play smoothly at resolutions supported by gpu decoder
# Videos are color accurate
# Works for Nvidia users
# Good reduction in CPU usage

The problems:

# Lack of extensions
# No simple way to limit video codec to h.264, hence older GPUs will lack hardware video acceleration in most videos with codecs other than h.264

== Alternatives ==
VLC and MPV both support proper hardware accelerated video in Linux. They can be set to launch when a video is played in a browser. This can be done in Firefox with [https://addons.mozilla.org/en-US/firefox/addon/open-in-vlc/ Open in vlc] or [https://addons.mozilla.org/en-US/firefox/addon/ff2mpv/ ff2mpv] extension or other similar extensions. Similarly for chromium, [https://chrome.google.com/webstore/detail/play-with-mpv/hahklcmnfgffdlchjigehabfbiigleji Play with MPV] or [https://chrome.google.com/webstore/detail/open-in-vlc-media-player/ihpiinojhnfhpdmmacgmpoonphhimkaj?hl=en Play with VLC] or similar.

What works:

# CPU utilization better than Firefox and chrome
# Videos are played with accurate colors
# Works for NVIDIA users

The problems:

# Many sites with DRM (such as most paid streaming services) and those using custom video players may not work.

== Further Reading ==

* [https://wiki.archlinux.org/title/Hardware_video_acceleration Arch Wiki - Hardware Accelerated Video] - Resource on setting up hardware video acceleration and installing <code>vainfo</code>
* [https://wiki.archlinux.org/title/List_of_applications/Internet#Web_browsers Arch Wiki - Web Browsers] - List of web browsers available in Linux


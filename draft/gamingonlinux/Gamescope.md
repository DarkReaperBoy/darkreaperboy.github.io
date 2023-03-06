 
[https://github.com/Plagman/gamescope Gamescope] creates a virtual desktop for your game. This can be beneficial if your game doesn't play nicely with your desktop, for example if it doesn't catch your mouse, or if it breaks when loosing focus.

You can use Gamescope for downsampling. For example, use <code>gamescope -w 3840 -h 2160 --</code> as command prefix, to downscale from 4k. The same can be achieved in Lutris, by enabling Gamescope, and setting <code>3840x2160</code> as resolution.

=== Setup ===
Run <code>sudo setcap 'CAP_SYS_NICE=eip' $(which gamescope)</code> to get a smooth gaming experience.<ref>https://www.reddit.com/r/linux_gaming/comments/w4u69f/my_gamescope_was_too_nice_and_yours_is_too/</ref>

== References and notes ==

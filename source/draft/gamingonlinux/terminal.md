 
The terminal is the black thing with text you probably have already seen in some hacker movies. It might look scary, but it basically works like a voice assistant with text input.

If you see instructions in the form of <code>sudo pacman -Q | grep -i -C 10 "apt"</code>, then this is something you have to put into the terminal.

== How to use the terminal ==
'''Where do I find the terminal?'''

You will probably find it somewhere in your menu. It might have a name like Gnome-Terminal, Konsole, Xterm, Terminator, or something else. It will probably have an icon that looks vaguely like a terminal (black background, white text).

'''How does the terminal work?'''

You write a line of text, you press enter, and you look at what happens. The terminal usually tells you if something goes wrong. Sometimes you need to press additional buttons like <code>y</code> for "yes" or <code>n</code> for "no".

'''Should I read the output?'''

Yes, it might contain warnings. However: Sometimes the output is very long, for example if you install software. In this case, you don't have to read everything. The important stuff will be at the end. If you have problems and look for help in forums, always include the output from the terminal.

'''Should I take warnings seriously?'''

YES! [https://www.youtube.com/watch?v=0506yDSgU7M&t=600s It's not your average "You could harm your computer" bullshit you are used to from Windows.]

'''Is the terminal dangerous?'''

It might look scary, but it's not dangerous. If you write something wrong, it will just tell you that it's wrong - your computer will not explode. However, things can go wrong, more in the next section.

'''How can I learn using it?'''

Look here: https://linuxjourney.com/

== Dangers of the terminal ==
'''So should I just input whatever I find at some random place in the internet?'''

NO! You should not copy/paste stuff from untrusted sources (like this wiki - everyone can edit it) if you don't understand what you're doing. The commands might be malicious. For example, if you would type the following, you would delete everything on your computer, and potentially destroy your motherboard:

<div style="border: 1px solid #cc8400; background: #fff6e5; margin: 5px 0 5px 0; padding: 10px;">
'''<big>DO NOT DO THIS!</big>'''

There is no situation where it would be a good thing to input the following command. It will delete your system, it will delete other mounted drives (like Windows, external drives, your game drive, whatever), and it might '''permanently''' '''destroy''' your motherboard.

<code>sudo rm -rf / --no-preserve-root</code>

Don't do it. Seriously. Not for fun, not because you don't need your system anymore. Just don't.
</div>

Other commands may uninstall your graphical user interface, or install a remote access for hackers.

'''This sounds scary!'''

Don't be afraid. Malicious tutorials for Linux are rarer than malware for Windows (I don't even know if this ever happened somewhere), and if someone did write one, it would probably get noticed and removed very fast.

If you're fine with installing software on Windows, you should be fine with tutorials for Linux. But still. Be wary.

'''Could I harm my computer if I type malicious commands by accident?'''

Probably not. It's not easy to input these commands by accident. You might type <code>sudo rm -rf /</code> by accident, but you won't type the <code>--no-preserve-root</code> if you don't actually want to harm your computer. Accidentally typing a command that installs malware is near impossible.

'''So as long as I don't type --no-preserve-root, everything is fine?'''

No. The terminal is a way to operate your computer. It will do exactly what you tell it to do. If you tell it to remove all your important files, it will do just that. In the same way you might harm your computer with the GUI, you might as well harm it with the terminal. However, you definitely have more options to fuck things up when using the terminal.

For example, always be careful, when running <code>sudo</code>. This is the equivalent to "Administrator access", but much more powerful. You should always avoid running a ''root-shell'' (a shell where you have sudo access without typing sudo). You would detect it by the # symbol at the beginning of each line.

But note, that you can do all kind of bad stuff in your home directory (the place where all your important files are), without typing <code>sudo</code>. Always think before typing something, and especially think before pressing enter.

Also note, that <code>rm</code> actually ''removes'' files, and doesn't just move them to the trash bin. Always be careful when using <code>rm</code>. If you want to have extra safety, you can use <code>trash</code> instead, it will move files to the trash bin.

'''What else can go wrong?'''

There might be instances where you copy a command from some website, and you also copy the "enter command". This might lead to ''enter'' being automatically pressed at the end of the line, and the command being executed without additional interaction by you. If you want to modify the command before executing it, this would be unintended behavior. To prevent it, you can copy to a text editor first, modify the commands, and then copy to the terminal.

== Other stuff you should know ==
If you have  a folder <code>foo</code> and in it a folder <code>bar</code>, you would write this as <code>foo/bar</code>. The topmost folder is <code>/</code>. This means, that every path on your computer looks like this: <code>/path/to/some/file.txt</code>

=== Common commands ===
Go to a folder: <code>cd <folder_name></code>.

List files: <code>ls</code>

Copy: <code>cp <nowiki><source> <target></nowiki></code>

Copy a folder: <code>cp -r <nowiki><source> <target></nowiki></code>

Move: <code>mv <nowiki><source> <target></nowiki></code>

Rename: <code>mv <nowiki><source> <target></nowiki></code>

Edit: <code>nano <file_name></code>

Delete: <code>rm <file_name></code> (better alternative: <code>trash <file_name></code><s>)</s>

Delete folder: <code>rm -r <folder_name></code> (better alternative: <code>trash -r <folder_name></code>)

Do something as <code>root</code> (the equivalent to the windows administrator): <code>sudo <command></code>

=== Path Abbreviations ===
<code>~</code> is an abbreviation for <code>/home/<username></code> (where <code><username></code> is your actual username. If your username is ''peter'', this would be <code>/home/peter</code>), so paths to files in your ''home directory'' (the place where all your personal files are, look like this: <code>~/path/to/some/file.txt</code>.

<code>.</code> is an abbreviation for the folder you are currently in. For example if you are in <code>~/.var/app/</code>, <code>.</code> would be <code>~/.var/app/</code>. This is especially useful if you want to execute a script that's inside your current folder: <code>./<script_name></code>, or if you need the path you are currently in, but don't want to type it, for example to search a file inside your current folder or a subfolder: <code>find . | grep -i <file_name></code>.

<code>..</code> is an abbreviation for the parent of the folder you are currently in. For example if you are in <code>~/.var/app/</code>, <code>..</code> would be <code>~/.var/</code>. This is especially useful change the directory to the parent folder: <code>cd ..</code>

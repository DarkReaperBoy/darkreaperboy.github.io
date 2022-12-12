Environment variables are settings that are passed to programs.

== General usage ==
Environment variables can be written in front of the command that is executed. Syntax: <code>environmentVariable=value command</code>. For example, if you want to pass the variable <code>EDITOR</code> set to <code>nano</code> to <code>crontab -e</code>, you could run <code>EDITOR=nano crontab -e</code>. If you want to pass more than one variable, just write a space between them, for example <code>LANG=en EDITOR=nano crontab -e</code>

== Lutris ==
Let's say you want to enable dxvk_async, so you want to pass <code>DXVK_ASYNC=1</code> to your game.
*Right click your game, click Configure
*Click ''System options'' and scroll down to ''Environment Variables''
*Click ''Add'' and input <code>DXVK_ASYNC</code> into the ''Key'' box, and <code>1</code> into ''Value''.

== Steam ==
Let's say you want to enable FSR, so you want to pass <code>WINE_FULLSCREEN_FSR=1</code> to your game.

* Go to your library, right click your game, click ''Properties''
* In the ''General'' tab, you see ''Launch Options''
* Input <code>WINE_FULLSCREEN_FSR=1 %command%</code> in the box below

== Heroic ==
Let's say you want to enable dxvk_async, ''and'' FSR, ''and'' you want to set the FSR strength to 4, so you want to pass <code>DXVK_ASYNC=1</code>, <code>WINE_FULLSCREEN_FSR=1</code> and <code>WINE_FULLSCREEN_FSR_STRENGTH=4</code>to your game.

* Go to your library, click your game, and click ''settings''
* In the ''other'' tab, you see ''Advanced Options (Environment Variables)''
* Input <code>DXVK_ASYNC=1 WINE_FULLSCREEN_FSR=1 WINE_FULLSCREEN_FSR_STRENGTH=4</code> in the box below


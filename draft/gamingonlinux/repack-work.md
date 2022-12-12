https://libreddit.bus-hit.me/r/CrackWatch/comments/ndecl6/dieselpunk_wars_v11_multi8_16_gb_the_companion/gyhkgp5/


Looks like you know nothing about compression, so lemme explain how modern games and compressors (including ones that are in repacks) work.

90% of games novadays made in either Unity or Unreal Engine 4.

Default compression for UE4 is deflate/zlib (the same is used in popular ZIP archives). It's very old, has mediocre compression ratio, but very compatible and has relatively fast compression and decompression speed.

Some UE4 games use other compressors - LZ4, Oodle, ZSTD, etc. Almost all of them gives better compression ratio than zlib at cost of slower compression speed (while maintaining fast decompression, which is more important for end-user).

Unity games usually come without any compression, though natively it supports LZMA (same as 7Z archivers) and LZ4. Latter is slowly gaining popularity and more Unity games come compressed with it.

Now, let's see how modern repacks work.

90% of size-efficient repacks now use LOLZ algo. It's very powerful, games-oriented, multithreaded (up to 16 threads are supported) compression algo. It's very slow in compression compared to competing algos, but still is good in decompression - which is around 70 MB/s per one thread, which gives you 280 MB/s of decompression speed on a generic 4-threaded CPU. And it's already higher than any generic consumer HDD can handle while reading the data at the same time.

But compressors can't compress compressed data - try to pack MP4 movie to ZIP, in example.

So for game which data is compressed, you have to uncompress it beforehand, to make it more compressible by a said modern LOLZ algo. And when you do it, you have to restore original data on user's PC, because the game most probably won't work if you don't do it (there are some exceotions, but they are rare).

And THIS is the stage, which is the slowest when you install certain repacks.

Let's take your example, ETS2:

The game is packed with deflate algo, and is 11.2 GB in size. If it wasn't packed by devs, it would take ~50 GB on HDD. So the precompressor, called xtool, was used in this case, which decompressed those 11.2 to 50 GB, then it was compressed with Srep+LOLZ algos to 4.8 GB. It took around 12 hours on my machine, afair.

And I also gave timing estimates, which are: ~10 minutes on 8-threads CPU; ~20 minutes on 4-threads CPU

How do I know them? Because I test them. My own i5 has 4 cores/4 threads, no OC. I have another testing machine which has 8 threads, so those estimates are good and based on real PCs.

Now, why your installation time is so slow? My guesses are: you have a laptop CPU (they have ~two times less power than desktop ones with the same name), you have something which eats your CPU. And also you wonder why under WINE the installer shows the same time? It's a miracle, or do you really expected MORE speed under EMULATED environment?

Regarding the memory - you can't utilize all RAM cause it won't help. LOLZ eats a certain amount of RAM per each thread you have, this is an automated process, but it can't decompess at your possible speed (8 threads * 70 MBs = 560 MB/s), because after LOLZ did it's job, the data are compressed to original game format, deflate in this case, which is around 20-40 MB/s and can be increased only by using more cores.

Games, which are using Oodle algo (RDR2, in example) are much slower in this, because while having better compression ratio, Oodle is slower than deflate/ZIP while compressing data.

So, the typical pipeline for compressing the compressed game looks like this:

Original compressed data --> Precompressor, which unpacks data, usually Xtool --> Large-dictionary LZ preprocessor, SREP --> Modern compressor, LOLZ --> Final repacked archived

On the user PC the process is reversed

Packed data --> UnLOLZ (MT mode) --> UnSREP (single thread, but it's decompression speed is faster than any SSD) --> Precompressor in compressing mode (always MT) --> Original game data

And it actually doesn't matter who produces the repack - me, Brown Tongue, Masquerade, Xatab (R.I.P.) or your uncle - if they are using the same tools (and we all are using the same tools) - the installation time will ALWAYS be the same, with a delta of 10%, depending on tiny params which can be tuned for certain game data.

In some really rare cases, when data rebuilding and re-encryption should be used, the difference between our repacks will be bigger, but the size will be smaller, than the competition, who didn't do those steps.

Hope this huge comment will reduce the number of comments like this from people, who knows too little about how compression works.

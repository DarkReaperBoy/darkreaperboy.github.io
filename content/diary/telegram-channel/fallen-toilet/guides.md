ㅤ ..., [8:23:55 PM]
cuda (not the driver) on opensuse:
sudo zypper addrepo -p 100 http://developer.download.nvidia.com/compute/cuda/repos/opensuse15/x86_64/cuda-opensuse15.repo

check latest cuda ver for opensuse leap
https://developer.nvidia.com/cuda-downloads

sudo zypper ref && sudo zypper install cuda-toolkit

ㅤ ..., [10:53:45 AM]
about koboldcpp (and in general), it seems i can install cuda, without installing the shit on my system, also compiler issues with
conda install gcc=11 gxx=11 openblas clblast cuda cudatoolkit -c nvidia -c conda-forge
so in conclusion, it's easier than it seems

curl -fLo /home/nako/bin/koboldcpp https://koboldai.org/cpplinux && chmod +x /home/nako/bin/koboldcpp

ㅤ ..., [3:26:49 PM]
when you wake up in the morning and realize you hate putting on that fucking uniform, its time to hang it up. Or else you'll end up doing shit and getting in trouble.

For me, the main sign that it's time to leave a company is when I start fantasizing regularly about leaving the company.

My gut seems to be wiser than my head on this stuff. Nearly every time that I've moved on, it's turned out to be the right call in hindsight.
# ubuntu - nvidia

## update drivers

[Install driver for GTX 1070?](https://askubuntu.com/questions/1112814/install-driver-for-gtx-1070)

First delete the currently installed drivers.

```bash
sudo apt-get purge nvidia*
```

Add sources repo if necessary.

```bash
sudo add-apt-repository ppa:graphics-drivers
```

Update sources.

```bash
sudo apt-get update
```

List the availables drivers

```bash
ubuntu-drivers devices

== /sys/devices/pci0000:00/0000:00:01.0/0000:01:00.0 ==
modalias : pci:v000010DEd00001B81sv00001462sd00003302bc03sc00i00
vendor   : NVIDIA Corporation
model    : GP104 [GeForce GTX 1070]
driver   : nvidia-driver-410 - third-party free
driver   : nvidia-driver-396 - third-party free
driver   : nvidia-driver-415 - third-party free recommended
driver   : nvidia-driver-390 - third-party free
driver   : xserver-xorg-video-nouveau - distro free builtin
```

Install the recommended drivers.

```bash
sudo apt-get install nvidia-driver-415
```

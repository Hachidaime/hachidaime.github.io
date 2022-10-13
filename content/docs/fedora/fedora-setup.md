---
title: "Fedora Setup"
weight: 1
---

# Fedora Setup

## Pre Installation

### Disk Partitions & Mounting Points

| Size | Mounting Point |
| ---: | -------------- |
| 100M | /boot/efi      |
|   1G | swap           |
|  40G | /              |
|  50G | /home          |

## Post Installation

### System Update

```fish
sudo dnf update
```

### Enable Fusion RPM Repository

```fish
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm

sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Adding Flathub Repository

```fish
flatpak remote-add --user --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

### Install Multimedia Plugins

```fish
sudo dnf install gstreamer1-plugins-{bad-\*,good-\*,base} gstreamer1-plugin-openh264 gstreamer1-libav --exclude=gstreamer1-plugins-bad-free-devel
```

```fish
sudo dnf install lame\* --exclude=lame-devel
```

```fish
sudo dnf group upgrade --with-optional Multimedia
```

### Remove Unused/Bloat Application

{{< columns >}} <!-- begin columns block -->

- Parole
- Pragha
- Geany

<---> <!-- magic separator, between columns -->

- Claws-mail
- Pidgin
- Transmission

<---> <!-- magic separator, between columns -->

- Asunder
- Xfburn
- Gnumeric

{{< /columns >}}

```fish
sudo dnf remove parole pragha geany claws-mail pidgin transmission asunder xfburn gnumeric
```

### Install Essential Application

You can use the following command to install anything that you need:

```fish
sudo dnf install <package_name>
```

You also can use flatpak to install application:

```fish
flatpak install --user flathub <package_name>
```

Or depends on application you want to install, see application documentation for more detail.

Various essential applications you might install:

- [System Utilities]({{< relref "/docs/applications/system-utilities" >}})
- [Text Editor]({{< relref "/docs/applications/text-editor" >}})
- [Development]({{< relref "/docs/applications/development" >}})
- [Multimedia]({{< relref "/docs/applications/multimedia" >}})
- [Office Suite]({{< relref "/docs/applications/office-suite" >}})
- Graphics
- Internet
- File Transfer
- Note Taking

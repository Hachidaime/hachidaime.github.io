---
title: "Screen Recording Using FFMPEG"
date: 2022-10-10T12:12:20+07:00
draft: false
tags: ["linux", "open source", "multimedia", "ffmpeg"]
categories: ["Linux", "Terminal", "Multimedia", "FFMPEG"]
---

# Video Only

```bash
ffmpeg -f x11grab -s $(xdpyinfo | grep dimensions | awk {'print $2;'}) -i :0.0 out.mkv
```

# Audio Only

```bash
ffmpeg -f alsa -i default out.ogg
```

# Video & Audio

```bash
ffmpeg -f x11grab -s $(xdpyinfo | grep dimensions | awk {'print $2;'}) -i :0.0 -f alsa -i default out.mkv
```

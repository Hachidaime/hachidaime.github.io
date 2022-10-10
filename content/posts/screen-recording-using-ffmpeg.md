---
title: "Screen Recording Using FFMPEG"
date: 2022-10-10T12:12:20+07:00
draft: false
tags: ["linux", "open source", "multimedia", "ffmpeg"]
categories: ["Linux", "Terminal", "Multimedia", "FFMPEG"]
---

## Video Only

```fishshell
ffmpeg -f x11grab -s $(xdpyinfo | grep dimensions | awk {'print $2;'}) -i :0.0 out.mkv
```

## Audio Only

```fishshell
ffmpeg -f alsa -i default out.ogg
```

## Video & Audio

```fishshell
ffmpeg -f x11grab -s $(xdpyinfo | grep dimensions | awk {'print $2;'}) -i :0.0 -f alsa -i default out.mkv
```

## Sumber

{{< button href="https://www.youtube.com/watch?v=386Z2yeQ5fo" >}}Sumber{{< /button >}}

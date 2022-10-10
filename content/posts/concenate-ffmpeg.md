---
title: "Concenate Files using FFMPEG"
date: 2022-10-10T13:46:17+07:00
tags: ["linux", "open source", "multimedia", "ffmpeg"]
categories: ["Linux", "Terminal", "Multimedia", "FFMPEG"]
---

## Example

1. Create file list

```fishshell
echo file file1.mp4 >  mylist.txt
echo file file2.mp4 >> mylist.txt
echo file file3.mp4 >> mylist.txt
```

2. Concenate Files

```fishshell
ffmpeg -f concat -i mylist.txt -c copy output.mp4
```

## Sumber

{{< button href="https://stackoverflow.com/a/41387530" >}}Sumber{{< /button >}}

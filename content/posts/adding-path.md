---
title: "Adding Path on Linux"
date: 2022-10-10T12:12:20+07:00
draft: false
tags: ["linux", "open source", "operating system"]
categories: ["Linux", "Config", "Customize", "Terminal", "Operating System"]
---

{{< tabs "uniqueid" >}}
{{< tab "Bash" >}}

```bash
export PATH=/directory/to/path:$PATH
```

{{< /tab >}}
{{< tab "Fish" >}}

```fishshell
add_to_path /directory/to/path
```

{{< /tab >}}
{{< /tabs >}}

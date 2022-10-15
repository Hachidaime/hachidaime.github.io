---
title: "Visualise Colour in Neovim with Colorizer"
date: 2022-10-15T08:33:16+07:00
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

[Colorizer](https://github.com/norcalli/nvim-colorizer.lua) is a high-performance color highlighter for Neovim which has no external dependencies! Written in performant Luajit.

## Installation

{{< nvim "installPacker" >}}

```lua
use 'norcalli/nvim-colorizer.lua'
```

## Configuration

{{< nvim "config" "colorizer-config/init.lua" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
require 'colorizer'.setup {
  '*'; -- Highlight all files, but customize some others.
  css = { css = true; }; -- Enable parsing rgb(...) functions in css.
}
```

{{< nvim "initRequire" >}}

```lua
require('colorizer-config')
```

## See Also

- [Neovim Configuration with Lua]({{< relref "/posts/neovim-lua" >}})

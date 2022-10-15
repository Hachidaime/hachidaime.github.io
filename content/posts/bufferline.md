---
title: "Manage Neovim Buffers with Bufferline"
date: 2022-10-14T18:44:45+07:00
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

[Bufferline](https://github.com/akinsho/bufferline.nvim) is buffer line (with tabpage integration) for Neovim built using lua.

## Installation

{{< nvim "installPacker" >}}

```lua
use 'akinsho/bufferline.nvim'
```

## Configuration

{{< nvim "config" "bufferline-config/init.lua" >}}

{{< details title="`~/.config/nvim/lua/bufferline-config/init.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
require("bufferline").setup {
  options = {
    modified_icon = '●',
    close_icon = '',
    separator_style = 'thin',
    indicator = {
      icon = '█ ',
      style = 'icon'
    }
  },
}
```

{{< /details >}}

{{< nvim "initRequire" >}}

```lua
require('bufferline-config')
```

## See Also

- [Neovim Configuration with Lua]({{< relref "/posts/neovim-lua" >}})

## To Do

- Configure Which-key keymaps

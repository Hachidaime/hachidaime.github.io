---
title: "Manage Neovim Terminal with Toggleterm"
date: 2022-10-15T10:06:38+07:00
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

[Toggleterm](https://github.com/akinsho/toggleterm.nvim) a Neovim lua plugin to help easily manage multiple terminal windows.

## Installation

{{< nvim "installPacker" >}}

```lua
use 'akinsho/toggleterm.nvim'
```

## Configuration

{{< nvim "config" "toggleterm-config/init.lua" >}}

{{< details title="`~/.config/nvim/lua/toggleterm-config/init.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
require "toggleterm".setup {
  size = 8,
  open_mapping = [[<c-\>]],
  shade_filetypes = {},
  shade_terminals = true,
  shading_factor = '1',
  start_in_insert = true,
  persist_size = true,
  direction = 'horizontal'
}
```

{{< /details >}}

{{< nvim "initRequire" >}}

```lua
require('toggleterm-config')
```

## See Also

- [Neovim Configuration with Lua]({{< relref "/posts/neovim-lua" >}})

## To Do

- Configure Which-key keymaps

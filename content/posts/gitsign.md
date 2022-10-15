---
title: "Git integration for Neovim buffers with Gitsigns"
date: 2022-10-15T07:07:32+07:00
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

[Gitsign](https://github.com/lewis6991/gitsigns.nvim) is super fast git decorations implemented purely in lua/teal.

## Installation

{{< nvim "installPacker" >}}

```lua
use 'lewis6991/gitsigns.nvim'
```

## Configuration

{{< nvim "config" "gitsigns-config/init.lua" >}}

```lua
require('gitsigns').setup()
```

## See Also

- [Neovim Configuration with Lua]({{< relref "/posts/neovim-lua" >}})

## To Do

- Configure Which-key keymaps

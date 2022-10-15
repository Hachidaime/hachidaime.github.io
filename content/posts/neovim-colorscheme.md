---
title: "Configure Neovim Colorscheme"
date: 2022-10-14T16:25:39+07:00
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

In this case, I use [Material](https://github.com/marko-cerovac/material.nvim) theme.

## Installation

{{< nvim "installPacker" >}}

```lua
use 'marko-cerovac/material.nvim'
```

## Configuration

{{< nvim "config" "colors-config/material.lua" >}}

{{< details title="`~/.config/nvim/lua/colors-config/material.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
require('material').setup({
  contrast = {
    sidebars = true, -- Enable contrast for sidebar-like windows ( for example Nvim-Tree )
    line_numbers = true, -- Enable contrast background for line numbers
    sign_column = true, -- Enable contrast background for the sign column
    cursor_line = true, -- Enable darker background for the cursor line
    non_current_windows = true, -- Enable darker background for non-current windows
  },
  italics = {
    comments = true, -- Enable italic comments
    keywords = true, -- Enable italic keywords
    functions = true, -- Enable italic functions
  },
})

vim.g.material_style = "deep ocean"
vim.cmd 'colorscheme material'
```

{{< /details >}}

{{< nvim "initRequire" >}}

```lua
require('colors-config.material')
```

## See Also

- [Neovim Configuration with Lua]({{< relref "/posts/neovim-lua" >}})

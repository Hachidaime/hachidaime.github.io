---
title: "Nvim Tree"
date: 2022-10-14T16:33:50+07:00
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

# Nvim Tree

[nvim-tree](https://github.com/nvim-tree/nvim-tree.lua) is a file explorer tree for neovim written in lua.

## Installation

nvim-web-devicons is optional and used to display file icons. It requires a [patched font](https://www.nerdfonts.com).

{{< nvim "installPacker" >}}

```lua
use 'kyazdani42/nvim-web-devicons'
use 'kyazdani42/nvim-tree.lua'
```

## Configuration

{{< nvim "config" "nvim-tree-config/init.lua" >}}

{{< details title="`~/.config/nvim/lua/nvim-tree-config/init.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
require("nvim-tree").setup({
  diagnostics = {
    enable = true,
  },
  view = {
    side = 'right',
  },
  renderer = {
    add_trailing = false,
    group_empty = false,
    highlight_git = false,
    full_name = false,
    highlight_opened_files = "all",
    root_folder_modifier = ":~",
    indent_width = 2,
    indent_markers = {
      enable = true,
      inline_arrows = true,
      icons = {
        corner = "└",
        edge = "│",
        item = "│",
        bottom = "─",
        none = " ",
      },
    },
    icons = {
      webdev_colors = true,
      git_placement = "before",
      padding = " ",
      symlink_arrow = " ➛ ",
      show = {
        file = true,
        folder = true,
        folder_arrow = true,
        git = true,
      },
      glyphs = {
        default = "",
        symlink = "",
        bookmark = "",
        folder = {
          arrow_closed = "",
          arrow_open = "",
          default = "",
          open = "",
          empty = "",
          empty_open = "",
          symlink = "",
          symlink_open = "",
        },
        git = {
          unstaged = "✗",
          staged = "✓",
          unmerged = "",
          renamed = "➜",
          untracked = "★",
          deleted = "",
          ignored = "◌",
        },
      },
    },
    special_files = { "Cargo.toml", "Makefile", "README.md", "readme.md" },
    symlink_destination = true,
  },
})
```

{{< /details >}}

{{< nvim "initRequire" >}}

```lua
require('nvim-tree-config')
```

## See Also

- [Neovim Configuration with Lua]({{< relref "/posts/neovim-lua" >}})

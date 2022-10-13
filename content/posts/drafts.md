---
title: "Neovim Configuration with Lua"
date: 2022-10-11T22:22:22+07:00
draft: true
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

## Display

### Colorscheme

In this case, I use material theme.

{{< nvim "installPacker" >}}

```lua
use 'marko-cerovac/material.nvim'
```

{{< nvim "config" "colors-config/material.lua" >}}

{{< details title="`~/.config/nvim/lua/which-key-config/init.lua`" >}}

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

### Nvim-tree

nvim-web-devicons is optional and used to display file icons.

{{< nvim "installPacker" >}}

```lua
use 'kyazdani42/nvim-web-devicons'
use 'kyazdani42/nvim-tree.lua'
```

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

### Lualine

{{< nvim "installPacker" >}}

```lua
use 'nvim-lualine/lualine.nvim' -- Lualine
```

### Bufferline

### Telescope

### Gitsign

### Dashboard

### Colorizer

### Toggleterm

### Comment

### Zen Mode

### Twilight

## LSP and Completions

### LSP-Config

### Cmp

### Null-ls

### Tree-sitter

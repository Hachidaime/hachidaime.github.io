---
title: "Neovim File Finder using Telescope"
date: 2022-10-15T05:17:38+07:00
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

[telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) is a highly extendable fuzzy finder over lists. Built on the latest awesome features from neovim core. Telescope is centered around modularity, allowing for easy customization.

## Installation

{{< nvim "installPacker" >}}

[nvim-lua/plenary.nvim](https://github.com/nvim-lua/plenary.nvim) is required.

```lua
use 'nvim-lua/plenary.nvim'
use 'nvim-telescope/telescope.nvim'
```

## Configuration

{{< nvim "config" "telescope-config/init.lua" >}}

{{< details title="`~/.config/nvim/lua/telescope-config/init.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
local actions = require('telescope.actions')
require('telescope').setup {
  defaults = {
    layout_config = {
      width = 0.8,
      preview_width = 0.6,
      prompt_position = "top",
      -- preview_cutoff = 10,
      horizontal = { mirror = false },
      vertical = { mirror = false }
    },
    find_command = {
      'rg', '--no-heading', '--with-filename', '--line-number', '--column', '--smart-case'
    },
    -- prompt_prefix = " ",
    prompt_prefix = " ",
    -- selection_caret = " ",
    selection_caret = " ",
    entry_prefix = "  ",
    initial_mode = "insert",
    selection_strategy = "reset",
    sorting_strategy = "ascending",
    layout_strategy = "horizontal",
    file_sorter = require 'telescope.sorters'.get_fuzzy_file,
    file_ignore_patterns = {},
    generic_sorter = require 'telescope.sorters'.get_generic_fuzzy_sorter,
    path_display = {},
    winblend = 0,
    border = {},
    -- borderchars = { '─', '│', '─', '│', '╭', '╮', '╯', '╰' },
    borderchars = { '─', '│', '═', '│', '┌', '┐', '╛', '╘' },
    color_devicons = true,
    use_less = true,
    set_env = { ['COLORTERM'] = 'truecolor' }, -- default = nil,
    file_previewer = require 'telescope.previewers'.vim_buffer_cat.new,
    grep_previewer = require 'telescope.previewers'.vim_buffer_vimgrep.new,
    qflist_previewer = require 'telescope.previewers'.vim_buffer_qflist.new,
    buffer_previewer_maker = require 'telescope.previewers'.buffer_previewer_maker,
    mappings = {
      i = {
        ["<C-j>"] = actions.move_selection_next,
        ["<C-k>"] = actions.move_selection_previous,
        ["<C-q>"] = actions.smart_send_to_qflist + actions.open_qflist,
        ["<esc>"] = actions.close,
        ["<CR>"] = actions.select_default + actions.center
      },
      n = {
        ["<C-j>"] = actions.move_selection_next,
        ["<C-k>"] = actions.move_selection_previous,
        ["<C-q>"] = actions.smart_send_to_qflist + actions.open_qflist
      }
    }
  },
}

```

{{< /details >}}

{{< nvim "initRequire" >}}

```lua
require('telescope-config')
```

## See Also

- [Neovim Configuration with Lua]({{< relref "/posts/neovim-lua" >}})

## To Do

- Configure Which-key keymaps

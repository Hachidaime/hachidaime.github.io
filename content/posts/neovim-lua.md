---
title: "Neovim Configuration with Lua"
date: 2022-10-11T22:22:22+07:00
draft: false
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

# Neovim Configuration with Lua

{{< hint "warning" >}}
Neovim looks config file depend on OS, usually `~/.config/nvim/init.lua`.
{{< /hint >}}

{{< hint "warning" >}}
You can place all configuration on config file (`~/.config/nvim/init.lua`). But for better files management, place it in separated file in `~/.config/nvim/lua/`.
{{< /hint >}}

## Settings

{{< nvim "config" "lua/settings/init.lua" >}}

{{< details title="`~/.config/nvim/lua/settings/init.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
local set = vim.opt

set.number = true
set.relativenumber = true

set.expandtab = true
set.smarttab = true
set.shiftwidth = 2
set.tabstop = 2

set.hlsearch = true
set.incsearch = true
set.ignorecase = true
set.smartcase = true

set.splitbelow = true
set.splitright = true
set.wrap = false
set.scrolloff = 5
set.fileencoding = 'utf-8'
set.termguicolors = true

set.hidden = true

set.cursorline = true
set.colorcolumn = '81,121'
set.guicursor = 'i:hor50'
```

{{< /details >}}

{{< nvim "initRequire" >}}

```lua
require('settings')
```

## Packer: Plugins Manager

Installation:

```fish
git clone --depth 1 https://github.com/wbthomason/packer.nvim\
 ~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

{{< nvim "config" "lua/packer-config/init.lua" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
return require('packer').startup(function(use)
  use 'wbthomason/packer.nvim'

  -- Place your plugins here ...
end)
```

{{< nvim "initRequire" >}}

```lua
require('packer-config')
```

You must run `:PackerSync` whenever you make changes to your plugin configuration:

## Keymaps

{{< nvim "config" "lua/mappings/init.lua" >}}

{{< details title="`~/.config/nvim/lua/mappings/init.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
local map = vim.api.nvim_set_keymap
local opts = { noremap = true, silent = true }

-- vim.g.mapleader = '\\'

map('n', '<leader>h', '<C-w>h', opts)
map('n', '<leader>j', '<C-w>j', opts)
map('n', '<leader>k', '<C-w>k', opts)
map('n', '<leader>l', '<C-w>l', opts)
```

{{< /details >}}

{{< nvim "initRequire" >}}

```lua
require('mappings')
```

### Which Key

{{< nvim "installPacker" >}}

```lua
use "folke/which-key.nvim"
```

{{< nvim "config" "lua/which-key-config/init.lua" >}}

{{< details title="`~/.config/nvim/lua/which-key-config/init.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
local wk = require('which-key')

local Terminal = require('toggleterm.terminal').Terminal
local toggle_float = function()
  local float = Terminal:new({ direction = "float" })
  return float:toggle()
end

local mappings = {
  w = { ":w<CR>", "Save" },
  q = { ":q<CR>", "Quit" },
  Q = { ":Q<CR>", "Force Quit" },
  x = { ":bd<CR>", "Close Buffer" },
  r = { ":luafile %<CR>", "Reload file" },
  h = { "Move Window Left" },
  j = { "Move Window Down" },
  k = { "Move Window Up" },
  l = { "Move Window Right" },
  o = { ':set paste<CR>m`o<Esc>``:set nopaste<CR>j', "Insert New Line Below" },
  O = { ':set paste<CR>m`O<Esc>``:set nopaste<CR>k', "Insert New Line Above" },
  p = {
    name = "Packer",
    r = { ":PackerClean<cr>", "Remove Unused Plugins" },
    c = { ":PackerCompile profile=true<cr>", "Recompile Plugins" },
    i = { ":PackerInstall<cr>", "Install Plugins" },
    p = { ":PackerProfile<cr>", "Packer Profile" },
    s = { ":PackerSync<cr>", "Sync Plugins" },
    S = { ":PackerStatus<cr>", "Packer Status" },
    u = { ":PackerUpdate<cr>", "Update Plugins" }
  },
}
local opts = { prefix = '<leader>' }

wk.register(mappings, opts)
```

{{< /details >}}

{{< nvim "initRequire" >}}

```lua
require('which-key-config')
```

---
title: "Customize Neovim Start Screen with Dashboard-nvim"
date: 2022-10-15T08:13:52+07:00
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

[dashboard-nvim](https://github.com/glepnir/dashboard-nvim) is a fancy fastest async start screen plugins for Neovim.

## Installation

{{< nvim "installPacker" >}}

```lua
use 'glepnir/dashboard-nvim'
```

## Configuration

{{< nvim "config" "dashboard-config/init.lua" >}}

{{< details title="`~/.config/nvim/lua/dashboard-config/init.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
local db = require('dashboard')
db.custom_header = {
  '            ████████                                  ',
  '        ████        ████                              ',
  '      ██    ████████    ██            ████████        ',
  '    ██  ████        ████  ██        ██        ██      ',
  '    ██  ██    ████    ██  ██      ██    ████    ██    ',
  '  ██  ██    ██    ██    ██  ██████    ██    ██    ██  ',
  '  ██  ██  ██        ██  ██          ██        ██  ██  ',
  '  ██  ██  ██        ██  ██          ██        ██  ██  ',
  '  ██  ██    ██    ██    ██  ██████    ██    ██    ██  ',
  '    ██  ██    ████    ██  ██      ██    ████    ██    ',
  '    ██  ████        ████  ██        ██        ██      ',
  '      ██    ████████    ██            ████████        ',
  '        ████        ████                              ',
  '            ████████                                  ',
}
db.custom_center = {
  {
    icon = ' ',
    desc = 'Find Files             ',
    action = 'Telescope find_files',
    shortcut = '\\ f f'
  }, {
    icon = ' ',
    desc = 'Search Text            ',
    action = 'Telescope live_grep',
    shortcut = '\\ f g'
  }, {
    icon = ' ',
    desc = 'Recent Files           ',
    action = 'Telescope oldfiles',
    shortcut = '\\ f r'
  }, {
    icon = ' ',
    desc = 'Quit                   ',
    action = 'q',
    shortcut = '\\ q  '
  }
}
db.custom_footer = {
  "There are two ways to be fooled.",
  "One is to believe what isn't true; the other is to refuse to believe what is true.",
  "~ Søren Kierkegaard"
}
db.header_pad = 3
db.center_pad = 3
db.footer_pad = 3
db.hide_statusline = true
```

{{< /details >}}

{{< nvim "initRequire" >}}

```lua
require('dashboard-config')
```

## See Also

- [Neovim Configuration with Lua]({{< relref "/posts/neovim-lua" >}})

## To Do

- Configure Which-key keymaps

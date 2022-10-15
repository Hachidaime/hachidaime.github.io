---
title: "Customize Neovim Statusline with Lualine"
date: 2022-10-14T18:13:07+07:00
tags: ["neovim", "open source", "text editor", "vim"]
categories: ["Neovim", "Config", "Customize", "Terminal", "Text Editor"]
---

[Lualine](https://github.com/nvim-lualine/lualine.nvim) a blazing fast and easy to configure Neovim statusline written in Lua.

## Installation

{{< nvim "installPacker" >}}

```lua
use 'nvim-lualine/lualine.nvim'
```

## Configuration

In this case I use [evil_lualine](https://github.com/nvim-lualine/lualine.nvim/blob/master/examples/evil_lualine.lua), and make some modification.

{{< nvim "config" "lualine-config/eviline.lua" >}}

{{< details title="`~/.config/nvim/lua/lualine-config/eviline.lua`" >}}

```lua {linenos=table,hl_lines=[1],linenostart=1}
-- Eviline config for lualine
-- Author: shadmansaleh
-- Credit: glepnir
local lualine = require('lualine')

-- Color table for highlights
-- stylua: ignore
local colors = {
  bg = '#202328',
  fg = '#bbc2cf',
  yellow = '#ECBE7B',
  cyan = '#008080',
  darkblue = '#081633',
  green = '#98be65',
  orange = '#FF8800',
  violet = '#a9a1e1',
  magenta = '#c678dd',
  blue = '#51afef',
  red = '#ec5f67',
  Opal = '#8fbcbb',
  FuzzyWuzzy = '#bf616a',
  OperaMauve = '#b48ead',
  DarkSeaGreen = '#a3be8c',
  CopperCrayola = '#d08770',
  BrightNavyBlue = '#007acc',
  DeepJungleGreen = '#005f5f'
}

local conditions = {
  buffer_not_empty = function()
    return vim.fn.empty(vim.fn.expand('%:t')) ~= 1
  end,
  hide_in_width = function()
    return vim.fn.winwidth(0) > 80
  end,
  check_git_workspace = function()
    local filepath = vim.fn.expand('%:p:h')
    local gitdir = vim.fn.finddir('.git', filepath .. ';')
    return gitdir and #gitdir > 0 and #gitdir < #filepath
  end
}

-- Config
local config = {
  options = {
    -- Disable sections and component separators
    component_separators = '',
    section_separators = '',
    theme = {
      -- We are going to use lualine_c an lualine_x as left and
      -- right section. Both are highlighted by c theme .  So we
      -- are just setting default looks o statusline
      normal = { c = { fg = colors.fg, bg = colors.bg } },
      inactive = { c = { fg = colors.fg, bg = colors.bg } }
    }
  },
  sections = {
    -- these are to remove the defaults
    lualine_a = {},
    lualine_b = {},
    lualine_y = {},
    lualine_z = {},
    -- These will be filled later
    lualine_c = {},
    lualine_x = {}
  },
  inactive_sections = {
    -- these are to remove the defaults
    lualine_a = {},
    lualine_b = {},
    lualine_y = {},
    lualine_z = {},
    lualine_c = {},
    lualine_x = {}
  }
}

local mode_color = {
  n = colors.Opal,
  i = colors.FuzzyWuzzy,
  v = colors.OperaMauve,
  [''] = colors.DarkSeaGreen,
  V = colors.OperaMauve,
  c = colors.blue,
  no = colors.Opal,
  s = colors.blue,
  S = colors.blue,
  [''] = colors.blue,
  ic = colors.FuzzyWuzzy,
  R = colors.CopperCrayola,
  Rv = colors.CopperCrayola,
  cv = colors.blue,
  ce = colors.blue,
  r = colors.CopperCrayola,
  rm = colors.blue,
  ['r?'] = colors.CopperCrayola,
  ['!'] = colors.blue,
  t = colors.DeepJungleGreen
}

-- Inserts a component in lualine_c at left section
local function ins_left(component)
  table.insert(config.sections.lualine_c, component)
end

-- Inserts a component in lualine_x ot right section
local function ins_right(component)
  table.insert(config.sections.lualine_x, component)
end

ins_left {
  'mode',
  color = function()
    -- auto change color according to neovims mode
    return { fg = colors.bg, bg = mode_color[vim.fn.mode()], gui = 'bold' }
  end
}

ins_left {
  function()
    return ''
  end,
  -- color = { fg = colors.blue }, -- Sets highlighting of component
  color = function()
    -- auto change color according to neovims mode
    return { fg = mode_color[vim.fn.mode()] }
  end,
  padding = { left = 0, right = 1 } -- We don't need space before this
}

ins_left {
  -- mode component
  function()
    -- return ''
    -- return ''
    -- return ''
    return ''
  end,
  color = function()
    -- auto change color according to neovims mode
    return { fg = mode_color[vim.fn.mode()], gui = 'bold' }
  end,
  padding = { right = 1 }
}

ins_left {
  -- filesize component
  'filesize',
  cond = conditions.buffer_not_empty
}

ins_left { 'filetype', icon_only = true }

ins_left {
  'filename',
  cond = conditions.buffer_not_empty,
  color = { fg = colors.magenta, gui = 'bold' },
  path = 1,
  file_status = true,
  symbols = {
    modified = '', -- Text to show when the file is modified.
    readonly = '', -- Text to show when the file is non-modifiable or readonly.
    unnamed = '', -- Text to show for unnamed buffers.
    newfile = '' -- Text to show for new created file before first writting
  }
}

ins_left { 'location' }

ins_left { 'progress', color = { fg = colors.fg, gui = 'bold' } }

ins_left {
  'diagnostics',
  sources = { 'nvim_diagnostic' },
  symbols = { error = ' ', warn = ' ', info = ' ' },
  diagnostics_color = {
    error = { fg = colors.red },
    warn = { fg = colors.yellow },
    info = { fg = colors.cyan }
  }
}

-- Insert mid section. You can make any number of sections in neovim :)
-- for lualine it's any number greater then 2
ins_left {
  function()
    return '%='
  end
}

ins_left {
  -- Lsp server name .
  function()
    local msg = 'No Active Lsp'
    local buf_ft = vim.api.nvim_buf_get_option(0, 'filetype')
    local clients = vim.lsp.get_active_clients()
    if next(clients) == nil then return msg end
    for _, client in ipairs(clients) do
      local filetypes = client.config.filetypes
      if filetypes and vim.fn.index(filetypes, buf_ft) ~= -1 then
        return client.name
      end
    end
    return msg
  end,
  icon = ' LSP:',
  -- color = { fg = '#000000', gui = 'bold' },
  color = { fg = '#ffffff', gui = 'bold' }
}

-- Add components to right sections
ins_right {
  function()
    return "WDS: " .. vim.fn.wordcount().words
  end,
  color = { fg = colors.OperaMauve }
}

ins_right {
  'o:encoding', -- option component same as &encoding in viml
  fmt = string.upper, -- I'm not sure why it's upper case either ;)
  cond = conditions.hide_in_width,
  color = { fg = colors.green, gui = 'bold' }
}

ins_right {
  'fileformat',
  icons_enabled = true, -- I think icons are cool but Eviline doesn't have them. sigh
  color = { fg = colors.green, gui = 'bold' }
}

ins_right {
  'fileformat',
  fmt = string.upper,
  icons_enabled = false, -- I think icons are cool but Eviline doesn't have them. sigh
  color = { fg = colors.green, gui = 'bold' }
}

ins_right { 'branch', icon = '', color = { fg = colors.violet, gui = 'bold' } }

ins_right {
  'diff',
  -- Is it me or the symbol for modified us really weird
  symbols = { added = ' ', modified = '柳 ', removed = ' ' },
  diff_color = {
    added = { fg = colors.green },
    modified = { fg = colors.orange },
    removed = { fg = colors.red }
  },
  cond = conditions.hide_in_width
}

ins_right {
  function()
    return '██'
  end,
  -- color = { fg = colors.blue },
  color = function()
    -- auto change color according to neovims mode
    return { fg = mode_color[vim.fn.mode()] }
  end,
  padding = { left = 1 }
}


-- Now don't forget to initialize lualine
lualine.setup(config)
```

{{< /details >}}

{{< nvim "config" "lualine-config/init.lua" >}}

```lua
require('lualine-config.eviline')
```

{{< nvim "initRequire" >}}

```lua
require('lualine-config')
```

## See Also

- [Neovim Configuration with Lua]({{< relref "/posts/neovim-lua" >}})

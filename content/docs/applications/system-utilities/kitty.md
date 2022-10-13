---
title: "Kitty"
weight: 1
---

# Kitty: Terminal Emulator

## Installation

```fish
sudo dnf install kitty
```

## Configuration

{{< hint "warning" >}}
Kitty looks config file depend on OS, usually `~/.config/kitty/kitty.conf`.
{{< /hint >}}

{{< hint "info" >}}
Place current line of code on top of config file to set vim fold method.

```conf
# vim:fileencoding=utf-8:foldmethod=marker

```

{{< /hint >}}
{{< hint "info" >}}
Place your sections of configs beetween these lines of code to implement vim fold method.

```conf
#: <Section Name> {{{
# Your configs here...
#: }}}
```

{{< /hint >}}

### Fonts

{{< details >}}

```
font_family      JetBrainsMono Nerd Font Mono
bold_font        auto
italic_font      auto
bold_italic_font auto

font_size 9.0
force_ltr no
disable_ligatures never
box_drawing_scale 0.001, 1, 1.5, 2
modify_font cell_height 2px
```

{{< /details >}}

### Cursor Customization

{{< details >}}

```
cursor_shape underline
cursor_beam_thickness 1.5
cursor_underline_thickness 2.0

cursor_blink_interval -1
cursor_stop_blinking_after 15.0
```

{{< /details >}}

### Scrollback

{{< details >}}

```
scrollback_lines 2000
scrollback_pager less --chop-long-lines --RAW-CONTROL-CHARS +INPUT_LINE_NUMBER
scrollback_pager_history_size 0
scrollback_fill_enlarged_window no

wheel_scroll_multiplier 5.0
wheel_scroll_min_lines 1

touch_scroll_multiplier 1.0
```

{{< /details >}}

### Mouse

{{< details >}}

```
mouse_hide_wait 3.0
url_style curly
open_url_with default
url_prefixes file ftp ftps gemini git gopher http https irc ircs kitty mailto news sftp ssh
detect_urls yes

copy_on_select no
paste_actions quote-urls-at-prompt

strip_trailing_spaces never

select_by_word_characters @-./_~?&=%+#

click_interval -1.0

focus_follows_mouse no

pointer_shape_when_grabbed arrow
default_pointer_shape beam
pointer_shape_when_dragging beam
```

{{< /details >}}

#### Mouse Actions

{{< details >}}

```
clear_all_mouse_actions no

mouse_map left click ungrabbed mouse_handle_click selection link prompt
mouse_map shift+left click grabbed,ungrabbed mouse_handle_click selection link prompt
mouse_map ctrl+shift+left release grabbed,ungrabbed mouse_handle_click link

mouse_map ctrl+shift+left press grabbed discard_event

mouse_map middle release ungrabbed paste_from_selection
mouse_map left press ungrabbed mouse_selection normal
mouse_map ctrl+alt+left press ungrabbed mouse_selection rectangle
mouse_map left doublepress ungrabbed mouse_selection word
mouse_map left triplepress ungrabbed mouse_selection line
mouse_map ctrl+alt+left triplepress ungrabbed mouse_selection line_from_point
mouse_map right press ungrabbed mouse_selection extend
mouse_map shift+middle release ungrabbed,grabbed paste_selection
mouse_map shift+middle press grabbed discard_event
mouse_map shift+left press ungrabbed,grabbed mouse_selection normal
mouse_map ctrl+shift+alt+left press ungrabbed,grabbed mouse_selection rectangle
mouse_map shift+left doublepress ungrabbed,grabbed mouse_selection word
mouse_map shift+left triplepress ungrabbed,grabbed mouse_selection line
mouse_map ctrl+shift+alt+left triplepress ungrabbed,grabbed mouse_selection line_from_point
mouse_map shift+right press ungrabbed,grabbed mouse_selection extend
mouse_map ctrl+shift+right press ungrabbed mouse_show_command_output
```

{{< /details >}}

### Performance Tuning

{{< details >}}

```
repaint_delay 10
input_delay 3

sync_to_monitor yes
```

{{< /details >}}

### Terminal Bell

{{< details >}}

```
enable_audio_bell yes

visual_bell_duration 0.0

window_alert_on_bell yes

bell_on_tab "🔔 "

command_on_bell none

bell_path none
```

{{< /details >}}

### Window Layout

{{< details >}}

```
remember_window_size  yes
initial_window_width  640
initial_window_height 400

enabled_layouts *

window_resize_step_cells 2
window_resize_step_lines 2

window_border_width 0.5pt
draw_minimal_borders yes

window_margin_width 0
single_window_margin_width -2

window_padding_width 0 8

placement_strategy center

inactive_text_alpha 0.6

hide_window_decorations no

window_logo_path none
window_logo_position bottom-right
window_logo_alpha 0.5

resize_debounce_time 0.1
resize_draw_strategy static
resize_in_steps no

visual_window_select_characters 1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ

confirm_os_window_close -1
```

{{< /details >}}

### Tab Bar

{{< details >}}

```
tab_bar_edge top
tab_bar_margin_width 0.0
tab_bar_margin_height 0.0 0.0
tab_bar_style custom
tab_bar_align left
tab_bar_min_tabs 2

tab_switch_strategy previous

tab_fade 0.25 0.5 0.75 1

tab_separator " ┇"

tab_powerline_style slanted

tab_activity_symbol none

tab_title_template "{fmt.fg.red}{bell_symbol}{activity_symbol}{fmt.fg.tab}{title}"

active_tab_title_template none
active_tab_font_style   bold-italic
inactive_tab_font_style normal
```

{{< /details >}}

### Color Scheme

{{< details >}}

```
background_opacity 0.92

background_image none
background_image_layout tiled
background_image_linear no

dynamic_background_opacity no

background_tint 0.0

dim_opacity 0.75
```

{{< /details >}}

#### Color Table

{{< details >}}

```

```

{{< /details >}}

### Advanced

{{< details >}}

```
shell .

editor .

close_on_child_death no

allow_remote_control no

listen_on none

update_check_interval 24

startup_session none

clipboard_control write-clipboard write-primary read-clipboard-ask read-primary-ask
clipboard_max_size 64

allow_hyperlinks yes

shell_integration no-cursor enabled

allow_cloning ask
clone_source_strategies venv,conda,env_var,path

term xterm-kitty
```

{{< /details >}}

### OS Specific Tweaks

{{< details >}}

```
macos_option_as_alt no
macos_hide_from_tasks no
macos_quit_when_last_window_closed no
macos_window_resizable yes
macos_thicken_font 0
macos_traditional_fullscreen no
macos_show_window_title_in all
macos_menubar_title_max_length 0
macos_custom_beam_cursor no
macos_colorspace srgb

linux_display_server auto
```

{{< /details >}}

### Keyboard Shortcuts

{{< details >}}

```
kitty_mod ctrl+shift

clear_all_shortcuts no
```

{{< /details >}}

#### Clipboard

{{< details >}}

```
map kitty_mod+c copy_to_clipboard
map cmd+c       copy_to_clipboard

map kitty_mod+v paste_from_clipboard
map cmd+v       paste_from_clipboard

map kitty_mod+s  paste_from_selection
map shift+insert paste_from_selection

map kitty_mod+o pass_selection_to_program
```

{{< /details >}}

#### Scrolling

{{< details >}}

```
map kitty_mod+up    scroll_line_up
map kitty_mod+k     scroll_line_up
map opt+cmd+page_up scroll_line_up
map cmd+up          scroll_line_up

map kitty_mod+down    scroll_line_down
map kitty_mod+j       scroll_line_down
map opt+cmd+page_down scroll_line_down
map cmd+down          scroll_line_down

map kitty_mod+page_up scroll_page_up
map cmd+page_up       scroll_page_up

map kitty_mod+page_down scroll_page_down
map cmd+page_down       scroll_page_down

map kitty_mod+home scroll_home
map cmd+home       scroll_home

map kitty_mod+end scroll_end
map cmd+end       scroll_end

map kitty_mod+z scroll_to_prompt -1

map kitty_mod+x scroll_to_prompt 1

map kitty_mod+h show_scrollback

map kitty_mod+g show_last_command_output
```

{{< /details >}}

#### Window Management

{{< details >}}

```
map kitty_mod+enter new_window
map cmd+enter       new_window

map kitty_mod+n new_os_window
map cmd+n       new_os_window

map kitty_mod+w close_window
map shift+cmd+d close_window

map kitty_mod+] next_window

map kitty_mod+[ previous_window

map kitty_mod+f move_window_forward

map kitty_mod+b move_window_backward

map kitty_mod+` move_window_to_top

map kitty_mod+r start_resizing_window
map cmd+r       start_resizing_window

map kitty_mod+1 first_window
map cmd+1       first_window

map kitty_mod+2 second_window
map cmd+2       second_window

map kitty_mod+3 third_window
map cmd+3       third_window

map kitty_mod+4 fourth_window
map cmd+4       fourth_window

map kitty_mod+5 fifth_window
map cmd+5       fifth_window

map kitty_mod+6 sixth_window
map cmd+6       sixth_window

map kitty_mod+7 seventh_window
map cmd+7       seventh_window

map kitty_mod+8 eighth_window
map cmd+8       eighth_window

map kitty_mod+9 ninth_window
map cmd+9       ninth_window

map kitty_mod+0 tenth_window

map kitty_mod+f7 focus_visible_window

map kitty_mod+f8 swap_with_window

map shift+up move_window up
map shift+left move_window left
map shift+right move_window right
map shift+down move_window down

map alt+left neighboring_window left
map alt+right neighboring_window right
map alt+up neighboring_window up
map alt+down neighboring_window down
```

{{< /details >}}

#### Tab Management

{{< details >}}

```
map shift+cmd+]     next_tab
map ctrl+tab        next_tab
map ctrl+page_down  next_tab

map shift+cmd+[    previous_tab
map ctrl+shift+tab previous_tab
map ctrl+page_up   previous_tab

map kitty_mod+t new_tab
map cmd+t       new_tab

map kitty_mod+q close_tab
map cmd+w       close_tab

map shift+cmd+w close_os_window

map kitty_mod+. move_tab_forward

map kitty_mod+, move_tab_backward

map kitty_mod+alt+t set_tab_title
map shift+cmd+i     set_tab_title
```

{{< /details >}}

#### Layout Management

{{< details >}}

```
map kitty_mod+l next_layout

map kitty_mod+left resize_window narrower
map kitty_mod+right resize_window wider
map kitty_mod+up resize_window taller
map kitty_mod+down resize_window shorter 3

map ctrl+home resize_window reset
```

{{< /details >}}

#### Font Sizes

{{< details >}}

```
map kitty_mod+equal  change_font_size all +2.0
map kitty_mod+plus   change_font_size all +2.0
map kitty_mod+kp_add change_font_size all +2.0
map cmd+plus         change_font_size all +2.0
map cmd+equal        change_font_size all +2.0
map shift+cmd+equal  change_font_size all +2.0

map kitty_mod+minus       change_font_size all -2.0
map kitty_mod+kp_subtract change_font_size all -2.0
map cmd+minus             change_font_size all -2.0
map shift+cmd+minus       change_font_size all -2.0

map kitty_mod+backspace change_font_size all 0
map cmd+0               change_font_size all 0
```

{{< /details >}}

#### Select and Act on Visible Text

{{< details >}}

```
map kitty_mod+e open_url_with_hints

map kitty_mod+p>f kitten hints --type path --program -

map kitty_mod+p>shift+f kitten hints --type path

map kitty_mod+p>l kitten hints --type line --program -
map kitty_mod+p>w kitten hints --type word --program -
map kitty_mod+p>h kitten hints --type hash --program -

map kitty_mod+p>n kitten hints --type linenum
map kitty_mod+p>y kitten hints --type hyperlink
```

{{< /details >}}

#### Miscellaneous

{{< details >}}

```
map kitty_mod+f1 show_kitty_doc overview

map kitty_mod+f11 toggle_fullscreen
map ctrl+cmd+f    toggle_fullscreen

map kitty_mod+f10 toggle_maximized
map opt+cmd+s toggle_macos_secure_keyboard_entry

map kitty_mod+u    kitten unicode_input
map ctrl+cmd+space kitten unicode_input

map kitty_mod+f2 edit_config_file
map cmd+,        edit_config_file

map kitty_mod+escape kitty_shell window

map kitty_mod+a>m set_background_opacity +0.1
map kitty_mod+a>l set_background_opacity -0.1
map kitty_mod+a>1 set_background_opacity 1
map kitty_mod+a>d set_background_opacity default

map kitty_mod+delete clear_terminal reset active
map opt+cmd+r        clear_terminal reset active

map cmd+k clear_terminal to_cursor active

map kitty_mod+f5 load_config_file
map ctrl+cmd+,   load_config_file

map kitty_mod+f6 debug_config
map opt+cmd+,    debug_config
map shift+cmd+/ open_url https://sw.kovidgoyal.net/kitty/
```

{{< /details >}}

### Include Theme

{{< details >}}

```
include current-theme.conf
```

{{< /details >}}

## Color Scheme

{{< hint "warning" >}}
You can set color scheme configuration in `Color Table` section on config file (`~/.config/kitty/kitty.conf`). But for better files management, place it in separated file (`~/.config/kitty/current-theme.conf`).
{{< /hint >}}

{{< details >}}

```
background #1c262b
foreground #c1c8d6
cursor #b2b8c3
selection_background #6dc1b8
color0 #000000
color8 #767676
color1 #ee2a29
color9 #dc5b60
color2 #3fa33f
color10 #70be71
color3 #fee92e
color11 #fef063
color4 #1d80ef
color12 #53a4f3
color5 #8800a0
color13 #a94dbb
color6 #16aec9
color14 #42c6d9
color7 #a4a4a4
color15 #fffefe
selection_foreground #1c262b
```

{{< /details >}}

### Generate Color Scheme

You can generate color scheme from repository.

```fish
kitty +kitten themes
```

Then select the theme you want.

## Tab Bar

{{< hint "warning" >}}
If you set `tab_bar_style custom`, you must create tab_bar configuration file (`~/.config/kitty/tab_bar.py`).
{{< /hint >}}

{{< details >}}

```python
# pyright: reportMissingImports=false
from datetime import datetime
from kitty.boss import get_boss
from kitty.fast_data_types import Screen, add_timer, get_options
from kitty.utils import color_as_int
from kitty.tab_bar import (
    DrawData,
    ExtraData,
    Formatter,
    TabBarData,
    as_rgb,
    draw_attributed_string,
    draw_title,
)

opts = get_options()
icon_fg = as_rgb(color_as_int(opts.color10))
icon_bg = as_rgb(color_as_int(opts.color0))
bat_text_color = as_rgb(color_as_int(opts.color15))
clock_color = as_rgb(color_as_int(opts.color13))
date_color = as_rgb(color_as_int(opts.color14))
SEPARATOR_SYMBOL, SOFT_SEPARATOR_SYMBOL = ("\ue0bc", "\ue0bd")
RIGHT_MARGIN = 1
REFRESH_TIME = 1
ICON = " \ue272 "
UNPLUGGED_ICONS = {
    10: "\uf579",
    20: "\uf57a",
    30: "\uf57b",
    40: "\uf57c",
    50: "\uf57d",
    60: "\uf57e",
    70: "\uf57f",
    80: "\uf580",
    90: "\uf581",
    100: "\uf578",
}
PLUGGED_ICONS = {
    1: "\uf583",
}
UNPLUGGED_COLORS = {
    15: as_rgb(color_as_int(opts.color1)),
    16: as_rgb(color_as_int(opts.color15)),
}
PLUGGED_COLORS = {
    15: as_rgb(color_as_int(opts.color1)),
    16: as_rgb(color_as_int(opts.color6)),
    99: as_rgb(color_as_int(opts.color6)),
    100: as_rgb(color_as_int(opts.color2)),
}


def _draw_icon(screen: Screen, index: int) -> int:
    if index != 1:
        return 0
    fg, bg = screen.cursor.fg, screen.cursor.bg
    screen.cursor.fg = icon_fg
    screen.cursor.bg = icon_bg
    screen.draw(ICON)
    screen.cursor.fg, screen.cursor.bg = fg, bg
    screen.cursor.x = len(ICON)
    return screen.cursor.x


def _draw_left_status(
    draw_data: DrawData,
    screen: Screen,
    tab: TabBarData,
    before: int,
    max_title_length: int,
    index: int,
    is_last: bool,
    extra_data: ExtraData,
) -> int:
    if screen.cursor.x >= screen.columns - right_status_length:
        return screen.cursor.x
    tab_bg = screen.cursor.bg
    tab_fg = screen.cursor.fg
    default_bg = as_rgb(int(draw_data.default_bg))
    if extra_data.next_tab:
        next_tab_bg = as_rgb(draw_data.tab_bg(extra_data.next_tab))
        needs_soft_separator = next_tab_bg == tab_bg
    else:
        next_tab_bg = default_bg
        needs_soft_separator = False
    if screen.cursor.x <= len(ICON):
        screen.cursor.x = len(ICON)
    screen.draw(" ")
    screen.cursor.bg = tab_bg
    draw_title(draw_data, screen, tab, index)
    if not needs_soft_separator:
        screen.draw(" ")
        screen.cursor.fg = tab_bg
        screen.cursor.bg = next_tab_bg
        screen.draw(SEPARATOR_SYMBOL)
    else:
        prev_fg = screen.cursor.fg
        if tab_bg == tab_fg:
            screen.cursor.fg = default_bg
        elif tab_bg != default_bg:
            c1 = draw_data.inactive_bg.contrast(draw_data.default_bg)
            c2 = draw_data.inactive_bg.contrast(draw_data.inactive_fg)
            if c1 < c2:
                screen.cursor.fg = default_bg
        screen.draw(" " + SOFT_SEPARATOR_SYMBOL)
        screen.cursor.fg = prev_fg
    end = screen.cursor.x
    return end


def _draw_right_status(screen: Screen, is_last: bool, cells: list) -> int:
    if not is_last:
        return 0
    draw_attributed_string(Formatter.reset, screen)
    screen.cursor.x = screen.columns - right_status_length
    screen.cursor.fg = 0
    for color, status in cells:
        screen.cursor.fg = color
        screen.draw(status)
    screen.cursor.bg = 0
    return screen.cursor.x


def _redraw_tab_bar(_):
    tm = get_boss().active_tab_manager
    if tm is not None:
        tm.mark_tab_bar_dirty()


def get_battery_cells() -> list:
    try:
        with open("/sys/class/power_supply/BAT0/status", "r") as f:
            status = f.read()
        with open("/sys/class/power_supply/BAT0/capacity", "r") as f:
            percent = int(f.read())
        if status == "Discharging\n":
            # TODO: declare the lambda once and don't repeat the code
            icon_color = UNPLUGGED_COLORS[
                min(UNPLUGGED_COLORS.keys(), key=lambda x: abs(x - percent))
            ]
            icon = UNPLUGGED_ICONS[
                min(UNPLUGGED_ICONS.keys(), key=lambda x: abs(x - percent))
            ]
        elif status == "Not charging\n":
            icon_color = UNPLUGGED_COLORS[
                min(UNPLUGGED_COLORS.keys(), key=lambda x: abs(x - percent))
            ]
            icon = PLUGGED_ICONS[
                min(PLUGGED_ICONS.keys(), key=lambda x: abs(x - percent))
            ]
        else:
            icon_color = PLUGGED_COLORS[
                min(PLUGGED_COLORS.keys(), key=lambda x: abs(x - percent))
            ]
            icon = PLUGGED_ICONS[
                min(PLUGGED_ICONS.keys(), key=lambda x: abs(x - percent))
            ]
        percent_cell = (bat_text_color, str(percent) + "% ")
        icon_cell = (icon_color, icon)
        return [percent_cell, icon_cell]
    except FileNotFoundError:
        return []


timer_id = None
right_status_length = -1

def draw_tab(
    draw_data: DrawData,
    screen: Screen,
    tab: TabBarData,
    before: int,
    max_title_length: int,
    index: int,
    is_last: bool,
    extra_data: ExtraData,
) -> int:
    global timer_id
    global right_status_length
    if timer_id is None:
        timer_id = add_timer(_redraw_tab_bar, REFRESH_TIME, True)
    clock = datetime.now().strftime(" %H:%M")
    date = datetime.now().strftime(" %d.%m.%Y")
    cells = get_battery_cells()
    cells.append((clock_color, clock))
    cells.append((date_color, date))
    right_status_length = RIGHT_MARGIN
    for cell in cells:
        right_status_length += len(str(cell[1]))

    _draw_icon(screen, index)
    _draw_left_status(
        draw_data,
        screen,
        tab,
        before,
        max_title_length,
        index,
        is_last,
        extra_data,
    )
    _draw_right_status(
        screen,
        is_last,
        cells,
    )
    return screen.cursor.x

```

{{< /details >}}

## Official Website

https://sw.kovidgoyal.net/kitty/

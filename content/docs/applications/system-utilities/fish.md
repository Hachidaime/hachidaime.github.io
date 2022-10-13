---
title: "Fish"
weight: 2
---

# Fish: Comman Line Shell

## Installation

```fish
sudo dnf install fish-shell
```

## Configuration

{{< hint "warning" >}}
Kitty looks config file depend on OS, usually `~/.config/fish/config.fish`.
{{< /hint >}}

```fish
if status is-interactive
    # Commands to run in interactive sessions can go here
end

# Clear Greeting
set -U fish_greeting ""
```

## Path Environment

Simple way to add directory to `$PATH` environment:

```fish
add_to_path path
```

## Alias

Simple way to add and save alias:

```fish
alias -s NAME=DEFINITION
```

## Official Website

https://fishshell.com/

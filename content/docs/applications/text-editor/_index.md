---
title: "Text Editor"
weight: 2
bookCollapseSection: true
---

# Text Editor

## Vim

```fish
sudo dnf install vim
```

## Neovim nightly

```fish
sudo dnf copr enable agriffis/neovim-nightly
sudo dnf install -y neovim python3-neovim
```

For more detail see [Neovim Configuration]({{< relref "/docs/applications/text-editor/neovim" >}}).

## VSCode

```fish
flatpak install --user flathub com.visualstudio.code
```

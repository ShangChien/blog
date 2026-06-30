---
title: "Molio"
description: "Vue 3 embeddable 2D molecular editor kernel built on RDKit, VRender, and a plugin runtime."
date: "2026-06-30"
demoURL: "https://molio.emm.sh/"
---

[Molio](https://molio.emm.sh/) is an embeddable 2D molecular drawing board for host applications, research tools, and business workflows.

The editor is built around a Vue 3 `MolEditor` component with controlled snapshots, ref methods, and events so parent apps can drive undo, redo, reset, file import, export, save, and share flows. RDKit powers SMILES, MOL/SDF, and RDKitJSON handling, explicit hydrogen toggling, and SVG/PNG export in the browser.

Plugin families for object, UI, and workflow extensions let hosts customize editor behavior without forking the core. The package ships as `@shangchien/molio`, with a live demo at [molio.emm.sh](https://molio.emm.sh/) and API docs at [molio.emm.sh/docs](https://molio.emm.sh/docs/).

# electron-shadcn-typescript

A starter template for Electron desktop apps with React, TypeScript, Tailwind CSS and shadcn/ui. Setting all of that up by hand takes an afternoon of config; here all 47 shadcn components are already installed and wired, so you can start on the actual app right away.

![electron-shadcn-typescript screenshot](https://github.com/p32929/electron-shadcn-typescript/assets/6418354/c07ff9dd-6434-45aa-9620-c9536c8db168)

## Features

1. **All 47 shadcn/ui components pre-installed** — accordion to tooltip, already wired to Tailwind and Radix. No `shadcn-ui add` runs needed.
2. **Dark / light theme** out of the box via `next-themes` and a ready `ThemeProvider`.
3. **electron-vite** for fast dev with HMR in the renderer.
4. **electron-builder** configured for Windows, macOS and Linux, with app icons in `build/`.
5. **Auto-updates** ready — `electron-updater` is already a dependency and `dev-app-update.yml` is in place.
6. **TypeScript everywhere** — separate `tsconfig` for main, preload and renderer, plus ESLint and Prettier.

## Recommended editor setup

1. [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Get started

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

### Other useful scripts

```bash
$ yarn typecheck   # typecheck main, preload and renderer
$ yarn lint        # eslint --fix across the project
$ yarn format      # prettier --write .
```

## Where things are

```
src/main/        Electron main process
src/preload/     preload bridge
src/renderer/    renderer html entry
src/components/  your components + components/ui (shadcn)
src/App.tsx      the app itself — start here
```

Adding more shadcn components later? The exact commands used to set this up are in [shadcn.md](shadcn.md).

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit.

## You might also like

<p><a href="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/0"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/0-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/0-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (1)"></picture></a><a href="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/1"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/1-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/1-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (2)"></picture></a><br><a href="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/2"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/2-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/2-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (3)"></picture></a><a href="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/3"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/3-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/electron-shadcn-typescript/personal/3-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (4)"></picture></a></p>

<p><a href="https://p32929.github.io/share/?repo=electron-shadcn-typescript"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>

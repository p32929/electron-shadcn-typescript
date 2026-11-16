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

## Share

<a href="https://p32929.github.io/share/?repo=electron-shadcn-typescript"><img src="https://p32929.github.io/readme/share.svg" alt="Share this with your friends in just a click" width="420"></a>

## Support

<a href="https://p32929.github.io/support/"><img src="https://p32929.github.io/readme/support.svg" alt="If you like my works and want to support me, feel free to support" width="420"></a>

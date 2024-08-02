# zen.read

Rust-based app for reading & managing posts & documents from web.

## Getting Started

That app is separated into 5 parts in `packages` directory:

- `app` - Rust code & views
- `ui` - React components. Components are have a Storybook for separated preview and testing
- `tsconfig` & `tailwind-config` – exported config files for other packages
- `shared` – universal shared code(utils, types, etc)

### Installation

```bash
git clone https://github.com/zenread/zenread.git
cd zenread
pnpm install
pnpm run tauri dev
```

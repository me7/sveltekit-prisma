# history of change

## 13 Jun 2022 - try to build side bar using src from https://svend3r.dev
- breaking change = edit %sveltekit.head% and pnpm i prism-svelte
- also install svelte devtools to see what's component is used
- use unocss instead of tailwind [src](https://github.com/unocss/unocss/blob/main/examples/sveltekit)
  - `npm i -D unocss`
  - edit svelte.config.js
  - import 'uno.css' in __layout.svelte
- add @fontsource/krub
- change main layout to [flex](https://dev.to/domysee/keeping-the-footer-at-the-bottom-with-css-flexbox-5h5f)
- button.svelte component
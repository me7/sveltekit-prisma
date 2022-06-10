# sveltekit-prisma
https://github.com/me7/sveltekit-prisma

original from this [blog post](https://www.mikenikles.com/blog/svelte-kit-prisma-a-match-made-in-digital-heaven) but update on Jun 9, 2022 due to original repo cannot run

## what's change?
- use src/routes/todo/index.ts only, no _api.ts
- prisma 3.15, svete 3.46

## how to run
- clone this repo
- `pnpm i` to install dependencies
- `pnpm prisma db push` to create database
- `pnpm dev --open` to run dev server and open in browser

## how to deploy
### node
  - `pnpm i @sveltejs/adaptor-node`
  - edit svelte.config.js
  - `pnpm build`
  - `node build/index.js` to run
### varcel (10-Jun-2022 database using prisma not working yet)
  - use @sveltejs/adapter-auto (not adapter-node)
  - go to https://vercel.com/dashboard
  - import your github project
  - DONE 


> # Original Repo
> This is a default [SvelteKit](https://kit.svelte.dev/) app (`npm init svelte@next`) which persists the todo items in a local SQLite > database using [Prisma](https://www.prisma.io/).
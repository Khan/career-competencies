# How to use this repo

Hey! Thanks for helping out with this project. Just to help you hit the ground running, here's a quick guide to some of the differences between this repo and others at Khan Academy.

## Bun

This repo uses `bun` as a replacement for `node.js` as well as `npm` or `yarn`.

### Installation

```bash
curl -fsSL https://bun.sh/install | bash
```

For more information, see [the docs on bun.sh](https://bun.sh/docs/installation#installing).

### Commands

They're essentially identical to `yarn` commands, but way faster.

Here are the commands you'll use most often:

```bash
bun install
bun add
bun remove
bun test
bun run # with scripts; see below
```

### The Lockfile

The `bun.lockb` file is a binary file that is used to lock down the versions of the dependencies. This is similar to `yarn.lock` or `package-lock.json`.

> [!NOTE]\
> The lockfile holds more data than just dependency versions. You may need to `bun install` after making config changes. The CI workflow will fail if the lockfile needs to be updated.

#### Debugging `bun.lockb`

The `bun.lockb` is not human-readable by default. In order to read it, you'll want to extend your local git config like so:

```bash
git config --local include.path ../.gitconfig
```

then run

```bash
bun ./bun.lockb
```

## Github Actions

- [CI](.github/workflows/ci.yml): Runs on every PR and pushes to `main`. Tests, lints, and builds to ensure that the code is ready to be merged and/or deployed.

- [Static](.github/workflows/static.yml): Runs on every push to `main` following a successful CI check. Builds and deploys [the static site](https://nedredmond.github.io/career-competencies/).

## Scripts

Here are some of the most common scripts you'll use:

```bash
bun run dev # starts the vite dev server

bun run build && bun run preview # previews the static deploy

bun run fix # runs `lint --fix` and `prettier --write`; takes care of most linting issues, alerts you to the rest
```

## Configs

- `no-internal-modules`: You may not import submodules from other modules. In essence, **_every subdirectory needs an_** `index.ts` **_file that serves as the public API for that module._**
- `plugin:@typescript-eslint/stylistic-type-checked`: Among other things, this enforces the use of `Record<string, unknown>` instead of `{ [key: string]: unknown }` and `interface` instead of `type` for type safety and consistency.

## Router

Because GitHub Pages doesn't support single page apps, we use a hash router. This means the URL will contain a `#` after the domain name. For example, `https://khan.github.io/career-competencies/#/whatever`. More complex solutions are out there, like [this one](https://github.com/rafgraph/spa-github-pages), but they're not worth the effort for this project.

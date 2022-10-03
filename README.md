# kitfi

A turborepo containing packages a fine grained reactivity jsx framework.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `signal` Small reactivity implementation with signals and effects.
- `view` JSX rendering layer with uses signal for reactivty.
- `demo`: Example using `view` 
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```
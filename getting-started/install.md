---
sidebar_position: 2
---

# Proxy your website

> 💡 **Prerequisite:** WebCM needs Node version >= 18. You can then install all dependencies with `npm i`.

To proxy your website through WebCM, add your website to the target property of `webcm.config.ts` before running WebCM.

### Run WebCM using [`npx`](https://docs.npmjs.com/cli/v8/commands/npx)

1. Create a `webcm.config.ts` config file (you can use [example.config.ts](https://github.com/cloudflare/webcm/blob/unstable/example.config.ts) as an example)
2. Within the same folder, run:
   ```bash
   npx webcm
   ```

   You can optionally add flags `--c` and `--mc` to respectively customise the paths to your config file and/or customise the relative path where your components will be loaded. The default values are: `--c=webcm.config.ts --mc=./components`.

   WebCM will load any of the [Managed Components](https://managedcomponents.dev/components) specified in your config and present in the components folder, attempting to downloading any missing ones from the [`@managed-components` npm registry](https://www.npmjs.com/org/managed-components).

### Develop

1. ```bash
    git clone git@github.com:cloudflare/webcm.git && cd webcm && npm i
    ```
2. Create a `webcm.config.ts` config file (use [example.config.ts](https://github.com/cloudflare/webcm/blob/unstable/example.config.ts) as an example)
3. ```bash
   npm run dev
   ```

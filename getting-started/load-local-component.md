---
sidebar_position: 4
---

# Load a local Managed Component

You may want WebCM to load a locally developed Managed Component.

1. [Create a Managed Component](https://managedcomponents.dev/getting-started/quickstart) if you haven't already
2. Place your Managed Component folder inside the `components` directory
3. Edit your config file to include your new local component folder name along with any relevant settings and/or permission grants.

   E.g.
   ```typescript
     export default {
        components: [
          {
            name: "my-local-folder",
            settings: { customSetting1: "cheese" },
            permissions: [],
          },
          // ...other Managed Components
        ],
        // ...rest of the config
        // (see full example at https://github.com/cloudflare/webcm/blob/unstable/example.config.ts)
      }
4. Restart your WebCM server ✅

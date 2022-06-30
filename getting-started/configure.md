---
sidebar_position: 3
---

# Configure a third-party Managed Component

## Where are the third-party Managed Components?

You can find the list of published managed component npm packages [here.](https://www.npmjs.com/org/managed-components)

## Example Setup for `webcm.config.ts`

### Google Analytics (GA)

Head to [GA's Managed Component](https://github.com/managed-components/google-analytics) GitHub repository (Managed Component maintainers are encouraged to document available settings keys in the README file.)

1. Following the [Tool Settings guidance of the project README](https://github.com/managed-components/google-analytics/blob/main/README.md#tracking-id-string-required), enter any required settings and/or grant any necessary permissions for the features you want to enable.

    In this case, we just need the name of the `@managed-components` package, and a value for the Google Analytics tracking id:

   ```typescript
     export default {
        components: [
          {
            name: "google-analytics",
            settings: { tid: "UA-000000-2" },
            permissions: [],
          },
          // ...other Managed Components
        ],
        // ...rest of the config
        // (see full example at https://github.com/cloudflare/webcm/blob/unstable/example.config.ts)
      }
   ```
2. Restart your WebCM server ✅

   WebCM will load the google-analytics package from the npm registry, applying your specified settings and permissions at runtime.

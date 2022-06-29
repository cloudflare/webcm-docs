---
sidebar_position: 3
---

# Configure a third-party Managed Component

### E.g. Adding GA to your `webcm.config.ts`

Head to [GA's Managed Component](https://github.com/managed-components/google-analytics) GitHub repository:

1. Use the `namespace` value from [manifest.json](https://github.com/managed-components/google-analytics/blob/main/manifest.json) to refer to the component in your WebCM config file.
2. Following the permissions in [manifest.json](https://github.com/managed-components/google-analytics/blob/main/manifest.json), grant all the permissions you want to grant to the component by adding them to the permissions array.

    (Managed Component authors are encouraged to document available settings keys in the [Tool Settings section of their project README](https://github.com/managed-components/google-analytics/blob/main/README.md#tracking-id-string-required) file.)

   For example
   ```json
     components: [
       {
         "name": "google-analytics",
         "settings": { "tid": "UA-000000-2" },
         "permissions": [
           "client_network_requests",
           "execute_unsafe_scripts",
         ],
       },
     ],
   ```
3. Restart your WebCM server ✅

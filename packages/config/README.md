# @21peakless/config
This module manages all custom configurations which can be done to the CMS server itself, including database settings, API configuration and event CMS personalization.

## Tutorial

1. Create a `.21peaklessrc` file in your installation root or `$HOME` directory.
2. Install the 21PeakLess CMS and start it
3. Configuration will automatically be read!

###### Default configuration

```js
{
    api: {
        ssl: false,
        version: 1,
        host: 'localhost',
        port: 9671,
    },
    database: {
        adapter: 'mongodb',
        port: 27017,
        auth: {
            enabled: false,
            user: 'admin',
            password: '',
        },
    },
    cms: {
        ssl: false,
        host: 'localhost',
        port: 9671,
    },
}
```

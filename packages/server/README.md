# @21peakless/server
Main node.js server implementation, used for the CMS and CDN API as base host. Supporting multiple middlewares, static serving and a proxy option

### Example

```js
const { join } = require('path');
const createServer = require('@21peakless/server');
const { middleware } = require('@21peakless/http');

const app = createServer({
    proxy: '192.221.19.2',
    middlewares: [
        clickJackingProtection({
            domain: 'example.org',
            action: 'deny'
        }),
        xssProtection(),
        noCache()
    ],
    static: {
        '/public/v1/assets': join(__dirname, 'build'),
        '/3rd-party': join(process.cwd(), 'vendor')
    }
})
```

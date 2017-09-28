# @21peakless/http

## Client
```js
const Client = require('@21peakless/http');
```
## Middleware

### Security 

#### Clickjacking protection
```
@21peakless/http/middleware/clickJackingProtection
```

##### Options
```js
{
    action: 'ALLOW_FROM', // DENY, SAMEORIGIN
    domain: 'example.com'
}
```

#### Download policy
```
@21peakless/http/middleware/downloadPolicy
```

Sets the `X-Download-Options` header to `noopen` for IE8+.

#### Content-type sniffing
```
@21peakless/http/middleware/nosniffContentType
```

Sets the `X-Content-Type-Options` header to `nosniff`.

#### Strict transport security
```
@21peakless/http/middleware/strictTransportSecurity
```

Sets the `Strict-Transport-Security` header to one of the following value types (`%` presenting maxAge option):

* `max-age: %`
* `max-age: %; includeSubDomains`
* `max-age: %; preload`

##### Options
```js
{
    maxAge: 180 * 24 * 60 * 60, // default
    includeSubDomains: false, // whether to include subdomans for transport
    preload: false, // adding preload header option
    setIf: () => {} // handler
}
```

#### Cross-site-scripting Protection (XSS)
```
@21peakless/http/middleware/xssProtection
```

Sets the `'X-XSS-Protection` to `1;mode=block` in old IEs or `0` in other browsers.

##### Options
```js
{
    force: false // forces the mode to "block"
}
```

### Add-ons

#### Request throttle service
```
@21peakless/http/middleware/rateLimit
```

Throttles the request in a specific interval with a certain amount of requests (defaults below). This middleware needs an active, up- and running [Redis](https://redis.io/) store to work.

##### Options
```js
{
    interval: 60 * 60 * 100, // default: 1 hour
    limit: 280800, // default
}
```

#### No-Cache
```
@21peakless/http/middleware/noCache
```

Useful to disable caching with all heaers needed, implements the following:

* `Surrogate-Control` to `no-store`
* `Cache-Control` to `no-store,no-cache,must-revalidate,proxy-revalidate`
* `Pragm` to `no-cache`
* `Expire` to `0`

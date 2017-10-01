class HTTPClient {
    constructor(req, res, next) {
        this._res = res;
        this._req = req;
        this._bypass = next;
    }

    get request() {
        return this._req;
    }

    get response() {
        return this._res;
    }

    skip() {
        this._bypass.call();
    }

    success(data) {
        this._res.status(200).json(data);
    }

    fail(code, message, additions) {
        this._res.status(code).json({
            error: {
                code,
                message,
                additions,
            },
        });
    }
}

exports = module.exports = Client;

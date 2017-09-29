const passport = require('passport');
const { Strategy } = require('passport-http-bearer');

exports.connect = (adapter = null) => {
    passport.use(
        new Strategy(function httpBearerStrategy(token, done) {
            /**
             * TODO: Implement getTokens / getToken to validate authentication header
             * @see http://passportjs.org/docs
             */
            done(null, true);
        }),
    );
};

exports.middleware = (options = {}) => {
    passport.authenticate('bearer', {
        session: !!options.session,
    });
};

import passport from 'koa-passport'
import config from './config'
const FacebookStrategy  = require('passport-facebook').Strategy

/**
 * @apiDefine TokenError
 * @apiError Unauthorized Invalid JWT token
 *
 * @apiErrorExample {json} Unauthorized-Error:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "error": "Unauthorized"
 *     }
 */

/**
 * @api {post} /auth Authenticate user
 * @apiVersion 1.0.0
 * @apiName AuthUser
 * @apiGroup Auth
 *
 * @apiParam {String} username  User username.
 * @apiParam {String} password  User password.
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X POST -d '{ "username": "johndoe@gmail.com", "password": "foo" }' localhost:5000/auth
 *
 * @apiSuccess {Object}   user           User object
 * @apiSuccess {ObjectId} user._id       User id
 * @apiSuccess {String}   user.name      User name
 * @apiSuccess {String}   user.username  User username
 * @apiSuccess {String}   token          Encoded JWT
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *          "_id": "56bd1da600a526986cf65c80"
 *          "username": "johndoe"
 *        },
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
 *     }
 *
 * @apiError Unauthorized Incorrect credentials
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "error": "Unauthorized"
 *     }
 */

export async function authUser (ctx, next) {

  return passport.authenticate('local', (user) => {
    if (!user) {
      ctx.throw(401)
    }

    const token = user.generateToken()

    const response = user.toJSON()

    delete response.password

    ctx.body = {
      token,
      user: response
    }
  })(ctx, next)
}

export async function authFacebook(ctx, next) {

        let user;
        let token;
passport.use('facebook', new FacebookStrategy({
  clientID        : config.facebook_api_key,
  clientSecret    : config.facebook_api_secret,
  callbackURL     : config.callback_url
},
  function(access_token, refresh_token, profile, done) {
    process.nextTick(function() {

      // User.findOne({ 'id' : profile.id }, function(err, user) {
        user = profile;
        token = access_token;
      //   if (err)
      //     return done(err);
      // });
    });
}));

  passport.authenticate('facebook', { scope : 'email' })

      ctx.body = {
      token,
      user
    }
}

export async function logout(ctx, next) {
  req.logout();
  res.redirect('/');
};

export async function authFacebookCallback(ctx, next) {
  passport.authenticate('facebook', {
    successRedirect : '/home',
    failureRedirect : '/'
  })
}
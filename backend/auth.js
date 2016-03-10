function setupAuth(User, Config, app) {
  var passport = require('passport');
  var FacebookStrategy = require('passport-facebook').Strategy;

  // High level serialize/de-serialize configuration for passport
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.
      findOne({ _id : id }).
      exec(done);
  });

  // Facebook-specific
  passport.use(new FacebookStrategy(
    {
      clientID: Config.facebookClientId,
      clientSecret: Config.facebookClientSecret,
      callbackURL: 'https://botigueta.herokuapp.com/auth/facebook/callback'
      //callbackURL: 'https://localhost:3000/auth/facebook/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      if (!profile.emails || !profile.emails.length) {
        profile.emails=[{}];
        //profile.emails[0].value="pedcremo@gmail.com";
        //return done('No emails associated with this account!');
        console.log('No emails associated with this account!');
      }

      User.findOneAndUpdate(
        { 'data.oauth': profile.id },
        {
          $set: {
            //'profile.username': profile.emails[0].value,
            'profile.username': profile.displayName,
            'profile.picture': 'http://graph.facebook.com/' +
              profile.id.toString() + '/picture?type=large'
          }
        },
        { 'new': true, upsert: true, runValidators: true },
        function(error, user) {
          done(error, user);
        });
    }));

  // Express middlewares
  app.use(require('express-session')({
    secret: 'this is a secret'
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Express routes for auth
  app.get('/auth/facebook',
    function(req, res, next) {
      var redirect = encodeURIComponent(req.query.redirect || '/');

      passport.authenticate('facebook',
        {
          scope: ['email'],
          //callbackURL: 'http://localhost:3000/auth/facebook/callback?redirect=' + redirect
          callbackURL: 'https://botigueta.herokuapp.com/auth/facebook/callback?redirect=' + redirect
        })(req, res, next);
    });

  app.get('/auth/facebook/callback',
    function(req, res, next) {
      //var url = 'http://localhost:3000/auth/facebook/callback?redirect=' +
      var url = 'https://botigueta.herokuapp.com/auth/facebook/callback?redirect=' +
        encodeURIComponent(req.query.redirect);
      passport.authenticate('facebook', { callbackURL: url })(req, res, next);
    },
    function(req, res) {
      res.redirect(req.query.redirect);
    });


   app.get('/logout', function(req, res) {
         req.logout();
         res.redirect('/frontend');
   });
}

module.exports = setupAuth;

const AuthRouter = require('express').Router();
const passport = require('passport');
AuthRouter.get(
  '/google',
  passport.authenticate(
    'google',
    {
      accessType: 'offline',
      prompt: 'consent',
      scope: [
        'profile',
        'email',
        'openid',
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events',
        'https://www.googleapis.com/auth/calendar.settings.readonly',
      ],
    },
    { session: false }
  )
);

AuthRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failed', session: false }),
  function (req, res) {
    const token = req.user;

    res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Authenticated</title>
    </head>
    <body>
      Authenticated successfully.
      <script type="text/javascript">
        window.addEventListener("message", function(e) {
          console.dir(e)
          if (e.origin && e.data && e.data.info && e.data.info.complete) {
              window.close();
          }
        }, false);

        opener.postMessage({
          command: "token-ready",
          info: {
            token: "${token}",
          },
        }, "*");
      </script>
    </body>
  </html>
`);
  }
);

AuthRouter.get(
  ('/logout',
  (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/login');
  })
);

module.exports = AuthRouter;

const passport = require('passport');
const stripe = require('stripe')(process.env.STRIPE_SK);
const authenticate = require('../middlewares/authenticate');

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/surveys');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => res.send(req.user));

  app.post('/api/stripe', authenticate, async (req, res) => {
    // TODO: Handle stripe errors
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Test Payment',
      source: req.body.id,
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};

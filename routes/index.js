const passport = require('passport');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SK);
const authenticate = require('../middlewares/authenticate');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');

const surveyEmailTemplate = require('../templates/surveyEmail');

const Survey = mongoose.model('surveys');

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

  app.get('/api/surveys', authenticate, (req, res) => {
    res.send(req.user.surveys);
  });

  app.post('/api/surveys', authenticate, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = await new Survey({
      title,
      subject,
      body,
      recipients: (recipients || '')
        .replace(',', ';')
        .split(';')
        .map(email => ({ email: email.trim() })),
      _user: req.user.id,
      sentAt: Date.now(),
    }).save();

    try {
      const template = surveyEmailTemplate(survey);
      const mailer = new Mailer(survey, template);
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get('/api/surveys/thanks', (req, res) => res.send('Thanks for voting!'));
};

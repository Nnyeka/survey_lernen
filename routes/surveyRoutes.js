const mongoose =  require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const {title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()

        })

        const mailer = new Mailer(survey, surveyTemplate(survey));
        mailer.send();
    })
}

// sendgrid key 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
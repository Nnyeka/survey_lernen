// const keys = require('../config/keys')
const Paystack = require('paystack-node');
let APIKEY = 'sk_test_7e38dd227bd3374318013d79a799ffc59458b347'
const environment = process.env.NODE_ENV
const paystack = new Paystack(APIKEY, environment)
const requireLogin = require('../middlewares/requireLogin')


module.exports = app => {
    app.post('/api/paystack', requireLogin, async (req, res) => {
        const data = (req.body.reference)
        const charge = await paystack.verifyTransaction({
            reference: data.reference
        })
        req.user.credits += 5
        const user = await req.user.save();

        res.send(user)
    });
}
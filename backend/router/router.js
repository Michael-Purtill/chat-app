const router = require('express').Router();
let Message = require('../models/message');

router.route('/').post((req, res) => {
    const username = req.body.username;

    const message = req.body.message;

    const newMessage = new Message({username, message});

    newMessage.save()
    .then(() => res.json('user added!'));
});

router.route('/').get((req, res) => {
    Message.find()
    .then(user => res.json(user))
    .catch(error => {console.log(error)});
});

module.exports = router;
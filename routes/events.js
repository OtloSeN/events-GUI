const router = require('express').Router();
const eventController = require('./controllers/events.controller');

router.get('/', eventController.showEvents);

router.get('/:slug', eventController.showSingle);

module.exports = router;
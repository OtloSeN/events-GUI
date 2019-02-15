const router = require('express').Router();
const apiController = require('./controllers/api.controller');

router.get('/create', apiController.showCreate)

router.post('/create', apiController.createEvent);

router.get('/:slug/edit', apiController.getEdit);

router.put('/:slug/edit', apiController.editEvent);

router.delete('/:slug/delete', apiController.deleteEvent);

module.exports = router;
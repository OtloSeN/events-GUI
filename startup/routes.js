const events = require('../routes/events');
const api = require('../routes/api');

module.exports = (app) => {
    app.use('/', events)
    app.use('/api/events', api);
}
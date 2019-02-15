const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/events', {
        useNewUrlParser: true,
        useCreateIndex: true
    })
        .then(() => console.log('Connected to DB...'))
        .catch(err => console.log(err));
}
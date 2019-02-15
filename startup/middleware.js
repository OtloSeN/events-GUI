const express = require('express');

module.exports = (app) => {
    app.use(express.json());
    app.set('view engine', 'pug');
}
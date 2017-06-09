'use strict';

const errors = require('./../constants/errors');
const express = require('express');
module.exports = function (app) {

    app.get('/', (req, res) => { res.send('Hello') });
    app.use('/api/v1', require('./v1')());
    
    // If nothing else matches, return 404
    app.use(function (req, res) {
        return res.status(404).json({
            success: false,
            error: errors.E_NOT_FOUND
        });
    });
};

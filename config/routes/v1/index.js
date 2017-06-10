'use strict';
const express = require('express');
const router = express.Router();

const webcrawler = require('./webcrawler');

module.exports = function (passport) {

    // Add api version to the response
    router.use(function (req, res, next) {
        res._json = res.json;
        res.json = function (obj) {
            obj.APIversion = 1;
            res._json(obj);
        };
        next();
    });

    webcrawler(router);

    return router;
};

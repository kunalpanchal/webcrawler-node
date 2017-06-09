'use strict';

const errors = require('./../constants/errors');
module.exports = (res, err, data) => {

    return res.status(500).send({
        success: false,
        error: {
            code: err.code || 'E_UNEXPECTED',
            message: err.message || 'Unexpected Error has occured',
            data: data
        }
    });
};

'use strict';

module.exports = Object.freeze({
    E_UNEXPECTED: {
        code: 'E_UNEXPECTED',
        message: 'Something went wrong!'
    },

    E_NOT_FOUND: {
        code: 'E_NOT_FOUND',
        message: 'Unknown request!'
    },

    E_ACCESS_DENIED: {
        code: 'E_ACCESS_DENIED',
        message: 'You are not allowed to perform this action!'
    },
    E_NO_PARAMS: {
        code: 'E_NO_PARAMS',
        message: 'Incorrect/No parameters sent'
    }
});

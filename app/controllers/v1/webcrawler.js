'use strict';

const response = require('./../../../config/responses');
const error = require('./../../../config/constants/errors');
const Promise = require("bluebird");
const rp = require('request-promise');
const webCrawlerHelper = require('./../../helpers/webcrawler');

module.exports = {
    index: (req, res) => {
        return response.ok(res, 'Welcome to API VERSION 1 webcrawler');
    },

    // http://www.shopping.com/products?KW=<keword>
    getProductCount: (req, res) => {
        let keyword = req.params.keyword;
        if (!keyword)
            return response.error(res, error.E_NO_PARAMS, 'No Keyword Sent');

        rp(process.env.SCRAPPER_URL + '/products?KW=' + keyword)
            .then(htmlString => response.ok(res, webCrawlerHelper.getProductCount(htmlString, keyword)))
            .catch(err => response.error(res, err));
    },
    
    // http://www.shopping.com/products~PG-<number>?KW=<keyword>
    getProducts: (req, res) => {
        let keyword = req.params.keyword;
        let pageNumber = req.params.page_number;
        if (!keyword)
            return response.error(res, error.E_NO_PARAMS, 'No Keyword Sent');
        if (!pageNumber || isNaN(pageNumber))
            return response.error(res, error.E_NO_PARAMS, 'No/Incorrect PageNumber Sent');

        rp(process.env.SCRAPPER_URL + '/products~PG-' + pageNumber + '?KW=' + keyword)
            .then(htmlString => response.ok(res, webCrawlerHelper.getProducts(htmlString, keyword, pageNumber)))
            .catch(err => response.error(res, err));
    }

};

'use strict'
const webCrawlerController = require('./../../../app/controllers/v1/webcrawler');

module.exports = (router) => {
    router.get('/', webCrawlerController.index);

    router.get('/get-count/:keyword', webCrawlerController.getProductCount);
    router.get('/get-count', webCrawlerController.getProductCount);

    router.get('/get/:keyword/:page_number', webCrawlerController.getProducts);
    router.get('/get/:keyword', webCrawlerController.getProducts);
    router.get('/get', webCrawlerController.getProducts);
}
'use strict';

const cheerio = require('cheerio')

module.exports = {

    getProductCount: (htmlString, keyword) => {
        let $ = cheerio.load(htmlString);
        if ($('span.nomatch').text().length)
            return 'No Match Found';
        let totalCount = $('span.numTotalResults').text().trim().split(' ').slice(-1).pop().replace('/\\n/g', '');
        if (!totalCount)
            return 'Parsing Error';
        return {
            keyword: keyword,
            total_count: totalCount
        }

    },
    getProducts: (htmlString, keyword, pageNumber) => {
        let items = [];
        let $ = cheerio.load(htmlString);
        if ($('span.nomatch').text().length)
            return 'No Match Found';

        $('div.gridBox').each(function (i, elem) {
            let lastChild = $(this).children().last().children(), data = {};
            lastChild.each((i, element) => {
                if (element.name == 'input' && element.attribs.type == 'hidden')
                    data[element.attribs.name] = element.attribs.value;
            });
            items.push(data);
        });

        return {
            keyword: keyword,
            pageNumber: pageNumber,
            items: items
        }

    }
};

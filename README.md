# Web Crawler for shopping.com

A simple application made in NodeJS which scrappes shopping.com to fetch details.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

NodeJS & NPM should be installed.

### Installing and running it locally

Get up and running asap

```
npm install
npm start
```

Or to run it in watch mode :

```
npm install -g node-dev
npm i
npm run thecrawler
```

After you run, navigate to `http://localhost:3000` (You can change the port number in .env file)

## About the APIs

### Following are the URLs that the project is to crawl:

```
`http://www.shopping.com/products?KW=<keword>`
`http://www.shopping.com/products~PG-<number>?KW=<keyword>"`
```

### Using the api

* Use this to get the total number of products available for a particular keyword:

    ```
    `http://localhost:3000/api/v1/get-count/<keyword>`
    `http://localhost:3000/api/v1/get-count/clothes-dryers`
    ```
    This would get you a JSON response like so :
    ![Alt text](https://cdn.filestackcontent.com/rwGGGmRMTviRjrYStkVM "Get Product Count Web Crawler")

* Use this to get the all available products for a particular keyword in a particular page:

    ```
    `http://localhost:3000/api/v1/get/<keyword>/<page_number>`
    `http://localhost:3000/api/v1/get/toys/31`
    ```
    This would get you a JSON response like so :
    ![Alt text](https://cdn.filestackcontent.com/kRkY3cZKQ6uIuAwmsgv6 "Get Products Web Crawler")

## Deployment

You can deploy this to your server just by cloning the project and then

```
npm start
```

OR if you have forever installed (npm install -g forever):

```
forever start server.js
```

## NPMs Used (third party libraries)

* body-parser: ^1.17.2,
* cheerio: ^1.0.0-rc.1,
* cors: ^2.8.3,
* dotenv: ^4.0.0,
* express: ^4.15.3,
* node-dev: ^3.1.3,
* request: ^2.81.0,
* request-promise: ^4.2.1

## Built With

* [NodeJS](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
* [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.


## Authors

* **Kunal Panchal** - *Initial work* - [KunalPanchal](https://github.com/kunalpanchal)

<!--See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.-->

## License

Feel free to do anything and everything with this code. Cheerio !!

## Acknowledgments

* Hat tip to anyone who's code was used
* Cheerio is an awesome NPM

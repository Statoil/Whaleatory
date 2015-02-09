# Whaleatory

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application support the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

Install MongoDB typical installation: https://www.mongodb.org/dr//fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-2.6.7-signed.msi/download

Start mongodb 
```sh
cd <your_mongo_db_install_directory>
mongod --dbpath <full_path_to_your_datastore_folder>
```

Select database
```sh
use <my_database_name>
```

```sh
$ git clone git@github.com:Statoil/Whaleatory.git # or clone your own fork
$ cd Whaleatory
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

### (Web) Client

Make sure you have [Bower](http://bower.io/#install-bower) installed.

Make sure to be in `./app` folder where thr `bower.json` file is located.

Install the dependencies running


```
bower install

```
Please be sure to make the following selection

```
Unable to find a suitable version for angular, please choose one:
    1) angular#>=1 <1.3.0 which resolved to 1.2.28 and is required by angular-bootstrap#0.12.0
    2) angular#~1.3.12 which resolved to 1.3.12 and is required by whaleatory-client
    3) angular#>=1.2.0 which resolved to 1.3.12 and is required by angular-google-maps#2.0.12Prefix the choice with ! to persist it to bower.json
	    
? Answer:: 2
	    
Unable to find a suitable version for lodash, please choose one:
    1) lodash#~2.4.1 which resolved to 2.4.1 and is required by angular-google-maps#2.0.12
    2) lodash#~3.1.0 which resolved to 3.1.0 and is required by whaleatory-clientPrefix the choice with ! to persist it to bower.json
		    
? Answer:: 1

```


## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation detailed

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

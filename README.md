# Whaleatory

![front](https://github.com/Statoil/Whaleatory/blob/master/public/front.png)

Register whale observations from a Phidget/Binoculars arrangement, and post observations to the Cloud observation map.

Url to working cloud version: [https://calm-sea-3177.herokuapp.com/](https://calm-sea-3177.herokuapp.com/)

## Technology Stack

[MEAN](http://mean.io/) stack (MongoDB, Express, AngularJS and Node.JS.)</br>
[Phidget](http://www.phidgets.com/) with [Python](https://www.python.org/) code 

![tech](https://github.com/Statoil/Whaleatory/blob/master/public/techstack.PNG)

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

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

You will also have to attach a MongoDB instance as an addon in heroku e.g. from MongoLab

```
$ heroku addons:add mongolab
```

## Team

* Harald Wesenberg
* Jon Rogde
* Pier Lorenzo Paracchini
* Stein-Arne Sivertsen

## Documentation detailed

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

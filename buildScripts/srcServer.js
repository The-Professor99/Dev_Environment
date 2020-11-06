// This file will configure a web server that will serve up the files in our source directory

// We are using express as our development web server

// Other webservers we can use are live-server, webpack and browsersync etc


import express from "express";
import  path from "path";
import open from "open"; // opens the site in a browser
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000; // sets the port to be used

const app = express(); // creates an instance of express
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))
}); // Tells express which route  it should handle, for now, we are saying that any references to the root "/" should be handled by the function which takes  a request and a response. source directory("../src/index.html") is the file to be served.-active

// Now that we have declared our routing, we will tell express below to listen to the port we have defined above for any changes, if there is an error, the error fxn handles it, else, the website is opened

app.get("/users", function(req, res) {
    // Hardcoded like it's some database
    res.json([
        {
            "id": 1,
            "firstName": "Bob",
            "lastName": "Smith",
            "email": "bob@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Tammy",
            "lastName": "Norton",
            "email": "tnorton@yahoo.com"
        },
        {
            "id": 3,
            "firstName": "Tina",
            "lastName": "Lee",
            "email": "lee.tina@hotmai.com"
        },
    ])
})

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
})

// run node buildScripts/srcServer.js to run the application

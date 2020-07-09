"use strict";
// lib/app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Config_1 = require("./Config");
// Create a new express application instance
const app = express();
//var config1=new Config();//.getValue();
app.get('/', function (req, res) {
});
//app.set('Config', JSON.parse(fs.readFileSync('./app/src/config.json', 'utf8')) )
app.listen(3000, function () {
    console.log('server app listening on port 3000!', new Config_1.Config().get());
});
app.use('/login', require('./routes/login.route').router);

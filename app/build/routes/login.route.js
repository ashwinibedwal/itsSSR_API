"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_service_1 = require("../services/login.service");
const express = require("express");
// Create a new express application instance
const app = express();
var router = express.Router();
router.get('/validate', (req, res) => {
    console.log("in login/validate", req);
    res.write(login_service_1.LoginService.validateUser(req.body));
});
router.get('/login', (req, res) => {
    console.log("in login/login", req);
    res.write(login_service_1.LoginService.loginUser(req.body));
});
module.exports.router = router;

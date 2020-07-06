import {LoginService} from '../services/login.service'
import express = require('express');

// Create a new express application instance
const app: express.Application = express();


var router = express.Router();

router.get('/validate',(req,res)=>{
    console.log("in login/validate",req);
res.write(LoginService.validateUser(req.body));
}
);

router.get('/login',(req,res)=>{
    console.log("in login/login",req);
    res.write(LoginService.loginUser(req.body))
})
module.exports.router=router;


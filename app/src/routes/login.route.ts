import {LoginService} from '../services/login.service'
import {User} from '../Models/user'

export class LoginRouter{


// Create a new express application instance
//const app: express.Application = express();
public router;
private login_Service: LoginService;
constructor(router:any)
{
this.router=router;
this.setRouter(router);
this.login_Service=new LoginService();
}
//var router = express.Router();
setRouter(router){
router.get('/validate',(req,res)=>{
    console.log("in login/validate",req);
res.write(this.login_Service.validateUser(req.body));
}
);

router.get('/login',(req,res)=>{
    console.log("in login/login",req);
     this.login_Service.loginUser(this.getUserObject(req),res);

})

router.post('/Register',(req,res)=>{
    console.log("in login/login",req);

    res.write(this.login_Service.registerUser(this.getUserObject(req)))
})
}
generateToken(){

}
getUserObject(req:any):User{
let _user=new User();
_user.email=req.body.email;
_user.username=req.body.username;
_user.password=req.body.password;
return _user;
}

}


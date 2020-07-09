import{User,IUser} from '../Models/user';
import jwt from 'jsonwebtoken';
import {Config} from "../environment"
import {Response} from "express"
import user_schema from  "../schemas/user_schema"
import {ResponseProvider} from "../common/response_provider"

export class LoginService{

    res_provider:ResponseProvider=null;
    
    constructor()
    {
        this.res_provider=new ResponseProvider();
    }
    validateUser (userobj:User):boolean{
       try{
            jwt.verify(userobj.token,Config.SECRET_KEY,function(err:any,decoded:any){
                if(err)
                {
                    console.log("login failed",err)
                    return false;
                }else{
                    console.log("sucess",decoded);
                    return true;
                }
            });

       }catch(e)
       {
           console.log("validate user failed",e);
           return false;
       }
        return false;
    }
    
   async loginUser(userObj:User,res:Response){
        var _user=new user_schema(userObj);
        _user.collection.findOne({$and:[{username:userObj.username},{password:userObj.password}] },
            (err,rtnuser)=>{
                if(err)
                {
                    this.res_provider.MongoErrorResponse(res,"Mongo Error");
                    return;
                }
                if(rtnuser)
                {
                rtnuser.token= jwt.sign(rtnuser,Config.SECRET_KEY)
                this.res_provider.SuccessResponse(res,"Login Success",rtnuser);
                return;
                }
               this.res_provider.FailResponse(res,"Login Failed! incorrect data"); 
        });
    }
    registerUser(userObj:IUser){
        var _user=new user_schema(userObj);
        _user.save();
    }
};
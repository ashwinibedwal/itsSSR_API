import{User} from '../Models/user';
import jwt from 'jsonwebtoken';
import {Config} from '../Config'
export class LoginService{
    constructor()
    {

    }
   public static validateUser (userobj:User):boolean
    {
       try{
            jwt.verify("","ganesh",function(err:any,decoded:any){
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
    
    public static loginUser(userobj:User):User{
        var u=new User();
        if(!userobj.password||!userobj.password){
            return u;
        }
        return u;
    }
    public static registerUser(userobj:User):User{
        var u=new User();
        if(!userobj.password||!userobj.password){
            return u;
        }
        return u;
    }
};
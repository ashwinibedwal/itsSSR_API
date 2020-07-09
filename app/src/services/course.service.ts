import{Course,ICourse} from '../Models/course';
import jwt from 'jsonwebtoken';
import {Config} from "../environment"
import courses from  "../schemas/course_schema"
export class CourseService{
    constructor()
    {

    }
  /* public static validateCourse (courseobj:Course):boolean
    {
       try{
            jwt.verify(courseobj.price,Config.SECRET_KEY,function(err:any,decoded:any){
                if(err)
                {
                    console.log(" can't Purchase",err)
                    return false;
                }else{
                    console.log("Purchase",decoded);
                    return true;
                }
            });

       }catch(e)
       {
           console.log("Purchase failed",e);
           return false;
       }
        return false;
    }
    public static loginCourse(courseobj:Course):Course{
        var u=new Course();
        if(!courseobj.password||!courseobj.password){
            return u;
        }
        return u;
    }
    public static registerUser(courseobj:ICourse){
        var u=new courses(courseobj);
        u.save();
        if(!courseobj.password||!courseobj.password){
            return u;
        }
        return u;
    }
};*/
}

import {CourseService} from '../services/course.service'
import {Course} from '../Models/course'
export class CourseRouter{


// Create a new express application instance
//const app: express.Application = express();
public router;
constructor(router:any)
{
this.router=router;
this.setRouter(router);
}
//var router = express.Router();
setRouter(router){
router.get('/validate',(req,res)=>{
    console.log("in login/validate",req);
//res.write(CourseService.validateCourse(req.body));
}
);



router.get('/login',(req,res)=>{
    console.log("in login/login",req);
   // res.write(CourseService.loginCourse(req.body))
})
router.post('/Register',(req,res)=>{
    console.log("in login/login",req);
let z=new Course();
z.sr_no=req.body.sr_no;
z.course_name=req.body.course_name;
z.course_details=req.body.course_details;
z.price=req.body.price;
  //  res.write(CourseService.registerUser(a))
})

}

} 
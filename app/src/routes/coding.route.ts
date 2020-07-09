//import {CodingService} from '../services/coding.service'
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
}
}
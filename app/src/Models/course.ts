export interface ICourse{
    //password: any;
   
    sr_no?:string;
   course_name?:string;
   course_details?:string;
   price?:string;
   
}
export class Course implements ICourse
{
   sr_no?:string;
   course_name?:string;
   course_details?:string;
   price?:string;
}




export interface IUser{
   
     id?:string;
    email?:string;
    username?:string;
    password?:string;
    token?:string;
}
export class User implements IUser
{
    id?:string;
    email?:string;
    username?:string;
    password?:string;
    token?:string;
}


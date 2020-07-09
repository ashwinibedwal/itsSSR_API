import {Response} from "express";

export class ResponseProvider{
constructor()
{

}
SuccessResponse(res:Response,msg:string,obj:any){
res.status(200).json({
STATUS: "SUCCESS",
MESSAGE:msg,
DATA:obj
})
}
FailResponse(res:Response,msg:string){
    res.status(400).json({
        STATUS: "FAILED",
        MESSAGE:msg,
        DATA:null
        })
}
MongoErrorResponse(res:Response,msg:string)
{
    res.status(500).json({
        STATUS: "ERROR",
        MESSAGE:msg,
        DATA:null
        })
}

}
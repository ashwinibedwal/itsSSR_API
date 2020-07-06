
export class Config{
   
    static Configjson=null;
    public static get(key:string){
        return this.Configjson;
    }
    public static Set(value:any):any{
        this.Configjson=value;  
    }
}
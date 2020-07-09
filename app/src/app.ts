import express from "express";
import * as bodyParser from "body-parser";
const mongoose=require('mongoose');
import { LoginRouter } from "./routes/login.route";
import {Config} from "./environment"
//import { CommonRoutes } from "../routes/common_routes";

class App {

   public app: express.Application;
   //public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();
   

   private test_routes: LoginRouter;
   

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.app.use('/login',new LoginRouter(express.Router()).router);
   }

   private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
     mongoose.connect(Config.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
     console.log("MongoDB connected",Config.MONGOURL)
     mongoose.connection.once('open', () => {
      console.info('Connected to Mongo via Mongoose');
  });
  mongoose.connection.on('error', (err) => {
      console.error('Unable to connect to Mongo via Mongoose', err);
  });
   }

}
export default new App().app;

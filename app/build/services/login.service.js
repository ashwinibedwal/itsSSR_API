"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const user_1 = require("../Models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginService {
    constructor() {
    }
    static validateUser(userobj) {
        try {
            jsonwebtoken_1.default.verify(userobj.token, "", function (err, decoded) {
                if (err) {
                    console.log("login failed", err);
                    return false;
                }
                else {
                    console.log("sucess", decoded);
                    return true;
                }
            });
        }
        catch (e) {
            console.log("validate user failed", e);
            return false;
        }
        return false;
    }
    static loginUser(userobj) {
        var u = new user_1.User();
        if (!userobj.password || !userobj.password) {
            return u;
        }
        return u;
    }
    static registerUser(userobj) {
        var u = new user_1.User();
        if (!userobj.password || !userobj.password) {
            return u;
        }
        return u;
    }
}
exports.LoginService = LoginService;
;

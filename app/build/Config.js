"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
    static get(key) {
        return this.Configjson;
    }
    static Set(value) {
        this.Configjson = value;
    }
}
exports.Config = Config;
Config.Configjson = null;

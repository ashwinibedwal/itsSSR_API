"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var fs = require('fs');
class Config {
    /**
     *
     */
    get() {
        return JSON.parse(fs.readFileSync('./app/src/config.json', 'utf8'));
    }
}
exports.Config = Config;

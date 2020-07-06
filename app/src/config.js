"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.get = function (key) {
        return this.Configjson[key];
    };
    Config.Set = function (value) {
        this.Configjson = value;
    };
    Config.Configjson = null;
    return Config;
}());
exports.Config = Config;

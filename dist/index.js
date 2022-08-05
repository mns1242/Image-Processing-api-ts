"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var main_1 = __importDefault(require("./routes/main"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
//Port Number
var _Port = 3000;
app.use('/', main_1.default);
app.listen(_Port, function () {
    // make sure thumb folder exists
    var thumbPath = path_1.default.resolve('..//Image-Processing-API-Project//thumb');
    if (!fs_1.default.existsSync(thumbPath)) {
        fs_1.default.mkdirSync(thumbPath);
    }
    console.log("Server Running At port: ".concat(_Port));
});
exports.default = app;

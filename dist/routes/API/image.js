"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var processing_1 = __importDefault(require("../../processing"));
var resizeImage = processing_1.default.resizeImage;
var image = express_1.default.Router();
image.get('/', function (req, res) {
    //get Filename , width , height from Url by using req.query 
    var filename = req.query.filename;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    //display the image after processed to theuser 
    var Display_Image = "".concat(path_1.default.resolve('./'), "/thumb/").concat(filename, "+").concat(width, "X").concat(height, "output.jpg");
    //Name of the files  
    var Image_name_array = ['encenadaport', 'fjord', 'icelandwaterfall', 'santamonica', 'palmtunnel'];
    // Check for valid width and height value
    if (width < 1 || Number.isNaN(width)) {
        res.send('width is invalid');
    }
    if (height < 1 || Number.isNaN(height)) {
        res.send('height is invalid');
    }
    //check file name
    if (filename === null) {
        res.send(Error);
    }
    else if (!Image_name_array.includes(filename)) {
        res.send("no file with this name ".concat(filename));
    }
    else {
        //if statment to check if the file exsist or not 
        if (fs_1.default.existsSync("thumb/".concat(filename, "+").concat(width, "X").concat(height, "output.jpg"))) {
            res.send("This file exists with this name ".concat(Display_Image, " "));
        }
        else {
            resizeImage(filename, width, height)
                .then(function () {
                res.sendFile("".concat(Display_Image));
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    }
});
exports.default = image;

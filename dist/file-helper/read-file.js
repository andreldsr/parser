"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
var fs = require("fs");
function readFile(inputPath) {
    return fs.readFileSync(inputPath, 'utf-8');
}
exports.readFile = readFile;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPath = exports.outputPath = exports.inputPath = void 0;
var conts_1 = require("./conts");
exports.inputPath = '';
exports.outputPath = '';
function getPath() {
    var args = process.argv.slice(2);
    var inputIndex = args.indexOf(conts_1.INPUT_ARG);
    var outputIndex = args.indexOf(conts_1.OUTPUT_ARG);
    if (inputIndex > -1 && args.length > inputIndex + 1) {
        exports.inputPath = args[inputIndex + 1];
    }
    if (outputIndex > -1 && args.length > outputIndex + 1) {
        exports.outputPath = args[outputIndex + 1];
    }
    checkPaths();
}
exports.getPath = getPath;
function checkPaths() {
    if (exports.inputPath.length === 0 || exports.outputPath.length === 0) {
        throw Error('input or output path is null');
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaths = exports.outputPath = exports.inputPath = void 0;
var INPUT_ARG = '--input';
var OUTPUT_ARG = '--output';
exports.inputPath = '';
exports.outputPath = '';
function getPaths() {
    var args = process.argv.slice(2);
    var inputIndex = args.indexOf(INPUT_ARG);
    var outputIndex = args.indexOf(OUTPUT_ARG);
    if (inputIndex > -1 && args.length > inputIndex + 1) {
        exports.inputPath = args[inputIndex + 1];
    }
    if (outputIndex > -1 && args.length > outputIndex + 1) {
        exports.outputPath = args[outputIndex + 1];
    }
    checkPaths();
}
exports.getPaths = getPaths;
function checkPaths() {
    if (exports.inputPath.length === 0 || exports.outputPath.length === 0) {
        throw Error('input or output path is null');
    }
}

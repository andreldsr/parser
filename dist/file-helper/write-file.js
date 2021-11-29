"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = void 0;
var fs = require("fs");
function writeFile(data, outputPath) {
    var lines = '[';
    data.forEach(function (log, index) {
        lines = lines.concat(log);
        if (index < data.length - 1) {
            lines = lines.concat('\n');
        }
    });
    lines = lines.concat(']');
    fs.writeFile(outputPath, lines, function (err) {
        if (err) {
            console.error(err);
        }
    });
}
exports.writeFile = writeFile;

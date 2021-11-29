"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitLines = void 0;
var consts_1 = require("./consts");
function splitLines(data) {
    var lines = data.replace(/\r\n/g, '\n').split('\n');
    var errorLines = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var logParts = line.split(consts_1.SPLIT_MARKER);
        if (logParts[consts_1.LEVEL_PART] !== consts_1.ERROR_LEVEL) {
            continue;
        }
        errorLines.push(line);
    }
    return errorLines;
}
exports.splitLines = splitLines;

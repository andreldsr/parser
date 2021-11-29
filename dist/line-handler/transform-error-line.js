"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformErrorLines = void 0;
var consts_1 = require("./consts");
function transformErrorLines(lines) {
    var readyErrorLines = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var transformedLine = handleLogLine(line);
        readyErrorLines.push(transformedLine);
    }
    return readyErrorLines;
}
exports.transformErrorLines = transformErrorLines;
function handleLogLine(line) {
    var parts = line.split(consts_1.SPLIT_MARKER);
    var date = Date.parse(parts[consts_1.DATE_PART]);
    var logLevel = parts[consts_1.LEVEL_PART];
    var logMessage = JSON.parse(parts[consts_1.ERROR_PART]);
    return buildLogOutput(date, logLevel, logMessage);
}
function buildLogOutput(timestamp, loglevel, info) {
    return "{\"timestamp\": ".concat(timestamp, ", \"loglevel\": ").concat(loglevel, ", \"transactionId\": ").concat(info.transactionId, ", \"err\": ").concat(info.err, "}");
}

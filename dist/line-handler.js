"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformErrorLines = exports.splitLines = void 0;
var DATE_PART = 0;
var LEVEL_PART = 1;
var ERROR_PART = 2;
var SPLIT_MARKER = ' - ';
var ERROR_LEVEL = 'error';
function splitLines(data) {
    var lines = data.replace(/\r\n/g, '\n').split('\n');
    var errorLines = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var logParts = line.split(SPLIT_MARKER);
        if (logParts[LEVEL_PART] !== ERROR_LEVEL) {
            continue;
        }
        errorLines.push(line);
    }
    return errorLines;
}
exports.splitLines = splitLines;
function transformErrorLines(lines) {
    var readyErrorLines = [];
    for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
        var line = lines_2[_i];
        var transformedLine = handleLogLine(line);
        readyErrorLines.push(transformedLine);
    }
    return readyErrorLines;
}
exports.transformErrorLines = transformErrorLines;
function handleLogLine(line) {
    var parts = line.split(SPLIT_MARKER);
    var date = Date.parse(parts[DATE_PART]);
    var logLevel = parts[LEVEL_PART];
    var logMessage = JSON.parse(parts[ERROR_PART]);
    return buildLogOutput(date, logLevel, logMessage);
}
function buildLogOutput(timestamp, loglevel, info) {
    return "{\"timestamp\": ".concat(timestamp, ", \"loglevel\": ").concat(loglevel, ", \"transactionId\": ").concat(info.transactionId, ", \"err\": ").concat(info.err, "}");
}

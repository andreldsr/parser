"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var DATE_PART = 0;
var LEVEL_PART = 1;
var ERROR_PART = 2;
var ERROR_LEVEL = 'error';
var SPLIT_MARKER = ' - ';
var INPUT_ARG = '--input';
var OUTPUT_ARG = '--output';
var inputPath = '';
var outputPath = '';
var args = process.argv.slice(2);
function getPaths(args) {
    var inputIndex = args.indexOf(INPUT_ARG);
    var outputIndex = args.indexOf(OUTPUT_ARG);
    if (inputIndex > -1 && args.length > inputIndex + 1) {
        inputPath = args[inputIndex + 1];
    }
    if (outputIndex > -1 && args.length > outputIndex + 1) {
        outputPath = args[outputIndex + 1];
    }
}
function checkPaths() {
    if (inputPath.length === 0 || outputPath.length === 0) {
        throw Error('');
    }
}
getPaths(args);
checkPaths();
fs.readFile(inputPath, 'utf-8', function (err, data) {
    if (err) {
        handleError(err);
        return;
    }
    handleData(data);
});
function handleError(err) {
    console.log(err);
}
function handleData(data) {
    var errorLines = splitLines(data);
    var readyErrorLines = transformErrorLines(errorLines);
    writeFile(readyErrorLines);
}
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
function transformErrorLines(lines) {
    var readyErrorLines = [];
    for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
        var line = lines_2[_i];
        var transformedLine = handleLogLine(line);
        readyErrorLines.push(transformedLine);
    }
    return readyErrorLines;
}
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
function writeFile(data) {
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

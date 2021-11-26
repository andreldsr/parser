"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_helper_1 = require("./file-helper");
var line_handler_1 = require("./line-handler");
var path_helper_1 = require("./path-helper");
(0, path_helper_1.getPaths)();
handleData((0, file_helper_1.readFile)(path_helper_1.inputPath));
function handleData(data) {
    var errorLines = (0, line_handler_1.splitLines)(data);
    var readyErrorLines = (0, line_handler_1.transformErrorLines)(errorLines);
    (0, file_helper_1.writeFile)(readyErrorLines, path_helper_1.outputPath);
}

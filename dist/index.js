"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_handler_1 = require("./data-handler");
var file_helper_1 = require("./file-helper");
var path_helper_1 = require("./path-helper");
function execute() {
    (0, path_helper_1.getPath)();
    (0, data_handler_1.handleData)((0, file_helper_1.readFile)(path_helper_1.inputPath));
}
execute();

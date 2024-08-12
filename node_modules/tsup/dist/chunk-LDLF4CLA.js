"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }// src/errors.ts
var _worker_threads = require('worker_threads');
var _picocolors = require('picocolors'); var colors = _interopRequireWildcard(_picocolors);
var PrettyError = class extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
};
function handleError(error) {
  if (error.loc) {
    console.error(
      colors.bold(
        colors.red(
          `Error parsing: ${error.loc.file}:${error.loc.line}:${error.loc.column}`
        )
      )
    );
  }
  if (error.frame) {
    console.error(colors.red(error.message));
    console.error(colors.dim(error.frame));
  } else if (error instanceof PrettyError) {
    console.error(colors.red(error.message));
  } else {
    console.error(colors.red(error.stack));
  }
  process.exitCode = 1;
  if (!_worker_threads.isMainThread && _worker_threads.parentPort) {
    _worker_threads.parentPort.postMessage("error");
  }
}




exports.PrettyError = PrettyError; exports.handleError = handleError;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugLog = exports.DEBUG_ENABLED = void 0;
exports.DEBUG_ENABLED = process.env.SDK_DEBUG === "true" || process.env.LLAMA_DEBUG_MODE;
function debugLog() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!exports.DEBUG_ENABLED)
        return;
    console.log.apply(console, args);
}
exports.debugLog = debugLog;

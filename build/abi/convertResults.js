"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var bignumber_1 = require("@ethersproject/bignumber");
function isNumberOrBigNumber(value) {
    return bignumber_1.BigNumber.isBigNumber(value) || typeof value === "number";
}
function stringifyBigNumbers(result) {
    var final = __assign({}, result);
    if (Array.isArray(result))
        final = __spreadArray([], result, true);
    Object.keys(result).forEach(function (key) {
        if (isNumberOrBigNumber(result[key]))
            final[key] = result[key].toString();
        else if (typeof result[key] === "object")
            final[key] = stringifyBigNumbers(result[key]);
        else
            final[key] = result[key];
    });
    return final;
}
function default_1(results) {
    var response;
    if (typeof results === "string" || typeof results === "boolean")
        return results;
    if (isNumberOrBigNumber(results))
        return results.toString();
    response = stringifyBigNumbers(results);
    if (response instanceof Array)
        if (response.length === 1)
            return response[0];
    return response;
}
exports.default = default_1;

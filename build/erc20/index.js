"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceOf = exports.totalSupply = exports.decimals = exports.symbol = exports.info = void 0;
var ethers_1 = require("ethers");
var general_1 = require("../general");
var abi = [
    "function balanceOf(address owner) view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
];
function getContract(address, chain) {
    return new ethers_1.ethers.Contract(address, abi, (0, general_1.getProvider)(chain));
}
function info(tokenAddress, chain) {
    return __awaiter(this, void 0, void 0, function () {
        var contract, tokenSymbol, tokenDecimals;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    contract = getContract(tokenAddress, chain);
                    tokenSymbol = contract.symbol();
                    tokenDecimals = contract.decimals();
                    _a = {};
                    _b = {};
                    return [4 /*yield*/, tokenSymbol];
                case 1:
                    _b.symbol = _c.sent();
                    return [4 /*yield*/, tokenDecimals];
                case 2: return [2 /*return*/, (_a.output = (_b.decimals = _c.sent(),
                        _b),
                        _a)];
            }
        });
    });
}
exports.info = info;
function symbol(tokenAddress, chain) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = {};
                    return [4 /*yield*/, getContract(tokenAddress, chain).symbol()];
                case 1: return [2 /*return*/, (_a.output = _b.sent(),
                        _a)];
            }
        });
    });
}
exports.symbol = symbol;
function decimals(tokenAddress, chain) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = {};
                    return [4 /*yield*/, getContract(tokenAddress, chain).decimals()];
                case 1: return [2 /*return*/, (_a.output = _b.sent(),
                        _a)];
            }
        });
    });
}
exports.decimals = decimals;
function totalSupply(params) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var contract, supply;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    contract = getContract(params.target, params.chain);
                    return [4 /*yield*/, contract.totalSupply({
                            blockTag: (_a = params.block) !== null && _a !== void 0 ? _a : "latest",
                        })];
                case 1:
                    supply = _b.sent();
                    return [2 /*return*/, {
                            output: (0, general_1.handleDecimals)(supply, params.decimals),
                        }];
            }
        });
    });
}
exports.totalSupply = totalSupply;
function balanceOf(params) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var balance;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getContract(params.target, params.chain).balanceOf(params.owner, {
                        blockTag: (_a = params.block) !== null && _a !== void 0 ? _a : "latest",
                    })];
                case 1:
                    balance = _b.sent();
                    return [2 /*return*/, {
                            output: (0, general_1.handleDecimals)(balance, params.decimals),
                        }];
            }
        });
    });
}
exports.balanceOf = balanceOf;

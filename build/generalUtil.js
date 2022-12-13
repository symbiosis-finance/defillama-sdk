"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.humanizeNumber = exports.blocks = exports.sumChainTvls = exports.mergeBalances = exports.sumSingleBalance = exports.sumMultiBalanceOf = void 0;
var ethers_1 = require("ethers");
var blocks = __importStar(require("./computeTVL/blocks"));
exports.blocks = blocks;
var humanizeNumber = __importStar(require("./computeTVL/humanizeNumber"));
exports.humanizeNumber = humanizeNumber;
// We ignore `sum` as it's never used (only in some SDK wrapper code)
function sumMultiBalanceOf(balances, results, allCallsMustBeSuccessful, transformAddress) {
    if (allCallsMustBeSuccessful === void 0) { allCallsMustBeSuccessful = true; }
    if (transformAddress === void 0) { transformAddress = function (addr) { return addr; }; }
    results.output.map(function (result) {
        var _a;
        if (result.success) {
            var address = transformAddress(result.input.target);
            var balance = result.output;
            if (ethers_1.BigNumber.from(balance).lte(0)) {
                return;
            }
            balances[address] = ethers_1.BigNumber.from((_a = balances[address]) !== null && _a !== void 0 ? _a : 0)
                .add(balance)
                .toString();
        }
        else if (allCallsMustBeSuccessful) {
            console.error(result);
            throw new Error("balanceOf multicall failed");
        }
    });
}
exports.sumMultiBalanceOf = sumMultiBalanceOf;
function sumSingleBalance(balances, token, balance, chain) {
    isValidNumber(balance);
    if (+balance === 0)
        return;
    if (chain)
        token = "".concat(chain, ":").concat(token);
    if (typeof balance === 'object') {
        if (typeof balance.toString === 'function')
            balance = balance.toString();
        else
            throw new Error('Invalid balance value:' + balance);
    }
    if (typeof balance === 'number' || (balances[token] && typeof balances[token] === 'number')) {
        var prevBalance = +(balances.hasOwnProperty(token) ? balances[token] : 0);
        if (typeof prevBalance !== 'number' || isNaN(prevBalance))
            throw new Error("Trying to merge token balance and coingecko amount for ".concat(token, " current balance: ").concat(balance, " previous balance: ").concat(balances[token]));
        var value = prevBalance + +balance;
        isValidNumber(value);
        balances[token] = value;
    }
    else {
        var prevBalance = ethers_1.BigNumber.from(balances.hasOwnProperty(token) ? balances[token] : '0');
        var value = prevBalance.add(ethers_1.BigNumber.from(balance)).toString();
        isValidNumber(+value);
        balances[token] = value;
    }
    function isValidNumber(value) {
        if ([null, undefined].includes(value) || isNaN(+value))
            throw new Error("Invalid balance: ".concat(balance));
    }
}
exports.sumSingleBalance = sumSingleBalance;
function mergeBalances(balances, balancesToMerge) {
    Object.entries(balancesToMerge).forEach(function (balance) {
        sumSingleBalance(balances, balance[0], balance[1]);
    });
}
exports.mergeBalances = mergeBalances;
function sumChainTvls(chainTvls) {
    var _this = this;
    return function (timestamp, ethBlock, chainBlocks) { return __awaiter(_this, void 0, void 0, function () {
        var balances;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    balances = {};
                    return [4 /*yield*/, Promise.all(chainTvls.map(function (chainTvl) { return __awaiter(_this, void 0, void 0, function () {
                            var chainBalances;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, chainTvl(timestamp, ethBlock, chainBlocks)];
                                    case 1:
                                        chainBalances = _a.sent();
                                        mergeBalances(balances, chainBalances);
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, balances];
            }
        });
    }); };
}
exports.sumChainTvls = sumChainTvls;

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
exports.getBlock = exports.getCurrentBlocks = exports.getBlocks = exports.getChainBlocks = exports.chainsForBlocks = void 0;
var general_1 = require("../general");
var index_1 = require("../util/index");
exports.chainsForBlocks = ["avax", "bsc", "polygon", "xdai", "fantom", "arbitrum"];
var blockRetries = 5;
function getChainBlocks(timestamp, chains) {
    if (chains === void 0) { chains = exports.chainsForBlocks; }
    return __awaiter(this, void 0, void 0, function () {
        var chainBlocks, setBlock;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chainBlocks = {};
                    setBlock = function (chain) { return __awaiter(_this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _a = chainBlocks;
                                _b = chain;
                                return [4 /*yield*/, getBlock(chain, timestamp)];
                            case 1: return [2 /*return*/, _a[_b] = (_c.sent()).block];
                        }
                    }); }); };
                    return [4 /*yield*/, Promise.all(chains.map(setBlock))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, chainBlocks];
            }
        });
    });
}
exports.getChainBlocks = getChainBlocks;
function getBlocks(timestamp, chains) {
    if (chains === void 0) { chains = undefined; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, ethBlock, chainBlocks;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    chains = chains === null || chains === void 0 ? void 0 : chains.filter(function (i) { return i !== 'ethereum'; });
                    return [4 /*yield*/, Promise.all([getBlock('ethereum', timestamp), getChainBlocks(timestamp, chains)])];
                case 1:
                    _a = _b.sent(), ethBlock = _a[0], chainBlocks = _a[1];
                    chainBlocks['ethereum'] = ethBlock.block;
                    return [2 /*return*/, {
                            ethereumBlock: ethBlock.block,
                            chainBlocks: chainBlocks,
                        }];
            }
        });
    });
}
exports.getBlocks = getBlocks;
function getCurrentBlocks(chains) {
    if (chains === void 0) { chains = undefined; }
    return __awaiter(this, void 0, void 0, function () {
        var block, chainBlocks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (chains)
                        chains = chains.filter(function (i) { return i !== "ethereum"; });
                    return [4 /*yield*/, getBlock('ethereum')];
                case 1:
                    block = _a.sent();
                    return [4 /*yield*/, getChainBlocks(block.timestamp, chains)];
                case 2:
                    chainBlocks = _a.sent();
                    chainBlocks['ethereum'] = block.number;
                    return [2 /*return*/, {
                            timestamp: block.timestamp,
                            ethereumBlock: block.number,
                            chainBlocks: chainBlocks,
                        }];
            }
        });
    });
}
exports.getCurrentBlocks = getCurrentBlocks;
var blockCache = {
    current: {}
};
function getBlock(chain, timestamp) {
    if (timestamp === void 0) { timestamp = undefined; }
    return __awaiter(this, void 0, void 0, function () {
        function getCurrentEthBlock() {
            return __awaiter(this, void 0, void 0, function () {
                var provider, lastBlockNumber;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            provider = (0, general_1.getProvider)("ethereum");
                            return [4 /*yield*/, provider.getBlockNumber()];
                        case 1:
                            lastBlockNumber = _a.sent();
                            return [2 /*return*/, provider.getBlock(lastBlockNumber - 5)]; // To allow indexers to catch up
                    }
                });
            });
        }
        function _getBlock() {
            return __awaiter(this, void 0, void 0, function () {
                var i, block, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < blockRetries)) return [3 /*break*/, 6];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, (0, index_1.lookupBlock)(timestamp, { chain: chain, })];
                        case 3:
                            block = _a.sent();
                            return [2 /*return*/, block];
                        case 4:
                            e_1 = _a.sent();
                            if (i === blockRetries - 1) {
                                throw e_1;
                            }
                            return [3 /*break*/, 5];
                        case 5:
                            i++;
                            return [3 /*break*/, 1];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_a) {
            if (!timestamp) {
                if (chain !== 'ethereum')
                    throw new Error('Timestamp  is missing!!!');
                if (!blockCache.current)
                    blockCache.current = {};
                if (!blockCache.current.ethereum) {
                    blockCache.current.ethereum = getCurrentEthBlock();
                }
                return [2 /*return*/, blockCache.current.ethereum];
            }
            if (!blockCache[timestamp])
                blockCache[timestamp] = {};
            if (!blockCache[timestamp][chain])
                blockCache[timestamp][chain] = _getBlock();
            return [2 /*return*/, blockCache[timestamp][chain]];
        });
    });
}
exports.getBlock = getBlock;

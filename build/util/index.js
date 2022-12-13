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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeBalances = exports.normalizePrefixes = exports.normalizeAddress = exports.getLogs = exports.lookupBlock = exports.getLatestBlock = exports.sliceIntoChunks = exports.runInPromisePool = void 0;
var general_1 = require("../general");
var node_fetch_1 = __importDefault(require("node-fetch"));
var ethers_1 = require("ethers");
var generalUtil_1 = require("../generalUtil");
var debugLog_1 = require("./debugLog");
var promisePool_1 = __importDefault(require("./promisePool"));
exports.runInPromisePool = promisePool_1.default;
function sliceIntoChunks(arr, chunkSize) {
    if (chunkSize === void 0) { chunkSize = 100; }
    var res = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
        var chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
exports.sliceIntoChunks = sliceIntoChunks;
var kavaBlockProvider = {
    getBlock: function (height) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, node_fetch_1.default)("https://api.data.kava.io/blocks/".concat(height))
                    .then(function (res) { return res.json(); })
                    .then(function (block) { return ({
                    number: Number(block.block.header.height),
                    timestamp: Math.round(Date.parse(block.block.header.time) / 1000)
                }); })];
        });
    }); }
};
var terraBlockProvider = {
    getBlock: function (height) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, node_fetch_1.default)("https://lcd.terra.dev/blocks/".concat(height))
                    .then(function (res) { return res.json(); })
                    .then(function (block) { return ({
                    number: Number(block.block.header.height),
                    timestamp: Math.round(Date.parse(block.block.header.time) / 1000),
                }); })];
        });
    }); }
};
var algorandBlockProvider = {
    getBlock: function (height) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (height !== 'latest')
                return [2 /*return*/, (0, node_fetch_1.default)("https://algoindexer.algoexplorerapi.io/v2/blocks/".concat(height))
                        .then(function (res) { return res.json(); })
                        .then(function (block) { return ({
                        number: block.round,
                        timestamp: block.timestamp
                    }); })];
            return [2 /*return*/, (0, node_fetch_1.default)('https://algoindexer.algoexplorerapi.io/health')
                    .then(function (res) { return res.json(); })
                    .then(function (block) { return algorandBlockProvider.getBlock(block.round); })];
        });
    }); }
};
function getBlock(provider, height, chain) {
    return __awaiter(this, void 0, void 0, function () {
        var block;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.getBlock(height)];
                case 1:
                    block = _a.sent();
                    if (block === null) {
                        throw new Error("Can't get block of chain ".concat(chain !== null && chain !== void 0 ? chain : "ethereum"));
                    }
                    return [2 /*return*/, block];
            }
        });
    });
}
function getExtraProvider(chain) {
    if (chain === "terra") {
        return terraBlockProvider;
    }
    else if (chain === "kava") {
        return kavaBlockProvider;
    }
    else if (chain === "algorand") {
        return algorandBlockProvider;
    }
    return (0, general_1.getProvider)(chain);
}
function getLatestBlock(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var provider;
        return __generator(this, function (_a) {
            provider = getExtraProvider(chain);
            return [2 /*return*/, getBlock(provider, "latest", chain)];
        });
    });
}
exports.getLatestBlock = getLatestBlock;
var intialBlocks = {
    terra: 4724001,
    crab: 4969901
};
function lookupBlock(timestamp, extraParams) {
    var _a, _b, _c;
    if (extraParams === void 0) { extraParams = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var chain, low, lowBlock, highBlock, provider, _d, lastBlock, firstBlock, block, i, time, allowedTimeRange, acceptableBlockImprecision, blockImprecision, imprecision, getPrecision_1, blockDiff, timeDiff, avgBlockTime, closeBlock, midBlock, blocks, e_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    chain = (_a = extraParams === null || extraParams === void 0 ? void 0 : extraParams.chain) !== null && _a !== void 0 ? _a : "ethereum";
                    low = (_b = intialBlocks[chain]) !== null && _b !== void 0 ? _b : 100;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 7, , 8]);
                    provider = getExtraProvider(chain);
                    return [4 /*yield*/, Promise.all([
                            getBlock(provider, "latest", chain),
                            getBlock(provider, low, chain),
                        ])];
                case 2:
                    _d = _e.sent(), lastBlock = _d[0], firstBlock = _d[1];
                    lowBlock = firstBlock;
                    highBlock = lastBlock;
                    if (lastBlock.timestamp - timestamp < -30 * 60) {
                        throw new Error("Last block of chain \"".concat(chain, "\" is further than 30 minutes into the past. Provider is \"").concat((_c = provider === null || provider === void 0 ? void 0 : provider.connection) === null || _c === void 0 ? void 0 : _c.url, "\""));
                    }
                    if (Math.abs(lastBlock.timestamp - timestamp) < 60) {
                        // Short-circuit in case we are trying to get the current block
                        return [2 /*return*/, {
                                block: lastBlock.number,
                                timestamp: lastBlock.timestamp
                            }];
                    }
                    block = void 0;
                    i = 0;
                    time = Date.now();
                    allowedTimeRange = 15 * 60 // how much imprecision is allowed (15 minutes now)
                    ;
                    acceptableBlockImprecision = chain === 'ethereum' ? 20 : 200;
                    blockImprecision = void 0;
                    imprecision = void 0;
                    getPrecision_1 = function (block) { return block.timestamp - timestamp > 0 ? block.timestamp - timestamp : timestamp - block.timestamp; };
                    _e.label = 3;
                case 3:
                    ++i;
                    blockDiff = highBlock.number - lowBlock.number;
                    timeDiff = highBlock.timestamp - lowBlock.timestamp;
                    avgBlockTime = timeDiff / blockDiff;
                    closeBlock = Math.floor(lowBlock.number + (timestamp - lowBlock.timestamp) / avgBlockTime);
                    midBlock = Math.floor((lowBlock.number + highBlock.number) / 2);
                    return [4 /*yield*/, Promise.all([
                            getBlock(provider, closeBlock, chain),
                            getBlock(provider, midBlock, chain),
                        ])];
                case 4:
                    blocks = _e.sent();
                    blocks.push(highBlock, lowBlock);
                    blocks.sort(function (a, b) { return getPrecision_1(a) - getPrecision_1(b); });
                    block = blocks[0];
                    // find the closest upper and lower bound between 4 points
                    lowBlock = blocks.filter(function (i) { return i.timestamp < timestamp; }).reduce(function (lowestBlock, block) { return (timestamp - lowestBlock.timestamp) < (timestamp - block.timestamp) ? lowestBlock : block; });
                    highBlock = blocks.filter(function (i) { return i.timestamp > timestamp; }).reduce(function (highestBlock, block) { return (highestBlock.timestamp - timestamp) < (block.timestamp - timestamp) ? highestBlock : block; });
                    imprecision = getPrecision_1(block);
                    blockImprecision = highBlock.number - lowBlock.number;
                    _e.label = 5;
                case 5:
                    if (imprecision > allowedTimeRange && blockImprecision > acceptableBlockImprecision) return [3 /*break*/, 3];
                    _e.label = 6;
                case 6:
                    (0, debugLog_1.debugLog)("chain: ".concat(chain, " block: ").concat(block.number, " #calls: ").concat(i, " imprecision: ").concat(Number((imprecision) / 60).toFixed(2), " (min) Time Taken: ").concat(Number((Date.now() - time) / 1000).toFixed(2), " (in sec)"));
                    if (chain !== "bsc" && // this check is there because bsc halted the chain for few days
                        Math.abs(block.timestamp - timestamp) > 3600) {
                        throw new Error("Block selected is more than 1 hour away from the requested timestamp");
                    }
                    return [2 /*return*/, {
                            block: block.number,
                            timestamp: block.timestamp
                        }];
                case 7:
                    e_1 = _e.sent();
                    console.log(e_1);
                    throw new Error("Couldn't find block height for chain ".concat(chain, ", RPC node rugged"));
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.lookupBlock = lookupBlock;
// SMALL INCOMPATIBILITY: On the old API we don't return ids but we should
function getLogs(params) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var filter, logs, blockSpread, currentBlock, nextBlock, partLogs, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (params.toBlock === undefined || params.fromBlock === undefined) {
                        throw new Error("toBlock and fromBlock need to be defined in all calls to getLogs");
                    }
                    filter = {
                        address: params.target,
                        topics: (_a = params.topics) !== null && _a !== void 0 ? _a : [ethers_1.utils.id(params.topic)],
                        fromBlock: params.fromBlock,
                        toBlock: params.toBlock // We don't replicate Defipulse's bug because the results end up being the same anyway and hopefully they'll eventually fix it
                    };
                    logs = [];
                    blockSpread = params.toBlock - params.fromBlock;
                    currentBlock = params.fromBlock;
                    _b.label = 1;
                case 1:
                    if (!(currentBlock < params.toBlock)) return [3 /*break*/, 6];
                    nextBlock = Math.min(params.toBlock, currentBlock + blockSpread);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, (0, general_1.getProvider)(params.chain).getLogs(__assign(__assign({}, filter), { fromBlock: currentBlock, toBlock: nextBlock }))];
                case 3:
                    partLogs = _b.sent();
                    logs = logs.concat(partLogs);
                    currentBlock = nextBlock;
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _b.sent();
                    if (blockSpread >= 2e3) {
                        // We got too many results
                        // We could chop it up into 2K block spreads as that is guaranteed to always return but then we'll have to make a lot of queries (easily >1000), so instead we'll keep dividing the block spread by two until we make it
                        blockSpread = Math.floor(blockSpread / 2);
                    }
                    else {
                        throw e_2;
                    }
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 1];
                case 6:
                    if (params.keys.length > 0) {
                        if (params.keys[0] !== "topics") {
                            throw new Error("Unsupported");
                        }
                        return [2 /*return*/, {
                                output: logs.map(function (log) { return log.topics; })
                            }];
                    }
                    return [2 /*return*/, {
                            output: logs
                        }];
            }
        });
    });
}
exports.getLogs = getLogs;
function normalizeAddress(address) {
    // sol amd tezos case sensitive so no normalising
    var prefix = address.substring(0, address.indexOf(":"));
    if (["solana", "tezos"].includes(prefix))
        return address;
    return address.toLowerCase();
}
exports.normalizeAddress = normalizeAddress;
function normalizePrefixes(address) {
    var prefix = address.substring(0, address.indexOf(":"));
    if (["solana", "tezos"].includes(prefix))
        return address;
    return address.startsWith("0x")
        ? "ethereum:".concat(address.toLowerCase())
        : !address.includes(":")
            ? "coingecko:".concat(address.toLowerCase())
            : address.toLowerCase();
}
exports.normalizePrefixes = normalizePrefixes;
var ethereumAddress = "ethereum:0x0000000000000000000000000000000000000000";
var weth = "ethereum:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
function normalizeBalances(balances) {
    var _a;
    Object.keys(balances).map(function (key) {
        if (+balances[key] === 0) {
            delete balances[key];
            return;
        }
        var normalisedKey = normalizePrefixes(key);
        if (normalisedKey == key)
            return;
        (0, generalUtil_1.sumSingleBalance)(balances, normalisedKey, balances[key]);
        delete balances[key];
    });
    var eth = balances[ethereumAddress];
    if (eth !== undefined) {
        balances[weth] = ethers_1.BigNumber.from((_a = balances[weth]) !== null && _a !== void 0 ? _a : 0).add(eth).toString();
        delete balances[ethereumAddress];
    }
    return balances;
}
exports.normalizeBalances = normalizeBalances;

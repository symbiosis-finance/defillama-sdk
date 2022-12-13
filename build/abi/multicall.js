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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkSupportsMulticall = exports.AGGREGATE_SELECTOR = exports.MULTICALL_ADDRESS_OPTIMISM = exports.MULTICALL_ADDRESS_AURORA = exports.MULTICALL_ADDRESS_MOONRIVER = exports.MULTICALL_ADDRESS_AVAX = exports.MULTICALL_ADDRESS_ARBITRUM = exports.MULTICALL_ADDRESS_HARMONY = exports.MULTICALL_ADDRESS_HECO = exports.MULTICALL_ADDRESS_XDAI = exports.MULTICALL_ADDRESS_FANTOM = exports.MULTICALL_ADDRESS_BSC = exports.MULTICALL_ADDRESS_POLYGON = exports.MULTICALL_ADDRESS_GOERLI = exports.MULTICALL_ADDRESS_RINKEBY = exports.MULTICALL_ADDRESS_KOVAN = exports.MULTICALL_ADDRESS_MAINNET = void 0;
var ethers_1 = require("ethers");
var utils_1 = require("ethers/lib/utils");
var general_1 = require("../general");
var convertResults_1 = __importDefault(require("./convertResults"));
var rpcCall_1 = require("./rpcCall");
var debugLog_1 = require("../util/debugLog");
var util_1 = require("../util");
exports.MULTICALL_ADDRESS_MAINNET = "0xeefba1e63905ef1d7acba5a8513c70307c1ce441";
exports.MULTICALL_ADDRESS_KOVAN = "0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a";
exports.MULTICALL_ADDRESS_RINKEBY = "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821";
exports.MULTICALL_ADDRESS_GOERLI = "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e";
exports.MULTICALL_ADDRESS_POLYGON = "0x95028E5B8a734bb7E2071F96De89BABe75be9C8E";
exports.MULTICALL_ADDRESS_BSC = "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb";
exports.MULTICALL_ADDRESS_FANTOM = "0xb828C456600857abd4ed6C32FAcc607bD0464F4F";
exports.MULTICALL_ADDRESS_XDAI = "0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a";
exports.MULTICALL_ADDRESS_HECO = "0xc9a9F768ebD123A00B52e7A0E590df2e9E998707";
exports.MULTICALL_ADDRESS_HARMONY = "0xFE4980f62D708c2A84D3929859Ea226340759320";
exports.MULTICALL_ADDRESS_ARBITRUM = "0x842eC2c7D803033Edf55E478F461FC547Bc54EB2";
exports.MULTICALL_ADDRESS_AVAX = "0xdf2122931FEb939FB8Cf4e67Ea752D1125e18858";
exports.MULTICALL_ADDRESS_MOONRIVER = "0xe05349d6fE12602F6084550995B247a5C80C0E2C";
exports.MULTICALL_ADDRESS_AURORA = "0xe0e3887b158F7F9c80c835a61ED809389BC08d1b";
exports.MULTICALL_ADDRESS_OPTIMISM = "0xD0E99f15B24F265074747B2A1444eB02b9E30422";
exports.AGGREGATE_SELECTOR = "0x252dba42";
function makeMultiCall(functionABI, calls, chain, block) {
    return __awaiter(this, void 0, void 0, function () {
        var contractInterface, fd, contractCalls, returnValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contractInterface = new ethers_1.ethers.utils.Interface([functionABI]);
                    fd = Object.values(contractInterface.functions)[0];
                    contractCalls = calls.map(function (call) {
                        var data = contractInterface.encodeFunctionData(fd, call.params);
                        return {
                            to: call.contract,
                            data: data,
                        };
                    });
                    return [4 /*yield*/, executeCalls(contractCalls, chain, block)];
                case 1:
                    returnValues = _a.sent();
                    return [2 /*return*/, returnValues.map(function (values, index) {
                            var output;
                            try {
                                output = (0, convertResults_1.default)(contractInterface.decodeFunctionResult(fd, values));
                            }
                            catch (e) {
                                output = null;
                            }
                            return {
                                input: {
                                    params: calls[index].params,
                                    target: calls[index].contract,
                                },
                                success: output !== null,
                                output: output,
                            };
                        })];
            }
        });
    });
}
exports.default = makeMultiCall;
function executeCalls(contractCalls, chain, block) {
    return __awaiter(this, void 0, void 0, function () {
        var multicallData, address, callData, tx, returnData, _a, blockNumber, returnValues, e_1, chunkSize, chunks, response;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!networkSupportsMulticall(chain)) return [3 /*break*/, 7];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 7]);
                    multicallData = ethers_1.ethers.utils.defaultAbiCoder.encode([
                        utils_1.ParamType.fromObject({
                            components: [
                                { name: "target", type: "address" },
                                { name: "callData", type: "bytes" },
                            ],
                            name: "data",
                            type: "tuple[]",
                        }),
                    ], [contractCalls.map(function (call) { return [call.to, call.data]; })]);
                    return [4 /*yield*/, multicallAddressOrThrow(chain)];
                case 2:
                    address = _b.sent();
                    callData = exports.AGGREGATE_SELECTOR + multicallData.substr(2);
                    tx = {
                        to: address,
                        data: callData,
                    };
                    return [4 /*yield*/, (0, rpcCall_1.call)((0, general_1.getProvider)(chain), tx, block !== null && block !== void 0 ? block : "latest", chain)];
                case 3:
                    returnData = _b.sent();
                    _a = ethers_1.ethers.utils.defaultAbiCoder.decode(["uint256", "bytes[]"], returnData), blockNumber = _a[0], returnValues = _a[1];
                    return [2 /*return*/, returnValues];
                case 4:
                    e_1 = _b.sent();
                    if (!(contractCalls.length > 10)) return [3 /*break*/, 6];
                    chunkSize = Math.ceil(contractCalls.length / 5);
                    chunks = (0, util_1.sliceIntoChunks)(contractCalls, chunkSize);
                    (0, debugLog_1.debugLog)("Multicall failed, call size: ".concat(contractCalls.length, ", splitting into smaller chunks and trying again, new call size: ").concat(chunks[0].length));
                    return [4 /*yield*/, (0, util_1.runInPromisePool)({
                            items: chunks,
                            concurrency: 2,
                            processor: function (calls) { return executeCalls(calls, chain, block); }
                        })];
                case 5:
                    response = _b.sent();
                    return [2 /*return*/, response.flat()];
                case 6:
                    (0, debugLog_1.debugLog)("Multicall failed, defaulting to single transactions...");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, (0, util_1.runInPromisePool)({
                        items: contractCalls,
                        concurrency: networkSupportsMulticall(chain) ? 2 : 10,
                        processor: function (_a) {
                            var to = _a.to, data = _a.data;
                            return __awaiter(_this, void 0, void 0, function () {
                                var result, e_2;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            result = null;
                                            _b.label = 1;
                                        case 1:
                                            _b.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, (0, rpcCall_1.call)((0, general_1.getProvider)(chain), { to: to, data: data }, block !== null && block !== void 0 ? block : "latest", chain)];
                                        case 2:
                                            result = _b.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_2 = _b.sent();
                                            (0, debugLog_1.debugLog)(e_2);
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/, result];
                                    }
                                });
                            });
                        }
                    })];
            }
        });
    });
}
function multicallAddressOrThrow(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var network, address, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, general_1.getProvider)(chain).getNetwork()];
                case 1:
                    network = _a.sent();
                    address = multicallAddress(network.chainId);
                    if (address === null) {
                        msg = "multicall is not available on the network ".concat(network.chainId);
                        console.error(msg);
                        throw new Error(msg);
                    }
                    return [2 /*return*/, address];
            }
        });
    });
}
function networkSupportsMulticall(chain) {
    var network = (0, general_1.getProvider)(chain).network;
    var address = multicallAddress(network.chainId);
    return address !== null;
}
exports.networkSupportsMulticall = networkSupportsMulticall;
function multicallAddress(chainId) {
    switch (chainId) {
        case 1:
        case 10001:
            return exports.MULTICALL_ADDRESS_MAINNET;
        case 42:
            return exports.MULTICALL_ADDRESS_KOVAN;
        case 4:
            return exports.MULTICALL_ADDRESS_RINKEBY;
        case 5:
            return exports.MULTICALL_ADDRESS_GOERLI;
        case 137:
            return exports.MULTICALL_ADDRESS_POLYGON;
        case 56:
            return exports.MULTICALL_ADDRESS_BSC;
        case 250:
            return exports.MULTICALL_ADDRESS_FANTOM;
        case 100:
            return exports.MULTICALL_ADDRESS_XDAI;
        case 128:
            return exports.MULTICALL_ADDRESS_HECO;
        case 1666600000:
            return exports.MULTICALL_ADDRESS_HARMONY;
        case 42161:
            return exports.MULTICALL_ADDRESS_ARBITRUM;
        case 43114:
            return exports.MULTICALL_ADDRESS_AVAX;
        case 1285:
            return exports.MULTICALL_ADDRESS_MOONRIVER;
        case 1313161554:
            return exports.MULTICALL_ADDRESS_AURORA;
        case 10:
            return exports.MULTICALL_ADDRESS_OPTIMISM;
        case 25:
            return "0x5e954f5972EC6BFc7dECd75779F10d848230345F"; // cronos
        case 288:
            return "0x80Ae459D058436ecB4e043ac48cfd209B578CBF0"; // boba
        case 43288:
            return "0x92C5b5B66988E6B8931a8CD3faa418b42003DF2F"; // boba
        case 56288:
            return "0x31cCe73DA4365342bd081F6a748AAdb7c7a49b7E"; // boba
        case 4689:
            return "0x5a6787fc349665c5b0c4b93126a0b62f14935731"; // iotex
        case 82:
            return "0x59177c9e5d0488e21355816094a047bdf8f14ebe"; // meter
        case 11297108109:
            return "0xfFE2FF36c5b8D948f788a34f867784828aa7415D"; // palm
        case 416:
            return "0x834a005DDCF990Ba1a79f259e840e58F2D14F49a"; // sx
        case 246: // energy web chain
        case 336: // shiden
        case 592: // astar
        case 269: // High performance blockchain
        case 321: // KCC
        case 20: // elastos
        // case 8217: // Klaytn - multicall doesnt work for some reason
        // case 88: // tomochain - multicall doesnt work for some reason
        case 122: // Fuse
        case 42220: // Celo
        case 42262: // ROSE
        case 39797: // energi
        case 1284: // moonbeam
        case 30: // rsk
        case 1088: // metis
        case 10000: // smartbch
        case 2001: // Milkomeda C1
        case 9001: // evmos
        case 106: // velas
        case 888: // wanchain
        case 24: // kardia
        case 108: // thundercore
        case 361: // Theta
        case 57: // Syscoin
        case 61: // etc
        case 70: // hoo
        case 61: // etc
        case 60: // go
        case 66: // okxchain
        case 19: // songbird
        case 1030: // conflux
        case 333999: // polis
        case 7700: // canto
        case 62621: // multivac
        case 900000: // posi
        case 1231: // ultron
        case 2152: // findora
        case 50: // xdc
        case 52: // csc
            return "0x18fA376d92511Dd04090566AB6144847c03557d8";
        case 2222:
            return "0x30A62aA52Fa099C4B227869EB6aeaDEda054d121"; // kava
        case 47805:
            return "0x9eE9904815B80C39C1a27294E69a8626EAa7952d"; // rei network
        case 87:
            return "0x7A5a7579eb8DdEd352848cFDD0a5530C4e56FF7f"; // nova
        case 32520:
            return "0x5AE90c229d7A8AFc12bFa263AC672548aEb1D765"; // bitgert/brise
        case 820: // callisto
        case 199: // bittorrent
            return "0xB2fB6dA40DF36CcFFDc3B0F99df4871C7b86FCe7";
        case 2000: // dogechain
            return "0x8856C24Ba82F737CFb99Ec4785CEe4d48A842F33";
        // case 71394: // Godwoken v0 chain
        // return "0x285aF41aC18BA105407555f49c59c58574b8e284"
        case 71402: // Godwoken v1 chain
        case 8217: // Klaytn - multicall doesnt work for some reason
            // https://github.com/mds1/multicall
            return "0xcA11bde05977b3631167028862bE2a173976CA11";
        case 96: // bitkub chain
            return "0xcc515Aa7eE9Be4491c98DE68ee2147F0A063759D";
        case 42170: // arbitrum nova chain
            return "0x2fe78f55c39dc437c4c025f8a1ffc54edb4a34c3";
        case 55555: // reichain
            return "0x5CCBA81867AE1F9d470a9514fb9B175E84D47979";
        case 530: // functionx
            return "0xC43a7181654639556e4caca1bf9219C14a106401";
        case 1818: // cube
            return "0x28d2ebdb36369db1c51355cdc0898754d1a1c3c5";
        case 1234:
            return "0x176CcFFbAB792Aaa0da7C430FE20a7106d969f66";
        case 53935: // dfk
            return "0x5b24224dC16508DAD755756639E420817DD4c99E";
        case 3000: // echelon
            return "0xe6d0cEE385992029Cb64C94A2dF6d0331937B2C8";
        case 55: // zyx
            return "0xd0dd5446f58D6f4F4A669f289E4268c1b12AEc31";
        case 420420: // kekchain
            return "0x781bB181833986C78238228F9AF0891829AF922B";
        case 2002: // milkomeda_a1
            return "0x61EEE5a6c13c358101487f3b7c7Dd9863590C350";
        case 20402: // muuchain
            return "0xF8D7509aD8570b16dAd163A3841684f660fD9242";
        default:
            return null;
    }
}

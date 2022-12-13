import { Chain } from "../general";
import type { Address } from "../types";
import type { Log } from "@ethersproject/abstract-provider";
import runInPromisePoolOrig from "./promisePool";
export declare const runInPromisePool: typeof runInPromisePoolOrig;
export declare function sliceIntoChunks(arr: any[], chunkSize?: number): any[][];
interface TimestampBlock {
    number: number;
    timestamp: number;
}
export declare function getLatestBlock(chain: string): Promise<TimestampBlock>;
export declare function lookupBlock(timestamp: number, extraParams?: {
    chain?: Chain | "terra" | "kava" | "algorand";
}): Promise<{
    block: number;
    timestamp: number;
}>;
export declare function getLogs(params: {
    target: Address;
    topic: string;
    keys: string[];
    fromBlock: number;
    toBlock: number;
    topics?: string[];
    chain?: Chain;
}): Promise<{
    output: string[][];
} | {
    output: Log[];
}>;
export declare function normalizeAddress(address: string): string;
export declare function normalizePrefixes(address: string): string;
export declare function normalizeBalances(balances: {
    [address: string]: string;
}): {
    [address: string]: string;
};
export {};

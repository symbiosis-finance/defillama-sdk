import { BigNumber } from "ethers";
import * as blocks from "./computeTVL/blocks";
import * as humanizeNumber from "./computeTVL/humanizeNumber";
import type { Balances, StringNumber, Address } from "./types";
export declare function sumMultiBalanceOf(balances: Balances, results: {
    ethCallCount?: number;
    output: {
        output: StringNumber;
        success: boolean;
        input: {
            target: Address;
            params: string[];
        };
    }[];
}, allCallsMustBeSuccessful?: boolean, transformAddress?: (addr: string) => string): void;
export declare function sumSingleBalance(balances: Balances, token: string, balance: string | number | BigNumber, chain?: string): void;
export declare function mergeBalances(balances: Balances, balancesToMerge: Balances): void;
type ChainBlocks = {
    [chain: string]: number;
};
export declare function sumChainTvls(chainTvls: Array<(timestamp: number, ethBlock: number, chainBlocks: ChainBlocks) => Promise<Balances>>): (timestamp: number, ethBlock: number, chainBlocks: ChainBlocks) => Promise<{}>;
export { blocks, humanizeNumber, };

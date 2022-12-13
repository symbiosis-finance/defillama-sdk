import type { Chain } from "../general";
export declare const chainsForBlocks: Chain[];
export declare function getChainBlocks(timestamp: number, chains?: Chain[]): Promise<{
    [chain: string]: number;
}>;
export declare function getBlocks(timestamp: number, chains?: Chain[] | undefined): Promise<{
    ethereumBlock: any;
    chainBlocks: {
        [chain: string]: number;
    };
}>;
export declare function getCurrentBlocks(chains?: Chain[] | undefined): Promise<{
    timestamp: number;
    ethereumBlock: number;
    chainBlocks: {
        [chain: string]: number;
    };
}>;
export declare function getBlock(chain: Chain, timestamp?: number | undefined): Promise<any>;

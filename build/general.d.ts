import { ethers, BigNumber } from "ethers";
export declare const providers: {
    [chain: string]: ethers.providers.BaseProvider;
};
export type Chain = "ethereum" | "bsc" | "polygon" | "heco" | "fantom" | "rsk" | "tomochain" | "xdai" | "avax" | "wan" | "iotex" | "harmony" | "thundercore" | "okexchain" | "optimism" | "arbitrum" | "kcc" | "celo" | "moonriver" | "shiden" | "palm" | "energyweb" | "energi" | "songbird" | "hpb" | "gochain" | "ethereumclassic" | "xdaiarb" | "kardia" | "fuse" | "smartbch" | "elastos" | "hoo" | "fusion" | "aurora" | "ronin" | "boba" | "boba_avax" | "boba_bnb" | "cronos" | "polis" | "zyx" | "telos" | "metis" | "ubiq" | "velas" | "callisto" | "csc" | "nahmii" | "liquidchain" | "meter" | "theta" | "oasis" | "syscoin" | "moonbeam" | "curio" | "astar" | "godwoken" | "evmos" | "conflux" | "milkomeda" | "milkomeda_a1" | "dfk" | "bittorrent" | "findora" | "candle" | "lachain" | "reichain" | "rei" | "clv" | "echelon" | "multivac" | "sx" | "karura_evm" | "nova" | "ontology_evm" | "jfin" | "bitkub" | "bitgert" | "canto" | "dogechain" | "posi" | "arbitrum_nova" | "ultron" | "tombchain" | "vision" | "ethpow" | "functionx" | "cube" | "xdc" | "step" | "kekchain" | "muuchain";
export declare function getProvider(chain?: Chain): ethers.providers.BaseProvider;
export declare const TEN: ethers.BigNumber;
export declare function handleDecimals(num: BigNumber, decimals?: number): string;
export declare const ETHER_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare function setProvider(chain: Chain, provider: ethers.providers.BaseProvider): void;

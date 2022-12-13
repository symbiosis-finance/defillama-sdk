export * as util from "./util";
export * as eth from "./eth";
export * as erc20 from "./erc20";
export * as abi from "./abi";
import { setProvider, getProvider } from "./general";
declare const config: {
    setProvider: typeof setProvider;
    getProvider: typeof getProvider;
};
export { config };

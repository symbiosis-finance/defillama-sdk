import { Address } from "../types";
import { Chain } from "../general";
type CallParams = string | number | (string | number)[] | undefined;
type CallsParams = {
    target?: Address;
    params?: CallParams;
};
export declare function call(params: {
    target: Address;
    abi: string | any;
    block?: number;
    params?: CallParams;
    chain?: Chain;
    withMetadata?: boolean;
}): Promise<any>;
export declare function multiCall(params: {
    abi: string | any;
    calls: CallsParams[] | (string | number)[];
    block?: number;
    target?: Address;
    chain?: Chain;
    requery?: boolean;
    withMetadata?: boolean;
}): Promise<any[]>;
export declare function fetchList(params: {
    lengthAbi: string | any;
    itemAbi: string | any;
    block?: number;
    startFrom?: number;
    target: Address;
    chain?: Chain;
    withMetadata?: boolean;
}): Promise<any[]>;
export {};

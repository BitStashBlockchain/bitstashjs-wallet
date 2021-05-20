import RpcClient, { IConfig } from "bitstashd-rpc";
import { Network } from "./Network";
export default class BitstashRPC {
    rpc: RpcClient;
    constructor(config?: IConfig);
    generate(nblocks: number): Promise<any>;
}
export declare const rpcClient: BitstashRPC;
export declare function generateBlock(network: Network): Promise<void>;

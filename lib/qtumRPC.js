"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitstashd_rpc_1 = __importDefault(require("bitstashd-rpc"));
const Network_1 = require("./Network");
class BitstashRPC {
    constructor(config) {
        this.rpc = new bitstashd_rpc_1.default(config);
    }
    generate(nblocks) {
        return new Promise((resolve, reject) => {
            this.rpc.generate(1, (err, ret) => {
                if (err) {
                    reject(err);
                }
                resolve(ret);
            });
        });
    }
}
exports.default = BitstashRPC;
exports.rpcClient = new BitstashRPC({
    user: "bitstash",
    pass: "test",
    port: "18332",
    protocol: "http",
});
function generateBlock(network) {
    return __awaiter(this, void 0, void 0, function* () {
        // generate a block after creating contract
        if (network.info.name === Network_1.NetworkNames.REGTEST) {
            yield exports.rpcClient.generate(1);
        }
    });
}
exports.generateBlock = generateBlock;
//# sourceMappingURL=bitstashRPC.js.map
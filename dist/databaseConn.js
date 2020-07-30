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
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDatabaseConn = void 0;
const typeorm_1 = require("typeorm");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    // 環境毎に分けるとき
    //   let name = "default";
    //   if (process.env.NODE_ENV === "test") {
    //     name = process.env.NODE_ENV;
    //   }
    //   const connectionOptions = await getConnectionOptions(name);
    //   await createConnection({ ...connectionOptions, name: "default" });
    // sample
    const connectionOptions = yield typeorm_1.getConnectionOptions();
    yield typeorm_1.createConnection(connectionOptions);
});
exports.closeDatabaseConn = () => __awaiter(void 0, void 0, void 0, function* () {
    typeorm_1.getConnection().close();
});
//# sourceMappingURL=databaseConn.js.map
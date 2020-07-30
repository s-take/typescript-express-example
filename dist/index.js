"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
exports.default = server_1.default()
    .then(app => {
    console.log(`🚀 Server ready at localhost:3000`);
    return app;
})
    .catch(e => {
    console.log(e);
});
//# sourceMappingURL=index.js.map
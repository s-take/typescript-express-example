"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const PostGetAllAction_1 = require("./controller/PostGetAllAction");
const PostGetByIdAction_1 = require("./controller/PostGetByIdAction");
const PostSaveAction_1 = require("./controller/PostSaveAction");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: PostGetAllAction_1.postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: PostGetByIdAction_1.postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: PostSaveAction_1.postSaveAction
    }
];
//# sourceMappingURL=routes.js.map
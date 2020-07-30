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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postGetAllAction = void 0;
const Post_1 = __importDefault(require("../service/Post"));
/**
 * Loads all posts from the database.
 */
function postGetAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const postService = new Post_1.default();
            const posts = yield postService.getPostByAll();
            response.json(posts);
        }
        catch (error) {
            response.status(500).json(error.message);
        }
    });
}
exports.postGetAllAction = postGetAllAction;
//# sourceMappingURL=PostGetAllAction.js.map
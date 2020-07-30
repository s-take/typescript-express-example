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
const typeorm_1 = require("typeorm");
const Post_1 = __importDefault(require("../entity/Post"));
class PostService {
    getPostByAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // get a post repository to perform operations with post
            // const postRepository = getManager().getRepository(Post);
            // load a post by a given post id
            return yield typeorm_1.getManager().find(Post_1.default);
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // const postRepository = getManager().getRepository(Post);
            // return await postRepository.findOne(Post, {
            return yield typeorm_1.getManager().findOneOrFail(Post_1.default, {
                id,
            });
        });
    }
}
exports.default = PostService;
//# sourceMappingURL=Post.js.map
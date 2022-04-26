"use strict";
/**
 * repository層ではdtoを受け取ってDBに渡す役割を担う
 */
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
const MemoryDataBase_1 = __importDefault(require("./MemoryDataBase"));
const Post_1 = require("../../../domain/Post");
const IPostRepository_1 = require("../repository/post/IPostRepository");
const DTO_1 = require("../repository/post/DTO");
class PostRepositoryImpl extends IPostRepository_1.IPostRepository {
    constructor() {
        super();
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let postResult = MemoryDataBase_1.default.posts.filter((post) => post.id === id);
            if (postResult.length === 0) {
                return null;
            }
            const post = postResult[0];
            let userResult = MemoryDataBase_1.default.users.filter((user) => user.id === post.userId);
            if (userResult.length === 0) {
                return null;
            }
            const user = userResult[0];
            const postAndUserDTO = DTO_1.toPostAndUserDTO(post, user);
            return postAndUserDTO;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = MemoryDataBase_1.default.posts;
            const results = queryResults.map((post) => {
                const user = MemoryDataBase_1.default.users.find((user) => user.id === post.userId);
                const userName = user ? user.name : null; // optional型がほしい
                return { id: post.id, content: post.content, userName: userName };
            });
            return results;
        });
    }
    create(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const postIds = MemoryDataBase_1.default.posts.map((post) => post.id);
            const maxId = Math.max.apply(null, postIds);
            const newId = maxId + 1;
            const newPost = new Post_1.Post(newId, post.content, post.userId);
            MemoryDataBase_1.default.posts.push(newPost);
            let userResult = MemoryDataBase_1.default.users.filter((user) => user.id === newPost.userId);
            if (userResult.length === 0) {
                return null;
            }
            const user = userResult[0];
            return DTO_1.toPostAndUserDTO(newPost, user);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            MemoryDataBase_1.default.posts = MemoryDataBase_1.default.posts.filter((post) => {
                return post.id !== id;
            });
            return null;
        });
    }
}
exports.PostRepository = PostRepositoryImpl;
//# sourceMappingURL=PostRepositoryImpl.js.map
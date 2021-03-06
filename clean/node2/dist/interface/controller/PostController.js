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
const CreatePostRequest_1 = require("../request/post/CreatePostRequest");
const PostSerializer_1 = require("../serializer/PostSerializer");
const PostRepositoryImpl_1 = require("../database/MySQL/PostRepositoryImpl");
const post_1 = __importDefault(require("../../application/usecase/post"));
const Post_1 = require("../../domain/Post");
class PostController {
    constructor(dbConnection) {
        this.postSerializer = new PostSerializer_1.PostSerializer();
        this.postRepository = new PostRepositoryImpl_1.PostRepository(dbConnection);
    }
    findPost(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const useCase = new post_1.default.FindPostUseCase(this.postRepository);
                let result = yield useCase.getPost(id);
                return this.postSerializer.post(result);
            }
            catch (error) {
                return this.postSerializer.error(error);
            }
        });
    }
    findAllPost() {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new post_1.default.FindPostUseCase(this.postRepository);
            let result = yield useCase.getAllPosts();
            return this.postSerializer.posts(result);
        });
    }
    createPost(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = new CreatePostRequest_1.CreatePostRequest(req.body);
                const useCase = new post_1.default.CreatePostUseCase(this.postRepository);
                const post = new Post_1.Post(null, params.content, params.userId);
                let result = yield useCase.createPost(post);
                return this.postSerializer.createPost(result);
            }
            catch (error) {
                return this.postSerializer.error(error);
            }
        });
    }
    deletePost(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const useCase = new post_1.default.DeletePostUseCase(this.postRepository);
                yield useCase.deletePost(id);
                return this.postSerializer.delete();
            }
            catch (error) {
                return this.postSerializer.error(error);
            }
        });
    }
}
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("../post"));
const PostRepositoryImpl_1 = require("../../../interface/database/MySQL/PostRepositoryImpl");
const MysqlConnection_1 = require("../../../infrastructure/MysqlConnection");
const Post_1 = require("../../../domain/Post");
jest.mock('../../../interface/database/MySQL/PostRepositoryImpl');
const con = new MysqlConnection_1.MysqlConnection();
const repository = new PostRepositoryImpl_1.PostRepository(con);
describe('usecase', () => {
    describe('PostUsecase', () => {
        describe('FindPostUseCase', () => {
            const usecase = new post_1.default.FindPostUseCase(repository);
            it('constructorが動作する', () => {
                const usecase = new post_1.default.FindPostUseCase(repository);
                expect(usecase).toBeTruthy(); // Ensure constructor created the object:
            });
            it('postRepository.findが呼ばれる', () => {
                usecase.getPost(1);
                expect(repository.find).toHaveBeenCalled();
            });
            it('postRepository.findAllが呼ばれる', () => {
                usecase.getAllPosts();
                expect(repository.findAll).toHaveBeenCalled();
            });
        });
        describe('DeletePostUseCase', () => {
            const usecase = new post_1.default.DeletePostUseCase(repository);
            it('constructorが動作する', () => {
                expect(usecase).toBeTruthy(); // Ensure constructor created the object:
            });
            it('postRepository.delete', () => {
                usecase.deletePost(1);
                expect(repository.delete).toHaveBeenCalled();
            });
        });
        describe('CreatePostUseCase', () => {
            const usecase = new post_1.default.CreatePostUseCase(repository);
            it('constructorが動作する', () => {
                expect(usecase).toBeTruthy(); // Ensure constructor created the object:
            });
            it('postRepository.findが呼ばれる', () => {
                const post = new Post_1.Post(1, 'a', 2);
                usecase.createPost(post);
                expect(repository.create).toHaveBeenCalled();
            });
        });
    });
});
//# sourceMappingURL=PostUseCase.js.map
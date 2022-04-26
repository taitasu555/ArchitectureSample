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
const MemoryDataBase_1 = __importDefault(require("../MemoryDataBase"));
const PostRepositoryImpl_1 = require("../PostRepositoryImpl");
const Post_1 = require("../../../../domain/Post");
const User_1 = require("../../../../domain/User");
const DTO_1 = require("../../repository/post/DTO");
const setup = () => {
    MemoryDataBase_1.default.posts = [];
    MemoryDataBase_1.default.users = [];
    const samplePost1 = new Post_1.Post(1, "sample", 1);
    const samplePost2 = new Post_1.Post(2, "example", 1);
    const sampleUser1 = new User_1.User(1, "taro", 12);
    const sampleUser2 = new User_1.User(2, "hanako", 12);
    MemoryDataBase_1.default.posts.push(samplePost1);
    MemoryDataBase_1.default.posts.push(samplePost2);
    MemoryDataBase_1.default.users.push(sampleUser1);
    MemoryDataBase_1.default.users.push(sampleUser2);
};
describe("repository", () => {
    describe("memory", () => {
        it("DBに値が追加されている", () => {
            setup();
            const expected = 2;
            expect(MemoryDataBase_1.default.posts.length).toBe(expected);
            expect(MemoryDataBase_1.default.users.length).toBe(expected);
        });
        describe("PostRepositoryImpl", () => {
            const postRepository = new PostRepositoryImpl_1.PostRepository();
            it("DBから値を1つ取り出す", () => __awaiter(this, void 0, void 0, function* () {
                const samplePost1 = new Post_1.Post(1, "sample", 1);
                const row = yield postRepository.find(1);
                const user = new User_1.User(1, "taro", 12);
                const expected = DTO_1.toPostAndUserDTO(samplePost1, user);
                expect(row).toEqual(expected);
            }));
            it("DBから全ての値を1つ取り出す", () => __awaiter(this, void 0, void 0, function* () {
                const rows = yield postRepository.findAll();
                for (let i = 0; i++; i < rows.length) {
                    const row = rows[i];
                    const postRow = yield postRepository.find(row.id);
                    expect(row).toEqual(postRow);
                }
            }));
            it("DBに値を1つ追加する", () => __awaiter(this, void 0, void 0, function* () {
                setup();
                const post = new Post_1.Post(null, "hoge", 2);
                const createPostDto = DTO_1.toCreatePostDTO(post);
                postRepository.create(createPostDto);
                const postedRow = yield postRepository.find(3);
                expect(MemoryDataBase_1.default.posts.length).toEqual(3);
                expect(postedRow).toEqual({
                    id: 3,
                    content: "hoge",
                    userName: "hanako"
                });
            }));
        });
    });
});
//# sourceMappingURL=PostRepositoryImpl.js.map
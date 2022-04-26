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
Object.defineProperty(exports, "__esModule", { value: true });
const IPostRepository_1 = require("../repository/post/IPostRepository");
class PostRepositoryImpl extends IPostRepository_1.IPostRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postResult = yield this.connection.execute('SELECT Posts.id, Posts.content, Users.name AS userName FROM Posts INNER JOIN Users ON Posts.user_id = Users.id;', id);
            if (postResult.length === 0) {
                return null;
            }
            const postAndUserDTO = postResult[0];
            return postAndUserDTO;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = yield this.connection.execute('select Posts.id, Posts.content, Users.name AS userName from Posts INNER JOIN Users ON Posts.user_id = Users.id;');
            return queryResults;
        });
    }
    /**
     * createしたものを取り出す処理がガバガバ。他の人に挿入されると詰む。あとで治す
     * @param postDTO
     */
    create(postDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`INSERT INTO Posts (content, user_id) VALUES ("${postDTO.content}", ${postDTO.userId})`);
            const idRow = yield this.connection.execute('SELECT LAST_INSERT_ID();');
            const id = idRow[0]['LAST_INSERT_ID()'];
            const postResult = yield this.connection.execute('SELECT Posts.id, Posts.content, Users.name AS userName FROM Posts INNER JOIN Users ON Posts.user_id = Users.id;', id);
            if (postResult.length === 0) {
                return null;
            }
            const postAndUserDTO = postResult[0];
            return postAndUserDTO;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute('delete from Posts where id = ?', id);
            return null;
        });
    }
}
exports.PostRepository = PostRepositoryImpl;
//# sourceMappingURL=PostRepositoryImpl.js.map
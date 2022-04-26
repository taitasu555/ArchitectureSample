"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../domain/User");
const IUserRepo_1 = require("../../../application/repo/user/IUserRepo");
class UserRepository extends IUserRepo_1.IUserRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    convertModel(r) {
        const user = new User_1.User();
        user.id = r.id;
        user.name = r.name;
        user.age = r.age;
        return user;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryResults = yield this.connection.execute('select * from Users where id = ? limit 1', id);
            return this.convertModel(queryResults[0]);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryResults = yield this.connection.execute('select * from Users');
            const results = queryResults.map((m) => {
                return this.convertModel(m);
            });
            return results;
        });
    }
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.connection.execute(`INSERT INTO Users (name, age) VALUES ("${createUserDto.name}", "${createUserDto.age}")`);
            return user;
        });
    }
    update(userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('update Users set name = ?, age = ?', [userDTO.name, userDTO.age]);
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute('delete from Users where id = ?', id);
            return null;
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepositoryImpl.js.map
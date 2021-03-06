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
const User_1 = require("../../../domain/User");
const IUserRepository_1 = require("../repository/user/IUserRepository");
class UserRepositoryImpl extends IUserRepository_1.IUserRepository {
    constructor() {
        super();
        const user1 = new User_1.User(1, 'samle', 3);
        const user2 = new User_1.User(2, 'samle2', 3);
        MemoryDataBase_1.default.users = [user1, user2];
    }
    convertModel(r) {
        let user = new User_1.User();
        user.id = r.id;
        user.name = r.name;
        user.age = r.age;
        return user;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = MemoryDataBase_1.default.users.filter((user) => user.id === id);
            if (queryResults.length === 0) {
                return null;
            }
            return this.convertModel(queryResults[0]);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = MemoryDataBase_1.default.users;
            const results = queryResults.map((m) => {
                return this.convertModel(m);
            });
            return results;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userIds = MemoryDataBase_1.default.users.map((user) => user.id);
            const maxId = Math.max.apply(null, userIds);
            const newId = maxId + 1;
            const newUser = new User_1.User(newId, user.name, user.age);
            MemoryDataBase_1.default.users.push(newUser);
            return newUser;
        });
    }
    update(userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            let returnUser;
            MemoryDataBase_1.default.users = MemoryDataBase_1.default.users.map((tu) => {
                if (tu.id === userDTO.id) {
                    let name;
                    let age;
                    if (userDTO.name) {
                        name = userDTO.name;
                    }
                    else {
                        name = tu.name;
                    }
                    if (userDTO.age) {
                        age = userDTO.age;
                    }
                    else {
                        age = tu.age;
                    }
                    const user = new User_1.User(userDTO.id, name, age);
                    returnUser = user;
                    return user;
                }
                else {
                    returnUser = tu;
                    return tu;
                }
            });
            return returnUser;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            MemoryDataBase_1.default.users = MemoryDataBase_1.default.users.filter((user) => {
                return user.id !== id;
            });
            return null;
        });
    }
}
exports.UserRepository = UserRepositoryImpl;
//# sourceMappingURL=UserRepositoryImpl.js.map
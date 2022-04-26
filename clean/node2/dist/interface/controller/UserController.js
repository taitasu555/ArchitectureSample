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
const UserSerializer_1 = require("../serializer/UserSerializer");
const UserRepositoryImpl_1 = require("../database/MySQL/UserRepositoryImpl");
const user_1 = __importDefault(require("../../application/usecase/user"));
const User_1 = require("../../domain/User");
const FindUserRequest_1 = require("../request/user/FindUserRequest");
const CreateUserRequest_1 = require("../request/user/CreateUserRequest");
class UserController {
    constructor(dbConnection) {
        this.userSerializer = new UserSerializer_1.UserSerializer();
        //database/mysqlでsql分を使用することができるようにする
        this.userRepository = new UserRepositoryImpl_1.UserRepository(dbConnection);
    }
    // MEMO: これJavaだったらannotationつけるだけで例外のハンドリングできるんだよなぁ・・・
    findUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reqBody = new FindUserRequest_1.FindUserRequest(req.params);
                const useCase = new user_1.default.FindUserUseCase(this.userRepository);
                let result = yield useCase.getUser(reqBody.id);
                return this.userSerializer.user(result);
            }
            catch (error) {
                return this.userSerializer.error(error);
            }
        });
    }
    findAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new user_1.default.FindUserUseCase(this.userRepository);
            let result = yield useCase.getAllUsers();
            return this.userSerializer.users(result);
        });
    }
    createUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // MEMO: validationをするためにもRequestクラスからのinstance化は必要そう
                const userParams = new CreateUserRequest_1.CreateUserRequest(req.body);
                const useCase = new user_1.default.CreateUserUseCase(this.userRepository);
                const user = new User_1.User(null, userParams.name, userParams.age);
                let result = yield useCase.createUser(user);
                return this.userSerializer.user(result);
            }
            catch (error) {
                return this.userSerializer.error(error);
            }
        });
    }
    updateUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const body = req.body;
                const useCase = new user_1.default.UpdateUserUseCase(this.userRepository);
                const user = new User_1.User(id, body.name, body.age);
                console.log(user);
                console.log(id);
                let result = yield useCase.updateUser(user);
                console.log(result, 'this is my log');
                return this.userSerializer.user(result);
            }
            catch (error) {
                return this.userSerializer.error(error);
            }
        });
    }
    deleteUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const useCase = new user_1.default.DeleteUserUseCase(this.userRepository);
                yield useCase.deleteUser(id);
                return this.userSerializer.delete();
            }
            catch (error) {
                return this.userSerializer.error(error);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map
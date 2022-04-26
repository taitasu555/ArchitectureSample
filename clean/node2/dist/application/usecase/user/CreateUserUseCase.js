"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DTO_1 = require("../../repo/user/DTO");
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    createUser(user) {
        const userDTO = DTO_1.toCreateUserDTO(user);
        return this.userRepository.create(userDTO);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map
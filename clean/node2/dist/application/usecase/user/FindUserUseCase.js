"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUser(id) {
        return this.userRepository.find(id);
    }
    getAllUsers() {
        return this.userRepository.findAll();
    }
}
exports.FindUserUseCase = FindUserUseCase;
//# sourceMappingURL=FindUserUseCase.js.map
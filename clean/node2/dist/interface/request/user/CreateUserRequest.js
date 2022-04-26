"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorCode_1 = require("../../../constant/ErrorCode");
class CreateUserRequest {
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    constructor(params) {
        this.valid(params);
        this._name = params.name;
        this._age = params.age;
    }
    valid(params) {
        if (params.name.length < 4) {
            throw new Error(JSON.stringify({
                code: ErrorCode_1.StatusCode.invalid,
                message: '4文字以上の名前',
            }));
        }
        if (params.age < 12) {
            throw new Error(JSON.stringify({
                code: ErrorCode_1.StatusCode.invalid,
                message: '登録は12才から',
            }));
        }
    }
}
exports.CreateUserRequest = CreateUserRequest;
//# sourceMappingURL=CreateUserRequest.js.map
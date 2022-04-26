"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorCode_1 = require("../../../constant/ErrorCode");
class FindUserRequest {
    get id() {
        return this._id;
    }
    constructor(params) {
        const validId = this.validRequest(params);
        this._id = validId;
    }
    validRequest(params) {
        console.log(params);
        const id = params.id;
        const numberId = Number(id);
        if (typeof numberId !== 'number') {
            throw new Error(JSON.stringify({
                code: ErrorCode_1.StatusCode.invalid,
                message: '不正なrequest idです',
            }));
        }
        return numberId;
    }
}
exports.FindUserRequest = FindUserRequest;
//# sourceMappingURL=FindUserRequest.js.map
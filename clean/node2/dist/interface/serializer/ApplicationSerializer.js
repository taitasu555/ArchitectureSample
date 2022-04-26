"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const ErrorCode_1 = require("../../constant/ErrorCode");
exports.StatusCode = ErrorCode_1.StatusCode;
class ApplicationSerializer {
    error(error) {
        try {
            const err = JSON.parse(error.message);
            return {
                code: err.code,
                errorName: error.name,
                message: err.message,
                responsedAt: moment_1.default().format(),
            };
        }
        catch (_a) {
            return {
                code: ErrorCode_1.StatusCode.exception,
                errorName: error.name,
                message: 'err obj parse error',
                responsedAt: moment_1.default().format(),
            };
        }
    }
}
exports.ApplicationSerializer = ApplicationSerializer;
//# sourceMappingURL=ApplicationSerializer.js.map
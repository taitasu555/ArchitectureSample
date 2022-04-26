"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UNAUTHORISED = 'ERROR/UNAUTHORISED';
const INVALID_VALUE = 'ERROR/INVALID_VALUE';
const ErrorType = { UNAUTHORISED, INVALID_VALUE };
exports.ErrorType = ErrorType;
const SUCCESS_CODE = '0000';
const INVALID_CODE = '4000';
const EXCEPTION_CODE = '5000';
const UNDEFINED_CODE = '9000';
const StatusCode = {
    success: SUCCESS_CODE,
    invalid: INVALID_CODE,
    exception: EXCEPTION_CODE,
    undefined: UNDEFINED_CODE,
};
exports.StatusCode = StatusCode;
//# sourceMappingURL=ErrorCode.js.map
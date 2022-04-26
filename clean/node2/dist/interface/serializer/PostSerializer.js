"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const ApplicationSerializer_1 = require("./ApplicationSerializer");
class PostSerializer extends ApplicationSerializer_1.ApplicationSerializer {
    post(data) {
        if (!data) {
            return {
                code: ApplicationSerializer_1.StatusCode.exception,
                message: "data is null",
                responsedAt: moment_1.default().format()
            };
        }
        return {
            code: ApplicationSerializer_1.StatusCode.success,
            data: { id: data.id, content: data.content, userName: data.userName },
            responsedAt: moment_1.default().format()
        };
    }
    posts(data) {
        if (!data) {
            return {
                code: ApplicationSerializer_1.StatusCode.exception,
                message: "data is null",
                responsedAt: moment_1.default().format()
            };
        }
        return {
            code: ApplicationSerializer_1.StatusCode.success,
            data: data.map((d) => {
                return { id: d.id, content: d.content, userName: d.userName };
            }),
            responsedAt: moment_1.default().format()
        };
    }
    createPost(data) {
        if (!data) {
            return {
                code: ApplicationSerializer_1.StatusCode.exception,
                message: "data is null",
                responsedAt: moment_1.default().format()
            };
        }
        return {
            code: ApplicationSerializer_1.StatusCode.success,
            data: { id: data.id, content: data.content, userName: data.userName },
            responsedAt: moment_1.default().format()
        };
    }
    delete() {
        return {
            code: ApplicationSerializer_1.StatusCode.success,
            data: {},
            responsedAt: moment_1.default().format()
        };
    }
}
exports.PostSerializer = PostSerializer;
//# sourceMappingURL=PostSerializer.js.map
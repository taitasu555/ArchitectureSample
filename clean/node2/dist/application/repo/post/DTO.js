"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * postドメインオブジェクトをDTOに変換する関数
 *
 * @param post postドメインオブジェクト
 */
const toCreatePostDTO = (post) => {
    return { content: post.content, userId: post.userId };
};
exports.toCreatePostDTO = toCreatePostDTO;
const toPostAndUserDTO = (post, user) => {
    return { id: post.id, content: post.content, userName: user.name };
};
exports.toPostAndUserDTO = toPostAndUserDTO;
//# sourceMappingURL=DTO.js.map
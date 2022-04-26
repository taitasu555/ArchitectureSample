"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../Post");
describe('domain', () => {
    describe('post', () => {
        it('投稿される文字が1-254字以内かどうかを判定し受け入れる', () => {
            const text = 'ほげほげ';
            const expected = true;
            expect(Post_1.PostBusinessRule.isPostLengthValid(text)).toBe(expected);
        });
        it('投稿される文字が0字であることを判定し弾く', () => {
            const text = '';
            const expected = false;
            expect(Post_1.PostBusinessRule.isPostLengthValid(text)).toBe(expected);
        });
        it('投稿される文字が254字であることを判定し受け入れる', () => {
            const text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
            const expected = true;
            expect(Post_1.PostBusinessRule.isPostLengthValid(text)).toBe(expected);
        });
        it('投稿される文字が255字であることを判定し弾く', () => {
            const text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
            const expected = false;
            expect(Post_1.PostBusinessRule.isPostLengthValid(text)).toBe(expected);
        });
    });
});
//# sourceMappingURL=Post.js.map
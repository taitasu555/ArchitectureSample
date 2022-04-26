"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../../../../../domain/Post");
const DTO_1 = require("../DTO");
describe('repository', () => {
    describe('post dto', () => {
        it('ドメインオブジェクトからCreatePostDTOを生成', () => {
            const post = new Post_1.Post(1, 'hoge', 2);
            const dto = DTO_1.toCreatePostDTO(post);
            const expected = {
                content: 'hoge',
                userId: 2,
            };
            expect(dto).toEqual(expected);
        });
    });
});
//# sourceMappingURL=DTO.js.map
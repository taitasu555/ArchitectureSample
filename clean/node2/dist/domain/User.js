"use strict";
/**
 * memo: 最重要ビジネスルールと最重要ビジネスデータは同じファイルに閉じ込めるべし
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Q: getter/setterからしか設定できないようにするメリットってなに？
class User {
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    constructor(id = null, name = null, age = null) {
        this._name = name;
        this._age = age;
        this._id = id;
    }
}
exports.User = User;
const UserBusinessRule = {
    /**
     * 名前は1文字以上、12文字未満
     * @param name String
     */
    isNameLengthValid(name) {
        return name.length > 0 && name.length < 12;
    },
};
exports.UserBusinessRule = UserBusinessRule;
//# sourceMappingURL=User.js.map
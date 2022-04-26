"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../interface/controller"));
const MysqlConnection_1 = require("../infrastructure/MysqlConnection");
const con = new MysqlConnection_1.MysqlConnection();
const userController = new controller_1.default.UserController(con);
const postController = new controller_1.default.PostController(con);
const router = express_1.default.Router();
// user
router.get('/users', (_, res) => __awaiter(this, void 0, void 0, function* () {
    let results = yield userController.findAllUser();
    res.send(results);
}));
router.get('/users/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield userController.findUser(req);
    res.send(result);
}));
router.post('/users', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield userController.createUser(req);
    res.send(result);
}));
router.patch('/users/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield userController.updateUser(req);
    res.send(result);
}));
router.delete('/users/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield userController.deleteUser(req);
    res.send(result);
}));
// post
router.get('/posts', (_, res) => __awaiter(this, void 0, void 0, function* () {
    let results = yield postController.findAllPost();
    res.send(results);
}));
router.get('/posts/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield postController.findPost(req);
    res.send(result);
}));
router.post('/posts', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield postController.createPost(req);
    res.send(result);
}));
router.delete('/posts/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield postController.deletePost(req);
    res.send(result);
}));
exports.default = router;
//# sourceMappingURL=router.js.map
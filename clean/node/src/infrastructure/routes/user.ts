import express from "express";
import { UsersController } from "../../interfaces/controllers/UsersController";
import { MysqlConnection } from "./../MysqlConnection";

const mysqlConnection = new MysqlConnection();
const usersController = new UsersController(mysqlConnection);

let userRouter = express.Router();

userRouter.post("/", async (req: express.Request, res: express.Response) => {
  let result = await usersController.createUser(req, res);
  res.send(result);
});

userRouter.get("/", async (req: express.Request, res: express.Response) => {
  let result = await usersController.findUser(req, res);
  res.send(result);
});

export default userRouter;

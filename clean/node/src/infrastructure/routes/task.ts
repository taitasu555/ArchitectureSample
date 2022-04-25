import express from "express";
import { TasksController } from "../../interfaces/controllers/TasksController";

import { MysqlConnection } from "./../MysqlConnection";

const mysqlConnection = new MysqlConnection();
const tasksController = new TasksController(mysqlConnection);

let taskRouter = express.Router();

taskRouter.get("/", async (req: express.Request, res: express.Response) => {
  let results = await tasksController.findAllTasks(req, res);
  res.send(results);
});

taskRouter.get("/:id", async (req: express.Request, res: express.Response) => {
  let result = await tasksController.findTask(req, res);
  res.send(result);
});

taskRouter.post("/", async (req: express.Request, res: express.Response) => {
  let result = await tasksController.createTask(req, res);
  res.send(result);
});

taskRouter.patch(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    let result = await tasksController.updateTask(req, res);
    res.send(result);
  }
);

taskRouter.delete(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    let result = await tasksController.deleteTask(req, res);
    res.send(result);
  }
);

export default taskRouter;

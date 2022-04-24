import { TaskSerializer } from "../serializers/TaskSerializer";
import { TaskRepository } from "../database/TaskRepository";
import { ListTasks } from "../../application/usecases/task/ListTasks";
import { GetTask } from "../../application/usecases/task/getTask";
import { CreateTask } from "../../application/usecases/task/CreateTask";
import { UpdateTask } from "../../application/usecases/task/UpdateTask";
import { DeleteTask } from "../../application/usecases/task/DeleteTask";
import { IDBConnection } from "../database/IDBConnection";

export class TasksController {
  private taskSerializer: TaskSerializer;
  private taskRepository: TaskRepository;

  constructor(dbConnection: IDBConnection) {
    this.taskSerializer = new TaskSerializer();
    this.taskRepository = new TaskRepository(dbConnection);
  }

  async findTask(req: any, res: any) {
    const id = req.params.id;
    const useCase = new GetTask(this.taskRepository);
    let result = await useCase.execute(id);
    return this.taskSerializer.serialize(result);
  }

  async findAllTasks(req: any, res: any) {
    const useCase = new ListTasks(this.taskRepository);
    let results = await useCase.execute();
    return this.taskSerializer.serialize(results);
  }

  async createTask(req: any, res: any) {
    const { title, description } = req.body;
    const useCase = new CreateTask(this.taskRepository);
    let result = await useCase.execute(title, description);
    return this.taskSerializer.serialize(result);
  }

  async updateTask(req: any, res: any) {
    const id = req.params.id;
    const { title, description } = req.body;
    const useCase = new UpdateTask(this.taskRepository);
    let result = await useCase.execute(id, title, description);
    return this.taskSerializer.serialize(result);
  }

  async deleteTask(req: any, res: any) {
    const id = req.params.id;
    const useCase = new DeleteTask(this.taskRepository);
    let result = await useCase.execute(id);
    return this.taskSerializer.serialize(result);
  }
}

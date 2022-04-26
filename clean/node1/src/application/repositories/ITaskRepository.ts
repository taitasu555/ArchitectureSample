import { Task } from "../../domain/models/Task";

export abstract class ITaskRepository {
  abstract findAll(): Promise<Array<Task>>;
  abstract find(id: number): Promise<Task>;
  abstract persist(task: Task): Promise<Task>;
  abstract merge(task: Task): Promise<Task>;
  abstract delete(task: Task): Promise<Task>;
}

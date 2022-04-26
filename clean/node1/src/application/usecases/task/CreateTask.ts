import { Task } from "../../../domain/models/Task";
import { ITaskRepository } from "../../repositories/ITaskRepository";
import moment from "moment-timezone";

/* CreateTask.tsはconstructorでITaskRepositoryを受け取り、
ITaskRepositoryという抽象クラスに依存している状態になります。
そして、taskRepositoryのインスタンス化は円の外側のレイヤーで行うことになります。
*/
export class CreateTask {
  // 依存関係逆転の原則
  private taskRepository: ITaskRepository;

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(title: string, description: string) {
    let task = new Task(title, description);
    task.createdAt = moment();
    task.updatedAt = moment();
    return this.taskRepository.persist(task);
  }
}

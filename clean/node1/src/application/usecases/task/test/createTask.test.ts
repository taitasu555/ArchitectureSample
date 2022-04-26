import { CreateTask } from "../CreateTask";
import { Task } from "../../../../domain/models/Task";

test("should create new task", async () => {
  const taskRepository = {
    persist: (task: Task) => {
      return task;
    },
  };
  const createTask = new CreateTask(taskRepository as any);
  const title = "test";
  const description = "test";
  const result = createTask.execute(title, description);
  expect((await result).title).toBe(title);
  expect((await result).description).toBe(description);
});

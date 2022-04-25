package usecase

import "ca/src/domain"

type TaskRepository interface {
	StoreTask(domain.Task) (int, error)
	FindTaskById(int) (domain.Task, error)
	FindTasks() (domain.Tasks, error)
}

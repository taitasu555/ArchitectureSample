package usecase

import "ca/src/domain"

type TaskInteractor struct {
	TaskRepository TaskRepository
}

func (interactor *TaskInteractor) Add(t domain.Task) (task domain.Task, err error) {
	identifier, err := interactor.TaskRepository.StoreTask(t)
	if err != nil {
		return
	}
	task, err = interactor.TaskRepository.FindTaskById(identifier)
	return
}

func (interactor *TaskInteractor) Tasks() (task domain.Tasks, err error) {
	task, err = interactor.TaskRepository.FindTasks()
	return
}

func (interactor *TaskInteractor) TaskById(identifier int) (task domain.Task, err error) {
	task, err = interactor.TaskRepository.FindTaskById(identifier)
	return
}

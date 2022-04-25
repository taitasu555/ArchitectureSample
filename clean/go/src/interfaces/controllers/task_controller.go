package controllers

import (
	"ca/src/domain"

	// 依存関係の逆転
	"ca/src/interfaces/database"
	"ca/src/usecase"
	"strconv"
)

type TaskController struct {
	Interactor usecase.TaskInteractor
}

func NewTaskController(sqlHandler database.SqlHandler) *TaskController {
	return &TaskController{
		Interactor: usecase.TaskInteractor{
			TaskRepository: &database.TaskRepository{
				SqlHandler: sqlHandler,
			},
		},
	}
}

func (controller *TaskController) CreateTask(c Context) {
	u := domain.Task{}
	c.Bind(&u)
	user, err := controller.Interactor.Add(u)
	if err != nil {
		c.JSON(500, NewError(err))
		return
	}
	c.JSON(201, user)
}

func (controller *TaskController) IndexTask(c Context) {
	tasks, err := controller.Interactor.Tasks()
	if err != nil {
		c.JSON(500, NewError(err))
		return
	}
	c.JSON(200, tasks)

}

func (controller *TaskController) ShowTask(c Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	task, err := controller.Interactor.TaskById(id)
	if err != nil {
		c.JSON(500, NewError(err))
		return
	}
	c.JSON(200, task)
}

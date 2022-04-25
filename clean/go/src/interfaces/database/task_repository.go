package database

import "ca/src/domain"

type TaskRepository struct {
	SqlHandler
}

func (repo *TaskRepository) StoreTask(t domain.Task) (id int, err error) {
	result, err := repo.Execute(
		"INSERT INTO Tasks (name, description) VALUES (?,?)", t.Name, t.Description,
	)
	if err != nil {
		return
	}
	id64, err := result.LastInsertId()
	if err != nil {
		return
	}
	id = int(id64)
	return
}

func (repo *TaskRepository) FindTaskById(identifier int) (task domain.Task, err error) {
	row, err := repo.Query("SELECT id, name, description FROM Tasks WHERE id = ?", identifier)
	defer row.Close()
	if err != nil {
		return
	}
	var id int
	var name string
	var description string
	row.Next()
	if err = row.Scan(&id, &name, &description); err != nil {
		return
	}
	task.ID = id
	task.Name = name
	task.Description = description
	return
}

func (repo *TaskRepository) FindTasks() (tasks domain.Tasks, err error) {
	rows, err := repo.Query("SELECT id, name, description FROM Tasks")
	defer rows.Close()
	if err != nil {
		return
	}
	for rows.Next() {
		var id int
		var name string
		var description string
		if err := rows.Scan(&id, &name, &description); err != nil {
			continue
		}
		task := domain.Task{
			ID:          id,
			Name:        name,
			Description: description,
		}
		tasks = append(tasks, task)
	}
	return
}

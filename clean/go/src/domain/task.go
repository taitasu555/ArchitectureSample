package domain

type Tasks []Task

type Task struct {
	ID          int
	Name        string
	Description string
	CreatedAt   string
	UpdatedAt   string
}

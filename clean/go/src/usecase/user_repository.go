package usecase

import "ca/src/domain"

type UserRepository interface {
	StoreUser(domain.User) (int, error)
	FindUserById(int) (domain.User, error)
	FindUsers() (domain.Users, error)
}

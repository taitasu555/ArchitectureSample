package usecase

import "ca/src/domain"

type UserInteractor struct {
	UserRepository UserRepository
}

func (interactor *UserInteractor) Add(u domain.User) (user domain.User, err error) {
	identifier, err := interactor.UserRepository.StoreUser(u)
	if err != nil {
		return
	}
	user, err = interactor.UserRepository.FindUserById(identifier)
	return
}

func (interactor *UserInteractor) Users() (user domain.Users, err error) {
	user, err = interactor.UserRepository.FindUsers()
	return
}

func (interactor *UserInteractor) UserById(identifier int) (user domain.User, err error) {
	user, err = interactor.UserRepository.FindUserById(identifier)
	return
}

import { IUserRepository } from '../../repo/user/IUserRepo';
import { User } from '../../../domain/User';

class FindUserUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public getUser(id: number): Promise<User> {
    return this.userRepository.find(id);
  }

  public getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

export { FindUserUseCase };

import { User } from '../../../domain/User';
import { IUserRepository } from '../../repo/user/IUserRepo';
import { toUpdateUserDTO } from '../../repo/user/DTO';

class UpdateUserUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public updateUser(user: User): Promise<User> {
    const userDTO = toUpdateUserDTO(user);
    return this.userRepository.update(userDTO);
  }
}

export { UpdateUserUseCase };

import { UserSerializer, UserResponse } from '../serializer/UserSerializer';
import { UserRepository } from '../database/MySQL/UserRepositoryImpl';
import { IDBConnection } from '../database/MySQL/IDBConnection';
import UserUseCase from '../../application/usecase/user';
import { User } from '../../domain/User';
import {
  TFindUserRequest,
  FindUserRequest,
} from '../request/user/FindUserRequest';
import { TResponse } from '../serializer/ApplicationSerializer';

class UserController {
  private userSerializer: UserSerializer;
  //db 処理
  private userRepository: UserRepository;

  public constructor(dbConnection: IDBConnection) {
    this.userSerializer = new UserSerializer();
    //database/mysqlでsql分を使用することができるようにする
    this.userRepository = new UserRepository(dbConnection);
  }

  public async findUser(
    id: number,
  ): Promise<TResponse<UserResponse> | TResponse<{}>> {
    try {
      const useCase = new UserUseCase.FindUserUseCase(this.userRepository);
      const result = await useCase.getUser(id);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}

export { UserController };

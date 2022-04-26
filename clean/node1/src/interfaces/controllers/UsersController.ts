import { UserSerializer } from "../serializers/UserSerializer";
import { UserRepository } from "../database/UserRepository";
import { GetUser } from "../../application/usecases/user/GetUser";
import { CreateUser } from "../../application/usecases/User/CreateUser";
import { IDBConnection } from "../database/IDBConnection";

export class UsersController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepository;

  constructor(dbConnection: IDBConnection) {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepository(dbConnection);
  }

  async findUser(req: any, res: any) {
    const id = req.params.id;
    const useCase = new GetUser(this.userRepository);
    let result = await useCase.execute(id);
    return this.userSerializer.serialize(result);
  }

  async createUser(req: any, res: any) {
    const { email, password } = req.body;
    const useCase = new CreateUser(this.userRepository);
    let result = await useCase.execute(email, password);
    return this.userSerializer.serialize(result);
  }
}

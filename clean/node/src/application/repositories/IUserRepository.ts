import { User } from "../../domain/models/User";

export abstract class IUserRepository {
  abstract create(user: User): Promise<User>;
  abstract find(id: number): Promise<User>;
}

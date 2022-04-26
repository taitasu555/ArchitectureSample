import { User } from "../../../domain/models/User";
import moment from "moment-timezone";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateUser {
  // 依存関係逆転の原則
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  execute(email: string, password: string) {
    let user = new User(email, password);
    user.createdAt = moment();
    user.updatedAt = moment();
    return this.userRepository.create(user);
  }
}

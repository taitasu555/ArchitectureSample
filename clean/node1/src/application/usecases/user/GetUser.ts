import { IUserRepository } from "../../repositories/IUserRepository";

export class GetUser {
  // 依存関係逆転の原則
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  execute(id: number) {
    return this.userRepository.find(id);
  }
}

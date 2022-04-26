import { User } from "../../domain/models/User";
import { IUserRepository } from "../../application/repositories/IUserRepository";
import { IDBConnection } from "./IDBConnection";
import moment from "moment-timezone";

export class UserRepository extends IUserRepository {
  private connection: IDBConnection;

  constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  private convertModel(r: any) {
    let user = new User();

    user.id = r.id;
    user.email = r.email;
    user.password = r.password;
    user.createdAt = moment.tz(r.created_at, "UTC");
    user.updatedAt = moment.tz(r.updated_at, "UTC");

    return user;
  }

  async find(id: number): Promise<User> {
    let queryResults = await this.connection.execute(
      "select * from users where id = ? limit 1",
      id
    );
    return this.convertModel(queryResults[0]);
  }

  async create(user: User): Promise<User> {
    let result = await this.connection.execute(
      "insert into users (email, password, created_at, updated_at) values (?, ?, ?, ?)",
      [
        user.email,
        user.password,
        user.getUTCCreatedAt(),
        user.getUTCUpdatedAt(),
      ]
    );
    user.id = result.insertId;
    return user;
  }
}

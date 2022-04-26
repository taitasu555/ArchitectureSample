import { User } from '../../../domain/User';
import { IUserRepository } from '../../../application/repo/user/IUserRepo';
import { IDBConnection } from './IDBConnection';
import {
  TUpdateUserDTO,
  TCreateUserDTO,
} from '../../../application/repo/user/DTO';

class UserRepository extends IUserRepository {
  private connection: IDBConnection;

  public constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  private convertModel(r: User): User {
    const user = new User();
    user.id = r.id;
    user.name = r.name;
    user.age = r.age;
    return user;
  }

  public async find(id: number): Promise<User> {
    const queryResults = await this.connection.execute(
      'select * from Users where id = ? limit 1',
      id,
    );
    return this.convertModel(queryResults[0]);
  }

  public async findAll(): Promise<User[]> {
    const queryResults: User[] = await this.connection.execute(
      'select * from Users',
    );
    const results = queryResults.map(
      (m): User => {
        return this.convertModel(m);
      },
    );
    return results;
  }

  public async create(createUserDto: TCreateUserDTO): Promise<User> {
    const user = await this.connection.execute(
      `INSERT INTO Users (name, age) VALUES ("${createUserDto.name}", "${createUserDto.age}")`,
    );
    return user;
  }

  public async update(userDTO: TUpdateUserDTO): Promise<User> {
    const result = await this.connection.execute(
      'update Users set name = ?, age = ?',
      [userDTO.name, userDTO.age],
    );
    return result;
  }

  public async delete(id: number): Promise<null> {
    await this.connection.execute('delete from Users where id = ?', id);
    return null;
  }
}

export { UserRepository };

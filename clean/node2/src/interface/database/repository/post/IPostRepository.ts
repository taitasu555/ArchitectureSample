import { TCreatePostDTO, TPostAndUserDTO } from './DTO';

abstract class IPostRepository {
  abstract findAll(): Promise<TPostAndUserDTO[]>;
  abstract find(id: number): Promise<TPostAndUserDTO>;
  abstract create(user: TCreatePostDTO): Promise<TPostAndUserDTO>;
  abstract delete(id: number): Promise<null>;
}

export { IPostRepository };

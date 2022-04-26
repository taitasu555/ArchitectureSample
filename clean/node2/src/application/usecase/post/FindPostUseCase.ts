import { IPostRepository } from '../../repo/post/IPostRepository';

import { TPostAndUserDTO } from '../../repo/post/DTO';

class FindPostUseCase {
  private postRepository: IPostRepository;

  public constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  public getPost(id: number): Promise<TPostAndUserDTO> {
    return this.postRepository.find(id);
  }

  public getAllPosts(): Promise<TPostAndUserDTO[]> {
    return this.postRepository.findAll();
  }
}

export { FindPostUseCase };

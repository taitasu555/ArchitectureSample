import { IPostRepository } from '../../repo/post/IPostRepository';

class DeletePostUseCase {
  private postRepository: IPostRepository;

  public constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  public deletePost(id: number): Promise<null> {
    return this.postRepository.delete(id);
  }
}

export { DeletePostUseCase };

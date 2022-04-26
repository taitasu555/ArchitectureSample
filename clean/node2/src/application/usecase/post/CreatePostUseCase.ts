import { Post } from '../../../domain/Post';
import { IPostRepository } from '../../repo/post/IPostRepository';
import { toCreatePostDTO, TPostAndUserDTO } from '../../repo/post/DTO';

class CreatePostUseCase {
  private postRepository: IPostRepository;

  public constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  public createPost(post: Post): Promise<TPostAndUserDTO> {
    const postDTO = toCreatePostDTO(post);
    return this.postRepository.create(postDTO);
  }
}

export { CreatePostUseCase };

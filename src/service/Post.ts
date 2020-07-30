import {getManager} from "typeorm";
import Post from "../entity/Post"

class PostService {
    public async getPostByAll(){
        // get a post repository to perform operations with post
        // const postRepository = getManager().getRepository(Post);

        // load a post by a given post id
        return await getManager().find(Post)

    }

    public async getPostById(id: number): Promise<Post>{
        // const postRepository = getManager().getRepository(Post);
        // return await postRepository.findOne(Post, {
        return await getManager().findOneOrFail(Post, {
            id,
        }); 
    }
}
export default PostService;
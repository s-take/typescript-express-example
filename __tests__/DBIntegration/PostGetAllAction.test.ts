import PostService from '../../src/service/Post';
import Post from '../../src/entity/Post';
import databaseConn, {closeDatabaseConn} from '../../src/databaseConn';
import { PostFactory } from '../helper/factory';

beforeAll(async () => {
  await databaseConn();
});

afterAll(async () => {
  await closeDatabaseConn();
});

describe('User', () => {
  it('getUserByAll', async() => {
    // create data
    const post = await PostFactory.create();
    
    // service
    const postService = new PostService();
    const result = await postService.getPostByAll();

    // expect(result).toMatchObject<Post>(post);
    expect(result).toEqual([<Post>(post)]);
  });
  // it('getUserById', async() => {
  //   const post = await PostFactory.create();
  //   const postService = new PostService();
  //   const result = await postService.getPostById(post.id);

  //   // expect(result).toMatchObject<Post>(post);
  //   expect(result).toEqual(<Post>(post));
  // });


  // it('createPost')
});
import { Factory } from 'typeorm-factory'
import {Post} from "../../src/entity/Post";
import {Category} from "../../src/entity/Category";

// .attr → 普通のカラムはこれで作ります
// .secuence → ユニーク成約等があるカラムの場合はindexを受取る無名関数を使って一意化出来ます
export const PostFactory = new Factory(Post)
  .sequence("id", (i) => i) 
  .attr("title", "test title") 
  .attr("text", "test text"); 

export const CategoryFactory = new Factory(Category)
  .sequence("id", (i) => i)
  .attr("name", "test name") 

// .assocMany → toManyリレーション作成。最後の引数で一気に作る数を指定出来ます
// .assocOne → toOneリレーションを作成
//export const PostFactory = new Factory(Post)
//  .sequence("title", (i) => `title ${i}`)
//  .sequence("text", (i) => `text ${i}`)
//  .attr("likesCount", 10)
//  .assocMany("comments", PostFactory, 2)
//  .assocOne("author", AuthorFactory);


// Many to Manyの機能ないかも
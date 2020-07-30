import {Request, Response} from "express";
import PostService from "../service/Post";

/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(request: Request, response: Response) {
    try {
        const postService = new PostService();
        const posts = await postService.getPostByAll()
        response.json(posts)
    } catch (error){
        response.status(500).json(error.message)
    }
}
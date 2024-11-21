import { getTodosPosts } from "../models/postsMoldel.js";

export async function listarPosts(req, res) {
    // **Chama a função getTodosPosts() para obter todos os posts do banco de dados.**
    const posts = await getTodosPosts();
    // **Envia uma resposta HTTP com status 200 (OK) e um corpo JSON contendo os posts.**
    res.status(200).json(posts);
  };


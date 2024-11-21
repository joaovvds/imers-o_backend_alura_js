import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // **Habilita o middleware express.json() para que o Express possa entender requisições com corpo em formato JSON.**
    app.use(express.json());
    // **Rota GET para a URL /posts. Quando uma requisição GET é feita para essa URL, esta função é executada.**
    app.get("/posts", listarPosts);
};

export default routes;
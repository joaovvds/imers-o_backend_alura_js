import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Configura o armazenamento de arquivos em disco (multer.diskStorage)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o destino dos arquivos (pasta 'uploads')
    cb(null, './uploads/'); // Caminho absoluto para Linux/Mac
    // cb(null, 'uploads/');  // Caminho relativo se uploads estiver na raiz do projeto
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo
    cb(null, file.originalname);
  }
});

// Cria uma instância do multer com a configuração de armazenamento
const upload = multer({ storage });

const routes = (app) => {
  // Habilita o middleware express.json() para lidar com requisições JSON
  app.use(express.json());

  // Rota para listar todos os posts (GET /posts)
  app.get("/posts", listarPosts);

  // Rota para criar um novo post (POST /posts)
  app.post("/posts", postarNovoPost);

  // Rota para fazer upload de imagem (POST /upload)
  app.post("/upload", upload.single("imagem"), uploadImagem); // Aceita apenas um arquivo nomeado "imagem"
};

export default routes;
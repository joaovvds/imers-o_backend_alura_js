import fs from "fs";
import { getTodosPosts, criarPost } from "../models/postsMoldel.js";

// Função assíncrona para listar todos os posts
export async function listarPosts(req, res) {
  // Chama a função getTodosPosts() para buscar todos os posts do banco de dados
  const posts = await getTodosPosts();
  // Envia uma resposta HTTP com status 200 (OK) e os posts em formato JSON
  res.status(200).json(posts);
};

// Função assíncrona para criar um novo post
export async function postarNovoPost(req, res) {
  // Obtém os dados do novo post a partir do corpo da requisição
  const novoPost = req.body;
  try {
    // Chama a função criarPost() para inserir o novo post no banco de dados
    const postCriado = await criarPost(novoPost);
    // Envia uma resposta HTTP com status 200 (OK) e o post criado em formato JSON
    res.status(200).json(postCriado);
  } catch (erro) {
    // Captura qualquer erro que possa ocorrer durante a criação do post
    console.error(erro.message);
    // Envia uma resposta HTTP com status 500 (Erro interno do servidor) e uma mensagem de erro
    res.status(500).json({"Erro": "Falha na requisição"});
  }
};

// Função assíncrona para fazer upload de uma imagem e criar um novo post
export async function uploadImagem(req, res) {
  // Cria um novo objeto de post com a descrição, URL da imagem e texto alternativo
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
  }
  try {
    // Chama a função criarPost() para inserir o novo post no banco de dados
    const postCriado = await criarPost(novoPost);
    // Gera o novo nome da imagem com o ID do post
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    // Renomeia o arquivo da imagem para o novo nome
    fs.renameSync(req.file.path, imagemAtualizada);
    // Envia uma resposta HTTP com status 200 (OK) e o post criado em formato JSON
    res.status(200).json(postCriado);
  } catch (erro) {
    // Captura qualquer erro que possa ocorrer durante o upload ou a criação do post
    console.error(erro.message);
    // Envia uma resposta HTTP com status 500 (Erro interno do servidor) e uma mensagem de erro
    res.status(500).json({"Erro": "Falha na requisição"});
  }
};


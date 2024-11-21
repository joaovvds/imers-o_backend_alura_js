import conectarAoBanco from "../config/dbconfig.js";

// **Conecta ao banco de dados MongoDB usando as informações da variável de ambiente STRING_CONEXAO.**
// A função conectarAoBanco (definida em dbconfig.js) provavelmente estabelece a conexão com o banco e retorna um objeto de conexão.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

    // **Função assíncrona para obter todos os posts do banco de dados.**
export async function getTodosPosts() {
    // **Seleciona o banco de dados 'imersao-instalike' e a coleção 'posts'.**
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");
    // **Executa uma consulta para encontrar todos os documentos na coleção 'posts' e retorna um array com os resultados.**
    return colecao.find().toArray();
  };
  
  export async function criarPost(novoPost) {
    
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost); //insertOne ver na documentação 
  }
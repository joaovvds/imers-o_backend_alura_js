import express from "express";

const posts = [
    {
        id: 1,
        descricao: "uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Um lindo pôr do sol",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Meu novo cachorro",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("servidor escutando....");
}); 

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPorId(id) {
    //buscar dados dentro de um array
    //encontrar os dados pelo index posts.findIndex()
    //post e como a funçao vai receber os dados que vem de fora dela. ele seleciona um post
    return posts.findIndex((post) => {
         return post.id === Number(id)
    });
}

app.get("/posts/:id", (req, res) => { 
    const index = buscarPorId(req.params.id)  //req = requis tem o valor do id
    res.status(200).json(posts[index]);

});

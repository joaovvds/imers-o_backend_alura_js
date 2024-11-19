import express from "express";
//aula 1
const app = express();
/* listen = servidor escutando, 
    3000 = e a porta e dei uma virgula e dentro ainda do listen
    criei o arrow fuction e dentro do um console.log 
    para ele me avisar que está escutando.*/
app.listen(3000, () => {
    console.log("servidor escutando...");
});

// criando uma rota para receber e definir a resposta
/*
get() = pegar algum recurso do servidor.
paramentro do get > ("/api") = definimos a rota /api.
 ("/api", (req, res)  requisição é resposta.
 e depois criei um arrow fuction
*/

app.get("/api", (req, res) => {
    // res de resposta 
    // status(200) e send() são uma função
    //send()
    /*exemplo:
    req = pode me dar sua água?
    res = sim posso! */
    res.status(200).send("boas vindas");
});

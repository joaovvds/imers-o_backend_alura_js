import express from "express";

const app = express();
let post = {
    nome: 'joao',
    idade: 20,
    altura: 1.70
}
app.listen(3000, () => {
    console.log("servidor escutando....");
}); 

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!")
    res.status(200).send(post)
});

console.log()
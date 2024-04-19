const express = require('express');

const app = express();

var aluno = {
    nome:"Fulano",
    matricula: 12345
}

app.get("/", (req,res)=>{
    res.send( aluno);
    
})

app.listen(8000,  () => {
    console.log(`Servidor rodando na porta 8000`);
    } 
);
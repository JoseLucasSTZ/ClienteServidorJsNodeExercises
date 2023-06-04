const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 3000;
const app = express();

function leDados() {
    fs.readFile('/dadosNomes.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivi: ', err);
            return;
        }
        const JsonConvertivoEmObjJavascript = data;
        return JsonConvertivoEmObjJavascript

    });
};




app.use(express.static(path.join(__dirname, 'public')));

app.get('/dados', (req, res) => {
    leDados()
});

app.listen(port, () => {
    console.log('Servidor rodando na porta ', port);
});
const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 3000;
const app = express();

function leDados() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '/dadosNomes.json'), 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo: ', err);
                reject(err);
                return;
            }
            const JsonConvertivoEmObjJavascript = JSON.parse(data);
            resolve(JsonConvertivoEmObjJavascript)
        });
    })
};


app.use(express.static(path.join(__dirname, 'public')));

app.get('/dados', async (req, res) => {
    try {
        const dados = await leDados();
        res.json(dados);
    } catch (err) {
        console.error("Erro ao obter dados", err);
        res.status(500).send('erro ao obter dados');
    }
});

app.listen(port, () => {
    console.log('Servidor rodando na porta ', port);
});
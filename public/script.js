const listaNaoOrdenada = document.getElementById('listaNaoOrdenada');
const requisitarDados = document.getElementById('requisitarDados');
const corpo = document.getElementById('corpo');
const dadosServidor = 'http://localhost:3000/dados';


function criarDiv(elemento) {
    if (typeof elemento !== 'string') {
        throw new Error('O argumento deve ser uma div!')
    } else {
        let novoElemento = document.createElement(`${elemento}`);
        return novoElemento
    }

}

requisitarDados.addEventListener('click', () => {
    let novoElementoDiv = criarDiv('div')
    novoElementoDiv.innerText = 'Dados requisitados, aguarde um pouco!';
    corpo.appendChild(novoElementoDiv);
});

requisitarDados.addEventListener('click', () => {
    fetch(dadosServidor).then(response.json()).then(
        data => {
            let dadosResposta = JSON.stringify(data);
            alert(dadosResposta)
        }
    ).catch(erros => {
        alert('deu ruim')
    })
});

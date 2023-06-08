const listaNaoOrdenada = document.getElementById('listaNaoOrdenada');
const requisitarDados = document.getElementById('requisitarDados');
const corpo = document.getElementById('corpo');
const dadosServidor = 'http://localhost:3000/dados';



requisitarDados.addEventListener('click', () => {
    fetch(dadosServidor)
        .then(
            response => response.json())
        .then(
            data => {
                const pessoas = data.People;
                pessoas.forEach(pessoa => {
                    let novoElementoDiv = document.createElement('div');
                    let hobbies = pessoa.hobbies;
                    novoElementoDiv.innerText = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}, Hobbies: ${hobbies}`
                    corpo.appendChild(novoElementoDiv);
                });
            }
        )
        .then(

    )
        .catch(erros => {
            alert('deu ruim')
        })
});

const usuario = {
    nome:'Erika',
    idade: 25,
    endereco: {
        cidade:'Rio de Janeiro',
        estado:'RJ',
    }
}

const {nome, idade, endereco: { cidade }} = usuario
console.log(`${nome}, tem ${idade} e mora no ${cidade}`);

function mostraNome({ nome }){
    console.log(nome);
}

mostraNome(usuario);
/*
    Exercício 1.1 -  Rest
    A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira

    posição do vetor e outra variável y que recebe todo restante dos dados.
    console.log(x); // 1
    console.log(y); // [2, 3, 4, 5, 6]

    Exercício 1.2 -  A partir do objeto e utilizando o operador spread:
    const usuario = {
            nome: 'Diego',
            idade: 23,
            endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil',
        }
    };

    Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
    Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

    Exercício 1.3
    Converta o seguinte trecho de código utilizando Template Literals:
    const usuario = 'Diego';
    const idade = 23;
    console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');

     Exercício 1.4
     Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
        const nome = 'Diego';
        const idade = 23;
        const usuario = {
            nome: nome,
            idade: idade,
            cidade: 'Rio do Sul',
        };

*/

console.log('=== 1.1 === ');
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.log(x, y);

function soma(...params){
    var total = 0;
    for(var i = 0; i < params.length; i++){
        total+= params[i];
    }
    return total;
}


console.log(soma(1, 2, 3, 2, 3, 6));

console.log('=== 1.2 === ');
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};


var {...usuario2} = usuario;
usuario2.nome = 'Gabriel';
console.log(usuario2);

var {...usuario3} = usuario;
usuario3.endereco.cidade = 'Lontras';
console.log(usuario3);

console.log('=== 1.3 === ');
const usuario4 = 'Diego';
const idade4 = 23;
console.log(`O usuário ${usuario4} possui ${idade4} anos`);

console.log('=== 1.4 === ');
        const nome5 = 'Diego';
        const idade5 = 23;

        const usuario5 = {
            nome5,
            idade5,
            cidade5: 'Rio do Sul',
        };
console.log(`O ${usuario5.nome5} tem ${usuario5.idade5} anos`);
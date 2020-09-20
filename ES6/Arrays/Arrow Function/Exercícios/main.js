/*
    3º exercício
    Converta as funções nos seguintes trechos de código em Arrow Functions:
    // 3.1
    const arr = [1, 2, 3, 4, 5];
    arr.map(function(item) {
    return item + 10;
    });

    // 3.2
    // Dica: Utilize uma constante pra function
    const usuario = { nome: 'Diego', idade: 23 };
    function mostraIdade(usuario) {
    return usuario.idade;
    }
    mostraIdade(usuario);

    // 3.3
    // Dica: Utilize uma constante pra function
    const nome = "Diego";
    const idade = 23;
    function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
    }
    mostraUsuario(nome, idade);
    mostraUsuario(nome);

    // 3.4
    const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
    }
*/


console.log('=== 3.1 ===');
const item = (item => item + 10);
console.log(item(10));


console.log('=== 3.2===');

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade =  (usuarios => usuarios.idade);
console.log(mostraIdade(usuario));


console.log('=== 3.3===');

console.log('=== 3.4===');
const promise = () => new Promise((resolve, reject) => resolve);
console.log(promise);
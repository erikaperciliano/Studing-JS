//REST OPERATOR = pega o resto das propriedades

const usuario = {
    nome:'Erika',
    idade: 25,
    endereco: {
        cidade:'Rio de Janeiro',
        estado:'RJ',
    }
}

console.log('---------------------------------------DESESTRUTURAÇÂO OBJETO-----------------------------------------------------------');

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

console.log('---------------------------------------DESESTRUTURAÇÂO ARRAY-----------------------------------------------------------');

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);


console.log('-----------------------------------------PARÂMETRO DE FUNÇÂO---------------------------------------------------------');

function soma(a, b,...params){
    return params;
}

console.log(soma(1, 3, 4, 5, 6, 7, 8));

console.log('-----------------------------------------SPREAD OPERATOR ARRAY---------------------------------------------------------');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);



console.log('-----------------------------------------SPREAD OPERATOR OBJETO---------------------------------------------------------');

const usuario1 = {
    nome:'Erika',
    idade: 25,
    empresa: 'Beijaflore'
};

const usuario2 = {...usuario1, nome: 'OutroNome'};

console.log(usuario2);

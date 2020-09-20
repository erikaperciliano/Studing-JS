const arr = [1, 3, 4, 5, 8, 9]; 

const find = arr.find(function(item){
    return item === 4;
    // return item === 2; => retorna undefined pq o 2 não existe dentro do arr
});

console.log(`Números: ${arr} | Desses, encontre o número: ${find}`);
console.log(`Números: ${arr} | Desses, encontre o número: ${find}`);
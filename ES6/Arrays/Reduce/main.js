const arr = [1, 3, 4, 5, 8, 9]; 

const soma = arr.reduce(function(total, next){
    return total + next;
})

console.log(`A soma dos números de dentro do array = ${soma}`);
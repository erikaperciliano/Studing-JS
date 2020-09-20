const arr = [1, 3, 4, 5, 8, 9]; 

const filter = arr.filter(function(item){
    return item % 2 === 0; //numéros pares
});

console.log(`Números: ${arr} | Desses, os  números pares são: ${filter}`);
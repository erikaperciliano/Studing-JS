//Percorre um array e retorna uma nova informação
const arr = [1, 3, 4, 5, 8, 9]; 

const newArr = arr.map(function(item, index){
    return console.log('soma: ',item * 2, 'index: ', index);
});

newArr;
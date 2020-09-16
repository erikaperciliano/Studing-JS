// function recebeIdade(idade){
//     return new Promise (function(resolve, reject){

//         xhr.onreadystatechange = function(){
//                 if(idade > 18){
//                     resolve(xhr.responseText);
//                 } else{
//                 reject(xhr.responseText);
//             }
//         }

//     })
// }

// recebeIdade(20)
//  .then(function() {
//  console.log("Maior que 18");
//  })
//  .catch(function() {
//  console.log("Menor que 18");
//  });


var input = document.querySelector('input');
var btn = document.querySelector('button');

function buscarAPI(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }

    })
}
buscarAPI()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
// traz o resultado de uma requisição somente depois de um tempo

var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/erikaperciliano');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

// O .then, será executando quando chamarmos o resolve na promisse a cima. Se o cód chegou até o resolve, deu um cód de 200(sucesso), a promisse chamará o resolve. Esse resolve irá invocar esse .then 
// Já o reject, chama o método .catch(ou seja, se tivermos um cód diferente de 200)
minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
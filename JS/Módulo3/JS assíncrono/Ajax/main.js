//ajax = faz a requisição do servidor, sem precisar atualizar a pág

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/erikaperciliano');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}

/* 2º exercício - A partir do seguinte vetor:
    var nomes = ["Diego", "Gabriel", "Lucas"];
    Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
    ● Diego
    ● Gabriel
    ● Lucas
*/

var nomes = ["Diego", "Gabriel", "Lucas"];

function listaDeNomes(){

    for(var nome of nomes){
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var containerApp = document.getElementById('app');
    var textElement = document.createTextNode(nome);
        
    ul.setAttribute('li', nome);

    li.appendChild(textElement);
    ul.appendChild(li);

    containerApp.appendChild(ul);

    }
}

listaDeNomes();
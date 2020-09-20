/* 4º exercício - Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

    <input type="text" name="nome">
    <button onClick="adicionar()">Adicionar</button>

    Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
    nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
    demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
*/

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos =
    [
        'Fazer café', 
        'Estudar Javascript',
        'Acessar comunidade da Rocketseat'
    ];


    function renderTodos(){
    listElement.innerHTML = ''; // remove todo o conteúdo que estiver dentro do listElement
       for(todo of todos){
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(todo); //transforma todos em texto html

            var linkElement = document.createElement('a');
            linkElement.setAttribute('href', "#");

            var posicao = todos.indexOf(todo);
            linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')');


            var linkText = document.createTextNode('Excluir');

            linkElement.appendChild(linkText);

            todoElement.appendChild(todoText);
            todoElement.appendChild(linkElement);

            listElement.appendChild(todoElement);
       }
    }

    renderTodos();

    function addTodo(){
        var inputText = inputElement.value;

        todos.push(inputText);
        inputElement.value = ''; //apaga o texto atual do input
        renderTodos();//renderiza a lista de todos c/ o novo item adicionado
    }

    buttonElement.onclick = addTodo; //chama essa função quando butão for clicado

    function deleteTodo(posicao){
        todos.splice(posicao, 1);
        renderTodos();
    }
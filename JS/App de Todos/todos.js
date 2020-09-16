

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// [
//     'Fazer café',
//     'Estudar Javascript',
//     'Acessar comunidade da Rocketseat'
// ];


function renderTodos(){
    listElement.innerHTML = ''; // quando a pág recarregar após o click, o conteúdo que existia antes do botão ser clicado, será apagado

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');
       

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = ''; //apaga o valor do input
    renderTodos(); // renderiza a lista de todo novamente, com esse novo elemento que adicionamos no final
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}


function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
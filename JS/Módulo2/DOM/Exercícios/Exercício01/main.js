/* 1º exercício - Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

*/

var box = document.querySelector(".box");
var button = document.querySelector(".botao");

button.addEventListener('click', function(){
    box.style.width = 100;
    box.style.height = 100;
    box.style.backgroundColor = '#f00';
})


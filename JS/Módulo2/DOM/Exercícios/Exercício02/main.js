/* 2º exercício - Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

    function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    var newColor = getRandomColor(); // #E943F0
*/


var box = document.querySelector(".box");
var button = document.querySelector(".botao");

button.addEventListener('click', function(){
    box.style.width = 100;
    box.style.height = 100;
    box.style.backgroundColor = '#f00';
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    box.style.backgroundColor = color;
}
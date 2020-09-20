/* 2º exercício - Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

    URL de exemplo: https://api.github.com/users/diego3g/repos
    Basta alterar "diego3g" pelo nome do usuário.

    <input type="text" name="user">
    <button onclick="">Adicionar</button>

    Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
    <ul>
    <li>repo1</li>
    <li>repo2</li>
    <li>repo3</li>
    <li>repo4</li>
    <li>repo5</li>
    </ul>
*/


var input = document.querySelector('input');
var btn = document.querySelector('button');
var listElement = document.querySelector('#app ul');


function buscarAPI(){

    var inputValue = input.value;
    var app = document.getElementById('app');

    var h1 = document.createElement('h1');
    var textH1 = document.createTextNode('Carregando...');

    h1.appendChild(textH1);
    app.appendChild(h1);
    //h1.style.display="none";
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.open('GET',`https://api.github.com/users/${inputValue}/repos`);
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('o usuário no Github não exista');
                }
            }
        }

    })
}
    


    btn.addEventListener('click', function(){
        buscarAPI()
        .then(function(response){
            for(todo of response){

                var todoElement = document.createElement('li');
                var todoText = document.createTextNode(todo.name);

                todoElement.appendChild(todoText);

                listElement.appendChild(todoElement);
            }
            
        })
        .catch(function(error){
            alert(error);
        })
    
    })

   
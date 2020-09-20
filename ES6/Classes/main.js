/*scripts no package.json = formas de executar comando no terminal*/
class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = [];
    }

    mostraUsuario(nome){
        this.usuario.push(nome);
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add("Novo todo");
    MinhaLista.mostraUsuario('Erika');
}


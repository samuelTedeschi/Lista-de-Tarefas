let inputTarefa = document.querySelector("#inputTarefa");
let btnAdd = document.querySelector("#btnAdd");
let listaTarefa = document.querySelector("#listaTarefa");

inputTarefa.addEventListener('keypress', (e) =>{
    if(e.keyCode == 13){
        let tarefa = {
            nome: inputTarefa.value,
            id: gerarId(),
        }

        addListaTarefa(tarefa);
    }
})

btnAdd.addEventListener('keypress', (e) =>{
    let tarefa = {
        nome: inputTarefa.value,
        id: gerarId(),
    }

    addListaTarefa(tarefa);
})

function gerarId(){
    return Math.floor(Math.random()*3000)
}

function addListaTarefa(tarefa){
    let li = criarTagLi(tarefa);
    listaTarefa.appendChild(li);
    inputTarefa.value = '';
}

function criarTagLi(tarefa){
    let li = document.createElement('li');
    li.id = tarefa.id;

    let spam = document.createElement('spam');
    spam.classList.add('textoTarefa')
    spam.innerHTML = tarefa.nome;

    let div = document.createElement('div');
    
    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick','editar('+tarefa.id+')');

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick','excluir('+tarefa.id+')');

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(spam);
    li.appendChild(div);

    return li;

}

function editar(idtarefa){
    if(li) {
        listaTarefa.removeChild(li);
    }
}

function excluir(idtarefa){
    let confirmaçao = window.confirm("deseja excluir?")
    if (confirmaçao){
        let li = document.getElementById('' + idtarefa + '');
        if(li) {
            listaTarefa.removeChild(li);
        }
    }
}
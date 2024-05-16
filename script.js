var ultimoValor = "O";
var todosInputs = []

function obterProximo(x){
    if(x.currentTarget.innerHTML) return;

    x.currentTarget.innerHTML = obterProximaJogada();

    verificarGanhador();
}

function obterProximaJogada(){
    ultimoValor = ultimoValor == 'X'
        ? ultimoValor = 'O'
        : ultimoValor = 'X';

    return ultimoValor;
}

function verificarGanhador(){
    var elementos = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
    
    elementos.forEach(function(id) {
        var elemento = document.getElementById(id);
        todosInputs.push(elemento);
    });

    if(todosInputs.every(x => !!x.innerHTML)) finalizarPartida();
    
    var [a1, a2, a3, b1, b2, b3, c1, c2, c3] = todosInputs.map(elemento => elemento.innerHTML);
    
    
    let l1hx = [a1, a2, a3].every(valor => valor === 'X');
    let l2hx = [b1, b2, b3].every(valor => valor === 'X');
    let l3hx = [c1, c2, c3].every(valor => valor === 'X');
    
    let l1vx = [a1, b1, c1].every(valor => valor === 'X');
    let l2vx = [a2, b2, c2].every(valor => valor === 'X');
    let l3vx = [a3, b3, c3].every(valor => valor === 'X');
    
    let v1x = [a3, b2, c1].every(valor => valor === 'X');
    let v2x = [a1, b2, c3].every(valor => valor === 'X');

    if(l1hx || l2hx || l3hx || l1vx || l2vx || l3vx || v1x || v2x){ abrirModal(); }

    let l1ho = [a1, a2, a3].every(valor => valor === 'O');
    let l2ho = [b1, b2, b3].every(valor => valor === 'O');
    let l3ho = [c1, c2, c3].every(valor => valor === 'O');
    
    let l1vo = [a1, b1, c1].every(valor => valor === 'O');
    let l2vo = [a2, b2, c2].every(valor => valor === 'O');
    let l3vo = [a3, b3, c3].every(valor => valor === 'O');
    
    let v1o = [a3, b2, c1].every(valor => valor === 'O');
    let v2o = [a1, b2, c3].every(valor => valor === 'O');

    if(l1ho || l2ho || l3ho || l1vo || l2vo || l3vo || v1o || v2o){ abrirModal(); }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function abrirModal() {
    let mensagem = document.getElementById('mensagemGanhador');
    mensagem.innerHTML = `O Jogador '${ultimoValor}' ganhou a partida`

    modal.style.display = "block";
}

function finalizarPartida() {
    let mensagem = document.getElementById('mensagemGanhador');
    mensagem.innerHTML = "Deu velha, começe uma nova partida!"

    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
    todosInputs.map(x => x.innerHTML = '')
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    todosInputs.map(x => x.innerHTML = '')
  }
}
let amigos = []; 

function adicionarAmigo() {
    let nomeInput = document.getElementById("nomeAmigo").value; 

    if (nomeInput.trim() === "") {
        alert("Por favor, insira um nome."); 
    } else {
        amigos.push(nomeInput);
        console.log(amigos);
        document.getElementById("nomeAmigo").value = ""; 
        atualizarListaAmigos();
        document.getElementById("resultado").innerHTML = "";
    }
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos"); 

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
   
    if (amigos.length === 0) {
        alert("Não há amigos para sortear."); 
        return;
    }

    if (amigos.length === 1) {
        alert("Adicione pelo menos duas pessoas para realizar o sorteio.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;

    amigos=[];
    document.getElementById("listaAmigos").innerHTML = "";
}

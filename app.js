let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("nomeAmigo").value.trim(); 

    if (nomeInput === "") {
        alert("Por favor, insira um nome."); 
        return;
    }

    if (amigos.includes(nomeInput)) {
        alert("Esse amigo já foi adicionado!");
        return;
    }

    amigos.push(nomeInput);
    document.getElementById("nomeAmigo").value = ""; 
    atualizarListaAmigos();
    document.getElementById("resultado").innerHTML = "";

}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li"); 
        li.textContent = amigo; 
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos duas pessoas para realizar o sorteio.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<strong>🎉 O amigo secreto sorteado é: ${amigoSorteado} 🏆</strong>`;

    confetti({
        particleCount: 100, 
        spread: 70,         
        origin: { y: 0.6 }  
    });

    amigos =[];
    document.getElementById("listaAmigos").innerHTML = "";

}

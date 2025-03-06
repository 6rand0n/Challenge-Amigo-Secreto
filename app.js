// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function AgregarAmigos() {
    let nombre = document.getElementById("amigo").value;

    if (nombre == "") {
        alert("Favor de ingresar un nombre!");
        return;
    }else{
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        ActualizarLista();
    }
}

function ActualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function SortearAmigo() {
    if(amigos.length == 0){
        alert("No hay amigos en la lista!");
        return;
    }else{
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.querySelector("#resultado").innerHTML = "El amigo Secreto es: " + amigoSorteado + "!!!";
    }
}
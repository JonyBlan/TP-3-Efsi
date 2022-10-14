const { exit } = require("process")

function verificar(){
    let nombre = document.getElementById("nombre").value
    let año = document.getElementById("año").value
    let tipo = document.getElementById("tipo").value
    if(nombre == "" || año == "" || tipo == ""){
        alert("Complete todos los campos para continuar.")
    }
    else{
        enviar()
    }
}

function enviar(){
    let nombre = document.getElementById("nombre").value
    let año = document.getElementById("año").value
    let tipo = document.getElementById("tipo").value
    axios({
        method: 'get',
        url: `http://www.omdbapi.com/?apikey=4592446c`,
        params: {
            s: nombre,
            type: tipo,
            y: año,
        }
    }).then(response => {
        let lista = document.getElementById("lista");
        let td1,td2,td3;
        lista.innerText = ""
        response.data.Search.forEach(dato => {
            tr = document.createElement("tr")
            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");
            td1.innerText = `${dato.Title}`;
            td2.innerText = `${dato.Year}`;
            td3.innerText = `${dato.Type}`;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            lista.appendChild(tr);
        });
    });
}
// git checkout -b NOMEDABRANCH
// git commit -m 'Comentário do commit da minha nova branch'
// git push --set-upstream origin NOMEDABRANCH
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutri";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < pacientes.length ; i+=1){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add('paciente-invalido')
    }

    if (altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add('paciente-invalido')
    }

    if (alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}


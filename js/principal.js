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

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();// nao deixa enviar os dados, pois a intencao e adicionar eles a tabela
    
    var form = document.querySelector('#form-adiciona');// captura todo conteudo do form
    
    // pegando o valor de cada elemento do form
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // criar os elementos do html com js
    var pacienteTr = document.createElement('tr');// cria uma TR

    // cria a td da tr
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    // apos criada as tds é preciso colocar o valor capturado dentro delas
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // agora é preciso colocar as tds dentro da tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // colocando a tr dentro da tabela de pacientes
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
});


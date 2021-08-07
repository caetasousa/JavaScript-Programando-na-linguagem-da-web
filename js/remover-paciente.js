// seleciona todas as trs de classe paciente
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    // para não remover de imediato, setTimeout conta em milisegundos e dispara o evento
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
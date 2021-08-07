var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();// nao deixa enviar os dados, pois a intencao e adicionar eles a tabela
    
    var form = document.querySelector('#form-adiciona');// captura todo conteudo do form
    
    var paciente = obtemPacienteDoFormulario(form);
    // pegando o valor de cada elemento do form
    //var nome = form.nome.value;
    //var peso = form.peso.value;
    //var altura = form.altura.value;
    //var gordura = form.gordura.value;

    // cria a tr a td do paciente
    var pacienteTr = montaTr(paciente);

    // colocando a tr dentro da tabela de pacientes
    var tabela = document.querySelector('#tabela-pacientes');
    // adiciona a Tr a tabela
    tabela.appendChild(pacienteTr);

    // limpa os dados depois de clicar no botao adicionar
    form.reset();
});

function obtemPacienteDoFormulario(form) {
    // criando um objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    // criar os elementos do html com js

    // cria o elemento TR
    var pacienteTr = document.createElement('tr');
    // cria a classe dentro da TR
    pacienteTr.classList.add('paciente');

    // Cria a Td
    var nomeTd = montaTd(paciente.nome, 'info-nome');
    var pesoTd = montaTd(paciente.peso, 'info-peso');
    var alturaTd = montaTd(paciente.altura, 'info-altura');
    var gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    var imcTd = montaTd(paciente.imc, 'info-imc');

    // agora é preciso colocar as tds dentro da tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe) {
    // cria a td
    var td = document.createElement('td');
    // adiciona o valor ao texto
    td.textContent = dado;
    // adiciona uma classe a td
    td.classList.add(classe);

    return td
}
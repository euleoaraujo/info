// Adiciona um escutador de eventos após carregar o conteúdo da página
document.addEventListener("DOMContentLoaded", function() {
    const nome = document.querySelector('#nome');
    const erroNome = document.querySelector('#erroNome');
    const email = document.querySelector('#email');
    const senha = document.querySelector('#senha');
    const erroEmail = document.querySelector('#erroEmail');
    const erroSenha = document.querySelector('#erroSenha');
    const button = document.querySelector('#btnEnviar');

    function validarFormulario(){
        const nomeValido = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/.test(nome.value.trim()); // Expressão regular para validar se nome e sobrenome começam com letras maiúsculas
        const emailValido = email.checkValidity();
        const senhaValido = senha.value.length >= 6;
        button.disabled = !(nomeValido && emailValido && senhaValido); // Desabilita o botão de envio dos dados caso os valores digitados não sejam válidos
    }


    nome.addEventListener("blur", function() {
        const valor = nome.value.trim(); // Pega o valor inserido no campo nome e ignora espaços em branco após o que foi digitado

        // Se o valor inserido no campo não estiver vazio, checar se foi digitado um valor válido
        if(valor !== ''){
            const valido = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/.test(nome.value.trim());
            erroNome.textContent = valido ? "" : "Digite nome e sobrenome com iniciais maiúsculas"; // Operadores ternários para manipular o DOM do elemento erroNome, inserir texto de aviso caso valor não seja válido
        } else { // Se o campo estiver vazio, nada foi digitado
            erroNome.textContent = ""; // Deixa o texto do elemento erroNome vazio
        }
        validarFormulario(); // Executa a função de validação do formulário após todas as condicionais serem testadas, reabilitando ou não o botão de envio
    });

    email.addEventListener("blur", function(){
        if(email.value.trim() !== ''){
            erroEmail.textContent = email.checkValidity() ? "" : "Use um formato de e-mail válido";
        } else {
            erroEmail.textContent = '';
        }
        validarFormulario();
    });

    senha.addEventListener("blur", function(){
        if(senha.value.trim() !== ""){
            erroSenha.textContent = senha.value.length >= 6 ? "" : "A senha deve conter no mínimo 6 caracteres";
        } else {
            erroSenha.textContent = '';
        }
        validarFormulario();
    });
});
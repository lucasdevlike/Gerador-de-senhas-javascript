let campoSenha = document.getElementById('campo-senha');
let botao = document.getElementById('botao-gerar');
let regSenha = '!@#$%&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';


botao.addEventListener('click', () => {
    let senhaAtual = '';

    for (let i = 0; i < 20; i++) {
        senhaAtual += regSenha[Math.floor(Math.random() * regSenha.length)];
    }

    campoSenha.value = senhaAtual

});
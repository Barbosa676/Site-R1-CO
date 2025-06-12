document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmar_senha');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

       
        if (nome.value.trim() === '') {
            alert('Por favor, insira seu nome completo.');
            return;
        }

    
        if (!email.value.includes('@')) {
            alert('Insira um e-mail válido.');
            return;
        }

       
        if (senha.value.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

     
        if (senha.value !== confirmarSenha.value) {
            alert('As senhas não coincidem.');
            return;
        }

        
        alert('Cadastro realizado com sucesso!');
        form.submit();
    });
});
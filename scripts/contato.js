document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('question-form');
    const conteudo = document.getElementById('question-input');
    const email = document.getElementById('email-input');

    form.addEventListener('submit', function (event) {
        if (conteudo.value.trim() === '') {
            event.preventDefault();
            alert('Por favor, insira sua mensagem.');
            return;
        }

        if (!email.value.includes('@')) {
            event.preventDefault();
            alert('Insira um e-mail válido.');
            return;
        }

        alert('Cadastro realizado com sucesso!');
    });
});

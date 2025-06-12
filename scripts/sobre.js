document.addEventListener('DOMContentLoaded', function() {
    console.log("Página de Sobre carregada com sucesso!");

    const founderLinks = document.querySelectorAll('.founder a');

    founderLinks.forEach(link => {
        link.addEventListener('click', function() {
            alert("Redirecionando para: " + this.href);
        });
    });
});
// Você pode adicionar funcionalidades aqui futuramente
console.log("Site da Associação Pássaro Livre carregado com sucesso!");

// Exemplo: mensagem ao enviar formulário
const form = document.querySelector('.formulario-contato');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    });
}
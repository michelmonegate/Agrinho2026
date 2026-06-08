// Script simples para enviar formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    formMessage.style.color = "#2e7d32";

    // Limpar formulário
    e.target.reset();
});












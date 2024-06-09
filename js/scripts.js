document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de toggle do menu
    const menuToggle = document.querySelector('.menu-toggle');
    // Seleciona a lista de links de navegação
    const navLinks = document.querySelector('.nav-links');
    // Seleciona o botão de boas-vindas
    const welcomeBtn = document.getElementById('welcome-btn');
    // Seleciona a mensagem de boas-vindas
    const welcomeMessage = document.getElementById('welcome-message');
    // Seleciona o botão de fechar na mensagem de boas-vindas
    const closeBtn = document.getElementById('close-btn');

    // Adiciona um evento de clique ao botão de toggle do menu
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active' na lista de links de navegação
        navLinks.classList.toggle('active');
    });

    // Adiciona um evento de clique ao botão de boas-vindas
    welcomeBtn.addEventListener('click', function() {
        // Mostra a mensagem de boas-vindas
        welcomeMessage.classList.remove('hidden');
    });

    // Adiciona um evento de clique ao botão de fechar na mensagem de boas-vindas
    closeBtn.addEventListener('click', function() {
        // Esconde a mensagem de boas-vindas
        welcomeMessage.classList.add('hidden');
    });
});
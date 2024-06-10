document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de toggle do menu
    const menuToggle = document.querySelector('.menu-toggle');
    // Seleciona a lista de links de navegação
    const navLinks = document.querySelector('.nav-links');
    // Seleciona o botão de boas-vindas (caso exista)
    const welcomeBtn = document.getElementById('welcome-btn');
    // Seleciona a mensagem de boas-vindas (caso exista)
    const welcomeMessage = document.getElementById('welcome-message');
    // Seleciona o botão de fechar na mensagem de boas-vindas (caso exista)
    const closeBtn = document.getElementById('close-btn');

    // Adiciona um evento de clique ao botão de toggle do menu
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active' na lista de links de navegação
        navLinks.classList.toggle('active');
    });

    // Verifica se o botão de boas-vindas existe antes de adicionar o evento de clique
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', function() {
            // Mostra a mensagem de boas-vindas
            welcomeMessage.classList.remove('hidden');
        });
    }

    // Verifica se o botão de fechar existe antes de adicionar o evento de clique
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // Esconde a mensagem de boas-vindas
            welcomeMessage.classList.add('hidden');
        });
    }
});

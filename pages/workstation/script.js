// Exibir ou esconder o menu ao clicar no perfil
document.getElementById('perfil').addEventListener('click', function() {
    var menu = document.getElementById('perfil-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Esconder o menu se o usuário clicar fora do perfil
window.addEventListener('click', function(event) {
    var menu = document.getElementById('perfil-menu');
    if (!event.target.closest('#perfil')) {
        menu.style.display = 'none';
    }
});

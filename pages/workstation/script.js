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

// Exibir a alteração de senha da direcao

document.getElementById('alterar-senha').addEventListener('click', function() {
    // Captura o div onde os novos campos serão inseridos
    const divNovosCampos = document.getElementById('div-novos-campos');

    // Criação dos novos elementos (labels e inputs)
    const campos = [
        { label: 'Senha Antiga', id: 'senha-antiga', type: 'password' },
        { label: 'Nova Senha', id: 'nova-senha', type: 'password' },
        { label: 'Confirmar Senha', id: 'confirmar-senha', type: 'password' }
    ];

    campos.forEach(campo => {
        // Cria o label
        const novoLabel = document.createElement('label');
        novoLabel.setAttribute('for', campo.id);
        novoLabel.textContent = campo.label;

        // Cria o input
        const novoInput = document.createElement('input');
        novoInput.setAttribute('type', campo.type);
        novoInput.setAttribute('name', campo.id);
        novoInput.setAttribute('id', campo.id);

        // Insere os novos elementos dentro do div
        divNovosCampos.appendChild(novoLabel);
        divNovosCampos.appendChild(document.createElement('br')); // quebra de linha
        divNovosCampos.appendChild(novoInput);
        divNovosCampos.appendChild(document.createElement('br')); // quebra de linha
    });

    // Desativa o botão para evitar múltiplas inserções
    this.disabled = true;
});



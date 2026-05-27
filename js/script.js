// Menu de categorias interativo
document.addEventListener('DOMContentLoaded', () => {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const sections = document.querySelectorAll('.category-section');

    // Função para trocar categoria ativa
    function switchCategory(categoryId) {
        // Esconder todas as seções
        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        // Mostrar a seção selecionada
        const activeSection = document.getElementById(categoryId);
        if (activeSection) {
            activeSection.classList.add('active-section');
        }

        // Atualizar botão ativo
        categoryBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === categoryId) {
                btn.classList.add('active');
            }
        });
    }

    // Adicionar evento de clique em cada botão
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            switchCategory(category);
        });
    });

    // Pequeno efeito visual: adicionar tooltip amigável (opcional)
    console.log('🍕 Cardápio J.T Pizzaria carregado! Peça já pelo telefone (81) 99000-1111');
});
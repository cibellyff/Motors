// Função genérica para filtrar os cards com base nos inputs e nas classes desejadas
function filterCards(filters, cards) {
    for (const card of cards) {
        let shouldDisplay = true;

        for (const filter of filters) {
            const title = card.querySelector(`.${filter.cardClass}`);
            const titleText = title.textContent.toLowerCase();

            if (filter.input.value !== '' && !titleText.includes(filter.input.value.toLowerCase())) {
                shouldDisplay = false;
                break;
            }
        }

        card.style.display = shouldDisplay ? 'block' : 'none';
    }
}

// Adiciona o listener de evento para cada filtro
function addFilterEventListener(filter, filters) {
    filter.input.addEventListener('input', () => {
        filterCards(filters, filter.cards);
    });
}

// Configuração dos filtros
const filtersConfig = [
    { input: document.querySelector('.filtros .marca input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'Marca' },
    { input: document.querySelector('.filtros .modelo input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'modelo' },
    { input: document.querySelector('.filtros .ano input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'ano' },
    { input: document.querySelector('.filtros .preco input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'preco' },
];

// Adiciona o listener de evento para cada filtro usando a configuração
for (const filterConfig of filtersConfig) {
    addFilterEventListener(filterConfig, filtersConfig);
}

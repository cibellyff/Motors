// Função genérica para filtrar os cards com base nos inputs e nas classes desejadas
function filterCards(filters, cards) {
    for (const card of cards) {
        let shouldDisplay = true;

        for (const filter of filters) {
            const title = card.querySelector(`.${filter.cardClass}`);
            const titleText = title.textContent.toLowerCase();

            // if (filter.cardClass === 'ano') {
            if (['preco_carro', 'ano_carro', 'km_carro'].includes(filter.cardClass)) {
            // if (['ano_carro'].includes(filter.cardClass)) {
                const filterValue = parseInt(filter.input.value, 10);
                const titleNumber = parseInt(titleText, 10);
                
                // window.alert(filter.filterClass)

                // if (filter.filterClass === 'ano_min_filtro' && !isNaN(filterValue) && !isNaN(titleNumber) && titleNumber < filterValue) {
                if (['ano_min_filtro', 'preco_min_filtro', 'km_min_filtro'].includes(filter.filterClass) && !isNaN(filterValue) && !isNaN(titleNumber) && titleNumber < filterValue) {
                    shouldDisplay = false;
                    break;
                }

                // if (filter.filterClass === 'ano_max_filtro' && !isNaN(filterValue) && !isNaN(titleNumber) && titleNumber > filterValue) {
                if (['ano_max_filtro', 'preco_max_filtro', 'km_max_filtro'].includes(filter.filterClass) && !isNaN(filterValue) && !isNaN(titleNumber) && titleNumber > filterValue) {
                    shouldDisplay = false;
                    break;
                }

            } else if (filter.input.value !== '' && !titleText.includes(filter.input.value.toLowerCase())) {
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
    { input: document.querySelector('.filtros .marca_filtro input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'marca_carro', filterClass: 'marca_filtro' },
    { input: document.querySelector('.filtros .modelo_filtro input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'modelo_carro', filterClass: 'modelo_filtro' },
    { input: document.querySelector('.filtros .ano_min_filtro input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'ano_carro', filterClass: 'ano_min_filtro' },
    { input: document.querySelector('.filtros .ano_max_filtro input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'ano_carro', filterClass: 'ano_max_filtro' },
    { input: document.querySelector('.filtros .preco_min_filtro input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'preco_carro', filterClass: 'preco_min_filtro' },
    { input: document.querySelector('.filtros .preco_max_filtro input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'preco_carro', filterClass: 'preco_max_filtro' },
    { input: document.querySelector('.filtros .km_min_filtro input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'km_carro', filterClass: 'km_min_filtro' },
    { input: document.querySelector('.filtros .km_max_filtro input'), cards: document.querySelectorAll('.anuncios_box li'), cardClass: 'km_carro', filterClass: 'km_max_filtro' },
];

// Adiciona o listener de evento para cada filtro usando a configuração
for (const filterConfig of filtersConfig) {
    addFilterEventListener(filterConfig, filtersConfig);
}

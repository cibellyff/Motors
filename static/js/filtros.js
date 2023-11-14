const filterMarca = document.querySelector('.filtros .marca input')

const cards = document.querySelectorAll('.anuncios_box li')

filterMarca.addEventListener('input', filterCards)

function filterCards() {

    if(filterMarca.value != '') {
        for (let card of cards) {
            let title = card.querySelector('.Marca')
            title = title.textContent.toLowerCase()

            let filterText = filterMarca.value.toLowerCase()

            if(!title.includes(filterText)) {
                card.style.display = "none"
            }
            else {
                card.style.display = "block"
            }
        }
    } else {
        for (let card of cards) {
            card.style.display = "block"
        }
    }
}

const filterModelo = document.querySelector('.filtros .modelo input')

const cards1 = document.querySelectorAll('.anuncios_box li')

filterModelo.addEventListener('input', filterCards1)

function filterCards1() {

    if(filterModelo.value != '') {
        for (let card of cards1) {
            let title = card.querySelector('.modelo')
            title = title.textContent.toLowerCase()

            let filterText = filterModelo.value.toLowerCase()

            if(!title.includes(filterText)) {
                card.style.display = "none"
            }
            else {
                card.style.display = "block"
            }
        }
    } else {
        for (let card of cards1) {
            card.style.display = "block"
        }
    }
}

const filterano = document.querySelector('.filtros .ano input')

const cards2 = document.querySelectorAll('.anuncios_box li')

filterano.addEventListener('input', filterCards2)

function filterCards2() {

    if(filterano.value != '') {
        for (let card of cards2) {
            let title = card.querySelector('.ano')
            title = title.textContent.toLowerCase()

            let filterText = filterano.value.toLowerCase()

            if(!title.includes(filterText)) {
                card.style.display = "none"
            }
            else {
                card.style.display = "block"
            }
        }
    } else {
        for (let card of cards2) {
            card.style.display = "block"
        }
    }
}

const filterpreco = document.querySelector('.filtros .preco input')

const cards3 = document.querySelectorAll('.anuncios_box li')

filterpreco.addEventListener('input', filterCards3)

function filterCards3() {

    if(filterpreco.value != '') {
        for (let card of cards3) {
            let title = card.querySelector('.preco')
            title = title.textContent.toLowerCase()

            let filterText = filterpreco.value.toLowerCase()

            if(!title.includes(filterText)) {
                card.style.display = "none"
            }
            else {
                card.style.display = "block"
            }
        }
    } else {
        for (let card of cards3) {
            card.style.display = "block"
        }
    }
}
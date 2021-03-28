var verMais = document.querySelectorAll(".hvr-inner")
verMais.forEach(elemento => {
    elemento.addEventListener("click", abrirPush)
})

function abrirPush(e) {
    var idx = (e.target.closest(".movie-item-style-1").dataset.id)
    createBox(livros[idx])
}

var livros = [{
        id: 0,
        title: "POEMAS",
        rate: 7.4,
        img: "https://img.wattpad.com/cover/221029555-200-k174998.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },
    {
        id: 1,
        title: "meu livro",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },
    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },
    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },
    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },
    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },
    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },
    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },
    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },
    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },

    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },

    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },

    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },

    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },

    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },

    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },

    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },

    {
        id: 2,
        title: "Eu te amo",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/159175389-288-k70652.jpg",
        resumo: "Você acredita no AMOR? Você acredita que ele pode 'colorir' esse mundo tão cinza? Você acredita que ele pode te surpreender? Se a sua resposta for 'sim', fico feliz em saber que o Amor está em você. Mas se a sua resposta for 'não', saiba que eu respeito a sua forma de pensar. Porém, preciso te falar um velho ditado que sempre me diziam: O amor só existe em contos de fadas. Só que eu fui contra essa maneira de pensar, procurei sentir o Amor de verdade e olha só, deu certo! Percebi que mesmo e...",
        link: "https://www.wattpad.com/867525049-poemas-pequenas-doses-de-amor-dedicat%C3%B3ria",
    },


]
for (livro of livros) {
    document.querySelector("body > li > center > div.container > div").appendChild(createBook(livro))
}

function createBook(livro) {
    var divStyle = document.createElement("div")
    var divInner = document.createElement("div")
    var divItem = document.createElement("div")
    var img = document.createElement("img")
    var span = document.createElement("span")
    var h6 = document.createElement("h6")
    var p = document.createElement("p")
    var spanStar = document.createElement("span")
    var spanRate = document.createElement("span")

    divStyle.appendChild(img)
    divStyle.appendChild(divInner)
    divStyle.appendChild(divItem)
    divInner.appendChild(span)
    divItem.appendChild(h6)
    divItem.appendChild(p)
    p.appendChild(spanStar)
    p.appendChild(spanRate)

    divStyle.classList.add("movie-item-style-2")
    divStyle.classList.add("movie-item-style-1")
    divStyle.dataset.id = livro.id
    divStyle.addEventListener('click', abrirPush)

    img.setAttribute('src', livro.img)

    divInner.classList.add("hvr-inner")

    span.innerHTML = "Ver resumo..."

    divItem.classList.add("mv-item-infor")

    h6.innerHTML = livro.title

    p.classList.add("rate")

    spanStar.innerHTML = "<span style='color: rgb(255, 217, 0)'>★</span>" 

    spanRate.innerHTML = livro.rate + "/10"

    return divStyle
}

function createBox(livro) {
    var divBox = document.createElement("div")
    var article = document.createElement("article")
    var img = document.createElement("img")
    var divInfo = document.createElement("div")
    var p = document.createElement("p")
    var strong = document.createElement("strong")
    var a = document.createElement("a")

    document.body.appendChild(divBox)
    divBox.appendChild(article)
    article.appendChild(img)
    article.appendChild(divInfo)
    divInfo.appendChild(p)
    divInfo.appendChild(a)
    p.appendChild(strong)

    divBox.classList.add("box")
    divBox.addEventListener("click", function() {
        divBox.remove()
    })
    img.setAttribute("src", livro.img)
    divInfo.classList.add("info")
    strong.innerHTML = livro.title
    p.innerHTML += "<br><br>" + livro.resumo + "<br><br>"
    a.setAttribute("href", livro.link)
    a.setAttribute("target", "_blank")
    a.classList.add("link")
    a.innerHTML = "Leia-me!"

}
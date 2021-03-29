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
        title: "A Escolha - Uma Luta Pela Liberdade.",
        rate: 6.5,
        img: "https://img.wattpad.com/cover/232876871-512-k428030.jpg",
        resumo: "Lucy encontrava-se totalmente confusa, e então seguiu pela pior das direções que poderia imaginar. Vivia um romance com Carter que vinha de uma família humilde, e casta sete, porém o seu amor  era maior do que qualquer fortuna existente no mundo. Quando então deparou-se com o coração partido por outro alguém que imaginava ser a pessoa que iria mudar sua vida para melhor, e não drasticamente. Lucy sempre fora determinada e corajosa, mas agia de forma impulsiva, viu seu futuro e de sua família nas mãos do homem de casta dois, ao qual não amava, o que gerou consequências terríveis para todos. Até que um dia, Lucy descobre uma carta secreta, e depois disso, sua vida nunca mais será a mesma...",
        link: "https://www.wattpad.com/story/232876871",
    },
    {
        id: 1,
        title: "Saga Dos Feroeses",
        rate: 7.6,
        img: "https://img.wattpad.com/cover/258591011-512-k928843.jpg",
        resumo: "A Saga dos Feroeses e uma saga nórdica sobre o povo feroês, contando a história da colonização das Ilhas Feroé, da conversão dos habitantes ao cristianismo, e da integração do arquipélago no Reino da Noruega. Essa saga foi escrita na Islândia pouco depois do ano 1200. O autor é desconhecido e o manuscrito original se perdeu na história, mas as passagens foram copiadas em outras sagas, especialmente em outros três manuscritos: A Saga de Olavo Tryggvasonar, o Flateyjarbók, e A Saga de Thrond of Gate.",
        link: "https://www.wattpad.com/story/258591011-saga-dos-feroeses-a-hist%C3%B3ria-das-ilhas-faro%C3%A9",
    },
    {
        id: 2,
        title: "Desejo sombrio",
        rate: 9.4,
        img: "https://img.wattpad.com/cover/261253546-512-k18099.jpg",
        resumo: "",
        link: "https://www.wattpad.com/1036171105-desejo-sombrio-introdu%C3%A7%C3%A3o",
    },
    {
        id: 3,
        title: "Shadow Hack {846-990}",
        rate: 7.0,
        img: "https://img.wattpad.com/cover/218858599-512-k658752.jpg",
        resumo: "Por una coincidencia, Li Yunmu descubrió una súper máquina de la época de la oscuridad de la humanidad. A partir de ese momento, su vida ordinaria jamás sería la misma. ¿Aptitud? ¿Talento innato? Que son estas cosas? ¿Acaso podrían comerse? Yo no tengo aptitud ni habilidad innata, pero mi sombra puede subir de nivel utilizando hacks... Experiencia, puntos de habilidad, destreza de batalla...",
        link: "https://www.wattpad.com/story/218858599-shadow-hack-846-990",
    },
    {
        id: 4,
        title: "A Feiticeira Púrpura",
        rate: 9.4,
        img: "https://img.wattpad.com/cover/104030160-512-k627061.jpg",
        resumo: "A muito tempo surgiram as Feiticeiras Púrpuras, mulheres que tinham como objetivo proteger a todo ser vivo, porém com o surgimento dos reinos elas passaram a ser perseguidas, Mallory Woodcent era uma delas, uma Feiticeira muito conhecida, já que sua mãe, Anna era muito querida por todos, infelizmente a jovem de dezesseis anos  não conheceu a mãe... Esta morreu para salvar a garota, que tinha apenas onze meses      O que Mallory não sabia é que a paz em sua vida estava prestes a acabar...",
        link: "https://www.wattpad.com/story/104030160-a-feiticeira-p%C3%BArpura",
    },
    {
        id: 5,
        title: "Bosque Prohibido |Yoonmin|",
        rate: 8.7,
        img: "https://img.wattpad.com/cover/88645883-512-k769223.jpg",
        resumo: "El pequeño lobo nunca imaginó que al estar huyendo de su propia manada caería en las garras del más sádico vampiro de las últimas dos décadas. Uno pensaría que más mala suerte no se podría tener, pero lastima para jimin, este vampiro estaba buscando a la persona indicada para que le diera un hijo. La encontró.",
        link: "https://www.wattpad.com/story/88645883-bosque-prohibido-yoonmin",
    },
    {
        id: 6,
        title: "Immortal || Niall Horan",
        rate: 7.4,
        img: "https://img.wattpad.com/cover/44080238-512-k799582.jpg",
        resumo: "Clarice Jones é uma caçadora, uma caçadora de infectados. Infectados são pessoas que foram modificadas por gases tóxicos durante a terceira guerra mundial. Ela caçava e estudava-os, depois eles eram executados. Mas havia um que não podia ser executado...",
        link: "https://www.wattpad.com/story/92128475-mil-estrelas-por-voc%C3%AA-em-revis%C3%A3o",
    },
    {
        id: 7,
        title: "Mil Estrelas por Você",
        rate: 7.7,
        img: "https://img.wattpad.com/cover/92128475-512-k693755.jpg",
        resumo: "Catléya é uma jovem que não tem mais nada na vida, e vive perambulando de casa em casa, roubando comida para se manter viva. E em um de seus roubos, em uma grande fazenda, ela se vê na situação mais complicada de todas: ser levada por um ladrão de gado de outro mundo.",
        link: "https://www.wattpad.com/story/92128475-mil-estrelas-por-voc%C3%AA-em-revis%C3%A3o",
    },
    {
        id: 8,
        title: "Laura Stark",
        rate: 9.9,
        img: "https://img.wattpad.com/cover/153868392-512-k419060.jpg",
        resumo: "Em Júpiter, um cientista instalou uma base de pesquisa e testes para criar coisas incríveis e imbatíveis. Sua intenção é criar algo que destrua um grupo muito famoso na Terra, que está prestes a começar a agir. Para isso, Weber Schneider irá usar uma pessoa que é muito mais do que uma simples cobaia nessa história ",
        link: "https://www.wattpad.com/story/153868392-laura-stark-a-filha-perdida-do-homem-de-ferro",
    },
    {
        id: 9,
        title: "A Mais Nova Vingadora",
        rate: 7.4,
        img: "https://img.wattpad.com/cover/176902055-512-k489235.jpg",
        resumo: "Fabel Isobel  uma alienígena disfarçada na terra como Safira Darves vive uma vida normal,até que um dia se ve forçada a usar seus poderes para ajudar uma garotinha. Assim que seus poderes vieram a tona a S.H.I.E.L.D se intereçou,mas pelo que parece não  é só ela....",
        link: "https://www.wattpad.com/story/176902055-a-mais-nova-vingadora",
    },

    {
        id: 10,
        title: "Love on Maze Runner?",
        rate: 8.9,
        img: "https://img.wattpad.com/cover/106758687-512-k815623.jpg",
        resumo: "O amor fraterno entre os moradores da Clareira era notável, mas, por mais raro que fosse, era possível encontrar amor romântico/carnal por ali. Brookylin, sendo a única garota a morar na Clareira, era irmã de todos, mas podia apontar quais deles eram apaixonados por ela.",
        link: "https://www.wattpad.com/story/106758687-love-on-maze-runner-1-revis%C3%A3o",
    },

    {
        id: 11,
        title: "Sinistra",
        rate: 8.4,
        img: "https://img.wattpad.com/cover/31023324-512-k968126.jpg",
        resumo: "Em um futuro distante, um vírus consegue exterminar a América do Sul, transformando os infectados em mortos-vivos. Dois anos se passaram e agora os mortos-vivos tomam conta da cidade. ",
        link: "https://www.wattpad.com/story/31023324-sinistra",
    },

    {
        id: 12,
        title: "Torem Urbis - O Herdeiro do Trono",
        rate: 9.1,
        img: "https://img.wattpad.com/cover/32283962-512-k969280.jpg",
        resumo: "No princípio, antes da criação do Homem, Lúcifer foi expulso do céu junto com a terça parte dos anjos e iniciou uma guerra contra todos os seres originados por Deus. Para deter o avanço infernal, uma raça foi criada especificamente para a guerra: os Elevados. ",
        link: "https://www.wattpad.com/story/32283962-torem-urbis-o-herdeiro-do-trono",
    },

    {
        id: 13,
        title: "Noite eterna (Livro 1)",
        rate: 6.4,
        img: "https://img.wattpad.com/cover/69387898-512-k884198.jpg",
        resumo: "Plágio é crime. Todos os meus livros estão registrados na Dirección nacional del derecho de autor em Buenos Aires. Expediente: 5298019 Você provavelmente conhece uma infinidade de contos de fadas eternizados através do tempo, convertidos em melodias, músicas de ninar...",
        link: "https://www.wattpad.com/story/69387898-noite-eterna-livro-1",
    },

    {
        id: 14,
        title: "FALANGE _Caminho das Estrelas I",
        rate: 7.5,
        img: "https://img.wattpad.com/cover/52268958-512-k722845.jpg",
        resumo: "Aparentemente, a vida de Eveline não poderia piorar mais que isso. Depois de sobreviver a um misterioso acidente onde supostamente deveria ter morrido, as coisas saem fora do controle, e acontecimentos estranhos passam a se desenrolar à sua volta. ",
        link: "https://www.wattpad.com/story/52268958-falange-_caminho-das-estrelas-i-em-revis%C3%A3o-edi%C3%A7%C3%A3o",
    },

    {
        id: 15,
        title: "Vingança Divina",
        rate: 7.2,
        img: "https://img.wattpad.com/cover/233852390-512-k319469.jpg",
        resumo: "Eles continuam atrás de uma forma de sobreviver, se unem para lutar e se ajudar, enquanto a Primeira Mulher começa sua vingança. Ela está disposta a destruir tudo que esteja em seu caminho, mesmo os inocentes. Ela quer a morte de todos os deuses. Deuses que se escondem entre os mortais, fugindo da ira de sua criadora. ",
        link: "https://www.wattpad.com/story/233852390-vingan%C3%A7a-divina",
    },

    {
        id: 16,
        title: "A Princesa Mestiça [PRÉVIA]",
        rate: 8.8,
        img: "https://img.wattpad.com/cover/213028124-512-k976209.jpg",
        resumo: "No passado o suposto assassinato do Rei cruzou pelos quatro reinos, e o bem mais precioso que os unificaria no futuro se perde. Dezessete anos mais tarde o atual Rei e governate de Thedas descobre que o Rei anterior a ele, seu irmão, havia sofrido um golpe no que o levou ao suposto assassinato. ",
        link: "https://img.wattpad.com/cover/213028124-512-k976209.jpg",
    },

    {
        id: 17,
        title: "TREVAS A ARMADURA",
        rate: 6.1,
        img: "https://img.wattpad.com/cover/232710090-512-k517627.jpg",
        resumo: "Uma Joven vampira amargurada pela dor, esse foi o presente que o passado lhe proporcionou. Ela jura vingança a um reino de vampiros. Sempre acabando com a alegria, torturando os moradores daquele lugar, sempre levando o cáos por onde passa.",
        link: "https://www.wattpad.com/story/232710090-trevas-a-armadura-de-um-cora%C3%A7%C3%A3o-destru%C3%ADdo",
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
class NewsCard extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const tituloNoticia = document.createElement("a");        
        tituloNoticia.textContent = this.getAttribute("title");
        tituloNoticia.href = this.getAttribute("url-meuGithub");

        const subTituloNoticia = document.createElement("p");
        subTituloNoticia.textContent = this.getAttribute("subtitle");


        cardLeft.appendChild(autor);
        cardLeft.appendChild(tituloNoticia);
        cardLeft.appendChild(subTituloNoticia);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__Right");

        const Imagem = document.createElement("img");
        Imagem.src = this.getAttribute("url-image") || "/assets/Img-Default.png";
        Imagem.alt = "Foto do Batman"

        cardRight.appendChild(Imagem);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);



        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
            margin-bottom: 30px;
            box-shadow: 5px 9px 25px 10px #808080, 5px 5px 10px 1px #000;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 15px;
                    
        }
        
        .card_left > span {
            font-weight: 400;
            margin-top: 10px;
        }
        
        .card_left > a {
            padding-top: 10px;
            padding-bottom: 5px;
            font-size: 30px;
            font-weight: bold;
            color: black;
            text-decoration: none;
        }
        
        .card_left > p {
            padding-top: 5px;
            color: rgb(80, 78, 78);
        }
    `

        return style;
    }

}



customElements.define("card-news", NewsCard);
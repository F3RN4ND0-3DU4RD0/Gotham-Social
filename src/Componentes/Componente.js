class NewsCard extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__Left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const tituloNoticia = document.createElement("a");
        tituloNoticia.href = this.getAttribute("url-meuGithub");
        tituloNoticia.textContent = this.getAttribute("title");

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

    style() {
        const style = document.createElement("style");
        style.textContent = `
        .card{
            display: flex;
            flex-direction: row;
            width: 80%;
            margin-bottom: 30px;
            box-shadow: 5px 9px 25px 10px #808080, 5px 5px 10px 1px #000;
        }

        .card__Left{
            justify-content: center;
            padding-left: 15px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }

        .card__Left > span{
            font-weight: 400;
        }

        .card__Left > h1{
            padding-top: 10px;
            padding-bottom: 5px;
            font-weight: bold;
        }

        .card__Left > p{
            padding-top: 5px;
            color: rgb(80, 80, 80);
        }
                `

        return style;
    }

}



customElements.define("card-news", NewsCard);
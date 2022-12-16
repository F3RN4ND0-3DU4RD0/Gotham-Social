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
        autor.textContent = "By Fernando Eduardo";

        const tituloNoticia = document.createElement("a");
        tituloNoticia.setAttribute("href", "https://github.com/F3RN4ND0-3DU4RD0/F3RN4ND0-3DU4RD0");
        tituloNoticia.textContent = "Um novo programador chegou na área!";

        const subTituloNoticia = document.createElement("p");
        subTituloNoticia.textContent = "Ainda aprendendo, mas com boas expectativas e muita vontade.";


        cardLeft.appendChild(autor);
        cardLeft.appendChild(tituloNoticia);
        cardLeft.appendChild(subTituloNoticia);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__Right");

        const Imagem = document.createElement("img");
        Imagem.setAttribute("src", "/assets/vendetta.jpg");

        cardRight.appendChild(Imagem);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);



        return componentRoot;
    }

    style() {


        return
    }

}



customElements.define("card-news", NewsCard);
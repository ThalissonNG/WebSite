    const carrossel = document.querySelector(".cards-servicos");
    const wrapper = document.querySelector(".carrossel-wrapper");
    const cards = document.querySelectorAll(".card-servico");
    const btnEsq = document.querySelector(".btn-seta.esquerda");
    const btnDir = document.querySelector(".btn-seta.direita");

    const cardsVisiveis = 5;
    const totalCards = cards.length;

    // Tamanho total de um card + gap
    const larguraCard = cards[0].offsetWidth;
    const gap = 20;
    let index = 0;

    function atualizarTransform() {
        const deslocamento = index * (larguraCard + gap);
        carrossel.style.transform = `translateX(-${deslocamento}px)`;
    }

    btnDir.addEventListener("click", () => {
        if (index < totalCards - cardsVisiveis) {
        index++;
        atualizarTransform();
        }
    });

    btnEsq.addEventListener("click", () => {
        if (index > 0) {
        index--;
        atualizarTransform();
        }
    });


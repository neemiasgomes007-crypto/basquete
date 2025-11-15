// script.js - controla o botão "Mostrar mais" sem causar zoom/scroll estranho
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnShow");
    const extra = document.getElementById("extraContent");

    if (!btn || !extra) return;

    // garante estado inicial consistente
    extra.classList.add("hidden");
    btn.textContent = "Mostrar mais";

    btn.addEventListener("click", () => {
        const isHidden = extra.classList.contains("hidden");

        if (isHidden) {
            extra.classList.remove("hidden");
            btn.textContent = "Esconder história";
            // evita que a imagem de fundo sofra leitura de layout estranha
            // rola suavemente pro conteúdo expandido (opcional)
            setTimeout(() => {
                extra.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 120);
        } else {
            extra.classList.add("hidden");
            btn.textContent = "Mostrar mais";
            // volta o foco pro botão (melhora UX)
            btn.focus({ preventScroll: true });
        }
    });

    // Previne qualquer script externo de dar transform/scale nas imagens do card
    // (aplica inline style seguro)
    const cardImgs = document.querySelectorAll(".card img");
    cardImgs.forEach(img => {
        img.style.transition = "none";
        img.style.transform = "none";
        img.style.maxWidth = "100%";
        img.style.display = "block";
    });
});

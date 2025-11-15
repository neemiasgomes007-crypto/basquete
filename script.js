const btn = document.getElementById("btnShow");
const extra = document.getElementById("extraContent");

btn.addEventListener("click", () => {
    if (extra.classList.contains("hidden")) {
        extra.classList.remove("hidden");
        btn.innerText = "Esconder história";
    } else {
        extra.classList.add("hidden");
        btn.innerText = "Mostrar mais";
    }
});

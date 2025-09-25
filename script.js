document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("#theme-switch");
    const body = document.body;

    let trocado = false;

    botao.addEventListener("click", () => {
        if (!trocado) {
            body.style.backgroundImage = "url('imagens/a.svg')";
            trocado = true;
        } else {
            body.style.backgroundImage = "url('imagens/pattern-background-desktop.svg')";
            trocado = false;
        }
    });
});

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enebleDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode === "active") {
    enebleDarkmode()
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enebleDarkmode() : disableDarkmode()
})
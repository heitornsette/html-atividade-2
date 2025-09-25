document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("#theme-switch");

    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        document.body.style.backgroundImage = "url('imagens/pattern-background-desktop-dark.svg')";
        localStorage.setItem('darkmode', 'active');
    };

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        document.body.style.backgroundImage = "url('imagens/pattern-background-desktop.svg')";
        localStorage.removeItem('darkmode');
    };

    if (localStorage.getItem('darkmode') === "active") {
        enableDarkmode();
    }

    botao.addEventListener("click", () => {
        document.body.classList.contains('darkmode') 
            ? disableDarkmode() 
            : enableDarkmode();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Carrega o header
    fetch("../Components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Só agora o botão existe! Então adicionamos o evento aqui:
            const menu = document.getElementById("menu");
            const nav = document.querySelector("nav");

            if (menu && nav) {
                menu.addEventListener("click", () => {
                    nav.classList.toggle("active");
                    menu.classList.toggle("active");
                });
            }
        });

    // Carrega o footer
    fetch("../Components/footer.html")
        .then(res => res.text())
        .then(data => document.getElementById("footer").innerHTML = data);

    // Define o favicon
    document.getElementById("favicon").href = "../Assets/Logo (1).svg";
});

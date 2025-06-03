document.addEventListener("DOMContentLoaded", () => {
    fetch("../Components/header.html")
        .then(res => res.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("../Components/footer.html")
        .then(res => res.text())
        .then(data => document.getElementById("footer").innerHTML = data);
    });
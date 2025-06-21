
function abrirmenu() {
    let menu = document.getElementById("menu")
    console.log(menu.style.display)
    if (menu.style.display === "none" || menu.style.display === "") {
        console.log("test")
        menu.style.display = "block"
    }
    else {
        menu.style.display = "none"
    }
}
function mostrarMensagem() {
    alert("Olá");
}
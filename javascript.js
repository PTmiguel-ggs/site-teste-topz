
function abrirmenu() {
    let menu = document.getElementById("menu")
    
    if (menu.style.display === "none") {
        console.log("test")
        menu.style.display = "block"
    }
    else {
        menu.style.display = "none"
    }
}

function abrirmenu() {
  let menu = document.getElementById("menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Textos em português e inglês
const texts = {
  pt: {
    titulo: "Mike",
    descricao: "Tenho 13 anos e tenho habilidades em HTML, CSS e JavaScript.",
    footer: "Tudo que tem aqui nesta página foi feito por mim",
  },
  en: {
    titulo: "Mike",
    descricao: "I'm 13 and I have skills in HTML, CSS, and JavaScript.",
    footer: "Everything on this page was created by me",
  },
};

// Referências dos elementos que mudam
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const footerText = document.getElementById("footer-text");

function setLanguage(lang) {
  if (!texts[lang]) return;
  titulo.textContent = texts[lang].titulo;
  descricao.textContent = texts[lang].descricao;
  footerText.textContent = texts[lang].footer;
}

// Configura os botões para mudar o idioma ao clicar
document.getElementById("btn-pt").addEventListener("click", () => setLanguage("pt"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

// Inicia em inglês
setLanguage("en");

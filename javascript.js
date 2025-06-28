function abrirmenu() {
  let menu = document.getElementById("menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Textos para tradução
const texts = {
  pt: {
    titulo: "Mike",
    descricao: "Tenho 16 anos e possuo habilidades em HTML, CSS e JavaScript.",
    "link-timer": "-- site do temporizador/tempo/horas",
    "link-subnautica": "-- site Subnautica",
    "link-listas": "-- site listas",
    "link-calculadora": "-- site calculadora",
    "link-dino": "-- site do dinossauro",
    "footer-text": "Tudo que tem aqui nesta página foi feito por mim",
  },
  en: {
    titulo: "Mike",
    descricao: "I'm 13 and I have skills in HTML, CSS, and JavaScript.",
    "link-timer": "-- timer/clock site",
    "link-subnautica": "-- Subnautica site",
    "link-listas": "-- lists site",
    "link-calculadora": "-- calculator site",
    "link-dino": "-- dinosaur site",
    "footer-text": "Everything on this page was created by me",
  },
};

function setLanguage(lang) {
  for (const id in texts[lang]) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = texts[lang][id];
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage("pt"); // idioma padrão

  document.getElementById("btn-pt").addEventListener("click", () => {
    setLanguage("pt");
  });

  document.getElementById("btn-en").addEventListener("click", () => {
    setLanguage("en");
  });
});

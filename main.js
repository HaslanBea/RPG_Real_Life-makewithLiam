import { loadNavbar } from "./components/navbar/navbar.js";
import { loadHero } from "./components/hero/hero.js";
import { loadRankingData } from "./components/ranking/ranking.js";

loadNavbar();
loadHero();

async function loadComponent(id, path, callback) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(path);
    el.innerHTML = await res.text();
    if (callback) callback();
  } catch (err) {
    console.error(`Erro ao carregar ${path}`, err);
  }
}

/* Ranking MODELOS */
loadComponent(
  "ranking",
  "./components/ranking/ranking.html",
  () => {

    // MODELOS
    loadRankingData({
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSsnDGbjG-TFRaB_kRIpb1fFzkk4LPS8g49nNq-owDF5Cp5HyXgG75TtnvfoxEdaTh3gkFpyrq7m6v/pub?gid=1571741723&single=true&output=csv",
      tableSelector: ".ranking-modelos"
    });

    // FOTÓGRAFOS
    loadRankingData({
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSsnDGbjG-TFRaB_kRIpb1fFzkk4LPS8g49nNq-owDF5Cp5HyXgG75TtnvfoxEdaTh3gkFpyrq7m6v/pub?gid=1722476536&single=true&output=csv",
      tableSelector: ".ranking-fotografos"
    });

    // INFLUENCIADORES
    loadRankingData({
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSsnDGbjG-TFRaB_kRIpb1fFzkk4LPS8g49nNq-owDF5Cp5HyXgG75TtnvfoxEdaTh3gkFpyrq7m6v/pub?gid=780073600&single=true&output=csv",
      tableSelector: ".ranking-influencers"
    });

  }
);


/* Outros componentes */
loadComponent("destaque", "./components/destaque/destaque.html");
loadComponent("top-three", "./components/TopThree/topThree.html");
loadComponent("about-system", "./components/AboutSystem/aboutSystem.html");
loadComponent("highlights", "./components/Highlights/highlights.html");
loadComponent("footer", "./components/footer/footer.html");
loadComponent("enquete", "./components/enquete/enquete.html");


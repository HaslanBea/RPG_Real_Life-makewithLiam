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

loadComponent(
  "ranking",
  "./components/ranking/ranking.html",
  loadRankingData
);

loadComponent("top-three", "./components/TopThree/topThree.html");
loadComponent("about-system", "./components/AboutSystem/aboutSystem.html");
loadComponent("highlights", "./components/Highlights/highlights.html");
loadComponent("destaque", "./components/destaque/destaque.html");
loadComponent("footer", "./components/footer/footer.html");
loadComponent("enquete", "./components/enquete/enquete.html");



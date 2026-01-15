import { loadNavbar } from "./components/navbar/navbar.js";
import { loadHero } from "./components/hero/hero.js";
import { loadRanking } from "./components/ranking/ranking.js"; // já existente


loadNavbar();
loadHero();
loadRanking();

async function loadComponent(id, path) {
  const response = await fetch(path);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

loadComponent('about', './components/AboutSystem/aboutSystem.html');
loadComponent('top-three', './components/TopThree/topThree.html');

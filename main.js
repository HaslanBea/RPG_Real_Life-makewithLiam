import { loadNavbar } from "./components/navbar/navbar.js";
import { loadHero } from "./components/hero/hero.js";

loadNavbar();
loadHero();

async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(path);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error(`Erro ao carregar ${path}`, err);
  }
}

loadComponent("top-three", "./components/TopThree/topThree.html");
loadComponent("about-system", "./components/AboutSystem/aboutSystem.html");

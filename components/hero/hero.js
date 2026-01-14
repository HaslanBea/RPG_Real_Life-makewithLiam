export async function loadHero() {
  const html = await fetch("./components/hero/hero.html")
    .then(res => res.text());

  document.getElementById("hero").innerHTML = html;
}

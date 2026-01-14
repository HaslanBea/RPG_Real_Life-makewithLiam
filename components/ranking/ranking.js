export async function loadRanking() {
  const app = document.getElementById("app");

  // carrega HTML
  const html = await fetch("./components/ranking/ranking.html")
    .then(res => res.text());

  app.innerHTML = html;

  // carrega CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./components/ranking/ranking.css";
  document.head.appendChild(link);

  // lógica
  loadRankingData();
}

function loadRankingData() {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSsnDGbjG-TFRaB_kRIpb1fFzkk4LPS8g49nNq-owDF5Cp5HyXgG75TtnvfoxEdaTh3gkFpyrq7m6v/pub?gid=860761833&single=true&output=csv";

  fetch(url)
    .then(res => res.text())
    .then(text => {
      const linhas = text
        .split("\n")
        .map(l => l.trim())
        .filter(l => l && !l.toLowerCase().startsWith("id"));

      const tbody = document.querySelector(".ranking tbody");

      linhas.forEach((linha) => {
  const sep = linha.includes(";") ? ";" :
              linha.includes("\t") ? "\t" : ",";

  const cols = linha.split(sep);

  const nome = cols[1]?.trim();
  const xp = cols[2]?.trim();
  const categoria = cols[3]?.trim();

  if (!nome || !xp || xp === "0") return;

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td></td>
    <td>${nome}</td>
    <td>${categoria}</td>
    <td>${xp}</td>
  `;

  tbody.appendChild(tr);
});
   
    });
}

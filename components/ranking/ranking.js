export function loadRankingData() {
  const url = "public/dados/Modelos.csv";

  fetch(url)
    .then(res => res.text())
    .then(text => {
      const linhas = text
        .split("\n")
        .map(l => l.trim())
        .filter(l => l);

      const tbody = document.querySelector(".ranking tbody");
      if (!tbody) return;

      tbody.innerHTML = "";

      linhas.forEach((linha, index) => {
        const cols = linha.split(",");

        const nome = cols[1];
        const medalha = cols[2];
        const pontos = cols[3];
        const xp = cols[4];

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${nome}</td>
          <td>${medalha}</td>
          <td>${pontos}</td>
          <td>${xp}</td>
        `;

        tbody.appendChild(tr);
      });
    });
}

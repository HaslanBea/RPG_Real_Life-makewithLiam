export function loadRankingData(url, containerSelector) {
  fetch(url + "&t=" + Date.now())
    .then(res => res.text())
    .then(text => {
      const linhas = text
        .split("\n")
        .map(l => l.trim())
        .filter(l => l && !l.toLowerCase().startsWith("id"));

      const container = document.querySelector(containerSelector);
      if (!container) return;

      const tbody = container.querySelector("tbody");
      if (!tbody) return;

      tbody.innerHTML = "";

      linhas.forEach((linha, index) => {
        const cols = linha.split(",");

        const nome = cols[1]?.trim();
        const xp = cols[2]?.trim();

        if (!nome || !xp) return;

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${nome}</td>
          <td>${xp}</td>
        `;

        tbody.appendChild(tr);
      });
    })
    .catch(err =>
      console.error("Erro ao carregar ranking:", err)
    );
}

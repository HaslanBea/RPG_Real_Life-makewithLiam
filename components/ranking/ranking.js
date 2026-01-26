export function loadRankingData() {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSsnDGbjG-TFRaB_kRIpb1fFzkk4LPS8g49nNq-owDF5Cp5HyXgG75TtnvfoxEdaTh3gkFpyrq7m6v/pub?gid=860761833&single=true&output=csv";

  fetch(url)
    .then(res => res.text())
    .then(text => {
      const linhas = text
        .split("\n")
        .map(l => l.trim())
        .filter(l => l && !l.toLowerCase().startsWith("id"));

      const tbody = document.querySelector(".ranking tbody");
      if (!tbody) return;

      tbody.innerHTML = "";

      linhas.forEach((linha, index) => {
        const cols = linha.split(",");

        const nome = cols[1]?.trim();
        const xp = cols[2]?.trim();
        const categoria = cols[3]?.trim();

        if (!nome || !xp) return;

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${nome}</td>
          <td>${categoria || "-"}</td>
          <td>${xp}</td>
        `;

        tbody.appendChild(tr);
      });
    })
    .catch(err => console.error("Erro ao carregar ranking:", err));
}

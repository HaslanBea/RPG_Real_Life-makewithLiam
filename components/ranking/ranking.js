export function loadRankingData({ url, tableSelector }) {
  fetch(url)
    .then(res => res.text())
    .then(text => {
      const linhas = text
        .split("\n")
        .map(l => l.trim())
        .filter(l => l && !l.toLowerCase().startsWith("id"));

      const tbody = document.querySelector(`${tableSelector} tbody`);
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
    })
    .catch(err => console.error("Erro ao carregar ranking:", err));
}


//modelos arquivo csv
//https://docs.google.com/spreadsheets/d/e/2PACX-1vQSsnDGbjG-TFRaB_kRIpb1fFzkk4LPS8g49nNq-owDF5Cp5HyXgG75TtnvfoxEdaTh3gkFpyrq7m6v/pub?gid=1571741723&single=true&output=csv
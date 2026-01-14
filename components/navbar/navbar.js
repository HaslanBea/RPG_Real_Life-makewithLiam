export async function loadNavbar() {
  const html = await fetch("./components/navbar/navbar.html")
    .then(res => res.text());

  document.getElementById("navbar").innerHTML = html;
}

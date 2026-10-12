const barra = document.querySelector(".progresso");
const links = document.querySelectorAll(".menu a");
const secoes = [...document.querySelectorAll("main section")];

function aoRolar() {
  // barra de progresso de leitura
  const total = document.documentElement.scrollHeight - window.innerHeight;
  barra.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + "%";

  // destaca no menu a seção que está na tela
  const ponto = window.scrollY + window.innerHeight * 0.35;
  let atual = secoes[0];
  for (const s of secoes) if (s.offsetTop <= ponto) atual = s;
  links.forEach((a) => a.classList.toggle("ativo", a.getAttribute("href") === "#" + atual.id));
}

window.addEventListener("scroll", aoRolar, { passive: true });
window.addEventListener("resize", aoRolar);
aoRolar();
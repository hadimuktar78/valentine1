const music = document.getElementById("music");
const heartsContainer = document.querySelector(".hearts");

function sayYes() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  music.play();
  startHearts();
}

function moveNo() {
  const btn = document.getElementById("noBtn");

  const maxX = window.innerWidth - btn.offsetWidth;
  const maxY = window.innerHeight - btn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btn.style.position = "fixed";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 500);
}

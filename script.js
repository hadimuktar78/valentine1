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
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 400);
}

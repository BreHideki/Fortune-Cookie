const imgBtn = document.getElementById("img-btn");
const resetBtn = document.getElementById("button");
const firstCard = document.querySelector(".card");
const secondCard = document.querySelector(".second-card");

if (imgBtn && resetBtn) {
    imgBtn.addEventListener("click", toggleScreen);
    resetBtn.addEventListener("click", toggleScreen);
}

function toggleScreen() {
    firstCard.classList.toggle("hide");
    secondCard.classList.toggle("hide");
}
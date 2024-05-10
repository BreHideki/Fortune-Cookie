const imgBtn = document.getElementById("img-btn");
const resetBtn = document.getElementById("button");
const firstCard = document.querySelector(".card");
const secondCard = document.querySelector(".second-card");
const luckyPhrase = document.querySelector(".s-text p")

const fortune = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  ]

 function pickFortune() {
    let allFortunes = fortune.length
    let randomPhrase = Math.floor(Math.random() * allFortunes)
    luckyPhrase.textContent = `${fortune[randomPhrase]}`
 }

if (imgBtn && resetBtn) {
    imgBtn.addEventListener("click", () => {
        toggleScreen();
        pickFortune();
    });
    resetBtn.addEventListener("click", toggleScreen);
}

function toggleScreen() {
    firstCard.classList.toggle("hide");
    secondCard.classList.toggle("hide");
}
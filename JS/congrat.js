let roue = document.querySelector("#roue");
let btnJouer = document.querySelector("#jouer");

// Fonction d'initialisation
btnJouer.addEventListener("click", initialisation);
function initialisation() {
  roueTourne();
  playerAudio();
}

// Fonction qui lit l'audio  
function playerAudio() {
  let audio = new Audio('spin.mp3');
  audio.play();
}

// Fonction qui fait tourner la roue
function roueTourne() {
  let deg = Math.floor(Math.random() * 5000); // degré temporaire de rotation compris entre 0 et 5000
  argentAleatoire(deg);
  roue.style.transition = "all 5s ease-out"; // sans ça je ne tourne pas
  roue.style.transform = "rotate(" + deg + "deg)";
  // console.log(deg)
}

// Fonction qui choisit une somme aléatoire lorsque l'on mise
function argentAleatoire(deg) {
  let valeur = deg / 360; // degré temporaire / 360
  valeur = (valeur - parseInt(valeur.toString().split(".")[0])) * 360; // calule et trouve la valeur du degré normal en 360, grace au degré temporaire
  setTimeout(() => {
    switch (true) {
      case valeur > 0 && valeur <= 30:
        alert("Gagné ! Une ballade ! J'espère que t'es pas trop ko mdrr");
        break;
      case valeur > 30 && valeur <= 60:;
        alert("Gagné ! Un gros câlin !");
        break;
      case valeur > 60 && valeur <= 90:
        alert("Perdu ! Oh non... fallait bien que je mette une case come ça.. On rejoue ?");
        break;
      case valeur > 90 && valeur <= 120:
        alert("Gagné ! C'est moi qui choisi !");
        break;
      case valeur > 120 && valeur <= 150:
        alert("Gagné ! Surprise du chef ahah !");
        break;
      case valeur > 150 && valeur <= 180:
        alert("Gagné ! Un massage de moi parce que tu supportes que les miens");
        break;
      case valeur > 180 && valeur <= 210:
        alert("Ou sur le front ahah !");
        break;
      case valeur > 210 && valeur <= 240:
        alert("Gagné ! Un compliment, c'est pas mal !");
        break;
      case valeur > 240 && valeur <= 270:
        alert("Gagné ! Un bowling ou un billard avec moi, tu préfères quoi ?");
        break;
      case valeur > 270 && valeur <= 300:
        alert("Ohhh trop bien c'est pas mal ça !");
        break;
      case valeur > 300 && valeur <= 330:
        alert("Trop bien ! Vasy rappuie sur le bouton mon bon babe !");
        break;
      case valeur > 330 && valeur <= 350:
        alert("Ou sur le nez ahah");
        break;
    }
  }, 5000);
}
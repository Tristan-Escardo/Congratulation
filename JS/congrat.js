let roue = document.querySelector("#roue");
let btnJouer = document.querySelector("#jouer");
let monPortefeuille = document.querySelector('.monnaie');
let mise = document.querySelector('#mise');
let portefeuille = 10000;

// Fonction d'initialisation
btnJouer.addEventListener("click", initialisation);
function initialisation() {
  if (mise.value == 0) {
    alert('Placez votre mise svp !')
  } else if (mise.value < 300) {
    alert("Votre mise est inférieur à 300F !");
  } else if (mise.value >= 300 && portefeuille >= mise.value) {
    calculArgent(-mise.value);
    roueTourne();
    playerAudio();
  } else {
    alert('Votre portefeuille est vide !');
  }
}

function wellcom() {
  alert("Bienvenu !");
}

// Fonction qui calcule l'argent du portefeuille
function calculArgent(argent) {
  portefeuille += argent;
  monPortefeuille.innerHTML = "Mon portefeuille : <br>" + portefeuille + " F cfa"
}

// Fonction qui lire l'audio  
function playerAudio() {
  let audio = new Audio('spin.mp3');
  audio.play();
}

// Fonction qui faire tourner la roue
function roueTourne() {
  let deg = Math.floor(Math.random() * 5000); // degré temporaire de rotation comprise entre 0 et 5000
  argentAleatoire(deg);
  roue.style.transition = "all 5s ease-out"; // sans sa je ne tourne pas
  roue.style.transform = "rotate(" + deg + "deg)";
  // console.log(deg)
}

// Fonction qui choisi une somme aléatoire lorsque l'on mise
function argentAleatoire(deg) {
  let valeur = deg / 360; // degré temporaire / 360
  valeur = (valeur - parseInt(valeur.toString().split(".")[0])) * 360; // calule et trouve la valeur du degré normal en 360, grace au degré temporaire
  setTimeout(() => {
    switch (true) {
      case valeur > 0 && valeur <= 15:
        calculArgent(700);
        alert("Vous avez gagné(e) 700 FcFa!");
        break;
      case valeur > 15 && valeur <= 30:
        calculArgent(600);
        alert("Vous avez gagné(e) 600 FcFa!");
        break;
      case valeur > 30 && valeur <= 45:
        calculArgent(3000);
        alert("Vous avez gagné(e) 3000 FcFa!");
        break;
      case valeur > 45 && valeur <= 60:
        alert("Oup, c'est perdu !");
        break;
      case valeur > 60 && valeur <= 75:
        calculArgent(500);
        alert("Vous avez gagné(e) 500 FcFa!");
        break;
      case valeur > 75 && valeur <= 90:
        calculArgent(750);
        alert("Vous avez gagné(e) 750 FcFa!");
        break;
      case valeur > 90 && valeur <= 105:
        calculArgent(600);
        alert("Vous avez gagné(e) 600 FcFa!");
        break;
      case valeur > 105 && valeur <= 120:
        calculArgent(450);
        alert("Vous avez gagné(e) 450 FcFa!");
        break;
      case valeur > 120 && valeur <= 135:
        calculArgent(300);
        alert("Vous avez gagné(e) 300 FcFa!");
        break;
      case valeur > 135 && valeur <= 150:
        setTimeout(roueTourne, 1000);
        break;
      case valeur > 150 && valeur <= 165:
        calculArgent(800);
        alert("Vous avez gagné(e) 800 FcFa!");
        break;
      case valeur > 165 && valeur <= 180:
        calculArgent(700);
        alert("Vous avez gagné(e) 700 FcFa!");
        break;
      case valeur > 180 && valeur <= 195:
        calculArgent(600);
        alert("Vous avez gagné(e) 600 FcFa!");
        break;
      case valeur > 195 && valeur <= 210:
        alert("Oup !!!");
        break;
      case valeur > 210 && valeur <= 225:
        calculArgent(900);
        alert("Vous avez gagné(e) 900 FcFa!");
        break;
      case valeur > 225 && valeur <= 240:
        calculArgent(400);
        alert("Vous avez gagné(e) 400 FcFa!");
        break;
      case valeur > 240 && valeur <= 255:
        calculArgent(500);
        alert("Vous avez gagné(e) 500 FcFa!");
        break;
      case valeur > 255 && valeur <= 270:
        calculArgent(1000);
        alert("Vous avez gagné(e) 1000 FcFa!");
        break;
      case valeur > 270 && valeur <= 285:
        calculArgent(650);
        alert("Vous avez gagné(e) 650 FcFa!");
        break;
      case valeur > 285 && valeur <= 300:
        calculArgent(400);
        alert("Vous avez gagné(e) 400 FcFa!");
        break;
      case valeur > 300 && valeur <= 315:
        calculArgent(300);
        alert("Vous avez gagné(e) 300 FcFa!");
        break;
      case valeur > 315 && valeur <= 330:
        calculArgent(800);
        alert("Vous avez gagné(e) 800 FcFa!");
        break;
      case valeur > 330 && valeur <= 345:
        calculArgent(500);
        alert("Vous avez gagné(e) 500 FcFa!");
        break;
      case valeur > 345 && valeur <= 360:
        calculArgent(350);
        alert("Vous avez gagné(e) 350 FcFa!");
        break;
    }
  }, 5000);
}
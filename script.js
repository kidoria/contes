let musica = document.getElementById("musica");
let narrador = document.getElementById("narrador");
let traducido = false;

function toggleMusica() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

function toggleNarrador() {
  if (narrador.paused) {
    narrador.play();
  } else {
    narrador.pause();
  }
}

function traducir() {
  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");
  let p3 = document.getElementById("p3");

  if (!traducido) {
    p1.textContent = "Nuba dreamed of crossing the golden valley.";
    p2.textContent = "Everyone said he was too small.";
    p3.textContent = "But he listened to his heart.";
    traducido = true;
  } else {
    p1.textContent = "Nuba soñaba con cruzar el gran valle dorado.";
    p2.textContent = "Todos decían que era demasiado pequeño para intentarlo.";
    p3.textContent = "Pero escuchó su corazón y dio el primer paso hacia la aventura.";
    traducido = false;
  }
}

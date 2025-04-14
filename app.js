function tocaSom(seletorSom) {
  const elemento = document.querySelector(seletorSom);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("elemento nao encontrado");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  tecla.onkeydown = (evento) => {
    console.log(evento.code);
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = () => {
    tecla.classList.remove("ativa");
  };
}

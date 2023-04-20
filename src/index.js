let botonSiete = document.querySelector("#elboton");
let audioIntroCuatro = document.querySelector(".intro-cuatro")		
botonSiete.addEventListener("click", () => {
  let etiquetaAudioSiete = document.createElement("audio");
  etiquetaAudioSiete.setAttribute("src", "./src/recording/0.1introduccionmariayelarbol.m4a");
  etiquetaAudioSiete.play();
  setTimeout(function () {
    window.location.href = "../escUno.html";
		
  }, 14000);
});


let botonSiete = document.querySelector("#elboton");
let audioIntroCuatro = document.querySelector(".intro-cuatro")		
botonSiete.addEventListener("click", () => {
	botonSiete.setAttribute("disabled","disabled")
  let etiquetaAudioSiete = document.createElement("audio");
  etiquetaAudioSiete.setAttribute("src", "./src/recording/0.1introduccionmariayelarbol.m4a");
  etiquetaAudioSiete.play();
  setTimeout(function () {
    window.location.href = "https://severo96.github.io/actividad1/escUno.html";
		
  }, 14000);
});


let contadosDos = 0;
contadorNoDos = 0;
const fill = document.querySelector('.fillOne')
const empties = document.querySelectorAll('.emptyOne')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
		
		let emptyTwo = document.querySelector("#emptyTwoRed");
		let emptyTrhee = document.querySelector("#emptyTrheeGreen");  
		let emptyFour = document.querySelector("#emptyFourGreen");
		
		emptyTwo.style.pointerEvents = 'none';
		emptyTrhee.style.pointerEvents = 'none';
		emptyFour.style.pointerEvents = 'none';
}

function dragEnd() {
    this.className = 'fillOne'
		if (contadorNoDos == 0) {
			let etiquetaAudioDiez = document.createElement("audio");
		etiquetaAudioDiez.setAttribute("src", "./src/recording/1.2oh-no.m4a");
		etiquetaAudioDiez.play();
		}else
		{
			contadorNoDos = 0;
		}
	let emptyTwo = document.querySelector("#emptyTwoRed");
	let emptyTrhee = document.querySelector("#emptyTrheeGreen");  
	let emptyFour = document.querySelector("#emptyFourGreen");
	emptyTwo.style.pointerEvents = 'fill';
	emptyTrhee.style.pointerEvents = 'fill';
	emptyFour.style.pointerEvents = 'fill';
		
}

function dragOver(e) {
    e.preventDefault()
		
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
	
}

function dragLeave() {
    this.className = 'emptyOne'
		
}

function dragDrop() {
    this.className = 'emptyOne'
    this.append(fill)
		let etiquetaAudioDiez = document.createElement("audio");
  etiquetaAudioDiez.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioDiez.play();
		contadosDos++;
		contadorNoDos++;
		if (contadosDos == 4) {
			setTimeout(function () {
				window.location.href = "https://severo96.github.io/actividad1/final.html";
				
			}, 3000);
		}
}

const fillTwo = document.querySelector('.fillTwo')
const emptiesTwo = document.querySelectorAll('.emptyTwo')

fillTwo.addEventListener('dragstart', dragStartTwo)
fillTwo.addEventListener('dragend', dragEndTwo)

for(const emptyTwo of emptiesTwo) {
    emptyTwo.addEventListener('dragover', dragOverTwo)
    emptyTwo.addEventListener('dragenter', dragEnterTwo)
    emptyTwo.addEventListener('dragleave', dragLeaveTwo)
    emptyTwo.addEventListener('drop', dragDropTwo)
}

function dragStartTwo() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
		let emptyOne = document.querySelector("#emptyOneRed")
		let emptyTrhee = document.querySelector("#emptyTrheeGreen");  
		let emptyFour = document.querySelector("#emptyFourGreen");
		emptyOne.style.pointerEvents = "none";
		emptyTrhee.style.pointerEvents = 'none';
		emptyFour.style.pointerEvents = 'none';
}

function dragEndTwo() {
    this.className = 'fillTwo'
		if (contadorNoDos == 0) {
			let etiquetaAudioDiez = document.createElement("audio");
		etiquetaAudioDiez.setAttribute("src", "./src/recording/1.2oh-no.m4a");
		etiquetaAudioDiez.play();
		}else
		{
			contadorNoDos = 0;
		}
	let emptyOne = document.querySelector("#emptyOneRed");
	let emptyTrhee = document.querySelector("#emptyTrheeGreen");  
	let emptyFour = document.querySelector("#emptyFourGreen");
	emptyOne.style.pointerEvents = 'fill';
	emptyTrhee.style.pointerEvents = 'fill';
	emptyFour.style.pointerEvents = 'fill';
}

function dragOverTwo(e) {
    e.preventDefault()
}

function dragEnterTwo(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeaveTwo() {
    this.className = 'emptyTwo'
}

function dragDropTwo() {
    this.className = 'emptyTwo'
    this.append(fillTwo)
		let etiquetaAudioDiez = document.createElement("audio");
  etiquetaAudioDiez.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioDiez.play();
		contadosDos++;
		contadorNoDos++;
		if (contadosDos == 4) {
			setTimeout(function () {
				window.location.href = "https://severo96.github.io/actividad1/final.html";
				
			}, 3000);
		}
}

const fillTrhee = document.querySelector('.fillTrhee')
const emptiesTrhee = document.querySelectorAll('.emptyTrhee')

fillTrhee.addEventListener('dragstart', dragStartTrhee)
fillTrhee.addEventListener('dragend', dragEndTrhee)

for(const emptyTrhee of emptiesTrhee) {
    emptyTrhee.addEventListener('dragover', dragOverTrhee)
    emptyTrhee.addEventListener('dragenter', dragEnterTrhee)
    emptyTrhee.addEventListener('dragleave', dragLeavetrhee)
    emptyTrhee.addEventListener('drop', dragDropTrhee)
}

function dragStartTrhee() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
		let emptyOne = document.querySelector("#emptyOneRed")
		let emptyTwo = document.querySelector("#emptyTwoRed");
		let emptyFour = document.querySelector("#emptyFourGreen");
		emptyOne.style.pointerEvents = "none";
		emptyTwo.style.pointerEvents = 'none';
		emptyFour.style.pointerEvents = 'none';
}

function dragEndTrhee() {
    this.className = 'fillTrhee'
		if (contadorNoDos == 0) {
			let etiquetaAudioDiez = document.createElement("audio");
		etiquetaAudioDiez.setAttribute("src", "./src/recording/1.2oh-no.m4a");
		etiquetaAudioDiez.play();
		}else
		{
			contadorNoDos = 0;
		}
		let emptyTwo = document.querySelector("#emptyTwoRed");
	let emptyOne = document.querySelector("#emptyOneRed");
	let emptyFour = document.querySelector("#emptyFourGreen");
	emptyTwo.style.pointerEvents = 'fill';
	emptyOne.style.pointerEvents = 'fill';
	emptyFour.style.pointerEvents = 'fill';
}

function dragOverTrhee(e) {
    e.preventDefault()
}

function dragEnterTrhee(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeavetrhee() {
    this.className = 'emptyTrhee'
}

function dragDropTrhee() {
    this.className = 'emptyTrhee'
    this.append(fillTrhee)
		this.className = 'fillOne'
		let etiquetaAudioDiez = document.createElement("audio");
  etiquetaAudioDiez.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioDiez.play();
		contadosDos++;
		contadorNoDos++;
		if (contadosDos == 4) {
			setTimeout(function () {
				window.location.href = "https://severo96.github.io/actividad1/final.html";
				
			}, 3000);
		}
}

const fillFour = document.querySelector('.fillFour')
const emptiesFour = document.querySelectorAll('.emptyFour')

fillFour.addEventListener('dragstart', dragStartFour)
fillFour.addEventListener('dragend', dragEndFour)

for(const emptyFour of emptiesFour) {
    emptyFour.addEventListener('dragover', dragOverFour)
    emptyFour.addEventListener('dragenter', dragEnterFour)
    emptyFour.addEventListener('dragleave', dragLeaveFour)
    emptyFour.addEventListener('drop', dragDropFour)
}

function dragStartFour() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
		let emptyOne = document.querySelector("#emptyOneRed")
		let emptyTwo = document.querySelector("#emptyTwoRed");
		let emptyTrhee = document.querySelector("#emptyTrheeGreen");  
		emptyOne.style.pointerEvents = "none";
		emptyTwo.style.pointerEvents = 'none';
		emptyTrhee.style.pointerEvents = 'none';
}

function dragEndFour() {
    this.className = 'fillFour'
		if (contadorNoDos == 0) {
			let etiquetaAudioDiez = document.createElement("audio");
		etiquetaAudioDiez.setAttribute("src", "./src/recording/1.2oh-no.m4a");
		etiquetaAudioDiez.play();
		}else
		{
			contadorNoDos = 0;
		}
		let emptyTwo = document.querySelector("#emptyTwoRed");
	let emptyOne = document.querySelector("#emptyOneRed");
	let emptyTrhee = document.querySelector("#emptyTrheeGreen");  
	emptyTwo.style.pointerEvents = 'fill';
	emptyOne.style.pointerEvents = 'fill';
	emptyTrhee.style.pointerEvents = 'fill';
}

function dragOverFour(e) {
    e.preventDefault()
}

function dragEnterFour(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeaveFour() {
    this.className = 'emptyFour'
}

function dragDropFour() {
    this.className = 'emptyFour'
    this.append(fillFour)
		let etiquetaAudioDiez = document.createElement("audio");
  etiquetaAudioDiez.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioDiez.play();
		contadosDos++;
		contadorNoDos++;
		if (contadosDos == 4) {
			setTimeout(function () {
				window.location.href = "https://severo96.github.io/actividad1/final.html";
				
			}, 3000);
		}
}
let botonPauseDos = document.querySelector(".Audio-2");
  setTimeout(function () {
		botonPauseDos.pause();
  }, 17000);

	setTimeout(function () {
		let emptyTwo = document.querySelector("#emptyTwoRed");
	let emptyOne = document.querySelector("#emptyOneRed");
	let emptyTrhee = document.querySelector("#emptyTrheeGreen");
	let emptyFour = document.querySelector("#emptyFourGreen");
	emptyFour.style.pointerEvents = 'fill';  
	emptyTwo.style.pointerEvents = 'fill';
	emptyOne.style.pointerEvents = 'fill';
	emptyTrhee.style.pointerEvents = 'fill';
  }, 17000);

	let emptyOne = document.querySelector("#emptyOneRed")
	let emptyTwo = document.querySelector("#emptyTwoRed");
	let emptyTrhee = document.querySelector("#emptyTrheeGreen"); 
	let emptyFour = document.querySelector("#emptyFourGreen");
		emptyFour.style.pointerEvents = 'none'; 
	emptyOne.style.pointerEvents = "none";
	emptyTwo.style.pointerEvents = 'none';
	emptyTrhee.style.pointerEvents = 'none';
	
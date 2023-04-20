let contador = 0;
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
		
}

function dragEnd() {
    this.className = 'fillOne'
		let etiquetaAudioDiez = document.createElement("audio");
  etiquetaAudioDiez.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioDiez.play();
		contador++;
		if (contador == 4) {
			setTimeout(function () {
				window.location.href = "https://severo96.github.io/actividad1/escDos.html";
				
			}, 3000);
		}

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
}

function dragEndTwo() {
    this.className = 'fillTwo'
		this.className = 'fillOne'
		let etiquetaAudioDiez = document.createElement("audio");
  etiquetaAudioDiez.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioDiez.play();
		contador++;
		if (contador == 4) {
			setTimeout(function () {
				window.location.href = "https://severo96.github.io/actividad1/escDos.html";
				
			}, 3000);
		}

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
}

function dragEndTrhee() {
    this.className = 'fillTrhee'
		this.className = 'fillOne'
		let etiquetaAudioDiez = document.createElement("audio");
  etiquetaAudioDiez.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioDiez.play();
		contador++;
		if (contador == 4) {
			setTimeout(function () {
				window.location.href = "https://severo96.github.io/actividad1/escDos.html";
				
			}, 3000);
		}

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
}

function dragEndFour() {
    this.className = 'fillFour'
		this.className = 'fillOne'
		let etiquetaAudioDiez = document.createElement("audio");
  etiquetaAudioDiez.setAttribute("src", "./src/recording/1.1muybien.m4a");
  etiquetaAudioDiez.play();
		contador++;
		if (contador == 4) {
			setTimeout(function () {
				window.location.href = "https://severo96.github.io/actividad1/escDos.html";
				
			}, 3000);
		}

		console.log(contador);
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
}

console.log(contador);

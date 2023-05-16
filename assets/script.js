const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let numero = 0;

function changeSlide(slide_selected = numero) {
	document.getElementById("slide").src = `assets/images/slideshow/${slides[slide_selected].image}`;
	document.getElementById("banner_text").innerHTML = slides[slide_selected].tagLine;
};

function decrementNumero() {
	numero--;
	if (numero < 0) {
        numero = slides.length - 1;
	}
	Array.from(document.getElementsByClassName("dot_selected")).forEach(element => {
		element.classList.remove("dot_selected");
	});
	document.getElementById("div" + numero).classList.add("dot_selected");
	changeSlide();
};

const arrowLeft = document.getElementById("arrow_left")
	arrowLeft.addEventListener("click", decrementNumero);
	

function incrementNumero() {
	numero++;
	if (numero > slides.length - 1) {
        numero = 0;
	}
	Array.from(document.getElementsByClassName("dot_selected")).forEach(element => {
		element.classList.remove("dot_selected");
	});
	document.getElementById("div" + numero).classList.add("dot_selected");
	changeSlide();
};

const arrowRight = document.getElementById("arrow_right")
	arrowRight.addEventListener("click", incrementNumero);


const dots = document.getElementsByClassName("dots")[0];
for (let numero = 0; numero < slides.length; numero++) {
	const dot = document.createElement("div");
	dot.id ="div" + numero;
	dot.addEventListener('click', myFunction);
	dot.classList.add("dot");
	dots.appendChild(dot);
	if (numero == dots.id) { 
        dots.children[numero].classList.add("dot_selected");
    }
};
function myFunction(event) {
	changeSlide(Number(event.target.id.replace("div", " ")));
	Array.from(document.getElementsByClassName("dot_selected")).forEach(element => {
		element.classList.remove("dot_selected");
	});
	document.getElementById(event.target.id).classList.add("dot_selected");
}
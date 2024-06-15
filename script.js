var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var sel = document.querySelectorAll('li');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");
var css = document.querySelector('.cssrgb');
var aleatorio = document.querySelector('.aleatorio')

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	var bt = document.createElement("button");
	bt.className = "btitens";
	bt.textContent = 'x';
	li.appendChild(bt);
	bt.addEventListener('click',function(){
		li.parentNode.removeChild(li)
	})
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

/*Background-color nav */
function changeGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ","
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function RGBaleatorio(){
	var r = Math.floor(Math.random() * 256) 
	var g = Math.floor(Math.random() * 256) 
	var b = Math.floor(Math.random() * 256)
	return `rgb(${r},${g},${b})`;
}
	 
//bacground-color-Aleatório-nav
function Coloraleatorio(){
	body.style.background = 
	"linear-gradient(to right,"
	+ RGBaleatorio()
	+","
	+ RGBaleatorio()
	+ ")";

	css.textContent = body.style.background + ";";
}



color1.addEventListener('input',changeGradient)

color2.addEventListener('input',changeGradient)

button.addEventListener("click", addListAfterClick );

input.addEventListener("keypress", addListAfterKeypress);

aleatorio.addEventListener("click",Coloraleatorio)
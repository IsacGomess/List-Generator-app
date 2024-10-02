var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var sel = document.querySelectorAll('li');



function inputLength() {
	return input.value.length;
}

function createListElement(e) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	e.target.classList.add(" list-group-numbered")
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

// events 


button.addEventListener("click", addListAfterClick );

input.addEventListener("keypress", addListAfterKeypress);


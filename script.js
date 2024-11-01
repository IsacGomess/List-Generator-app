var button = document.getElementById("enter");
var input = document.getElementById("entertext");
var ol = document.querySelector(".list-group");
var additem = document.getElementById("additem");



function inputLength() {
	return input.value.length;
}

function createListElement(e) {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	li.setAttribute('class','list-group-item');
	ol.appendChild(li);
	var bt = document.createElement('button');
	bt.className = "btitens";
	bt.textContent = 'x';
	li.appendChild(bt);
	bt.addEventListener('click',function(){
		li.remove()
	})
	input.value = " ";

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
var itemsLista = document.querySelector("#itemL");
console.log(itemsLista.children[0])
/* função para adicionar novo item na lista */
const AddNewItem =  () => {
	var itemsLista = document.querySelector("#itemL");
	itemsLista.append(itemsLista.children[0])

} 
// events 


button.addEventListener("click", addListAfterClick );

input.addEventListener("keypress", addListAfterKeypress);

additem.addEventListener("click",AddNewItem);

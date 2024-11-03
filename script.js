const additem = document.getElementById("additem");
const itemsLista = document.querySelector("#itemL");
const remove = document.querySelector(".btremove");
/* função para adicionar novo item na lista */
const AddNewItem =  () => {
	const btnl = document.createElement('button');
	btnl.className = "list-group-item list-group-item-action  bg-dark-subtle text-success-emphasis";
	const ipt = document.createElement("input");
	ipt.type = "text";
	ipt.id = "insidebt";
	ipt.className = "bg-transparent border-0";
	ipt.placeholder = "item..";

	btnl.appendChild(ipt);
	itemsLista.appendChild(btnl);
} 

const RemovendoItens = (e) =>{
	 let target = e.target
	if(target.matches('.btremove')){
		itemsLista.children[-1].remove()
	}
}
// events 

remove.addEventListener("click",RemovendoItens);
additem.addEventListener("click",AddNewItem);

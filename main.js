const Add = document.getElementById("add__button").addEventListener("click", addListItem);
const Delete = document.getElementById("delete__button").addEventListener("click", removeItem);
const Input = document.getElementById("input");
const ListItem = document.getElementById("list__item").addEventListener("click", lineThrough);
const List = document.getElementById("list") //appendChild(newItem);
//const Heading = document.getElementById("heading");
//const Label = document.getElementById("label");
//const id = x++
//const x = 0;

//Finish this function
function lineThrough() {
    ListItem.style.textDecorationLine = "line-through";
}

function removeItem() {
    newDelete.parentNode.removeChild(newItem);
    alert("hi");
}

function test() {
    alert("Hello");
}

function clearInput() {
    if (Input.value.length > 0) {
        Input.value = "";
    }
}

function addListItem() {
    if (Input.value.length === 0) {
        return null;
    }
    else {
    const newItem = document.createElement("li");
    newItem.textContent = `${Input.value} `;
    List.insertBefore(newItem, List.children[0]);
    const newDelete = document.createElement("button");
    newDelete.textContent = "Delete";
    newItem.appendChild(newDelete);
    }
    clearInput();
}
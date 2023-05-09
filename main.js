const Add = document.getElementById("add__button").addEventListener("click", addItem);
const Delete = document.getElementById("delete__button").addEventListener("click", remove);
const Check = document.getElementById("list--item__output").addEventListener("click", check);

class ListItem {
    constructor (title, id) {
        this.title = title;
        this.id = id;
    }
    createButton() {
        let List = document.getElementById("list");
        let deleteButton = document.createElement("button");
        List.insertBefore(deleteButton, List.children[1]);
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete__button");

    }
    createItem() {
        let Input = document.getElementById("input");
        let n = document.createElement("li");
        n.textContent = Input.value;
        let List = document.getElementById("list");
        List.insertBefore(n, List.children[0]);
        this.createButton();


    }
 
   /* deleteItem() {
        let List = document.getElementById("list");
        let deleteButton = document.createElement("button");
        List.removeChild(deleteButton);

    } */
}

let listItem1 = new ListItem('Spagetti', crypto.randomUUID());
console.log(ListItem);
console.log(listItem1);

function check (event) {
    console.log(event.target);
    
}

function addItem() {
    let Input = document.getElementById("input");
    
    if (Input.value.length > 0) {
        let newItem = new ListItem (Input.value, crypto.randomUUID());
        return newItem.createItem();

    }
}

function remove(event) {
    let test9 = event.target;
    let List = document.getElementById("list--item__output");
    console.log(event);
   /* let List = document.getElementById("list");
    console.log("This is a test");
    let deleteButton = document.createElement("button");
    let button = deleteButton.parentNode;
    console.log(List); */

}

/*function remove() {
    ListItem.deleteItem(); 
}*/
/*
const newItem = document.createElement("li");
    newItem.textContent = `${Input.value} `;
    List.insertBefore(newItem, List.children[0]);
    */

/*const Add = document.getElementById("add__button").addEventListener("click", addListItem);
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
*/
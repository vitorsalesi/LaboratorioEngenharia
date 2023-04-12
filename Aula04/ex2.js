let todoList = [];

function addItem() {
    let newItem = document.getElementById("item").value;
    todoList.push(newItem);
    updateList();
    document.getElementById("item").value = "";
}

function deleteItem() {
    let index = this.getAttribute("data-index");
    todoList.splice(index, 1);
    updateList();
}

function moveItemUp() {
    let index = parseInt(this.getAttribute("data-index"));
    let temp = todoList[index];
    todoList[index] = todoList[index - 1];
    todoList[index - 1] = temp;
    updateList();
}

function moveItemDown() {
    let index = parseInt(this.getAttribute("data-index"));
    let temp = todoList[index];
    todoList[index] = todoList[index + 1];
    todoList[index + 1] = temp;
    updateList();
}

function updateList() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(todoList[i]));

        let deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.appendChild(document.createTextNode("Excluir"));
        deleteButton.setAttribute("data-index", i);
        deleteButton.addEventListener("click", deleteItem);
        li.appendChild(deleteButton);

        if (i > 0) {
            let upButton = document.createElement("button");
            upButton.className = "up";
            upButton.appendChild(document.createTextNode(" ↑ "));
            upButton.setAttribute("data-index", i);
            upButton.addEventListener("click", moveItemUp);
            li.appendChild(upButton);
        }

        if (i < todoList.length - 1) {
            let moveDownButton = document.createElement("button");
            moveDownButton.className = "move-down";
            moveDownButton.appendChild(document.createTextNode("↓"));
            moveDownButton.setAttribute("data-index", i);
            moveDownButton.addEventListener("click", moveItemDown);
            li.appendChild(moveDownButton);
        }

        list.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        addItem();
    });
});

let values = [];

function handleKey(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("input-button").click();
    }
}

function adicionar() {
    input = document.getElementById("input-item");
    let newValue = input.value.trim().toLowerCase();
    input.value = "";

    if (newValue === "") {
        return;
    }

    if (values.includes(newValue)) { 
        alert("Este item já foi adicionado!");
        return;
    }

    values.push(newValue);
    values.sort((a, b) => a.localeCompare(b, 'pt', {sensitivity: 'base'}));

    let list = document.getElementById("list-items");
    list.innerHTML = "";

    values.forEach((value) => {
        let item = document.createElement("li");
        let text = document.createTextNode(value);
        item.appendChild(text);
        list.appendChild(item);
    });
}

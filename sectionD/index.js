let items = [];
function additem() {
    let itemtext = document.getElementById("input").value.trim();
    if (!itemtext) {alert("please enter item!");return;}

    items.push(itemtext);
    document.getElementById("input").value = "";
    displayitem();
}


function displayitem() {
    let itemList = document.getElementById("itemlist");
    itemList.innerHTML = "";

    items.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;
        li.classList.add("item");

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteitem(index);
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    });
}
function deleteitem(index) {
    items.splice(index, 1);
    displayitem();
}
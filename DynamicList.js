var itemInput = document.getElementById("Item");
var submitButton = document.getElementById('Add');
function addItem() {
    var listItem = document.getElementById('list');
    var item = document.createElement('li')
    itemInput.appendChild(listItem);
    itemInput.value = "";
}
submitButton.onclick = addItem;


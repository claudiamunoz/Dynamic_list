
var button = document.getElementById("add");

button.addEventListener("click", () => {


   Item();
});
var list = document.getElementsByTagName("ul")[0];

function Item() {
   var input = document.getElementById("item").value;
   var li = document.createElement("li");
   var textcontent = document.createElement("empty");
var deletebutton = document.createElement("button");
   document.getElementById("item").value = ""
   deletebutton.textContent = "Remove Item";
   deletebutton.className = "delete"
   deletebutton.addEventListener("click", () => {
       var target = deletebutton.parentElement;
       target.remove();
   });
   textcontent.textContent = input + "";
    li.appendChild(textcontent);
li.appendChild(deletebutton);
   list.appendChild(li);
}








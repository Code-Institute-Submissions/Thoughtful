

function treeFunction() {
   document.getElementsByTagName("body")[0].style.backgroundImage = "url(assets/images/tree.jpg)";
}

function cityFunction() {
   document.getElementsByTagName("body")[0].style.backgroundImage = "url(assets/images/city.jpg)";
}

function sunFunction() {
   document.getElementsByTagName("body")[0].style.backgroundImage = "url(assets/images/man.jpg)";
}

function addNewThought() {
   let inputText = document.getElementById("thought-input").value;

   let node = document.createElement("LI"); //<li></li> Create a <li> node
   let textnode = document.createTextNode(inputText); // Create a text node
   node.appendChild(textnode); // adding text from input to node <li> my text </li>
   document.getElementById("thought").appendChild(node); 

}
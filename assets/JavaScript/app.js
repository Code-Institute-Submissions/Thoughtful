let thought = [];

function changeBackground(fileName) {
   document.getElementsByTagName("body")[0].style.backgroundImage = "url(assets/images/"+ fileName + ".jpg)";
}

function addNewThought() {
   let inputText = document.getElementById("thought-input").value;

   let newTextField = "<li> <span>"+ inputText + "</span> <button class='delete-button' onClick='deleteItem(" + thought.length  + ")'>X</button> </li>";
   thought.push(newTextField);

   renderElements();
}

function deleteItem(index) {
    thought.splice(index, 1);
    renderElements();

}

function cleanElements() {
    thought = [];
    document.getElementById("thought").innerHTML  = ""; 
}

function renderElements() {
    document.getElementById("thought").innerHTML  = ""; //clean before create all elements again in order to not get duplicate items
    thought.forEach(item => {
        document.getElementById("thought").innerHTML =  document.getElementById("thought").innerHTML + item
    });
}


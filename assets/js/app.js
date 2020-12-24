let thought = [];

function changeBackground(fileName) {
   document.getElementsByTagName("body")[0].style.backgroundImage = "url(assets/images/"+ fileName + ".jpg)";
}

function addNewThought(event) {
    event.preventDefault();
   let inputText = document.getElementById("thought-input").value;
    if (inputText) {
        let newTextField = `<li> <span> ${inputText}</span> <i onClick='deleteItem(${thought.length})' class="fas fa-trash-alt trash-btn"></i> </li>`;
        thought.push(newTextField);
        document.getElementById("thought-input").value = "";
        displayThoughts();
    }else {
        alert('Please enter a thought')
    }
}

function deleteItem(index) {
    thought.splice(index, 1); 
    displayThoughts();
}

function displayThoughts() {
    document.getElementById("thought").innerHTML  = ""; //clean before create all elements again in order to not get duplicate items
    thought.forEach(item => {
        document.getElementById("thought").innerHTML =  document.getElementById("thought").innerHTML + item
    });
}


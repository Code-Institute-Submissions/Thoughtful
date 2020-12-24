let thought = [];

/**
 * Allows user to change background image. 
 */

function changeBackground(fileName) {
   document.getElementsByTagName("body")[0].style.backgroundImage = "url(assets/images/"+ fileName + ".jpg)";
}

/**
 * Allows the user to enter a thought (text input) and gives a button to delete thought. If no text entered then (else) error message appears. 
 */

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

/**
 * Allows the user to delete thought (text)
 */

function deleteItem(index) {
    thought.splice(index, 1); 
    displayThoughts();
}

function displayThoughts() {
    document.getElementById("thought").innerHTML  = ""; 
    thought.forEach(item => {
        document.getElementById("thought").innerHTML =  document.getElementById("thought").innerHTML + item
    });
}


// select elements we are interested in, cache them
// we want to select user input, button, list
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul")[1];


// refactored code (cleaned up)
// function declarations
function inputLength (){
	return input.value.length;
}

function createListElement(){
	// create list element
	var li = document.createElement("li");
	// add text to list element (user input)
	li.appendChild(document.createTextNode(input.value));
	// append li to unordered list
	ul.appendChild(li);
	// reset form to blank value
	input.value="";
}

function addListAfterClick(){
	if (inputLength() > 0){ // user input not blank
		createListElement();
	}
}

function addListAfterKeypress(event){ // still need event param here
	//console.log(event);

	// user input not blank AND press enter key
	if (inputLength() > 0 && event.keyCode ===13){ 
		createListElement();
	}
}

// click button >> if anyone clicks btn, run this fnxn
button.addEventListener("click", addListAfterClick);

// press enter >> if press enter, run this fnxn
input.addEventListener("keypress", addListAfterKeypress);

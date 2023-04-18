let colorButton = document.getElementById('color');
let placeButton = document.getElementById('place');
let ritualButton = document.getElementById('ritual');

colorButton.addEventListener('click', function () {
    alert('My favorite color is green.');
});

placeButton.addEventListener('click', function () {
    alert('My favorite place is the Eastern Sierra.');
});

ritualButton.addEventListener('click', function () {
    alert('My favorite ritual is hiking in the woods.');
});

const skillsSelect = document.getElementById("skills");

form.addEventListener("click", () => {
	alert("Nice!");
});

// function handleSubmit(evt) {
// 	evt.preventDefault();
	
// 	alert('nice!');
// };

// let form = document.querySelector('#skills');

// form.addEventListener('submit', handleSubmit);

const form = document.getElementById("myForm");
const select = document.getElementById("skills");
const submitButton = form.querySelector("input[type='submit']");

submitButton.addEventListener("click" , (event) => {
    if (select.value === "") {
        alert("Please choose a skill");
        event.preventDefault();
    } else {
        alert("nice!")
    }

});
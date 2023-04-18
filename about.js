console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duckImage = document.getElementById('duckImage');

duckImage.addEventListener('mouseover', function() { 
	alert('You are cool');
});


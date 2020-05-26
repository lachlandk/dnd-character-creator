document.querySelectorAll(".numeric").forEach(function(input){
	input.addEventListener("input", forceNumeric);
});

function forceNumeric(event){
	event.target.value = event.target.value.replace(/[^0-9-]/g, "");
}
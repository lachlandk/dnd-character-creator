document.querySelectorAll(".numeric").forEach(function(input){
	input.addEventListener("input", forceNumeric);
});

const sidebar = document.getElementById("sidebar")

document.getElementById("sidebar-toggle").addEventListener("click", function(){
	sidebar.classList.toggle("active");
})

function forceNumeric(event){
	event.target.value = event.target.value.replace(/[^0-9-]/g, "");
}
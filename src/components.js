document.querySelectorAll(".numeric").forEach(function(input){
	input.addEventListener("input", function(event){
		event.target.value = event.target.value.replace(/[^0-9-]/g, "");
	});
});

document.querySelectorAll(".entry").forEach(function(entry){
	entry.addEventListener("change", function(){
		updateCharacterData();
	});
})

const sidebar = document.getElementById("sidebar");
document.getElementById("sidebar-toggle").addEventListener("click", function(){
	sidebar.classList.toggle("active");
});

const tooltip = document.createElement("div");
tooltip.style.display = "none";
tooltip.style.position = "absolute";
tooltip.style.zIndex = "10";
tooltip.style.backgroundColor = "#eeeeee";
tooltip.style.border = "2px black solid";
tooltip.style.borderRadius = "10px";
tooltip.style.padding = "1% 2%";
tooltip.style.fontFamily = "'Acme', sans-serif";
document.body.appendChild(tooltip);

document.querySelectorAll("[data-tooltip]").forEach(function(element){
	element.addEventListener("mouseenter", function(event){
		tooltip.style.left = event.clientX + event.target.offsetWidth/2 + "px";
		tooltip.style.top = event.pageY + "px"; // TODO: doesn't follow scroll
		tooltip.style.display = "block";
		tooltip.innerHTML = event.target.getAttribute("data-tooltip");
	});

	element.addEventListener("mouseleave", function(){
		tooltip.style.display = "none";
		tooltip.innerHTML = "";
	});
});

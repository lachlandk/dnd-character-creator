document.getElementById("download-button").addEventListener("click", function(){
	fetch("https://cors-anywhere.herokuapp.com/http://media.wizards.com/2014/downloads/dnd/5E_CHARACTERSHEETSV3.ZIP")
		.then(function(response){
			if (response.ok) {
				response.arrayBuffer().then(function(buffer){
					JSZip.loadAsync(buffer).then(function(zip){
						zip.files["Character Sheet - Form Fillable.pdf"].async("arraybuffer").then(function(content){
							const main_sheet = new PDFAssembler(content)
							main_sheet.getPDFStructure().then(function(pdf){
								for (let property in characterData){
									if (characterData.hasOwnProperty(property)){
										characterData[property].saveValue(pdf);
									}
								}
								main_sheet.assemblePdf("filled_test.pdf").then(function(file){
									FileSaver.saveAs(file, "filled_test.pdf");
								});
							});
						});
					})
				})
			} else {
				console.log("Error ", response.status);
			}
		}, function(error) {
			console.log("Fetch failed. ", error);
		});
})

fetch("https://cors-anywhere.herokuapp.com/http://media.wizards.com/2014/downloads/dnd/5E_CHARACTERSHEETSV3.ZIP")
	.then(function(response){
		if (response.ok) {
			response.arrayBuffer().then(function(buffer){
				JSZip.loadAsync(buffer).then(function(zip){
					console.log(zip.files);
				})
			})
		} else {
			console.log("Error ", response.status);
		}
	}, function(error) {
		console.log("Fetch failed. ", error);
	});

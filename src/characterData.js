function CharacterProperty(htmlID, pdfID, pdfAppearanceData, autoUpdateFunction, saveFunction){
	this.htmlNode = document.getElementById(htmlID);
	this.pdfID = pdfID;
	this.pdfAppearanceData = pdfAppearanceData;
	this.value = null;

	if (autoUpdateFunction){
		this.updateValue = autoUpdateFunction;
	} else {
		this.updateValue = function(){
			this.value = (this.htmlNode.value !== "" ? this.htmlNode.value : null);
		}
	}

	if (saveFunction){
		this.saveValue = saveFunction;
	} else {
		this.saveValue = function(pdf){
			// TODO: bold text
			// TODO: centered text
			if (this.value){
				pdf["/Root"]["/Pages"]["/Kids"][0]["/Annots"][this.pdfID]["/AP"] = {
					"/N": {
						"/BBox": this.pdfAppearanceData.BBox,
						"/FormType": 1,
						"/Resources": {
							"/Font": {
								"/Helv": {
									"/BaseFont": "/Helvetica",
									"/Name": "/Helv",
									"/Subtype": "/Type1",
									"/Type": "/Font",
									"num": 0,
									"gen": 0
								}
							}, "/ProcSet": ["/PDF", "/Text"]
						},
						"/Subtype": "/Form",
						"/Type": "/XObject",
						"stream": "/Tx BMC \nq\n1 1 " + (this.pdfAppearanceData.BBox[2] - 2) + " " + (this.pdfAppearanceData.BBox[3] - 2) + " re\nW\nn\nBT\n/Helv " + this.pdfAppearanceData.fontSize + " Tf\n0 g\n" + this.pdfAppearanceData.textOrigin[0] + " " + this.pdfAppearanceData.textOrigin[1] + " Td\n(" + this.value + ") Tj\nET\nQ\nEMC\n",
						"num": 0,
						"gen": 0
					}
				};
				pdf["/Root"]["/Pages"]["/Kids"][0]["/Annots"][this.pdfID]["/V"] = "(" + this.value + ")";
			}
		}
	}
}

function CharacterToggle(htmlID, pdfID, autoUpdateFunction){
	this.htmlNode = document.getElementById(htmlID);
	this.pdfID = pdfID;
	this.value = false;

	if (autoUpdateFunction){
		this.updateValue = autoUpdateFunction;
	} else {
		this.updateValue = function(){
			this.value = this.htmlNode.checked
		}
	}

	this.saveValue = function(pdf){
		if (this.value){
			pdf["/Root"]["/Pages"]["/Kids"][0]["/Annots"][this.pdfID]["/AS"] = "/Yes";
			pdf["/Root"]["/Pages"]["/Kids"][0]["/Annots"][this.pdfID]["/V"] = "/Yes";
		}
	}
}

function CharacterData(){
	return {
		characterName: new CharacterProperty("character-name-entry", 3, {BBox: [0,0,173.181,20.88], fontSize: 13.987, textOrigin: [2, 5.2513]}),

		characterClass: new CharacterProperty("character-class-entry", 0, {BBox: [0,0,105.84,15.657], fontSize: 10.102, textOrigin: [2, 4.0806]}),
		characterBackground: new CharacterProperty("character-background-entry", 1, {BBox: [0,0,86.072,15.657], fontSize: 10.102, textOrigin: [2, 4.0806]}),
		playerName: new CharacterProperty("player-name-entry", 2, {BBox: [0,0,90,15.657], fontSize: 10.102, textOrigin: [2, 4.0806]}),
		characterRace: new CharacterProperty("character-race-entry", 4, {BBox: [0,0,106.84,15.657], fontSize: 10.102, textOrigin: [2, 4.0806]}),
		characterAlignment: new CharacterProperty("character-alignment-entry", 5, {BBox: [0,0,90,15.657], fontSize: 10.102, textOrigin: [2, 4.0806]}),
		experiencePoints: new CharacterProperty("character-xp-entry", 6, {BBox: [0,0,90,15.657], fontSize: 10.102, textOrigin: [2, 4.0806]}),

		strengthScore: new CharacterProperty("strength-score-entry", 14, {BBox: [0,0,21.24,12.807], fontSize: 8.005, textOrigin: [2.841, 3.4341]}),
		dexterityScore: new CharacterProperty("dexterity-score-entry", 16, {BBox: [0,0,21.24,12.807], fontSize: 8.005, textOrigin: [2.841, 3.4341]}),
		constitutionScore: new CharacterProperty("constitution-score-entry", 25, {BBox: [0,0,21.24,12.807], fontSize: 8.005, textOrigin: [2.841, 3.4341]}),
		intelligenceScore: new CharacterProperty("intelligence-score-entry", 57, {BBox: [0,0,21.24,12.807], fontSize: 8.005, textOrigin: [2.841, 3.4341]}),
		wisdomScore: new CharacterProperty("wisdom-score-entry", 63, {BBox: [0,0,21.24,12.807], fontSize: 8.005, textOrigin: [2.841, 3.4341]}),
		charismaScore: new CharacterProperty("charisma-score-entry", 94, {BBox: [0,0,21.24,12.807], fontSize: 8.005, textOrigin: [2.841, 3.4341]}),
		strengthModifier: new CharacterProperty("strength-modifier-entry", 8, {BBox: [0,0,40.9817,25.532], fontSize: 17.439, textOrigin: [3.55, 6.2966]}),
		dexterityModifier: new CharacterProperty("dexterity-modifier-entry", 16, {BBox: [0,0,40.9817,25.532], fontSize: 17.439, textOrigin: [3.55, 6.2966]}),
		constitutionModifier: new CharacterProperty("constitution-modifier-entry", 20, {BBox: [0,0,40.9817,25.532], fontSize: 17.439, textOrigin: [3.55, 6.2966]}),
		intelligenceModifier: new CharacterProperty("intelligence-modifier-entry", 31, {BBox: [0,0,40.9817,25.532], fontSize: 17.439, textOrigin: [3.55, 6.2966]}),
		wisdomModifier: new CharacterProperty("wisdom-modifier-entry", 60, {BBox: [0,0,40.9817,25.532], fontSize: 17.439, textOrigin: [3.55, 6.2966]}),
		charismaModifier: new CharacterProperty("charisma-modifier-entry", 64, {BBox: [0,0,40.9817,25.532], fontSize: 17.439, textOrigin: [3.55, 6.2966]}),

		inspiration: new CharacterProperty("inspiration-entry", 7, {BBox: [0,0,21.2399,16.56], fontSize: 10.77, textOrigin: [7.335, 4.2848]}),
		proficiencyBonus: new CharacterProperty("proficiency-bonus-entry", 9, {BBox: [0,0,21.2403,16.56], fontSize: 10.77, textOrigin: [7.335, 4.2848]}),

		strengthSavingThrow: new CharacterProperty("strength-saving-throw-entry", 15, {BBox: [0,0,14.4,8.63196], fontSize: 4.893, textOrigin: [2.442, 2.5007]}),
		dexteritySavingThrow: new CharacterProperty("dexterity-saving-throw-entry", 32, {BBox: [0,0,14.4,8.63196], fontSize: 4.893, textOrigin: [2.442, 2.5007]}),
		constitutionSavingThrow: new CharacterProperty("constitution-saving-throw-entry", 33, {BBox: [0,0,14.4,8.63196], fontSize: 4.893, textOrigin: [2.442, 2.5007]}),
		intelligenceSavingThrow: new CharacterProperty("intelligence-saving-throw-entry", 34, {BBox: [0,0,14.4,8.63196], fontSize: 4.893, textOrigin: [2.442, 2.5007]}),
		wisdomSavingThrow: new CharacterProperty("wisdom-saving-throw-entry", 35, {BBox: [0,0,14.4,8.63196], fontSize: 4.893, textOrigin: [2.442, 2.5007]}),
		charismaSavingThrow: new CharacterProperty("charisma-saving-throw-entry", 36, {BBox: [0,0,14.4,8.63196], fontSize: 4.893, textOrigin: [2.442, 2.5007]}),
		strengthSavingThrowProficiency: new CharacterToggle("strength-proficiency-toggle", 51),
		dexteritySavingThrowProficiency: new CharacterToggle("dexterity-proficiency-toggle", 52),
		constitutionSavingThrowProficiency: new CharacterToggle("constitution-proficiency-toggle", 53),
		intelligenceSavingThrowProficiency: new CharacterToggle("intelligence-proficiency-toggle", 54),
		wisdomSavingThrowProficiency: new CharacterToggle("wisdom-proficiency-toggle", 55),
		charismaSavingThrowProficiency: new CharacterToggle("charisma-proficiency-toggle", 56),

		acrobaticsScore: new CharacterProperty("acrobatics-score-entry", 37, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		animalHandlingScore: new CharacterProperty("animal-handling-score-entry", 38, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		arcanaScore: new CharacterProperty("arcana-score-entry", 61, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		athleticsScore: new CharacterProperty("athletics-score-entry", 39, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		deceptionScore: new CharacterProperty("deception-score-entry", 40, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		historyScore: new CharacterProperty("history-score-entry", 41, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		insightScore: new CharacterProperty("insight-score-entry", 45, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		intimidationScore: new CharacterProperty("intimidation-score-entry", 46, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		investigationScore: new CharacterProperty("investigation-score-entry", 59, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		medicineScore: new CharacterProperty("medicine-score-entry", 67, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		natureScore: new CharacterProperty("nature-score-entry", 65, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		perceptionScore: new CharacterProperty("perception-score-entry", 62, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		performanceScore: new CharacterProperty("performance-score-entry", 66, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		persuasionScore: new CharacterProperty("persuasion-score-entry", 88, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		religionScore: new CharacterProperty("religion-score-entry", 68, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		sleightOfHandScore: new CharacterProperty("sleight-of-hand-score-entry", 93, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		stealthScore: new CharacterProperty("stealth-score-entry", 69, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		survivalScore: new CharacterProperty("survival-score-entry", 95, {BBox: [0,0,14.4,8.63199], fontSize: 4.893, textOrigin: [5.706, 2.5007]}),
		acrobaticsProficiency: new CharacterToggle("acrobatics-proficiency-toggle", 70),
		animalHandlingProficiency: new CharacterToggle("animal-handling-proficiency-toggle", 71),
		arcanaProficiency: new CharacterToggle("arcana-proficiency-toggle", 72),
		athleticsProficiency: new CharacterToggle("athletics-proficiency-toggle", 73),
		deceptionProficiency: new CharacterToggle("deception-proficiency-toggle", 74),
		historyProficiency: new CharacterToggle("history-proficiency-toggle", 75),
		insightProficiency: new CharacterToggle("insight-proficiency-toggle", 76),
		intimidationProficiency: new CharacterToggle("intimidation-proficiency-toggle", 77),
		investigationProficiency: new CharacterToggle("investigation-proficiency-toggle", 78),
		medicineProficiency: new CharacterToggle("medicine-proficiency-toggle", 79),
		natureProficiency: new CharacterToggle("nature-proficiency-toggle", 80),
		perceptionProficiency: new CharacterToggle("perception-proficiency-toggle", 81),
		performanceProficiency: new CharacterToggle("performance-proficiency-toggle", 82),
		persuasionProficiency: new CharacterToggle("persuasion-proficiency-toggle", 83),
		religionProficiency: new CharacterToggle("religion-proficiency-toggle", 84),
		sleightOfHandProficiency: new CharacterToggle("sleight-of-hand-proficiency-toggle", 85),
		stealthProficiency: new CharacterToggle("stealth-proficiency-toggle", 86),
		survivalProficiency: new CharacterToggle("survival-proficiency-toggle", 87),

		passivePerception: new CharacterProperty("passive-perception-entry", 97, {BBox: [0,0,21.2399,16.56], fontSize: 10.77, textOrigin: [7.335, 4.2848]}),

		languageProficiencies: new CharacterProperty("language-proficiencies-entry", 99, {BBox: [0,0,165.6,128.929], fontSize: 12, textOrigin: [2, 113.0569]}),
		weaponProficiencies: new CharacterProperty("weapon-proficiencies-entry", null, null, null, function(){}),
		armourProficiencies: new CharacterProperty("armour-proficiencies-entry", null, null, null, function(){}),

		armourClass: new CharacterProperty("armour-class-entry", 10, {BBox: [0,0,27.36,25.92], fontSize: 17.728, textOrigin: [3.345, 6.3834]}),
		initiative: new CharacterProperty("initiative-entry", 11, {BBox: [0,0,36,33.12], fontSize: 23.048, textOrigin: [4.563, 8.0091]}),
		movementSpeed: new CharacterProperty("speed-entry", 12, {BBox: [0,0,36,33.12], fontSize: 23.048, textOrigin: [4.563, 8.0091]}),

		hitPointMaximum: new CharacterProperty("hit-points-maximum-entry", 89, {BBox: [0,0,89.28,10.8], fontSize: 6.514, textOrigin: [2, 2.9838]}),
		currentHitPoints: new CharacterProperty("hit-points-entry", 90, {BBox: [0,0,149.04,30.24], fontSize: 20.912, textOrigin: [54.201, 7.3616]}),
		temporaryHitPoints: new CharacterProperty("temporary-hit-points-entry", 91, {BBox: [0,0,149.04,30.24], fontSize: 20.912, textOrigin: [54.201, 7.3616]}),
		totalHitDice: new CharacterProperty("hit-dice-total-entry", 21, {BBox: [0,0,48.24,9.17999], fontSize: 5.3, textOrigin: [2, 2.6237]}),
		hitDice: new CharacterProperty("hit-dice-entry", 29, {BBox: [0,0,63.36,20.88], fontSize: 13.987, textOrigin: [18.09, 5.2513]}),
		deathSaveSuccess1: new CharacterToggle("death-save-success-1", 22),
		deathSaveSuccess2: new CharacterToggle("death-save-success-2", 23),
		deathSaveSuccess3: new CharacterToggle("death-save-success-3", 24),
		deathSaveFailure1: new CharacterToggle("death-save-failure-1", 26),
		deathSaveFailure2: new CharacterToggle("death-save-failure-2", 27),
		deathSaveFailure3: new CharacterToggle("death-save-failure-3", 28),

		weaponName1: new CharacterProperty("weapon-1-name-entry", 42, {BBox: [0,0,61.56,14.04], fontSize: 12, textOrigin: [2, 2.568]}),
		weaponAttackBonus1: new CharacterProperty("weapon-1-atk-bonus-entry", 43, {BBox: [0,0,29.88,14.04], fontSize: 12, textOrigin: [2, 2.568]}),
		weaponDamage1: new CharacterProperty("weapon-1-damage-entry", 44, {BBox: [0,0,60.84,14.04], fontSize: 12, textOrigin: [2, 2.568]}),
		weaponName2: new CharacterProperty("weapon-2-name-entry", 47, {BBox: [0,0,61.56,14.04], fontSize: 12, textOrigin: [2, 2.568]}),
		weaponAttackBonus2: new CharacterProperty("weapon-2-atk-bonus-entry", 48, {BBox: [0,0,29.88,14.04], fontSize: 12, textOrigin: [2, 2.568]}),
		weaponDamage2: new CharacterProperty("weapon-2-damage-entry", 58, {BBox: [0,0,60.84,14.04], fontSize: 12, textOrigin: [2, 2.568]}),
		weaponName3: new CharacterProperty("weapon-3-name-entry", 49, {BBox: [0,0,61.56,14.04], fontSize: 12, textOrigin: [2, 2.568]}),
		weaponAttackBonus3: new CharacterProperty("weapon-3-atk-bonus-entry", 50, {BBox: [0,0,29.88,14.04], fontSize: 12, textOrigin: [2, 2.568]}),
		weaponDamage3: new CharacterProperty("weapon-3-damage-entry", 92, {BBox: [0,0,60.84,14.04], fontSize: 12, textOrigin: [2, 2.568]}),
		weaponSupplies: new CharacterProperty("weapon-supplies-entry", 96, {BBox: [0,0,165.6,113.76], fontSize: 12, textOrigin: [2, 97.8879]}),
		armourSupplies: new CharacterProperty("armour-entry", null, null, null, function(){}),

		moneyCP: new CharacterProperty("money-cp-entry", 98, {BBox: [0,0,29.16,17.605], fontSize: 11.547, textOrigin: [3.363, 4.519]}),
		moneySP: new CharacterProperty("money-sp-entry", 100, {BBox: [0,0,29.16,17.605], fontSize: 11.547, textOrigin: [3.363, 4.519]}),
		moneyEP: new CharacterProperty("money-ep-entry", 101, {BBox: [0,0,29.16,17.605], fontSize: 11.547, textOrigin: [3.363, 4.519]}),
		moneyGP: new CharacterProperty("money-gp-entry", 102, {BBox: [0,0,29.16,17.605], fontSize: 11.547, textOrigin: [3.363, 4.519]}),
		moneyPP: new CharacterProperty("money-pp-entry", 103, {BBox: [0,0,29.16,17.605], fontSize: 11.547, textOrigin: [3.363, 4.519]}),
		equipment: new CharacterProperty("equipment-entry", 104, {BBox: [0,0,119.88,162.72], fontSize: 12, textOrigin: [2, 146.848]}),

		personalityTraits: new CharacterProperty("personality-traits-entry", 13, {BBox: [0,0,152.82,48.6], fontSize: 12, textOrigin: [2, 32.7279]}),
		ideals: new CharacterProperty("ideals-entry", 17, {BBox: [0,0,152.82,34.56], fontSize: 12, textOrigin: [2, 18.6879]}),
		bonds: new CharacterProperty("bonds-entry", 19, {BBox: [0,0,152.82,34.56], fontSize: 12, textOrigin: [2, 18.6879]}),
		flaws: new CharacterProperty("flaws-entry", 30, {BBox: [0,0,152.82,34.56], fontSize: 12, textOrigin: [2, 18.6879]}),

		raceFeatures: new CharacterProperty("race-features-entry", 105, {BBox: [0,0,165.077,369.584], fontSize: 12, textOrigin: [2, 353.7119]}),
		classFeatures: new CharacterProperty("class-features-entry", null, null, null, function(){}),
		backgroundFeatures: new CharacterProperty("background-features-entry", null, null, function(){}),
	}
}

let characterData = new CharacterData();
function updateCharacterData(){
	for (let property in characterData){
		if(characterData.hasOwnProperty(property)){
			characterData[property].updateValue();
		}
	}
}
updateCharacterData();

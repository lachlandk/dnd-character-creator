function CharacterProperty(htmlID, pdfID, pdfData, autoUpdateFunction){
	// TODO: update value when initialised
	this.htmlNode = document.getElementById(htmlID);
	this.pdfID = pdfID;
	this.pdfData = pdfData;
	this.value = null;

	if (autoUpdateFunction){
		this.updateValue = autoUpdateFunction;
	} else {
		this.updateValue = function(){
			this.value = (this.htmlNode.value !== "" ? this.htmlNode.value : null);
		}
	}
}

function CharacterToggle(htmlID, pdfID, pdfData, autoUpdateFunction){
	// TODO: update value when initialised
	this.htmlNode = document.getElementById(htmlID);
	this.pdfID = pdfID;
	this.pdfData = pdfData;
	this.value = false;

	if (autoUpdateFunction){
		this.updateValue = autoUpdateFunction;
	} else {
		this.updateValue = function(){
			this.value = this.htmlNode.checked
		}
	}
}

function CharacterData(){
	return {
		characterName: new CharacterProperty(),

		characterClass: new CharacterProperty(),
		characterBackground: new CharacterProperty(),
		playerName: new CharacterProperty(),
		characterRace: new CharacterProperty(),
		characterAlignment: new CharacterProperty(),
		experiencePoints: new CharacterProperty(),

		strengthScore: new CharacterProperty(),
		DexterityScore: new CharacterProperty(),
		constitutionScore: new CharacterProperty(),
		intelligenceScore: new CharacterProperty(),
		wisdomScore: new CharacterProperty(),
		charismaScore: new CharacterProperty(),
		strengthModifier: new CharacterProperty(),
		dexterityModifier: new CharacterProperty(),
		constitutionModifier: new CharacterProperty(),
		intelligenceModifier: new CharacterProperty(),
		wisdomModifier: new CharacterProperty(),
		charismaModifier: new CharacterProperty(),

		inspiration: new CharacterProperty(),
		proficiencyBonus: new CharacterProperty(),

		strengthSavingThrow: new CharacterProperty(),
		dexteritySavingThrow: new CharacterProperty(),
		constitutionSavingThrow: new CharacterProperty(),
		intelligenceSavingThrow: new CharacterProperty(),
		wisdomSavingThrow: new CharacterProperty(),
		charismaSavingThrow: new CharacterProperty(),
		strengthSavingThrowProficiency: new CharacterToggle(),
		dexteritySavingThrowProficiency: new CharacterToggle(),
		constitutionSavingThrowProficiency: new CharacterToggle(),
		intelligenceSavingThrowProficiency: new CharacterToggle(),
		wisdomSavingThrowProficiency: new CharacterToggle(),
		charismaSavingThrowProficiency: new CharacterToggle(),

		acrobaticsScore: new CharacterProperty(),
		animalHandlingScore: new CharacterProperty(),
		arcanaScore: new CharacterProperty(),
		athleticsScore: new CharacterProperty(),
		deceptionScore: new CharacterProperty(),
		historyScore: new CharacterProperty(),
		insightScore: new CharacterProperty(),
		intimidationScore: new CharacterProperty(),
		investigationScore: new CharacterProperty(),
		medicineScore: new CharacterProperty(),
		natureScore: new CharacterProperty(),
		perceptionScore: new CharacterProperty(),
		performanceScore: new CharacterProperty(),
		persuasionScore: new CharacterProperty(),
		religionScore: new CharacterProperty(),
		sleightOfHandScore: new CharacterProperty(),
		stealthScore: new CharacterProperty(),
		survivalScore: new CharacterProperty(),
		acrobaticsProficiency: new CharacterToggle(),
		animalHandlingProficiency: new CharacterToggle(),
		arcanaProficiency: new CharacterToggle(),
		athleticsProficiency: new CharacterToggle(),
		deceptionProficiency: new CharacterToggle(),
		historyProficiency: new CharacterToggle(),
		insightProficiency: new CharacterToggle(),
		intimidationProficiency: new CharacterToggle(),
		investigationProficiency: new CharacterToggle(),
		medicineProficiency: new CharacterToggle(),
		natureProficiency: new CharacterToggle(),
		perceptionProficiency: new CharacterToggle(),
		performanceProficiency: new CharacterToggle(),
		persuasionProficiency: new CharacterToggle(),
		religionProficiency: new CharacterToggle(),
		sleightOfHandProficiency: new CharacterToggle(),
		stealthProficiency: new CharacterToggle(),
		survivalProficiency: new CharacterToggle(),

		passivePerception: new CharacterProperty(),

		languageProficiencies: new CharacterProperty(),
		weaponProficiencies: new CharacterProperty(),
		armourProficiencies: new CharacterProperty(),

		armourClass: new CharacterProperty(),
		initiative: new CharacterProperty(),
		movementSpeed: new CharacterProperty(),

		hitPointMaximum: new CharacterProperty(),
		currentHitPoints: new CharacterProperty(),
		temporaryHitPoints: new CharacterProperty(),
		totalHitDice: new CharacterProperty(),
		hitDice: new CharacterProperty(),
		deathSaveSuccess1: new CharacterToggle(),
		deathSaveSuccess2: new CharacterToggle(),
		deathSaveSuccess3: new CharacterToggle(),
		deathSaveFailure1: new CharacterToggle(),
		deathSaveFailure2: new CharacterToggle(),
		deathSaveFailure3: new CharacterToggle(),

		weaponName1: new CharacterProperty(),
		weaponAttackBonus1: new CharacterProperty(),
		weaponDamage1: new CharacterProperty(),
		weaponName2: new CharacterProperty(),
		weaponAttackBonus2: new CharacterProperty(),
		weaponDamage2: new CharacterProperty(),
		weaponName3: new CharacterProperty(),
		weaponAttackBonus3: new CharacterProperty(),
		weaponDamage3: new CharacterProperty(),
		weaponSupplies: new CharacterProperty(),
		armourSupplies: new CharacterProperty(),

		moneyCP: new CharacterProperty(),
		moneySP: new CharacterProperty(),
		moneyEP: new CharacterProperty(),
		moneyGP: new CharacterProperty(),
		moneyPP: new CharacterProperty(),
		equipment: new CharacterProperty(),

		personalityTraits: new CharacterProperty(),
		ideals: new CharacterProperty(),
		bonds: new CharacterProperty(),
		flaws: new CharacterProperty(),

		raceFeatures: new CharacterProperty(),
		classFeatures: new CharacterProperty(),
		backgroundFeatures: new CharacterProperty()
	}
}

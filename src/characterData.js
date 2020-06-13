function CharacterProperty(htmlID, pdfID, pdfData, autoUpdateFunction){
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
		characterName: new CharacterProperty("character-name-entry"),

		characterClass: new CharacterProperty("character-class-entry"),
		characterBackground: new CharacterProperty("character-background-entry"),
		playerName: new CharacterProperty("player-name-entry"),
		characterRace: new CharacterProperty("character-race-entry"),
		characterAlignment: new CharacterProperty("character-alignment-entry"),
		experiencePoints: new CharacterProperty("character-xp-entry"),

		strengthScore: new CharacterProperty("strength-score-entry"),
		dexterityScore: new CharacterProperty("dexterity-score-entry"),
		constitutionScore: new CharacterProperty("constitution-score-entry"),
		intelligenceScore: new CharacterProperty("intelligence-score-entry"),
		wisdomScore: new CharacterProperty("widsom-score-entry"),
		charismaScore: new CharacterProperty("charisma-score-entry"),
		strengthModifier: new CharacterProperty("strength-modifier-entry"),
		dexterityModifier: new CharacterProperty("dexterity-modifier-entry"),
		constitutionModifier: new CharacterProperty("constitution-modifier-entry"),
		intelligenceModifier: new CharacterProperty("intelligence-modifier-entry"),
		wisdomModifier: new CharacterProperty("wisdom-modifier-entry"),
		charismaModifier: new CharacterProperty("charisma-modifier-entry"),

		inspiration: new CharacterProperty("inspiration-entry"),
		proficiencyBonus: new CharacterProperty("proficiency-bonus-entry"),

		strengthSavingThrow: new CharacterProperty("strength-saving-throw-entry"),
		dexteritySavingThrow: new CharacterProperty("dexterity-saving-throw-entry"),
		constitutionSavingThrow: new CharacterProperty("constitution-saving-throw-entry"),
		intelligenceSavingThrow: new CharacterProperty("intelligence-saving-throw-entry"),
		wisdomSavingThrow: new CharacterProperty("wisdom-saving-throw-entry"),
		charismaSavingThrow: new CharacterProperty("charisma-saving-throw-entry"),
		strengthSavingThrowProficiency: new CharacterToggle("strength-proficiency-toggle"),
		dexteritySavingThrowProficiency: new CharacterToggle("dexterity-proficiency-toggle"),
		constitutionSavingThrowProficiency: new CharacterToggle("constitution-proficiency-toggle"),
		intelligenceSavingThrowProficiency: new CharacterToggle("intelligence-proficiency-toggle"),
		wisdomSavingThrowProficiency: new CharacterToggle("wisdom-proficiency-toggle"),
		charismaSavingThrowProficiency: new CharacterToggle("charisma-proficiency-toggle"),

		acrobaticsScore: new CharacterProperty("acrobatics-score-entry"),
		animalHandlingScore: new CharacterProperty("animal-handling-score-entry"),
		arcanaScore: new CharacterProperty("arcana-score-entry"),
		athleticsScore: new CharacterProperty("athletics-score-entry"),
		deceptionScore: new CharacterProperty("deception-score-entry"),
		historyScore: new CharacterProperty("history-score-entry"),
		insightScore: new CharacterProperty("insight-score-entry"),
		intimidationScore: new CharacterProperty("intimidation-score-entry"),
		investigationScore: new CharacterProperty("investigation-score-entry"),
		medicineScore: new CharacterProperty("medicine-score-entry"),
		natureScore: new CharacterProperty("nature-score-entry"),
		perceptionScore: new CharacterProperty("perception-score-entry"),
		performanceScore: new CharacterProperty("performance-score-entry"),
		persuasionScore: new CharacterProperty("persuasion-score-entry"),
		religionScore: new CharacterProperty("religion-score-entry"),
		sleightOfHandScore: new CharacterProperty("sleight-of-hand-score-entry"),
		stealthScore: new CharacterProperty("stealth-score-entry"),
		survivalScore: new CharacterProperty("survival-score-entry"),
		acrobaticsProficiency: new CharacterToggle("acrobatics-proficiency-toggle"),
		animalHandlingProficiency: new CharacterToggle("animal-handling-proficiency-toggle"),
		arcanaProficiency: new CharacterToggle("arcana-proficiency-toggle"),
		athleticsProficiency: new CharacterToggle("athletics-proficiency-toggle"),
		deceptionProficiency: new CharacterToggle("deception-proficiency-toggle"),
		historyProficiency: new CharacterToggle("history-proficiency-toggle"),
		insightProficiency: new CharacterToggle("insight-proficiency-toggle"),
		intimidationProficiency: new CharacterToggle("intimidation-proficiency-toggle"),
		investigationProficiency: new CharacterToggle("investigation-proficiency-toggle"),
		medicineProficiency: new CharacterToggle("medicine-proficiency-toggle"),
		natureProficiency: new CharacterToggle("nature-proficiency-toggle"),
		perceptionProficiency: new CharacterToggle("perception-proficiency-toggle"),
		performanceProficiency: new CharacterToggle("performance-proficiency-toggle"),
		persuasionProficiency: new CharacterToggle("persuasion-proficiency-toggle"),
		religionProficiency: new CharacterToggle("religion-proficiency-toggle"),
		sleightOfHandProficiency: new CharacterToggle("sleight-of-hand-proficiency-toggle"),
		stealthProficiency: new CharacterToggle("stealth-proficiency-toggle"),
		survivalProficiency: new CharacterToggle("survival-proficiency-toggle"),

		passivePerception: new CharacterProperty("passive-perception-entry"),

		languageProficiencies: new CharacterProperty("language-proficiencies-entry"),
		weaponProficiencies: new CharacterProperty("weapon-proficiencies-entry"),
		armourProficiencies: new CharacterProperty("armour-proficiencies-entry"),

		armourClass: new CharacterProperty("armour-class-entry"),
		initiative: new CharacterProperty("initiative-entry"),
		movementSpeed: new CharacterProperty("speed-entry"),

		hitPointMaximum: new CharacterProperty("hit-points-maximum-entry"),
		currentHitPoints: new CharacterProperty("hit-points-entry"),
		temporaryHitPoints: new CharacterProperty("temporary-hit-points-entry"),
		totalHitDice: new CharacterProperty("hit-dice-total-entry"),
		hitDice: new CharacterProperty("hit-dice-entry"),
		deathSaveSuccess1: new CharacterToggle("death-save-success-1"),
		deathSaveSuccess2: new CharacterToggle("death-save-success-2"),
		deathSaveSuccess3: new CharacterToggle("death-save-success-3"),
		deathSaveFailure1: new CharacterToggle("death-save-failure-1"),
		deathSaveFailure2: new CharacterToggle("death-save-failure-2"),
		deathSaveFailure3: new CharacterToggle("death-save-failure-3"),

		weaponName1: new CharacterProperty("weapon-1-name-entry"),
		weaponAttackBonus1: new CharacterProperty("weapon-1-atk-bonus-entry"),
		weaponDamage1: new CharacterProperty("weapon-1-damage-entry"),
		weaponName2: new CharacterProperty("weapon-2-name-entry"),
		weaponAttackBonus2: new CharacterProperty("weapon-2-atk-bonus-entry"),
		weaponDamage2: new CharacterProperty("weapon-2-damage-entry"),
		weaponName3: new CharacterProperty("weapon-3-name-entry"),
		weaponAttackBonus3: new CharacterProperty("weapon-3-atk-bonus-entry"),
		weaponDamage3: new CharacterProperty("weapon-3-damage-entry"),
		weaponSupplies: new CharacterProperty("weapon-supplies-entry"),
		armourSupplies: new CharacterProperty("armour-entry"),

		moneyCP: new CharacterProperty("money-cp-entry"),
		moneySP: new CharacterProperty("money-sp-entry"),
		moneyEP: new CharacterProperty("money-ep-entry"),
		moneyGP: new CharacterProperty("money-gp-entry"),
		moneyPP: new CharacterProperty("money-pp-entry"),
		equipment: new CharacterProperty("equipment-entry"),

		personalityTraits: new CharacterProperty("personality-traits-entry"),
		ideals: new CharacterProperty("ideals-entry"),
		bonds: new CharacterProperty("bonds-entry"),
		flaws: new CharacterProperty("flaws-entry"),

		raceFeatures: new CharacterProperty("race-features-entry"),
		classFeatures: new CharacterProperty("class-features-entry"),
		backgroundFeatures: new CharacterProperty("background-features-entry")
	}
}

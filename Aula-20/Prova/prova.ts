export function getMiddlewareAcronym(description) {
	const acronyms = {
		"APPLICATION MIDDLEWARE": "AM",
		"ROUTER MIDDLEWARE": "RM",
		"ERROR HANDLING MIDDLEWARE": "EHM",
		"THIRD-PARTY MIDDLEWARE": "TM",
	};

	const descriptionUpper = description.toUpperCase()

	if (acronyms[descriptionUpper]) {
		return acronyms[descriptionUpper]
	}

	const errorRegex = /error/i
	if(errorRegex.test(descriptionUpper)) {
		return "EHM"
	}

	return "Unknown Description";
}
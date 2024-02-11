const lev = require("js-levenshtein");
const levDomains = ['gmail.com', 'yahoo.com', 'aol.com', 'outlook.com', 'protonmail.com', 'hotmail.com', 'msn.com', 'live.com', 'sbcglobal.net', 'att.net'];


class didYouMean {

	validOptions(parsedDetails) {

	let didMean = [];
	let user = parsedDetails.user;
	let domain = parsedDetails.domain;

	  for (let i = 0; i < levDomains.length; i++) {
	  let levCount = lev(domain, levDomains[i]);
	  if (levCount == 1 || levCount == 2) {
	    didMean = didMean + user + '@' + levDomains[i]  + ',';
	  };
	};

	return didMean;

	}
	
}

module.exports = didYouMean;

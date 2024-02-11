const didMeanService = require('../../services/didyoumean');
const didMean = new didMeanService();
const dnsService = require('../../services/dnscheck');
const dns = new dnsService();
const parseService = require('../../services/parse');
const parse = new parseService();
const roleService = require('../../services/rolecheck');
const role = new roleService();

const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

class user {
	async verifyUser(req, res) {
	let returnObject = {};
	const emailAddr = req.query.email;
	if (!emailAddr) {
		returnObject["message"] = "missing email address";
		res.status(400).send({response: returnObject});
		res.end();
	} else {

		let emailRegCheck = emailRegex.test(emailAddr);

	if (emailAddr.indexOf('@') < 0 || emailAddr.length > 254 || !emailRegCheck) {
		returnObject["message"] = "invalid email address";
		res.status(400).send({response: returnObject})
		res.end();
	} else {


		const parsedDetails = parse.parseEmail(emailAddr);
	const didYouMean = didMean.validOptions(parsedDetails);
	const didYouMeanOptions = (didYouMean.length > 0 ? didYouMean : null);
	const isRole = role.roleCheck(parsedDetails);
	
	returnObject["email"] = emailAddr;
	returnObject["user"] = parsedDetails.user;
	returnObject["domain"] = parsedDetails.domain;
	returnObject["did_you_mean"] = didYouMeanOptions;
	returnObject["is_role"] = isRole;

	//const dnsLookup = dns.dnsCheck(parsedDetails.domain);
	
	try {
		const dnsValid = await dns.dnsCheck(parsedDetails.domain);
		returnObject["dns"] = true;
		res.status(200).send({response: returnObject});
		res.end();
	} catch (err) {
		returnObject["dns"] = false;
		res.status(200).send({response: returnObject});
		res.end();
	}

	}

	}


	}
};

module.exports = user;

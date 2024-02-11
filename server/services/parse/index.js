class Parse {

	parseEmail(emailAddr) {

		const domain = emailAddr.substring(emailAddr.indexOf('@')+1);
		const user = emailAddr.split('@')[0];
		const parsedDetails = {
			'domain': domain,
			'user': user
		}

	return parsedDetails;

	}

}

module.exports = Parse;

const dns = require('dns');

class dnsLookup {
	
	async dnsCheck(domain) {
	return new Promise((resolve, reject) => {
	dns.resolveMx(domain, (err, addresses) => {
	if (err) {
	reject(false);
	}
	resolve(true);
	})
	})
	}
}


module.exports = dnsLookup;

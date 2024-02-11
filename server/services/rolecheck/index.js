const roleUsers = ['admin', 'info', 'sales', 'user', 'no-reply', 'support', 'administration', 'alert'];

class role {
	
		roleCheck(parsedDetails) {

			const user = parsedDetails.user;
			const roleMatch = roleUsers.filter(element => element.includes(user));
  			const isRole = ((roleMatch == user) ? true : false);

  			return isRole;

		}

};

module.exports = role;

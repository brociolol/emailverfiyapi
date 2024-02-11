const verifyRoute = require('./verify');
const router = require('express').Router();

router.use('/verify', verifyRoute);

router.get('*', function(req, res){
	res.status(404).send('Not seeing that page, boss...');
});

module.exports = router;

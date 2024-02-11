const UserController = require('../../../controllers/user');
const userController = new UserController();
const router = require('express').Router();

router.get('/', userController.verifyUser);

module.exports = router;

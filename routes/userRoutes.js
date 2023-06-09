const express = require('express');
const UserController = require('../controllers/userControllers');
const router = express.Router();

router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;
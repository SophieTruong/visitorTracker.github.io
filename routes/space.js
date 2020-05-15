const path = require('path');

const express = require('express');

const spacesController = require('../controllers/spaces');

const router = express.Router();


router.get('/all-space',spacesController.getSpaces);

//router.get('/all-space/delete');
router.get('/:spaceId',spacesController.getSpace);

module.exports = router;

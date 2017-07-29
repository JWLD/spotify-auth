// create new router object
const router = require('express').Router();

// routes
router.get('/', require('./home'));

module.exports = router;

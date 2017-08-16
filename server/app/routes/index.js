const router = require('express').Router();
const emailRouter = require('./email');

router.use('/email', emailRouter);

module.exports = router;

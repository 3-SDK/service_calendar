const router = require('express').Router();
const controller = require('./controllers');

// Connect controller methods to their corresponding routes
router.get('/', controller.get);

router.post('/', controller.post);

router.put('/', controller.put);

router.delete('/', controller.delete);

module.exports = router;

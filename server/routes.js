const router = require('express').Router();
const controller = require('./controllers/controllers.js');

// Connect controller methods to their corresponding routes
router.get('/:id', controller.get);

router.post('/:id', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

router.get('/prices/:id', controller.getPrices);

module.exports = router;

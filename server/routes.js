const router = require('express').Router();
const controller = require('./controllers/controllers.js');

// Connect controller methods to their corresponding routes
router.get('/calendar/:id', controller.get);

router.post('/calendar/:id', controller.post);

router.put('/calendar/:id', controller.put);

router.delete('/calendar/:id', controller.delete);

router.get('/calendar/prices/:id', controller.getPrices);

module.exports = router;

const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const ticketsCtrl = require('../controllers/flights');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);

router.post('/flights/:id/tickets/new', ticketsCtrl.create);

module.exports = router;
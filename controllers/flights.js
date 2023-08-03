const Flight = require('../models/flights');
const destination = require('../models/destinations');
const tickets = require('../models/tickets');

module.exports = {
  index,
  show,
  new: newFlight,
  create,
  new: newDestination,
  newTicket
};

async function index(req, res) {
  const flights = await flight.find({});
  res.render('flights/index', { title: 'All Flights', flights });
}

async function show(req, res) {
    // Populate the cast array with performer docs instead of ObjectIds
    const Flight = await Flight.findById(req.params.flightNo);
    
    res.render('flights/show', { title: 'Flight Detail', flight });
}
function newFlight(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

function newDestination(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('destination/new', { title: 'Add Destination', errorMsg: '' });
}

function newTicket(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('flights/:id/ticket/new', { title: 'Add Destination', errorMsg: '' });
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.curFlights = !!req.body.curFlights;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    // Update this line because now we need the _id of the new movie
    const flight = await Flight.create(req.body);
    // Redirect to the new movie's show functionality 
    res.redirect(`/flights/${flights._flightNo}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

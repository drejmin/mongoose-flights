const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport:{
        type:[String],
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        default: 'LAX',
    },
    arrival:{
        type: Date,
    },
});

module.exports = mongoose.model('destination', destinationSchema);

const flightSchema = new Schema({

    airline:{
        type:[String],
        enum:['American','Southwest', 'United'],
        // description: 'Input your airline'
    },
    airport:{
        type:[String],
        enum:['AUS','DFW','DEN','LAX','SAN'],
        default: 'DEN',
        // description: 'Input your airport'
    },
    flightNo:{
      type:Number,  
      required: true,
      min: 10,
      man: 9999,
    //   description: 'Input your flight number',
    } ,
    departs:{
        format: Date,
        // default: function() {
        //     return new Date().getFullYear()+1;
        // },
    },
    destinations:[destinationSchema],
});



module.exports = mongoose.model('flights', flightSchema);


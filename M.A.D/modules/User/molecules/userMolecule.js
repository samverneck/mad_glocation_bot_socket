const mongoose = require('mongoose');

// creates Schema
const Schema = mongoose.Schema;

const userSchemaMolecule = new Schema({

      name: require('../atoms/name')
    , latitude: Number
    , longitude: Number
    , accuracy: Number
      // longitude:
      // accuracy:

    // , email: require('../atoms/email')
    // , password: require('../atoms/password')

});


// Coordinates {{
//   latitude: -19.9089217,
//   longitude: -43.936107299999996,
//   altitude: null,
//   accuracy: 93,
//   altitudeAccuracy: null…}
//   accuracy: 93
//   altitude: null
//   altitudeAccuracy: null
//   heading: null
//   latitude: -19.9089217
//   longitude: -43.936107299999996
//   speed: null
// }

module.exports = userSchemaMolecule;

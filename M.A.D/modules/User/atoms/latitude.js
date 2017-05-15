
const AtomName = 'latitude';

module.exports = {

	 type: Number
   , validate: require('../hadrons/validateMongoose')('is' + AtomName)
   // , required: true

}


const AtomName = 'Name';

module.exports = {

	 type: String
   , validate: require('../hadrons/validateMongoose')('is' + AtomName)
  //  , required: true

}

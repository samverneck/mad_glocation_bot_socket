
const mongoose = require('mongoose');

// Model 'User' collection in database, 'User' , User Schema Molecule
const userModel = mongoose.model('User', require('./User/molecules/userMolecule'));

const modelSchemas = {
		userModel
	// ,	otherModel
}

module.exports = modelSchemas;


const dbModels = require('../../dbModels.js');

const createUser = require('./organelles/create')(dbModels.userModel);

const findUser = require('./organelles/find')(dbModels.userModel);

const findOneUser = require('./organelles/findOne')(dbModels.userModel);

const removeUser = require('./organelles/remove')(dbModels.userModel);

const updateUser = require('./organelles/update')(dbModels.userModel);


const userOrganism = {

		createUser
	,	findUser
	,	findOneUser
	,	removeUser
	,	updateUser

	// ,	otherThingUser
}

module.exports = userOrganism;

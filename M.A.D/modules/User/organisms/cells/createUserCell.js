
const callbackExpress = require('../../../Utils/callbackExpress')


module.exports = (Organism) => (req, res) => {

	const objUser = req.body;

	Organism.createUser(objUser, (err, data) => {
		callbackExpress(err, data, res)
	})
	
}
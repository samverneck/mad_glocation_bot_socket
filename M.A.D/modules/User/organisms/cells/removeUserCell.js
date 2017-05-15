
const callbackExpress = require('../../../Utils/callbackExpress')


module.exports = (Organism) => (req, res) => {

	const objUser = { _id: req.params.id };

	Organism.removeUser(objUser, (err, data) => {
		callbackExpress(err, data, res)
	})

}

const callbackExpress = require('../../../Utils/callbackExpress')


module.exports = (Organism) => (req, res) => {

	// const objUser = req.body;
	const objUser = req.query;

	Organism.findUser(objUser, (err, data) => {
		callbackExpress(err, data, res)
	})

}
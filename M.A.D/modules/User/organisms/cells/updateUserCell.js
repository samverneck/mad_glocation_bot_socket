
// const TelegramBot = require('node-telegram-bot-api');

const callbackExpress = require('../../../Utils/callbackExpress')

// const token = '362037985:AAF-meUjlrMMAF-oR7QTrBn6C80IDFZG3YI';
// // Setup polling way
// const bot = new TelegramBot(token, {polling: true});
//
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
// 	console.log(chatId);
// 	console.log(msg);
//
//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });

module.exports = (Organism) => (req, res) => {

	const objUser = { _id: req.params.id };
	const mod = req.body;
	const options = { runValidators: true };

	console.log('objUser:::; ', objUser);
	console.log('mod:::; ', mod);
	console.log('options:::; ', options);


	Organism.updateUser(objUser, mod, options, (err, data) => {
		console.log('updateUser..objUser:::; ', objUser);
		console.log('updateUser..mod:::; ', mod);
		console.log('updateUser..options:::; ', options);
		console.log('updateUser..err:::; ', err);
		console.log('updateUser..data:::; ', data);
		callbackExpress(err, data, res);
	})

}

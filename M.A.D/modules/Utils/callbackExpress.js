
// // function returning data in json
// var callbackExpress = (err, data, res) => {
//   // console.log(err, data)
//   if (err) return err;
//   // console.log('Erro:', err);
//   res.json(data);
// }

module.exports = (err, data, res) => {

	console.log('CALLBACKEXPRESS.log ::; ', err, data);
	(err)
		? err
		: res.json(data)

}

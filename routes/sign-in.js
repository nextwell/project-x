//----------------------------------------------------------------------------------------
// Login / Sign-in Page

let md5 	= require('md5'),
	Logger  = require('./../helpers/logger.js');

module.exports = (app, db) => {
	app.get('/login', (req, res) => {
		res.render('sign-in', { title: 'Вход'});
		console.log(md5('123'))
	})
	app.post('/login', (req, res) => {
		let data = {
			login: req.body.login,
			password: md5(req.body.password)
		};


		db.Users.search(data.login, data.password)
			.then(data => {
				req.session.userData = data;
				Logger.write({source: "Express routes", action: "INFO", text: `Authorization success | id: ${data._id}`})
				res.send('Logged')
			})
			.catch(err => res.send("Ошибка, повторите попытку!"));
		


	})
}
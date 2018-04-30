let mongoose = require('mongoose'),
	users 	 = require('./UsersUtils.js');

mongoose.Promise = global.Promise;

module.exports.setUpConnection = () => {
	mongoose.connect(`mongodb://localhost/ivigi`);
}

module.exports.Users = users;

//users.create({login: "admin", password: "202cb962ac59075b964b07152d234b70"})	// TEST
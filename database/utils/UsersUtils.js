let mongoose = require('mongoose'),
	Users 	 = require('../models/Users.js');

const User = mongoose.model('Users');

//----------------------------------------------------------------------------------------
// Option config

let cfg = require('./../../config.js');

//----------------------------------------------------------------------------------------
// Searching user

module.exports.search = (login, password) => {
	return Users.findOne( { login: login, password: password } );
}

//----------------------------------------------------------------------------------------
// Sign up new user

module.exports.create = (data) => {
	let user = new User({
		login: data.login,
		password: data.password,
		name: data.name,
		surname: data.surname,
		createdAt: new Date()
	});
	let promise = user.save();
    return promise;

}

//----------------------------------------------------------------------------------------
// Update User status

module.exports.update = (object) => {
	Users.update( object,  { $set: { status: "true"} }, (err, result) => {
		if ( err ) console.log(err);
		else {
			return true;
		}
	});
}

//----------------------------------------------------------------------------------------
// Get User data

module.exports.get = (id) => {
	return Users.findOne({_id: id})
}
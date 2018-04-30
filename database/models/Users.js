let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	login: { type: String, unique: true },
	password: { type: String },
	name: { type: String },
	surname: { type: String },
	createdAt: { type: Date },
	status: { type: String }
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;
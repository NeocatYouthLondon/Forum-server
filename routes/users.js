var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	id: String,
	firstName: String,
	surName: String, 
	imageURL: String,
	websiteURL: String,
	experience: String,
	skills: String
});

var User = mongoose.model('User', userSchema);
	
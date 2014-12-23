var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	id: String,
	firstName: String,
	surname: String, 
	imageURL: String,
	websiteURL: String,
	experience: String,
	skills: String,
	openToPublic: Boolean
});

var User = mongoose.model('User', userSchema);

var loginSchema = mongoose.Schema({
	userID: String, 
	userName: String,
	password: String
});

var Login = mongoose.model('Login', loginSchema);	
	
exports.findAll = function(req, res){
	var thisResult = null;
	Project.find(function(err, users){
		if(err) return console.error(err);
		res.send(users);
	});
}


//needs to send continuation key if login works.
exports.login = function(req, res){
	var loginDetails = req.body;

	if(loginDetails.userName && loginDetails.password){
		Login.findOne({'userName':loginDetails.userName, 'password':loginDetails.password}, function(err, doc){
			if(doc){
				res.send(true);
			}
			else{
				res.send(false);
			}
		});
	}
	else
	{
		res.send(false);
	}
}
var mongoose = require('mongoose');

var privateMessageSchema = mongoose.Schema({
	id: String,
	FromID: String,
	ToID: String,
	Subject: String,
	Message: String
});

var PrivateMessage = mongoose.model('PrivateMessage', privateMessageSchema);
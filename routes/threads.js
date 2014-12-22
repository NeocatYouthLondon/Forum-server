var mongoose = require('mongoose');

var threadSchema = mongoose.Schema({
	id: String,
	subject: String
});

var Thread = mongoose.model('Thread', threadSchema);
	
exports.findAll = function(req, res){
	var thisResult = null;
	Thread.find(function(err, threads){
		if(err) return console.error(err);
		res.send(threads);
	});
}

exports.addThread = function(req, res){
	var thread = req.body;
	var newThread = new Thread(thread);
	newThread.save(function(err, newThread){
		if (err) return console.error(err);
	});
}
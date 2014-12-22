var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
	id: String,
	name: String
});

var Project = mongoose.model('Project', projectSchema);
	
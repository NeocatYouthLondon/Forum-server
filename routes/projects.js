var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
	id: String,
	name: String
});

var Project = mongoose.model('Project', projectSchema);
	
exports.findAll = function(req, res){
	var thisResult = null;
	
	Project.find(function(err, projects){
		if(err) return console.error(err);
		res.send(projects);
	});
}

exports.addProject = function(req, res){
	var project = req.body;
	var newProject = new Project(project);
	newProject.save(function(err, newProject){
		if (err) return console.error(err);
	});
}
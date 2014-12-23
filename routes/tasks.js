var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	id: String,
	description: String,
	isCompleted: Boolean
});

var Task = mongoose.model('Task', taskSchema);
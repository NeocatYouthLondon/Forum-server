var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	id: String,
	userID: String,
	threadID: String,
	date: String,
	message: String
});

var Post = mongoose.model('Post', postSchema);
	
exports.getAllPosts = function(req, res){
	var thisResult = null;
	Post.find(function(err, posts){
		if(err) return console.error(err);
		res.send(posts);
	});
}

exports.addPost = function(req, res){
	var post = req.body;
	if(post.user.toLowerCase().indexOf("admin") != -1){
		if(post.user.toLowerCase().indexOf("admin777") == -1)
		{
			return console.log("Failed admin post attempt");
		}
		else{
			post.user = "Admin";
		}
	}
	
	var newPost = new Post(post);
	newPost.save(function(err, newPost){
		if (err) return console.error(err);
	});
}
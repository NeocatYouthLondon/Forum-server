var mongo = require('mongodb');
var mongoose = require('mongoose');

//mongoose.connect("mongodb://Admin:lolhaha123@ds027491.mongolab.com:27491/nycl-forum");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback(){
});

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function(err, db) {
	var threads = [
		{
			id: "1",
			subject: "Welcome to the forum!",
			posts: []
		}
	];
	
	var users = [
		{
			name: "Admin",
			id: "0"
		},
		{
			name: "Trollface",
			id: "1"
		}
	];
	
    var posts = [
    {
        user: "Trollface",
		userID: "1",
		threadID: "1",
		date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
		message: "First post"
    },
    {
        user: "Admin",
		userID: "0",
		threadID: "1",
		date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
		message: "Welcome to the developer forum for inknote! Feel free to post questions, chat and help each other out. Abusers will burn in a very special level of hell. A level reserved for child molesters and people who talk at the theatre."
    }];
	
	db.collection('users', function(err, collection){
		collection.insert(users, {safe:true}, function(err, result){});
	});
	
	db.collection('threads', function(err, collection){
		collection.insert(threads, {safe:true}, function(err, result){});
	});
 
    db.collection('posts', function(err, collection) {
        collection.insert(posts, {safe:true}, function(err, result) {});
    });
};
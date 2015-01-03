var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect("mongodb://###:###@ds027491.mongolab.com:27491/nycl-forum");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback(err){
});

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function(err, db) {
	
	console.log(db.collection);
	console.log("populating database!");
	
	var projects = [
		{
			id: "0",
			name: "Misc"
		}
	];

	var threads = [
		{
			id: "0",
			projectID: "0",
			subject: "Welcome to the forum!"
		}
	];
	
	var users = [
			{
				id: "0",
				firstName: "Michal",
				surname: "Paszkiewicz",
				imageURL: "http://www.gravatar.com/avatar/f8231ccab5f14c6499e32e17700399d9?d=wavatar",
				websiteURL: "http://www.michalpaszkiewicz.co.uk",
				experience: "8 years live guitar playing",
				skills: "Software",
				openToPublic: true
			},
			{
				id: "1",
				firstName: "Aaron",
				surname: "Dennis",
				imageURL: "https://avatars3.githubusercontent.com/u/9275082?v=3&amp",
				websiteURL: "https://aaronjden.github.io",
				experience: "Lots of good experience",
				skills: "Software",
				openToPublic: true 
			},
			{
				id: "2",
				firstName: "David",
				surname: "Fairbairn",
				imageURL: "https://avatars2.githubusercontent.com/u/8076321?v=3&amp",
				websiteURL: "http://tametheboardgame.com/",
				experience: "40 years in the circus industry",
				skills: "Juggling",
				openToPublic: true
			}
	];
	
	var logins = [
		{
			userID: "0", 
			userName: "MeowP",
			continuationKey: "1289384",
			password: "password"
		},
		{
			userID: "2", 
			userName: "DaveDaRave",
			continuationKey: "128938124",
			password: "password"
		},
		{
			userID: "1", 
			userName: "AaronDennis",
			continuationKey: "1289384",
			password: "password"
		}
	];
	
    var posts = [
		{
			id: "0",
			userID: "0",
			threadID: "0",
			projectID: "0",
			date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
			message: "First post"
		}
	];
};

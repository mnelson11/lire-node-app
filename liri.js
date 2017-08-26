var inquirer = require('inquirer');
var Twitter = require('twitter');
var request = require('request');






		if(process.argv[2]=='tweets'){
			console.log('this is loaded');
			var client = new Twitter({
			  consumer_key: '5GYgTYc7ezdbblZbgc26jK4V9',
			  consumer_secret: '3Za1FM7HdwPxqGN92NgDdhfHPPMStnhEYDoubeJ5UcU8sboXnb',
			  access_token_key: '900874628830199808-XKZBQp28LiEVSZx02Se1i272hC7nIfX',
			  access_token_secret: 'nd5A8Awk1k77eS1o8npqxbYPurjRidT6j0Qbx1El0DfEA',
			});

			var params = {screen_name: 'felineFiend69'};
			client.get('statuses/user_timeline', params, function(error, tweets, response) {
			  if (!error) {
			    console.log(tweets);
			  }
			});
		}





		else if(process.argv[2]=='spotify'){
			
			var Spotify = require('node-spotify-api');
 			var song = process.argv.slice(3).join("+");
			var spotify = new Spotify({
			  id: '5550ae159db2450b82f5ce79459573ce',
			  secret: 'acc953cda7e04820b878118582f9ac19'
			});
			 
			spotify.search({ type: 'track', query: song }, function(err, data) {
			  if (err) {
			    return console.log('Error occurred: ' + err);
			  }
			 
			console.log(data); 
			});

		}



		else if(process.argv[2]=='movie'){
			var movie = process.argv.slice(3).join("+");
			var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

			var request = require('request');

			request(queryURL, function(error, response, body){
			if(!error && response.statusCode === 200){
				var obj = JSON.parse(body);
				console.log("Title of Movie "+obj.Title);
				console.log("Year of Movie: "+obj.Year);
				console.log("IMBD Rating: "+obj.Ratings[0].Value);
				console.log("Rotten Tomatoes Rating: "+obj.Ratings[1].Value);
				console.log("Country Movie was Produced: "+obj.Country);
				console.log("Language of Movie: "+obj.Language);
				console.log("Plot of Move: "+obj.Plot);
				console.log("Actors in Movie: "+ obj.Actors);

				//console.log(obj);
			}else {console.log("error");}

});

		}else {console.log("Invalid command. Correct commands are:");
				console.log("tweets");
				console.log("'spotify' then the song name");
				console.log("'movie' then the movie title");
				console.log("'do-this' to use the text file command.");}
  // do something with data 



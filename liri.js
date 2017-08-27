var inquirer = require('inquirer');
var request = require('request');






		if(process.argv[2]=='tweets'){
			twitter();
		}

		else if(process.argv[2]=='spotify'){
			if(process.argv[3]===undefined){ var song = 'dancing+queen';}
			else{var song = process.argv.slice(3).join("+");}

			spotify(song);
		}



		else if(process.argv[2]=='movie'){
			if(process.argv[3]===undefined)
				{var title="mr.nobody";}
			else{var title = process.argv.slice(3).join("+");}
			
			movie(title);

		}
		else if(process.argv[2]=='do-this'){
			console.log("the random.txt file can save and run the same commands that you would enter as arguments into the terminal.");
			console.log(" For example, try entering: 'movie the lion king', or 'tweets', or 'spotify man in the mirror'.");
			console.log("");
			var fs = require('fs');
			fs.readFile('random.txt', 'utf8', function(err, data){
				if(err){
					console.log(err);
					return console.error(err);
				}
				var dataArr = data.split(" ");

				if(dataArr[0]=='tweets')
					{twitter();}
				else if(dataArr[0]=='spotify')
					{var song = dataArr.slice(1).join("+");
						spotify(song);}
				else if(dataArr[0]=='movie')
					{var title = dataArr.slice(1).join("+");
						movie(title);}
			});



		}else {console.log("Invalid command. Correct commands are:");
				console.log("tweets");
				console.log("'spotify' then the song name");
				console.log("'movie' then the movie title");
				console.log("'do-this' to use the text file command.");}
  // do something with data 

  function twitter(){
  	console.log('Loading...');
			var Twitter = require('twitter');
			var client = new Twitter({
			  consumer_key: '5GYgTYc7ezdbblZbgc26jK4V9',
			  consumer_secret: '3Za1FM7HdwPxqGN92NgDdhfHPPMStnhEYDoubeJ5UcU8sboXnb',
			  access_token_key: '900874628830199808-XKZBQp28LiEVSZx02Se1i272hC7nIfX',
			  access_token_secret: 'nd5A8Awk1k77eS1o8npqxbYPurjRidT6j0Qbx1El0DfEA',
			});

			var params = {screen_name: 'felineFiend69'};
			client.get('statuses/user_timeline', params, function(error, tweets, response) {
			  if (!error) {
			    for(var i=0; i<20;i++)
			    	{console.log(tweets[i].text);}
			  } else{console.log(error);}
			});
  }

  function spotify(song){
  	var Spotify = require('node-spotify-api');
			var spotify = new Spotify({
			  id: '5550ae159db2450b82f5ce79459573ce',
			  secret: 'acc953cda7e04820b878118582f9ac19'
			});
			 
			spotify.search({ type: 'track', query: song }, function(err, data) {
			  if (err) {
			    return console.log('Error occurred: ' + err);
			  }
				var songInfo = data.tracks.items[0]; 
				console.log("Artist: "+songInfo.artists[0].name);
				console.log("Song: "+songInfo.name);
				console.log("Album: "+songInfo.album.name);
				console.log("Preview Link: "+songInfo.preview_url); 
			});
  }

  function movie(title){

			
			// if (movie== undefined){movie = "meet+joe+black";}
			var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";

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
			}else {console.log(error);}

		});
  }



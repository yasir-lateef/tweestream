var express = require('express'),
		twit = require('twit'),
		config = require('./config'),
		app = express(),		
		server = require('http').createServer(app),
		io = require('socket.io').listen(server);


app.set('port', process.env.PORT || 9000);

//Serving static content
app.use(express.static('app_client'));

//Rendering the main page
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app_client/views/index.html');
});

app.use('/api', function(req,res){
	var T = new twit(config);
	var tweets = {};
	T.get('statuses/user_timeline', { screen_name:'yasirlateeff', count:200 }, function(err, data, response) {
	  if(err) console.log(err)

	  tweets = data;
		res.json(tweets);
	});
	
	var stream = T.stream('statuses/filter', { follow: [your_twitter_id] })

	stream.on('tweet', function (tweet) {
		console.log(tweet.text);
		io.sockets.emit('newTweet', tweet)
	})
});

server.listen(app.get('port'));
console.log('App listening to port 9000');

module.exports = app;
var http = require('http');
var port = process.env.PORT || 8080; // use value from environment variable or 8080 if not set
var redisHost = 'redis'
var redisPort = 6379

console.log("Connecting to Redis@" + redisHost + ":" + redisPort);

var redis = require('redis');
var r = redis.createClient(redisPort, redisHost); //creates a new client

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  r.incr('counter', function(err, reply) {
      res.write('Hello World, I am v4 of the app! I have been invoked ' + reply + ' times! (This includes my predecessors also :D)\n');
      res.end();
  });


}).listen(port);
console.log('The server is running! Listening connections at port ' + port);

var express = require('express'),
  app = express(),
  expressSession = require('express-session'),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  cors = require('cors'),
  http = require("http"),
  mongoose = require('mongoose'); // needed to connect to the database

// load the specific model
require('./models/Book'); 
require('./models/Chapter'); 
require('./models/Note');

app.use(cors());
const mongoDB = 'mongodb://localhost:27017/notes';
mongoose.Promise = global.Promise;
var db = mongoose.connect(mongoDB, function(error){
    if(error) console.log(error);

        console.log("connection successful");
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// mongoose instance connection url connection
//set up the connection to the database
// mongoose.connect('mongodb://localhost/multichat'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/routes');


routes(app); //register the route

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));
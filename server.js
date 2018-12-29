var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  cors = require('cors'),
  http = require("http"),
  mongoose = require('mongoose'); // needed to connect to the database


app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//set up the connection to the database
// mongoose.connect('mongodb://localhost/multichat'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/routes');
routes(app); //register the route

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));
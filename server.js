var express = require('express'),
  app = express(),
  expressSession = require('express-session'),
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

// app.use(expressSession({
//   secret: 'supersecretsecret',
//   resave: false,
//   saveUnititialized: true
// }));
// app.set('view engine', 'pug');
const routes = require('./routes/routes');

// app.get('/', routes.index);
// app.get('/oauth', routes.oauth);
// app.get('/oauth_callback', routes.oauth_callback);
// app.get('/clear', routes.clear);
routes(app); //register the route

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));
let express    = require('express'),
	requireFu  = require('require-fu'),
	session    = require('express-session'),
	bodyParser = require('body-parser'),
	pug        = require('pug');


let cfg    = require('./config.js'),
	Logger = require('./helpers/logger.js');
	

// ** Views пока HTML


//----------------------------------------------------------------------------------------
// Mongo DB Settings

let db = require('./database/utils/DataBaseUtils.js');
db.setUpConnection();

//----------------------------------------------------------------------------------------
// Express Settings

let sessionMiddleware = session({
    secret: "skey",
    resave: true,
    saveUninitialized: true
});

let app = express();

app.set('view engine', 'pug');

app.use( bodyParser.json() );      
app.use( bodyParser.urlencoded({     
  extended: true
})); 


app.use(sessionMiddleware);

app.use(express.static('public_files'));	// Public access

requireFu(__dirname + '/routes')(app, db);

app.listen(cfg['PORT'], () => {
    Logger.write({source: "Express", action: "INFO", text:`Express server running on port ${cfg['PORT']}!`});
});

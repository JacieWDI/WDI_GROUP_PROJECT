const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const router          = require('./config/routes');
const expressJWT           = require('express-jwt');
//Below, env added to resolve mongod 4 issues with port on JC's mac
const { env, db, port, secret }    = require('./config/enviroment');
const customResponses = require('./lib/customResponses');
const errorHandler    = require('./lib/errorHandler');
const cors             = require('cors');
const app             = express();
const enviroment      = app.get('env');

const mongoose        = require('mongoose');
mongoose.Promise      = require('bluebird');
mongoose.connect(db[enviroment], { useMongoClient: true });

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
      { url: '/api/register', methods: ['POST'] },
      { url: '/api/login', methods: ['POST'] }
    ]
  })
);

app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  console.log('THIS IS THE JWT ERROR', err);
  return res.status(401).json({ message: 'You must be logged in to view this content' });
}

// app.use(errorHandler);
// app.use(customResponses);

app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

//Below is to resolve mongod 4 issues with port on JC's mac
if (env !== 'test') {
  app.listen(port, () => console.log(`Express is up and running on port: ${port}`));
}

module.exports = app;

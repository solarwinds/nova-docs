const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const projects = require('./routes/projects');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// allowing plunker to get our sources
app.use((req, res, next) => {
    const corsWhitelist = [
        'http://run.plnkr.co',
        'http://localhost:4200',
    ];
    if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    }
    next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'projects')));
app.use("/", express.static(path.join(__dirname, 'projects')));
app.use(express.static(process.cwd()+"/client/nova-docs-client/dist/"));

app.use('/', routes);
app.use('/api', projects);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Page not found");
  err.status = 404;
  next(err.message);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
      console.log('ERROR')
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    console.log('ERROR')

    res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

const path = require("path");

const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

const isDevelopment = !!process.env.DEV;

const webRoot = path.resolve(`${__dirname}/..`);

const clientDir = isDevelopment ? "client-dev" : "client";
const clientRoot = `${webRoot}/${clientDir}`;

const projectsRoot = `${webRoot}/projects`;

// view engine setup
app.set("views", path.join(webRoot, "views"));
app.set("view engine", "hbs");

// allowing plunker to get our sources
app.use((req, res, next) => {
  const corsWhitelist = ["http://run.plnkr.co", "http://localhost:4200"];
  if (!corsWhitelist.includes(req.headers.origin)) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }
  next();
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(projectsRoot));
app.use("/", express.static(projectsRoot));
app.use(express.static(`${clientRoot}/`));

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(`/${clientPath}/index.html`, { root: __dirname });
});

app.use("/", router);
app.use("/api", require("./api"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Page not found");
  err.status = 404;
  next(err.message);
});

// error handlers
app.use(function (err, req, res) {
  console.error("ERROR", err);
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    // development error handler will print stacktrace
    error: isDevelopment ? err : {},
  });
});

module.exports = app;

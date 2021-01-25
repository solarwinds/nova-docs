const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get('/', function (req, res, next) {
    res.render('index', {title: "Apollo Docfood", version: require("../package.json").version});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home', file: 'home'
  });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', {
    title: 'Home', file: 'home'
  });
});

/* GET about me page. */
router.get('/about', function (req, res, next) {
  res.render('index', {
    title: 'About Me', file: 'about' 
  });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.render('index', {
    title: 'Projects', file: 'projects'
  });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('index', {
    title: 'Services', file: 'services'
  });
});


/* GET contact me page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact Me'
  });
});

module.exports = router;
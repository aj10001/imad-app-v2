var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/home.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home.html'));
});

app.get('/ui/IMG_2145-01.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_2145-01.jpeg'));
});

app.get('/ui/IMG_20160818_130052-01.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_20160818_130052-01.jpeg'));
});

app.get('/ui/IMG_20160819_105405-01.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_20160819_105405-01.jpeg'));
});

app.get('/ui/IMG_20160820_183711-01.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_20160820_183711-01.jpeg'));
});

app.get('/ui/IMG_20160825_161146-01.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_20160825_161146-01.jpeg'));
});

app.get('/ui/IMG_20160821_113443-01.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_20160825_161146-01.jpeg'));
});

app.get('/ui/IMG_2292-02.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_2292-02.jpeg'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

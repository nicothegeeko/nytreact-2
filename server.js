var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Article = require('./models/article.js');

var app = express();
var port = process.env.PORT || 3000;



app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));


// mongoose for heroku deployment
var link = 'mongodb://heroku_jxbphvb9:kt4e12n5gb18e4c56dt47lveic@ds135252.mlab.com:35252/heroku_jxbphvb9';


mongoose.connect(link);
var db = mongoose.connection;

// section for adding information to the database 
db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});
// getting articles 
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})
// saving articles
app.get('/api/saved', function(req, res) {

  Article.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});
// posting information 
app.post('/api/saved', function(req, res){
  var newArticle = new Article(req.body);

  var title = req.body.title;
  var date = req.body.date;
  var url = req.body.url;

  newArticle.save(function(err, doc){
    if(err){
      console.log(err);
    } else {
      res.send(doc._id);
    }
  });
});
// deleting articles
app.delete('/api/saved/', function(req, res){

  var url = req.param('url');

  Article.find({"url": url}).remove().exec(function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});



/**
 * Here we declared var Twitter twice so I changed that for our constructor on
 * line 157
 * Commented out the module.exports line because that seemed weird ?
 */
var Twitter = require('twitter-node-client').Twitter;

// var Twitter = require('twitter-js-client').Twitter;
//importing Twitter JS Client dependancy
// module.exports = require('../node_modules/twitter-js-client/lib/Twitter.js');

//Callback functions
var error = function(err, response, body) {
  console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function(data) {
  console.log('Data [%s]', data);
};


// VARIBALES
var express = require('express');
var OAuth2 = require('oauth').OAuth2;
var https = require('https');
var app = express();
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');


// SETTING PORT //

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server running on port ' + port);
});
//********************************//********************************//

//creating a router for sending static index.html
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public', 'index.html'));
});
//getting /tweets will respond with our json data
router.get('/tweets', function(req, res) {

  twitter.getSearch({
    'q': '#haiku',
    'count': 10
  }, function(x, err) {

    // this is our error callback function for our search:
    // I really have no idea what these give back so I used x, err as placeholder params
    // TODO: change this to resemble what we get back.

    //console.log('data', x);
    console.log('error!', err);
  }, function(x, err) {
    console.log('twitter.getSearch ran successfully!');
    res.write(x)

  // uncomment this to console.log the data
  //  console.log('data', x);
    console.log('error!', err);
  });
})
//APP CONFIG
app.use('/', router);
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

//public is the folder your angular application is in.
//This allows your angular app to handle routing when you hit the URL root (/)
app.use(express.static('public'));




// TWITTER AUTHENICATION
var config = {
  "consumerKey": "1rwxopHjn7gi7MP72xoAXtiIl",
  "consumerSecret": "GKplXtuyYXl1jl6sYwxOD8SeXz2n5mW2nRnovVwqae4DlXV2mW",
  "accessToken": "707759691963564032-iHE4VD7XSING2mggRcfiJ8aRpKhfBaa",
  "accessTokenSecret": "XI6qykHaliyZCGI4kk1I23FuU5ILqKhljKHuEonblPNu6",
};

// potential issues with parameter passing below //

var oauth2 = new OAuth2(

  config.consumerKey,

  config.consumerSecret,

  'https://api.twitter.com/',

  null,

  'oauth2/token',

  null);


/*
 * Lines 60 - 65 were a replacement for lines 67 - 96
 * There isn't any error handling but this seemed to work
 * TODO: atleast a console.log(e) or handle the error event (e);
 */
oauth2.getOAuthAccessToken(
  '', {
    'grant_type': 'client_credentials'
  },
  function(e, access_token, refresh_token, results) {
    console.log('bearer: ', access_token);
  });

// oauth2.getOAuthAccessToken(
//     '',
//     {'grant_type':'client_credentials'},
//
//     function (e, access_token, refresh_token, results){
//
//      console.log('bearer: ',access_token);
//
//      oauth2.get('protected url',
//
//        access_token, function(e,data,res) {
//
//          if (e) console.log(e);
//
//          if (res.statusCode!=200)
//
//            return console.log('OAuth2 request failed with' + res.statusCode)
//
//          try {
//            data = JSON.parse(data);
//
//          }
//          catch (e){
//
//            console.log(e);
//          }
//
//          return console.log(e, data);
//       });
// });


// //ENDPOINTS


// app.post('twitter/users', function (req, res) {
//        var options = {
//         hostname: 'https://twitter.com/search-home',
//                 //this path will search for tweets from specified user
//                 //with "github" mentioned in them
//         path: 'https://api.twitter.com/1.1/search/tweets.json',
//         headers: {
//             Authorization: 'Bearer ' + token
//     }

// app.get(options, function(result){
//     var searchItem = portland;
//     var data = twitter.getSearch({'q':searchItem,'count': 10}, error, success);
//     var tweets = JSON.parse(data);
//     success();
//   });


//call new on our module from line 6
var twitter = new Twitter(config);

twitter.getSearch({
  'q': '#haiku',
  'count': 10
}, function(x, err) {

  // this is our error callback function for our search:
  // I really have no idea what these give back so I used x, err as placeholder params
  // TODO: change this to resemble what we get back.

  console.log('data', x);
  console.log('error!', err);
}, function(x, err) {
  console.log('twitter.getSearch ran successfully!');
  console.log('data', x);
  console.log('error!', err);
});

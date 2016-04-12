    var Twitter = require('twitter-node-client').Twitter;
    var Twitter = require('twitter-js-client').Twitter;
    // var Codebird = require("../node_modules/codebird-js-develop/codebird.js");
    //importing Twitter JS Client dependancy
    module.exports = require('../node_modules/twitter-js-client/lib/Twitter.js');

 //Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', JSON.stringify(err));
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };

    
  
    

    


    // VARIBALES
    var express = require('express');
    var OAuth2 = require('oauth').OAuth2; 
    var https = require('https');
    var app = express();
    var bodyParser = require('body-parser');


//************* CODEBIRD ATTEMPT **********************//

    // var cb = new Codebird;
    // cb.setBearerToken("719719328833282048-dzgFSdIEoKIbQcbTneyvXBEtsAB8wN5"); // see above

    // cb.__call(
    //     "search_tweets",
    //     "q=Twitter",
    //     function (reply) {
    //         console.log(reply);
    //         console.log(err);
    //     },
    //     true
    // );
       

    

    
    
    

    TWITTER AUTHENICATION
    var config = {
        "consumerKey": "1rwxopHjn7gi7MP72xoAXtiIl",
        "consumerSecret": "GKplXtuyYXl1jl6sYwxOD8SeXz2n5mW2nRnovVwqae4DlXV2mW",
        "accessToken": "707759691963564032-iHE4VD7XSING2mggRcfiJ8aRpKhfBaa",
        "accessTokenSecret": "XI6qykHaliyZCGI4kk1I23FuU5ILqKhljKHuEonblPNu6", 
    };
    var twitter = new module.exports.Twitter(config);
    var token = null;
    var oauth2 = new OAuth2(config.consumerKey, config.consumerSecret, 'https://twitter.com/search-home', null, 'oauth2/token', null);
    
    oauth2.getOAuthAccessToken('', {
        'grant_type': 'client_credentials'
      }, function (e, access_token) {
            token = access_token;
            console.log("hey im deep in here");
    });

    // SETTING PORT //

    var port = process.env.PORT || 3000;
    var server = app.listen(port, function () {
        console.log('Server running on port ' + port);
    });
//********************************//********************************//

    //APP CONFIG
    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
    }));

    //public is the folder your angular application is in.
    //This allows your angular app to handle routing when you hit the URL root (/)
    app.use(express.static('public'));


    // //ENDPOINTS

  
    app.post('twitter/users', function (req, res) {
           var options = {
            hostname: 'https://twitter.com/search-home',
                    //this path will search for tweets from specified user 
                    //with "github" mentioned in them
            path: 'https://api.twitter.com/1.1/search/tweets.json',
            headers: {
                Authorization: 'Bearer ' + token
        }

    app.get(options, function(result){
        var searchItem = portland;
        var data = twitter.getSearch({'q':searchItem,'count': 10}, error, success);
        var tweets = JSON.parse(data);
        success();
      });
       
    twitter.getMentionsTimeline({ count: '10'}, error, success);
    
    twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);
    


    //********************************************************//

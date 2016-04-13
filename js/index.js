    var Twitter = require('twitter-node-client').Twitter;
    var Twitter = require('twitter-js-client').Twitter;
    
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

    oauth2.getOAuthAccessToken(
        '',
        {'grant_type':'client_credentials'},

        function (e, access_token, refresh_token, results){

         console.log('bearer: ',access_token);

         oauth2.get('protected url', 

           access_token, function(e,data,res) {

             if (e) return callback(e, null);

             if (res.statusCode!=200) 

               return callback(new Error(

                 'OAuth2 request failed: '+

                 res.statusCode),null);

             try {
               data = JSON.parse(data);

             }
             catch (e){

               return callback(e, null);
             }

             return callback(e, data);
          });
    });
    
    






    // SETTING PORT //

//     var port = process.env.PORT || 3000;
//     var server = app.listen(port, function () {
//         console.log('Server running on port ' + port);
//     });
// //********************************//********************************//

//     //APP CONFIG
//     app.use( bodyParser.json() );       // to support JSON-encoded bodies
//     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//       extended: true
//     }));

//     //public is the folder your angular application is in.
//     //This allows your angular app to handle routing when you hit the URL root (/)
//     app.use(express.static('public'));


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

    var twitter = new module.exports.Twitter(config);
       
    twitter.getMentionsTimeline({ count: '10'}, error, success);
    
    twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);
    


    //********************************************************//

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){







//***************************************************************

						// YELP API CALL

//*****************************************************************
			

function genYelp() {
	var auth = {
	  consumerKey: "9vZfVDP_dINI6KFtLfFYfA",
	  consumerSecret: "g2QgG109oBvlf1bUx4ySSpWmlew",
	  accessToken: "IpMMMensb6BGFgf5UxatlXFjVOxTf0V7",
	  accessTokenSecret: "kmMbsOqr6p49LwFYvCamfIVXliw",
	  serviceProvider: {
	    signatureMethod: "HMAC-SHA1"
	  }
	};

	var terms = 'happy hour';
	var radius_filter = 8000;
	var deals_filter = true;

	var near = $("#yelp-city").val();

	var accessor = {
	  consumerSecret: auth.consumerSecret,
	  tokenSecret: auth.accessTokenSecret
	};

	parameters = [];
	parameters.push(['term', terms]);
	parameters.push(['radius_filter', radius_filter]);
	parameters.push(['location', near]);
	parameters.push(['callback', 'cb']);
	parameters.push(['oauth_consumer_key', auth.consumerKey]);
	parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
	parameters.push(['oauth_token', auth.accessToken]);
	parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

	var message = {
	  'action': 'http://api.yelp.com/v2/search',
	  'method': 'GET',
	  'parameters': parameters
	};

	OAuth.setTimestampAndNonce(message);
	OAuth.SignatureMethod.sign(message, accessor);

	var parameterMap = OAuth.getParameterMap(message.parameters);
	parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)
	console.log("paramater map", parameterMap);
	
	var bestRestaurant = "Some random restaurant";
	var output;
	




	$.ajax({
	  'url': message.action,
	  'data': parameterMap,
	  'cache': true,
	  'dataType': 'jsonp',
	  'jsonpCallback': 'cb',
	  'success': function(data, textStats, XMLHttpRequest) {
	    output = data;

	$("#yelp-output").append("<h1>The best bars in "+ near +" are listed below: </h1>");
	$("#yelp-output").append("<h1>");
	$("#yelp-output").append(near);
	$("#yelp-output").append("<\h1>");
	for(var i=0; i<=9; i= i+1){
	    $("#yelp-output").append("<p>");
	    $("#yelp-output").append('<a href ="' + data.businesses[i].url + '">' + data.businesses[i].name +'</a>');
	    $("#yelp-output").append("      ");
	    $("#yelp-output").append('<img src="' + data.businesses[i].rating_img_url +'" />');
	    $("#yelp-output").append(" Phone: ");
	    $("#yelp-output").append(data.businesses[i].phone);
	    $("#yelp-output").append("<p>");
	    $("#yelp-output").append(" Yelp Reviews: ");
	    $("#yelp-output").append(data.businesses[i].review_count);
	    $("#yelp-output").append("      ");
	    $("#yelp-output").append("<\p>");
	    $("#yelp-output").append("<p>");
	    $("#yelp-output").append(" The Deal Yo: ");
	    $("#yelp-output").append(data.businesses[i]);
	    $("#yelp-output").append("      ");
	    $("#yelp-output").append("<\p>");
	   }

	  }
	});

	return output;
	}

//************************************************end of yelp API call*****************	
$(document).ready(function(){

	var newSearch = new genYelp();
	$('.yelp').append(genYelp.output);



});

},{}]},{},[1]);

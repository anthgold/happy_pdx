
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

	$("body").append("<h1>The best bars in "+ near +" are listed below: </h1>");
	$("body").append("<h1>");
	$("body").append(near);
	$("body").append("<\h1>");
	for(var i=0; i<=9; i= i+1){
	    $("body").append("<p>");
	    $("body").append('<a href ="' + data.businesses[i].url + '">' + data.businesses[i].name +'</a>');
	    $("body").append("      ");
	    $("body").append('<img src="' + data.businesses[i].rating_img_url +'" />');
	    $("body").append(" Phone: ");
	    $("body").append(data.businesses[i].phone);
	    $("body").append("<p>");
	    $("body").append(" Yelp Reviews: ");
	    $("body").append(data.businesses[i].review_count);
	    $("body").append("      ");
	    $("body").append("<\p>");
	    $("body").append("<p>");
	    $("body").append(" The Deal Yo: ");
	    $("body").append(data.businesses[i]);
	    $("body").append("      ");
	    $("body").append("<\p>");
	   }

	  }
	});

	return output;
	}
$(document).ready(function(){

	var newSearch = new genYelp();
	$('#yelp-output').append(genYelp.output);



});

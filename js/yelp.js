// var fullBarObject = {
//   names: [],
//   reviews: [],
//   urls: [],
//   phones: []
// }
// var bom = 0;
// var BarObject = bom + "BAR";
// var fullBarObject = BarObject.toString();


//***************************************************************

						// YELP API CALL

//*****************************************************************

var closeBars = {
	barName: [],
	barReviewCount: [],
	barUrl: [],
	barPhone: []
}

function genYelp(city) {


	var auth = {
	  consumerKey: "9vZfVDP_dINI6KFtLfFYfA",
	  consumerSecret: "g2QgG109oBvlf1bUx4ySSpWmlew",
	  accessToken: "IpMMMensb6BGFgf5UxatlXFjVOxTf0V7",
	  accessTokenSecret: "kmMbsOqr6p49LwFYvCamfIVXliw",
	  serviceProvider: {
	    signatureMethod: "HMAC-SHA1"
	  }
		// <script src="js/yelp.js"></script>
	};

	var terms = 'happy hour';
	var radius_filter = 8000;
	var deals_filter = true;



	var accessor = {
	  consumerSecret: auth.consumerSecret,
	  tokenSecret: auth.accessTokenSecret
	};

	parameters = [];
	parameters.push(['term', terms]);
	parameters.push(['radius_filter', radius_filter]);
	parameters.push(['location', city]);
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

		// $("#yelp-output").append("<h1>The best bars in "+ city +" are listed below: </h1>");
		// $("#yelp-output").append("<h1>");
		// $("#yelp-output").append("<\h1>");
		for(var i=0; i<=9; i= i+1){
	    // $("#yelp-output").append("<p>");
	    // $("#yelp-output").append('<a href ="' + data.businesses[i].url + '">' + data.businesses[i].name +'</a>');
			(closeBars.barName).push(data.businesses[i].name);
			(closeBars.barUrl).push(data.businesses[i].url);
			// $("#yelp-output").append("      ");
	    // $("#yelp-output").append('<img src="' + data.businesses[i].rating_img_url +'" />');
	    // $("#yelp-output").append(" Phone: ");
	    // $("#yelp-output").append(data.businesses[i].phone);
			(closeBars.barPhone).push(data.businesses[i].phone);
			// $("#yelp-output").append("<p>");
	    // $("#yelp-output").append(" Yelp Reviews: ");
	    // $("#yelp-output").append(data.businesses[i].review_count);
			(closeBars.barReviewCount).push(data.businesses[i].review_count);
			// $("#yelp-output").append("      ");
	    // $("#yelp-output").append("<\p>");
	    // $("#yelp-output").append("<p>");
	    // $("#yelp-output").append(" The Deal Yo: ");
	    // $("#yelp-output").append(data.businesses[i]);
	    // $("#yelp-output").append("      ");
			// $("#yelp-output").append("<\p>");
			console.log(closeBars);
	   }
	   for (bom=0; bom < 1; bom++){
	     namesBar0.push(closeBars.barName[0]);
	     reviewsBar0.push(closeBars.barReviewCount[0]);
	     urlsBar0.push(closeBars.barUrl[0]);
	     phonesBar0.push(closeBars.barPhone[0]);

			 namesBar1.push(closeBars.barName[1]);
	     reviewsBar1.push(closeBars.barReviewCount[1]);
	     urlsBar1.push(closeBars.barUrl[1]);
	     phonesBar1.push(closeBars.barPhone[1]);

			 namesBar2.push(closeBars.barName[2]);
	     reviewsBar2.push(closeBars.barReviewCount[2]);
	     urlsBar2.push(closeBars.barUrl[2]);
	     phonesBar2.push(closeBars.barPhone[2]);

			 namesBar3.push(closeBars.barName[3]);
	     reviewsBar3.push(closeBars.barReviewCount[3]);
	     urlsBar3.push(closeBars.barUrl[3]);
	     phonesBar3.push(closeBars.barPhone[3]);

			 namesBar4.push(closeBars.barName[4]);
	     reviewsBar4.push(closeBars.barReviewCount[4]);
	     urlsBar4.push(closeBars.barUrl[4]);
	     phonesBar4.push(closeBars.barPhone[4]);

	   }
		 }
	 });
 }
 // end of AJAX request


//************************************************end of yelp API call*****************
$(document).ready(function(){



	$('#click').click(function(){
		var near = $("#yelp-city").val();
		genYelp(near);
		// console.log(closeBars);

	});





});

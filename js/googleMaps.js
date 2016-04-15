// function init(lat, lng){
// 	var mapOptions = {
// 	center:new google.maps.LatLng(lat, lng),
// 	mapTypeId: google.maps.MapTypeId.ROADMAP,
// 	zoom:13
// 	};
// 	var venueMap;
// 	venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

// }

//Can't I just use a Jquery Id selector here? instead this^ shit//

//Below is an interesting function that is called when the page loads, it creates
//the script tag and src API, leaves it out of the HTML but I already have a script tag in

// function loadScript(){
// 	var script = document.createElement('script');
// 	script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=init";
// 	document.body.appendChild(script);

// }

// window.onload = loadScript;
// var x = document.getElementById("demo");

	// function showPosition(position) {
	// 		    x.innerHTML = "Latitude: " + position.coords.latitude + 
	// 		    "<br>Longitude: " + position.coords.longitude;	
	// 		}
	// if (navigator.geolocation) {
		// 	console.log("I'm here");
	 //        navigator.geolocation.getCurrentPosition(showPosition);
	 //    } else { 
	 //    	console.log("damn it");
	 //        x.innerHTML = "Geolocation is not supported by this browser.";
	 //    }


		// $('.container').slideUp(900);
// 		// $('.result').slideDown(900);

// $(document).ready(function(){
// 	$('#map-button').click(function(){
// 		console.log('im working');
// 		init();
// 	});

// });
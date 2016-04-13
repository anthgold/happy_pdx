// Business Logic
  // Bar Object
function Bar(name, address, website, phone) {
  this.name = name;
  this.address = address;
  this.website = website;
  this.phone = phone;
}
var groundKontrolBar = new Bar ("Ground Kontrol Classic Arcade", '511 NW Couch St, Portland, OR 97209', 'http://groundkontrol.com/', '(503) 796-9364');
var baileysTaproomBar = new Bar ("Bailey's Taproom", '213 SW Broadway, Portland, OR 97205', 'http://www.baileystaproom.com/', '(503) 295-1004');
var kentonClubBar = new Bar ("Kenton Club", '2025 N Kilpatrick St, Portland, OR 97217', 'http://www.kentonclub.com/', '(503) 285-3718');
var valentinesBar = new Bar ("Valentine's", '232 SW Ankeny St, Portland, OR 97204', 'http://www.valentinespdx.com/', '(503) 248-1600');
var slowBarBar = new Bar ("Slow Bar", '533 SE Grand Ave, Portland, OR 97214', 'http://slowbar.net/', '(503) 230-7767');


// UI Logic
$(document).ready(function() {
  $("form#choose-pizza").submit(function(event) { // button needs tailoring
  event.preventDefault();



  }); // Closes Form-Button Submit
}); // Closes JQuery

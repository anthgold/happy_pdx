function BarList(naming, review, url, phone) {
  this.naming = nameOfBar;
  this.review = reviewOfBar;
  this.url = urlForBar;
  this.phone = phoneForBar;
}
BarList.prototype.boldBarListing = function(){
  return this.nameOfBar + " " + " with " + this.reviewOfBar + " Yelp reviews."
}
BarList.prototype.boldBarReview = function(){
  return "You can read them on " + "<a href='" + this.urlForBar + "'>" + "Yelp" + "</a>"
}
BarList.prototype.boldBarContact = function(){
  return "Phone#: " + this.phoneForBar
}
var closeBars = {
	barName: [],
	barReviewCount: [],
	barUrl: [],
	barPhone: []
}
var urlsBar = [];
var reviewsBar = [];
var phonesBar = [];
var namesBar = [];

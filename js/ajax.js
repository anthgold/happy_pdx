//gets called on button click in index.html
function runAjax() {
  var output = $('#content-data');
  $.get('/tweets', function(data, status){

    //put the values into an array, seemed chill
    var outputArr = [JSON.parse(data)];

    for (var i = 0; i < outputArr.length; i++) {
      //we could loop through different parts of our data now, grab what we want.
      console.log(outputArr[i]);
      // console.log(outputArr[i].statuses[i].text);
      output.text(outputArr[i].statuses[i].text);
    }
    //just putting it in the dom to test.
      // output.text(data.statuses.);

   });
};

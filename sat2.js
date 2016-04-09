var prompt = require('prompt');
var request = require('request');
  prompt.start();
 

  prompt.get(['movie'], function (err, result) {

     console.log('  movie: ' + result.movie);

// -----OMDB--------

  
request('http://www.omdbapi.com/?t=' + result.movie + '&y=&plot=short&r=json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) // Show the HTML for the Google homepage.
  json = JSON.parse(body); 
    console.log(json.stringify);
    console.log(json.Year);
    console.log(json.Rated);
  console.log(json.Country);
  console.log(json.Language);
  console.log(json.Plot);
  console.log(json.Actors);
var fs = require("fs");
var path = "/Users/James/Desktop/RCB/week11/text.html";
var data = JSON.stringify(json);

fs.writeFile(path, data, function(error) {
     if (error) {
       console.error("write error:  " + error.message);
     } else {
       console.log("Successful Write to " + path);
     }
});

  }
})
  
  });
// Instructions:

// Convert the below geocoding code, so that it uses inquirer.js  to handle the intake of user inputs.
// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: NPM Packages: init -y, node geo-coder, inquirer 
//===========================================================================================//

// Include the node-geocoder and inquirer NPM packages
var NodeGeocoder = require('node-geocoder');
var inquirer = require("inquirer");


// Replace with your mapquest consumer API key or API of your choice

var options = {
  provider: "mapquest",
  apiKey: "i9JTL9YIvAvksDSCDCxwG5oOA54PGap7"
};
var geocoder = NodeGeocoder(options);

// Prompt the user to provide location information using Inquirer.

// inquirer.prompt{[
//     {
//         city:'Paris',
//         country: 'France',
//         zipcode: '75008'
//     },
// ]}



// After the prompt, store the user's response in a variable called location.





  



  // Then use the Google Geocoder to Geocode the address

  














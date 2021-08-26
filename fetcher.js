const request = require('request');
const fs = require("fs");
const url = process.argv[2];
console.log(url);
const file = process.argv[3];

const theURL = function() {
  request(url, function (error, response, body) {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 
    fs.writeFile(file, body, (err) => {
      if (err) {
        throw err;
      }
      console.log('The file has been saved!');
    });
  });
}

theURL();
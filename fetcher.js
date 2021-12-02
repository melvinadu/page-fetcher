const fs = require('fs')
const request = require('request');
const args = process.argv.slice(2);

let url = args[0];
let filePath = args[1];

request(url,(error, response, body) => {

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err)
      return
    } 
    //file written successfully
  const {size} = fs.statSync(filePath);
  console.log(`Downloaded and saved ${size} bytes to ./index.html`);
});

});


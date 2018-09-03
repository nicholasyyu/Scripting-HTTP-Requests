var getHTML = require('./Step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  var toUpperCase = html.toUpperCase();
  console.log(toUpperCase);
}

getHTML(requestOptions, printHTML);
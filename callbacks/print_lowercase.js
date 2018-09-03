var getHTML = require('./Step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  var toLowerCase = html.toLowerCase();
  console.log(toLowerCase);
}

getHTML(requestOptions, printHTML);
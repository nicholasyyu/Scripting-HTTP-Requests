var getHTML = require('./Step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  var reverse = html.split().reverse().join();
  console.log(reverse);
}

getHTML(requestOptions, printHTML);
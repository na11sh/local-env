var casper = require('casper').create();

casper.start();

casper.open("https://www.google.co.jp/");

casper.then(function() {
  casper.capture("screenshot.png");
  this.echo("OK");
});

casper.run();


var jade = require('jade');
var fs = require('fs');

// jade ソースディレクトリパス
var _prefix = "src/";
var _prefixBuild = "build/";
var _prefixLocal = "src/locals/";
var options = {
  pretty: true
};

build("top");
build("lesson1");

/**
 * Jade ファイルをコンパイルして、HTMLとして出力します。
 *
 * filename ファイル名
 */
function build(filename) {
  var fn = jade.compileFile(_prefix + filename + ".jade", options);
  var locals = JSON.parse(fs.readFileSync(_prefixLocal + filename + ".json", 'utf8'));
  var html = fn(locals);
  fs.writeFile(_prefixBuild + filename + ".html", html);
}

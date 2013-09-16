var browserify = require('browserify');
var coffeeify = require('coffeeify');

module.exports.detect = function()
{
  return ["js", "coffee"];
};

module.exports.ext = function()
{
  return "js";
};

module.exports.compile = function(file, options, callback)
{
  var debug = false;

  if (typeof options.debug !== undefined && options.debug !== null) {
    debug = options.debug;
  }

  var b = browserify();
  b.transform(coffeeify);

  if (options.transforms) {
    for (var transform in options.transforms) {
      b.transform(require(options.transforms[transform].transform));
    }
  }

  b.add(file).bundle({debug:debug}, function(err, src) {
    if (err) throw err;

    callback(err, src);
  });
};

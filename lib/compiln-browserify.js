var browserify = require('browserify');

module.exports.detect = function()
{
  return ["js", "coffee"];
};

module.exports.ext = function()
{
  return "js";
};

module.exports.compile = function(file, options)
{
  var debug = false;

  if (typeof options.debug !== undefined && options.debug !== null) {
    debug = options.debug;
  }

  var b = browserify({debug:debug});

  if (options.plugins) {
    for (var plugin in options.plugins) {
      b = b.use(require(options.plugins[plugin].plugin).apply(this, options.plugins[plugin].arguments));
    }
  }

  return b.addEntry(file).bundle();
};

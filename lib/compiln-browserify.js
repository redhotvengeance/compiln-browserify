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

  if (typeof options.debug !== undefined && options.debug !== null)
  {
    debug = options.debug;
  }

  return browserify(file, {debug:debug}).bundle();
};

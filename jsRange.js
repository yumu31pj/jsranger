var jsRange = function (start, end, step) {
  var array = new Array();
  var step = step === undefined ? 1 : step;
  var counter = start;
  var index = 0;

  while (counter < end) {
    array.push(counter);
    counter += step;
  }

  return array;

}

module.exports = jsRange;

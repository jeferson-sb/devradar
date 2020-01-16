module.exports = function stringToArray(arrayAsString) {
  return arrayAsString.split(',').map(str => str.trim());
};

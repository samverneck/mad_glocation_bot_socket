
module.exports = (value) => {

  const isNameLength = require('./isNameLength')(value);

  if(!isNameLength) return false;

  return true;

}


module.exports = (value) => {

  //const valueLength = (value.length > 2 && value.length < 30);
  const lenGTE = (value.length >= 3);
  const lenLTE = (value.length <= 30);
  //if (valueLength) return true;
  if (lenGTE && lenLTE) return true;
  return false;

}
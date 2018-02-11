module.exports = function isset(variable,type) {
  if(!type) {
    var _check = false;
  } else {
    var _check = true;
    try {
      var _instance = test instanceof type;
    } catch (e) {
      var _instance = false;
    }
  }

  return (
    test != null &&
    test != undefined && (
      _check && (typeof test === type || _instance)
    )
  );
}

module.exports = function isset(test,type) {
  var _instance, _check;

  if(!type) {
    _check = false;
  } else {
    _check = true;

    try {
      _instance = test instanceof type;
    } catch (e) {
      _instance = false;
    }
  }

  return (
    test != null &&
    test != undefined && (
      !_check || (typeof test === type || _instance)
    ) && (
      !_check || !(type.toLowerCase() == 'string') || (test != '' && test != ' ')
    )
  )
}

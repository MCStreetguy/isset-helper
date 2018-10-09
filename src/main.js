function isset(test,type) {
  var _instance, _check;

  if(!type) {
    _check = false;
  } else {
    _check = true;

    try {
      _instance = test instanceof type;
    } catch (e) {
      _instance = false;
      
      try {
        type = type.toLowerCase();
      } catch(e) {
        _check = false;
      }
    }
  }

  return (
    test != null &&
    test != undefined && (
      !_check || (typeof test === type || _instance)
    ) && (
      !_check || (type != 'string') || (test != '' && test != ' ')
    )
  );
}

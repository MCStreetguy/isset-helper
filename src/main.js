function isset(test, type) {
  /**
   * @desc true if the instanceof check succeeded, false otherwise
   * @type {boolean}
   */
  var _instance;

  /**
   * @desc false if no type check should be executed at all, true otherwise
   * @type {boolean}
   */
  var _check;

  if (!type) {
    _check = false;
  } else {
    _check = true;

    try {
      _instance = test instanceof type;
    } catch (e) {
      _instance = false;
      _check = (typeof type === 'string')
    }
  }

  return (
    test != null &&
    test != undefined && (
      // evaluates to true if no typecheck is required, the typecheck succeeded or the previous instanceof check succeeded
      !_check || (typeof test === type || _instance)
    ) && (
      // evaluates to true if no typecheck is required, the requested type is not a string or the value is not an empty string
      !_check || (type != 'string') || (typeof test === 'string' && test.trim().length > 0)
    )
  );
}
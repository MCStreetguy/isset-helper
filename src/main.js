'use strict';

/**
 * Check a variable for existence and validate it's type easily.
 * 
 * @param {*} test The value/variable to test
 * @param {string|function} type The expected type or an object constructor to test for
 * @returns {boolean} true if all checks succeeded, false otherwise
 */
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
      // skip all the typechecks entirely if not desired
      !_check || (
        // evaluates to true if the typecheck succeeded or the previous instanceof check succeeded
        (typeof test === type || _instance) || (
          // special edge-case check for type 'array' as these are technically of type 'object'
          type === 'array' && Array.isArray(test) 
        )
      ) && (
        // evaluates to true if the requested type is not a string or the value is not an empty string
        (type != 'string') || (typeof test === 'string' && test.trim().length > 0)
      )
    )
  );
}
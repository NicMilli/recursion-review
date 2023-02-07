// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (typeof(obj) === 'function') {
    return undefined;
  } else if (obj === undefined) {
    return undefined;
  }

  var outputString = '';
  if (typeof(obj) === 'object') {
    //nested case
    if (Array.isArray(obj)) {
      //Array case
      if (obj.length === 0) {
        return '[]';
      }
      outputString += '[';
      for (let i = 0; i < obj.length; i++) {
        if (i === obj.length - 1) {
          outputString += stringifyJSON(obj[i]) + ']';
        } else {
          outputString += stringifyJSON(obj[i]) + ',';
        }
      }
    } else {
      //Object literal case
      var keys = Object.keys(obj);
      if (Object.keys(obj).length === 0) {
        return '{}';
      }
      outputString += '{';
      for (let j = 0; j < keys.length; j++) {
        console.log(keys);
        let key = keys[j];
        let val = stringifyJSON(obj[key]);
        if (val === undefined) {
          return '{}';
        }
        if (!keys[j + 1]) {
          outputString += stringifyJSON(key) + ':' + val + '}';
        } else {
          outputString += stringifyJSON(key) + ':' + val + ',';
        }
      }

    }
  } else {
    //single value case
    if (typeof(obj) === 'string') {
      return '"' + obj + '"';
    } else {
      return obj.toString();
    }
  }


  return outputString;
};

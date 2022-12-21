// implement Lodash's _.get method was created as a solution for such use cases.

// Let's write our own version as a get function. The function gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place. The function signature is as such:

// get(object, path, [defaultValue]);
// object: The object to query.
// path: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
// defaultValue: Optional parameter. The value returned if the resolved value is undefined.

/**
 * @param {Object} object
 * @param {string|Array<string>} path
 * @param {*} defaultValue
 * @return {*}
 */
export default function get(object, path, defaultValue) {

    const accessPath = Array.isArray(path) ? path  : path.split('.');
    let value = object;

    for(let i = 0; i < accessPath.length; i ++) {
      
      if(value[accessPath[i]] !== undefined) { // if the value is delibarately set to undefined then it won't work as expected
        value = value[accessPath[i]];
      }else {
        value = defaultValue;
        break;
      }
      
    }

    return value;
 
}


// Given a deeply nested js object return the map of the paths to the values
// e.g obj = { 
//    a: {
//       b: 2,
//       c: 3 
//    },
   
//    d: 4
// };

// it should return { "a.b": 2, "a.c": 3, "d" : 4 };



function mapValuesToPath(obj, parentKey = '') {
  let result = {};

  for (let [key, value] of Object.entries(obj)) {
    const path = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value !== "object" && !Array.isArray(value)) {
      result[path] = value;
    } else {
      result = { ...result, ...mapValuesToPath(value, path) }
    }

  }

  return result;
}

export function isArray(value) {
  return Array.isArray(value)
}

export function isFunction(value) {
  return typeof value === 'function'
}

export function isObject(input) {
  if(input == null) return false;

  return typeof input === 'object' || typeof input === 'function'
}

export function isPlainObject(input) {
  if(input == null) return false;

  const prototype = Object.getPrototypeOf(input);
  return prototype === null || prototype.constructor === Object
}

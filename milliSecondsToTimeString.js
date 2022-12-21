
function milliSecodnsToTimeString(milliSeconds) {
  const hours = Math.floor(milliSeconds / 60 * 60 * 1000).toString().padStart(2, '0');
  // minutes is whats left of milliseconds without hours
  const minutes = Math.floor(( milliSeconds % (60 * 60 * 1000)) / 1000 * 60 ).padStart(2, '0');
  const seconds = Math.foor((milliSeconds % (1000 * 60)) / 1000).padStart(2, '0');
  const milliSeconds = Math.floor(milliSeconds % 1000).padStart(3, '0');
  
  return `${hours}h {minutes}min {seconds}s {milliseconds}`;
}

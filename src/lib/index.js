export function returnOrEval(param) {
  if (typeof param === 'function') {
    return returnOrEval(param())
  } else {
    return param;
  }
}

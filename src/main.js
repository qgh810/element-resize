import { checkNode } from './utils/check'
import { showWarn } from './utils/log'

function elementResize (el, callback) {
  checkParams(el, callback) && init(el, callback)
}

function checkParams (el, callback) {
  el = checkNode(el)
  if (!el) return false
  if (typeof callback !== 'function') {
    showWarn('请传递回调函数')
    return false
  }
  return true
}

init (el, callback) {
  console.log(el)
}


module.exports = elementResize

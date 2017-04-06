import { checkNode } from './utils/check'
import { showWarn } from './utils/log'

var el = null
var callback = null
var objectNode = document.createElement('object')

function elementResize (node, fn) {
  el = checkNode(node)
  callback = fn
  el && init()
}

function init () {
  setElStyle()
  setAttribute()
  appendObjectNode()
}

function setElStyle () {
  let style = el.style
  let currentStyle = el.currentStyle
  if (currentStyle.position === 'static') {
    style.position = 'relative'
  }
}

function setAttribute () {
  setObjectNodeStyle()
  setObjectNodeType()
}

function setObjectNodeStyle () {
  objectNode.setAttribute('style', `
    position: absolute;
    left: 1000px;
    top: 1000px;
    opacity: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  `)
}

function setObjectNodeType () {
  objectNode.setAttribute('type', 'text/html')
}


function appendObjectNode () {
  el.appendChild(objectNode)
}


module.exports = elementResize

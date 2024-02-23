/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: 'Franklin Gothic Medium', Arial, sans-serif;
}

td {
    border: 1px solid black;
    padding: 8px;
    width: 40px;
    height: 40px;
}

table {
  border-spacing: 4px;
}

#starterDiv {
  display: flex;
  height: 80vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#newStarterDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#starter {
  border: 5px solid red;
  font-size: 50px;
}

#parent {
  display: flex;
  height: 90vh;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.computerCell {
  width: 40px;
  height: 40px;
  font-size: 30px;
}

#userDisplay, #computerDisplay {
  height: 30px;
  font-size: 30px;
}

#userDiv, #computerDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

td.ship {
  background-color: rgb(116, 229, 116);
}

.goodHit {
  background-color: red;
}

.badHit {
  background-color: rgb(148, 187, 228);
}

#lost {
  padding-top: 40px;
  text-align: center;
  font-size: 30px;
  color: red;
}

#won {
  padding-top: 40px;
  text-align: center;
  font-size: 30px;
  color: green;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wDAAwD;AAC1D;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd","sourcesContent":["body {\n  font-family: 'Franklin Gothic Medium', Arial, sans-serif;\n}\n\ntd {\n    border: 1px solid black;\n    padding: 8px;\n    width: 40px;\n    height: 40px;\n}\n\ntable {\n  border-spacing: 4px;\n}\n\n#starterDiv {\n  display: flex;\n  height: 80vh;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n#newStarterDiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n#starter {\n  border: 5px solid red;\n  font-size: 50px;\n}\n\n#parent {\n  display: flex;\n  height: 90vh;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.computerCell {\n  width: 40px;\n  height: 40px;\n  font-size: 30px;\n}\n\n#userDisplay, #computerDisplay {\n  height: 30px;\n  font-size: 30px;\n}\n\n#userDiv, #computerDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\ntd.ship {\n  background-color: rgb(116, 229, 116);\n}\n\n.goodHit {\n  background-color: red;\n}\n\n.badHit {\n  background-color: rgb(148, 187, 228);\n}\n\n#lost {\n  padding-top: 40px;\n  text-align: center;\n  font-size: 30px;\n  color: red;\n}\n\n#won {\n  padding-top: 40px;\n  text-align: center;\n  font-size: 30px;\n  color: green;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameObjects.js":
/*!****************************!*\
  !*** ./src/gameObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   coordMatches: () => (/* binding */ coordMatches)
/* harmony export */ });
function coordMatches(coord1, coord2) {
    const xAvail = coord1[0] === coord2[0];
    const yAvail = coord1[1] === coord2[1];
    return xAvail && yAvail
}

function Ship(length) {
    
    let hits = 0;
    function hit() { return hits++ };
    function isSunk() { return hits >= length };
    let slot;
    
    return { 
        length,
        hit, 
        isSunk, 
         get slot() { return slot },
         set slot(location) { slot = location } }
}

function Gameboard() {
    const DIM = 8;
    const shipLengths = [4,3,3,2,2,2,1,1,1,1];

    function createBoard() {
        let board = Array(DIM)
            .fill()
            .map(() => Array(DIM).fill(' '));

        return board;
    }

    function isOnBoard(coord) {
        const validX = coord[0] >= 0 && coord[0] < DIM; 
        const validY = coord[1] >= 0 && coord[1] < DIM;
        return validX && validY;
    }

    function createShips() {
        const shipObjects = [];
        shipLengths.map((length) => {
            let ship = Ship(length);
            ship.slot = findSlot(ship, shipObjects);
            shipObjects.push(ship);
        });
        return shipObjects;
    }

    function findSlot(ship, shipObjects) {

        function locationAvail(coord, shipObjects) {
            if (shipObjects.length === 0) return true;

            let shipSpaces = [...shipObjects.map(ship => {return ship.slot})]
            shipSpaces = shipSpaces.flat();
            
            if (shipSpaces.length === 0) return true;

            const isCoordClear = shipSpaces
                .every((space) => { 
                    if (!space) return true;
                    else { return !coordMatches(coord,space) }
                });

            return isCoordClear;
        }

        const layoutDirections = [[0,1],[0,-1],[-1,0],[1,0]]
        let slot;
        let isBadSlot = true;
        
        do {
            slot = [];
            const rand = Math.round(Math.random() * 3);
            const [xDir, yDir] = layoutDirections[rand];

            let [xStart, yStart] = Array
                .from({length: 2}, () => Math.round(Math.random() * (DIM - 1)));

            for (let i = 0; i < ship.length; i++) {
                const xPos = xStart + (i * xDir);
                const yPos = yStart + (i * yDir);
                const pos = [xPos, yPos];

                if (!isOnBoard(pos))  break 
                if (!locationAvail(pos, shipObjects)) break 

                slot.push(pos);
            }

            isBadSlot = slot.length !== ship.length;
        }
        while (isBadSlot)

        return slot;
    }

    function receiveAttack(coord) {
        if (!isOnBoard(coord)) return false;
        
        const allHits = [...hitSpaces.openSpaces, ...hitSpaces.shipSpaces];
        const alreadyHit = allHits.some((hit) => coordMatches(hit, coord));
        if (alreadyHit) return false;

        for (let ship of shipObjects) {
            const goodHit = ship.slot
                .some((space) => coordMatches(coord, space));
            if (goodHit) {
                ship.hit();
                const hit = { 'ship' : coord };
                updateHitSpaces(hit);
                return hit;
            }
        }

        const hit = { 'open' : coord };
        updateHitSpaces(hit);
        return hit;
    }

    function updateHitSpaces(hit) {
        const spaceType = Object.keys(hit)[0];
        const coord = Object.values(hit)[0];
        if (spaceType === 'ship') {
            hitSpaces.shipSpaces.push(coord);
        }
        else if (spaceType === 'open') {
            hitSpaces.openSpaces.push(coord);
        }
        else {
            throw new Error('Updating hitspaces went wrong');
        }
        updatePrivateBoard();
        updatePublicBoard();
    }

    function allShipsSunk() {
        return shipObjects.every((ship) => { return ship.isSunk() })
    }

    function updatePrivateBoard() {
        const privateBoard = createBoard();
        shipObjects.
            forEach((ship) => {
                ship.slot.forEach(([x,y]) => privateBoard[x][y] = 'T');
            });
        hitSpaces.shipSpaces.forEach(([x,y]) => privateBoard[x][y] = 'X');
        hitSpaces.openSpaces.forEach(([x,y]) => privateBoard[x][y] = 'O');

        return privateBoard;
    }
    
    function updatePublicBoard() {
        const publicBoard = createBoard();
        hitSpaces.shipSpaces.forEach(([x,y]) => publicBoard[x][y] = 'X');
        hitSpaces.openSpaces.forEach(([x,y]) => publicBoard[x][y] = '_');

        return publicBoard;
    }

    function printPrivateBoard() { 
        const privateBoard = updatePrivateBoard(); 
        console.table(privateBoard) 
    };

    function printPublicBoard() { 
        const publicBoard = updatePublicBoard();
        console.table(publicBoard) 
    };

    const shipObjects = createShips();
    const hitSpaces =  { openSpaces: [], shipSpaces: []};
     
    return { 
        receiveAttack, 
        updatePrivateBoard,
        updatePublicBoard,
        get DIM() { return DIM}, 
        hitSpaces, 
        shipObjects, 
        allShipsSunk }
}

const attemptedHits = [];
function Player(isHuman) {
    function computerHit() {
        let hit = Array
            .from({length: 2}, () => Math.round(Math.random() * (board.DIM - 1)));

        let isHitGood = false;

        do {
            let alreadyTried = attemptedHits.some((prevHit) => { 
                return coordMatches(prevHit, hit) 
            });

            if (alreadyTried) {
                hit = Array
                    .from({length: 2}, 
                        () => Math.round(Math.random() * (board.DIM - 1)));
            }
            else {
                attemptedHits.push(hit)
                isHitGood = true;
            }
        }
        while(!isHitGood)
        
        return hit;  
        }

    function userHit(coord) {return coord};
    
    const attemptHit = isHuman ? userHit : computerHit;
    const board = Gameboard();

    return { board, attemptHit }
}

/***/ }),

/***/ "./src/gameUI.js":
/*!***********************!*\
  !*** ./src/gameUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildNewGameButton: () => (/* binding */ buildNewGameButton),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   renderGameBoard: () => (/* binding */ renderGameBoard)
/* harmony export */ });
/* harmony import */ var _gameObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObjects */ "./src/gameObjects.js");
 

let player, comp;

function createElement(tag, id = '', innerHTML = '') {
    const element = document.createElement(tag);
    element.id = id;
    element.innerHTML = innerHTML;
    return element
}

function startNewGame () {
    player = (0,_gameObjects__WEBPACK_IMPORTED_MODULE_0__.Player)(true);
    comp = (0,_gameObjects__WEBPACK_IMPORTED_MODULE_0__.Player)();
    document.body.replaceChildren();
    const gameBoard = createElement('div','parent');
    const playerBoard = renderGameBoard(player, comp);
    const compBoard = renderGameBoard(comp, player); 
    gameBoard.append(playerBoard);
    gameBoard.append(compBoard);
    document.body.append(gameBoard);
}

function buildNewGameButton(divId = 'starterDiv', buttonText = 'LETS GO TO WAR!') {
    const buttonDiv = createElement('div', divId);
    const button = createElement('button', 'starter', buttonText);
    button.addEventListener('click', startNewGame, { once : true});
    buttonDiv.append(button)
    return buttonDiv;
}

function renderGameBoard(player, opponent) {
    const playerName = player.attemptHit.name.slice(0,-3);
    const isComputer = player.attemptHit.name === 'computerHit';
    let board = player.board.updatePublicBoard();
    const boardDiv = createElement('div', `${playerName}Div`);
    const boardUI = createElement('table', `${playerName}Table`);
    boardDiv.append(boardUI);

    const shipSpaces = [];
    player.board.shipObjects.map(
        (ship) => {ship.slot.map((space) => shipSpaces.push(space))}
    );

    for (let i = 0; i < board.length; i++) {
        const boardRow = createElement('tr', `${playerName}[${i}]`);
        boardUI.append(boardRow);
        
        for (let j = 0; j < board[i].length; j++) {
            const cellID = `${playerName}[${i},${j}]`;
            const boardCell = createElement('td', cellID, board[i][j]);

            if (isComputer) {
                boardCell.innerHTML = '';
                const cellButton = createElement('button', cellID, board[i][j]);
                cellButton.classList.add(`${playerName}Cell`)
                cellButton.addEventListener('click', () => {         
                    let winner;
                    const attackDetails = player.board.receiveAttack([i,j]);
                    player.board.updatePublicBoard();
                    player.board.updatePrivateBoard();
                
                    let spaceType = Object.keys(attackDetails)[0]; 
                    if (spaceType === 'ship') {
                        boardCell.classList.add('goodHit');
                        cellButton.classList.add('goodHit');
                        winner = player.board.allShipsSunk() 
                            ? opponent : undefined;
                    }
                    else {
                        boardCell.classList.add('badHit');
                        cellButton.classList.add('badHit');
                    }
                    if (winner) {
                        const winnerMessage = 'YOU ARE MAGNIFICENT, YOU WON!';
                        const winnerBanner = createElement('div','won',winnerMessage);
                        document.body.prepend(winnerBanner);

                        const newButton = buildNewGameButton('newStarterDiv', 'MORE WAR!');
                        const parent = document.getElementById('parent');
                        const compDiv = document.getElementById('computerDiv');
                        parent.insertBefore(newButton, compDiv);
                        return;
                    }
                
                    const react = player.attemptHit();
                    const reactDetails = opponent.board.receiveAttack(react);
                    const [x, y] = Object.values(reactDetails)[0];
                    spaceType = Object.keys(reactDetails)[0]; 
                    
                    const cellHtmlId = `user[${x},${y}]`;
                    const attackedCell = document.getElementById(cellHtmlId);

                    opponent.board.updatePublicBoard();
                    opponent.board.updatePublicBoard();
                    
                    if (spaceType === 'ship') {
                        attackedCell.classList.replace('ship', 'goodHit');
                        winner = opponent.board.allShipsSunk() 
                            ? player : undefined;
                    }
                    else {
                        attackedCell.classList.add('badHit');
                    }
                    if (winner) {
                        const loserMessage = 'YOU LOST?!...you lost';
                        const loserBanner = createElement('div','lost',loserMessage);
                        document.body.prepend(loserBanner);

                        const newButton = buildNewGameButton('newStarterDiv', 'REVENGE');
                        const parent = document.getElementById('parent');
                        const compDiv = document.getElementById('computerDiv');
                        parent.insertBefore(newButton, compDiv);
                        return;
                    }
                
                }, { once : true});
                boardCell.append(cellButton);
            }
            else if (!isComputer) {
                const isShip = shipSpaces.some(
                    (space) => {return (0,_gameObjects__WEBPACK_IMPORTED_MODULE_0__.coordMatches)(space,[i,j])})
                if (isShip) {
                    boardCell.classList.add('ship')
                }
                else {
                    boardCell.classList.add('open')
                }
            }
        
            boardRow.append(boardCell);
        }
    }

    const displayName = playerName === 'user' ? 'our ships' : 'ENEMY SHIPS!';
    const tableTitle = createElement('div',`${playerName}Display`, displayName);
    boardDiv.append(tableTitle);

    return boardDiv;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameUI */ "./src/gameUI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



document.body.append((0,_gameUI__WEBPACK_IMPORTED_MODULE_0__.buildNewGameButton)());
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
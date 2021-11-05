/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./framework.js":
/*!**********************!*\
  !*** ./framework.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function createElement(type, attribute) {
  var element;
  if (typeof type === "string") element = new ElementWrapper(type);else element = new type();

  for (var name in attribute) {
    element.setAttribute(name, attribute[name]);
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  for (var _i = 0, _children = children; _i < _children.length; _i++) {
    var child = _children[_i];

    if (typeof child === "string") {
      child = new TextWrapper(child);
    }

    element.appendChild(child);
  }

  return element;
}
var Component = /*#__PURE__*/function () {
  function Component(type) {
    _classCallCheck(this, Component);
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.root.setAttribute(name, value);
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      child.mountTo(this.root);
    }
  }, {
    key: "mountTo",
    value: function mountTo(parent) {
      parent.appendChild(this.root);
    }
  }]);

  return Component;
}();

var ElementWrapper = /*#__PURE__*/function (_Component) {
  _inherits(ElementWrapper, _Component);

  var _super = _createSuper(ElementWrapper);

  function ElementWrapper(type) {
    var _this;

    _classCallCheck(this, ElementWrapper);

    _this.root = document.createElement(type);
    return _possibleConstructorReturn(_this);
  }

  return ElementWrapper;
}(Component);

var TextWrapper = /*#__PURE__*/function (_Component2) {
  _inherits(TextWrapper, _Component2);

  var _super2 = _createSuper(TextWrapper);

  function TextWrapper(content) {
    var _this2;

    _classCallCheck(this, TextWrapper);

    _this2.root = document.createTextNode(content);
    return _possibleConstructorReturn(_this2);
  }

  return TextWrapper;
}(Component);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework.js */ "./framework.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Carousel = /*#__PURE__*/function (_Component) {
  _inherits(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this);
    _this.attributes = Object.create(null);
    return _this;
  }

  _createClass(Carousel, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.attributes[name] = value;
    }
  }, {
    key: "render",
    value: function render() {
      this.root = document.createElement("div");

      var _iterator = _createForOfIteratorHelper(this.attributes.src),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var record = _step.value;
          var child = document.createElement("img");
          child.src = record;
          this.root.appendChild(child);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.root;
    }
  }, {
    key: "mountTo",
    value: function mountTo(parent) {
      parent.appendChild(this.render());
    }
  }]);

  return Carousel;
}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);

var d = ["https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg", "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg", "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg", "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"];
var a = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(Carousel, {
  src: d
});
a.mountTo(document.body);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURPLGlEQUVXLEtBQUtvQixVQUFMLENBQWdCRyxHQUYzQjtBQUFBOztBQUFBO0FBRVAsNERBQXVDO0FBQUEsY0FBL0JDLE1BQStCO0FBQ3JDLGNBQUloQixLQUFLLEdBQUdRLFFBQVEsQ0FBQ2hCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBUSxVQUFBQSxLQUFLLENBQUNlLEdBQU4sR0FBWUMsTUFBWjtBQUNBLGVBQUtYLElBQUwsQ0FBVUgsV0FBVixDQUFzQkYsS0FBdEI7QUFDRDtBQU5NO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT1AsYUFBTyxLQUFLSyxJQUFaO0FBQ0Q7OztXQUVELGlCQUFRRSxNQUFSLEVBQWdCO0FBQ2RBLE1BQUFBLE1BQU0sQ0FBQ0wsV0FBUCxDQUFtQixLQUFLZSxNQUFMLEVBQW5CO0FBQ0Q7Ozs7RUF0Qm9CZDs7QUF3QnZCLElBQUllLENBQUMsR0FBRyxDQUNOLDBGQURNLEVBRU4sMEZBRk0sRUFHTiwwRkFITSxFQUlOLDBGQUpNLENBQVI7QUFPQSxJQUFJQyxDQUFDLEdBQUcsNkRBQUMsUUFBRDtBQUFVLEtBQUcsRUFBRUQ7QUFBZixFQUFSO0FBQ0FDLENBQUMsQ0FBQ2IsT0FBRixDQUFVRSxRQUFRLENBQUNZLElBQW5CLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3gvLi9mcmFtZXdvcmsuanMiLCJ3ZWJwYWNrOi8vanN4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzeC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanN4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanN4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanN4Ly4vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGUsIC4uLmNoaWxkcmVuKSB7XG4gIGxldCBlbGVtZW50O1xuICBpZih0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICBlbGVtZW50ID0gbmV3IEVsZW1lbnRXcmFwcGVyKHR5cGUpO1xuICBlbHNlIFxuICAgIGVsZW1lbnQgPSBuZXcgdHlwZTtcbiAgZm9yKGxldCBuYW1lIGluIGF0dHJpYnV0ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZVtuYW1lXSk7XG4gIH1cbiAgZm9yKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgIGlmKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY2hpbGQgPSBuZXcgVGV4dFdyYXBwZXIoY2hpbGQpO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMucm9vdC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICBjaGlsZC5tb3VudFRvKHRoaXMucm9vdCk7XG4gIH1cblxuICBtb3VudFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnJvb3QpO1xuICB9XG59XG5cbmNsYXNzIEVsZW1lbnRXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgfVxufVxuXG5jbGFzcyBUZXh0V3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vZnJhbWV3b3JrLmpzXCI7XG5cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3IobGV0IHJlY29yZCBvZiB0aGlzLmF0dHJpYnV0ZXMuc3JjKSB7XG4gICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgY2hpbGQuc3JjID0gcmVjb3JkO1xuICAgICAgdGhpcy5yb290LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgfVxuXG4gIG1vdW50VG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKCkpO1xuICB9XG59XG5sZXQgZCA9IFtcbiAgXCJodHRwczovL3N0YXRpYzAwMS5nZWVrYmFuZy5vcmcvcmVzb3VyY2UvaW1hZ2UvYmIvMjEvYmIzOGZiN2MxMDczZWFlZTE3NTVmODExMzFmMTFkMjEuanBnXCIsXG4gIFwiaHR0cHM6Ly9zdGF0aWMwMDEuZ2Vla2Jhbmcub3JnL3Jlc291cmNlL2ltYWdlLzFiLzIxLzFiODA5ZDlhMmJkZjNlY2M0ODEzMjJkN2M5MjIzYzIxLmpwZ1wiLFxuICBcImh0dHBzOi8vc3RhdGljMDAxLmdlZWtiYW5nLm9yZy9yZXNvdXJjZS9pbWFnZS9iNi80Zi9iNmQ2NWIyZjEyNjQ2YTlmZDZiOGNiMmIwMjBkNzU0Zi5qcGdcIixcbiAgXCJodHRwczovL3N0YXRpYzAwMS5nZWVrYmFuZy5vcmcvcmVzb3VyY2UvaW1hZ2UvNzMvZTQvNzMwZWE5YzM5M2RlZjc5NzVkZWNlYjQ4YjNlYjZmZTQuanBnXCJcbl07XG5cbmxldCBhID0gPENhcm91c2VsIHNyYz17ZH0vPlxuYS5tb3VudFRvKGRvY3VtZW50LmJvZHkpOyJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwidHlwZSIsImF0dHJpYnV0ZSIsImVsZW1lbnQiLCJFbGVtZW50V3JhcHBlciIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZHJlbiIsImNoaWxkIiwiVGV4dFdyYXBwZXIiLCJhcHBlbmRDaGlsZCIsIkNvbXBvbmVudCIsInZhbHVlIiwicm9vdCIsIm1vdW50VG8iLCJwYXJlbnQiLCJkb2N1bWVudCIsImNvbnRlbnQiLCJjcmVhdGVUZXh0Tm9kZSIsIkNhcm91c2VsIiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImNyZWF0ZSIsInNyYyIsInJlY29yZCIsInJlbmRlciIsImQiLCJhIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=
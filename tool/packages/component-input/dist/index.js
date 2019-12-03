(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["input"] = factory();
	else
		root["input"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar id = window.token;\nvar host = 'http://localhost:7000';\nvar time;\nvar obj = {\n  getQrcode: function getQrcode(type) {\n    return \"http://localhost:7000/qr?token=\".concat(id, \"&type=\").concat(type);\n  },\n  listenerInfo: function listenerInfo(type) {\n    return new Promise(function (resolve, reject) {\n      console.log('start new Promise...');\n      time = window.setInterval(function () {\n        fetch(\"\".concat(host, \"/scan?token=\").concat(id, \"&type=\").concat(type)).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          if (data.value === \"wait\") {// console.log(data);\n          } else {\n            resolve(data);\n          } // console.log(data);\n\n        })[\"catch\"](function (e) {\n          return console.log(e);\n        });\n      }, 1000);\n    });\n  },\n  endListener: function endListener() {\n    window.clearInterval(time);\n    fetch('http://localhost:7000/openscan').then(function (response) {\n      return response.json();\n    }).then(function (data) {// console.log(data);\n    })[\"catch\"](function (e) {\n      return console.log(e);\n    });\n  } // listenerInfo: new Promise(function (resolve, reject) {\n  //     console.log('start new Promise...');\n  //     resolve(123);\n  //     window.setInterval(async () => {\n  //         debugger\n  //         const response = await fetch('http://localhost:7000/scan?token=1575209868249&type=name');\n  //         const myJson = await response.json();\n  //         console.log(JSON.stringify(myJson));\n  //     }, 1000)\n  // }),\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (obj);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnB1dC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlkID0gd2luZG93LnRva2VuO1xuY29uc3QgaG9zdCA9ICdodHRwOi8vbG9jYWxob3N0OjcwMDAnO1xubGV0IHRpbWU7XG5jb25zdCBvYmogPSB7XG4gICAgZ2V0UXJjb2RlOiAgZnVuY3Rpb24gZ2V0UXJjb2RlICh0eXBlKSB7XG4gICAgICAgIHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDo3MDAwL3FyP3Rva2VuPSR7aWR9JnR5cGU9JHt0eXBlfWA7XG4gICAgfSxcbiAgICBsaXN0ZW5lckluZm86IGZ1bmN0aW9uIGxpc3RlbmVySW5mbyAodHlwZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IG5ldyBQcm9taXNlLi4uJyk7XG4gICAgICAgICAgICB0aW1lID0gIHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2goYCR7aG9zdH0vc2Nhbj90b2tlbj0ke2lkfSZ0eXBlPSR7dHlwZX1gKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS52YWx1ZSA9PT0gXCJ3YWl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGVuZExpc3RlbmVyOiBmdW5jdGlvbiBlbmRMaXN0ZW5lciAoKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRpbWUpO1xuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo3MDAwL29wZW5zY2FuJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgICB9XG4gICAgLy8gbGlzdGVuZXJJbmZvOiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdzdGFydCBuZXcgUHJvbWlzZS4uLicpO1xuICAgIC8vICAgICByZXNvbHZlKDEyMyk7XG4gICAgLy8gICAgIHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo3MDAwL3NjYW4/dG9rZW49MTU3NTIwOTg2ODI0OSZ0eXBlPW5hbWUnKTtcbiAgICAvLyAgICAgICAgIGNvbnN0IG15SnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG15SnNvbikpO1xuICAgIC8vICAgICB9LCAxMDAwKVxuXG4gICAgLy8gfSksXG59O1xuZXhwb3J0IGRlZmF1bHQgb2JqOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBeENBO0FBeUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });
});
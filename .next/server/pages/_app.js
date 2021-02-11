module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/apolloClient.ts":
/*!*********************************!*\
  !*** ./src/lib/apolloClient.ts ***!
  \*********************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nlet apolloClient;\n\nconst authLinkWithNextContext = context => new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloLink\"]((operation, forward) => {\n  operation.setContext((_ref) => {\n    let {\n      headers\n    } = _ref,\n        rest = _objectWithoutProperties(_ref, [\"headers\"]);\n\n    const {\n      token\n    } = Object(nookies__WEBPACK_IMPORTED_MODULE_2__[\"parseCookies\"])(context);\n    return {\n      headers: _objectSpread(_objectSpread({}, headers), {}, {\n        authorization: token ? `Bearer ${token}` : \"\"\n      })\n    };\n  });\n  return forward(operation);\n});\n\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"HttpLink\"]({\n  uri: \"https://coffee-grindr.herokuapp.com/\",\n  // Server URL (must be absolute)\n  credentials: \"same-origin\" // Additional fetch() options like `credentials` or `headers`\n\n});\n\nfunction createApolloClient(context) {\n  const authLink = authLinkWithNextContext(context);\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloClient\"]({\n    ssrMode: true,\n    link: authLink.concat(httpLink),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"]()\n  });\n}\n\nfunction initializeApollo(context = null, initialState = null) {\n  var _apolloClient2;\n\n  const {\n    token\n  } = Object(nookies__WEBPACK_IMPORTED_MODULE_2__[\"parseCookies\"])(context);\n\n  if (!token && context !== null && context !== void 0 && context.res) {\n    context.res.writeHead(301, {\n      Location: \"/login\"\n    });\n    context.res.end();\n  }\n\n  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(context); // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n\n\n  if (initialState) {\n    // Get existing cache, loaded during client side data fetching\n    const existingCache = _apolloClient.extract(); // Restore the cache using the data passed from getStaticProps/getServerSideProps\n    // combined with the existing cached data\n\n\n    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (true) return _apolloClient; // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction useApollo(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeApollo(null, initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Fwb2xsb0NsaWVudC50cz80NDBlIl0sIm5hbWVzIjpbImFwb2xsb0NsaWVudCIsImF1dGhMaW5rV2l0aE5leHRDb250ZXh0IiwiY29udGV4dCIsIkFwb2xsb0xpbmsiLCJvcGVyYXRpb24iLCJmb3J3YXJkIiwic2V0Q29udGV4dCIsImhlYWRlcnMiLCJyZXN0IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJhdXRob3JpemF0aW9uIiwiaHR0cExpbmsiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiYXV0aExpbmsiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsInJlc3RvcmUiLCJ1c2VBcG9sbG8iLCJzdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFHQSxJQUFJQSxZQUFKOztBQUVBLE1BQU1DLHVCQUF1QixHQUFJQyxPQUFELElBQzlCLElBQUlDLHlEQUFKLENBQWUsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEtBQXdCO0FBQ3JDRCxXQUFTLENBQUNFLFVBQVYsQ0FBcUIsVUFBbUM7QUFBQSxRQUFsQztBQUFFQztBQUFGLEtBQWtDO0FBQUEsUUFBcEJDLElBQW9COztBQUN0RCxVQUFNO0FBQUVDO0FBQUYsUUFBWUMsNERBQVksQ0FBQ1IsT0FBRCxDQUE5QjtBQUNBLFdBQU87QUFDTEssYUFBTyxrQ0FDRkEsT0FERTtBQUVMSSxxQkFBYSxFQUFFRixLQUFLLEdBQUksVUFBU0EsS0FBTSxFQUFuQixHQUF1QjtBQUZ0QztBQURGLEtBQVA7QUFNRCxHQVJEO0FBU0EsU0FBT0osT0FBTyxDQUFDRCxTQUFELENBQWQ7QUFDRCxDQVhELENBREY7O0FBY0EsTUFBTVEsUUFBUSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFDNUJDLEtBQUcsRUFBRSxzQ0FEdUI7QUFDaUI7QUFDN0NDLGFBQVcsRUFBRSxhQUZlLENBRUE7O0FBRkEsQ0FBYixDQUFqQjs7QUFLQSxTQUFTQyxrQkFBVCxDQUE0QmQsT0FBNUIsRUFBNkQ7QUFDM0QsUUFBTWUsUUFBUSxHQUFHaEIsdUJBQXVCLENBQUNDLE9BQUQsQ0FBeEM7QUFFQSxTQUFPLElBQUlnQiwyREFBSixDQUFpQjtBQUN0QkMsV0FBTyxNQURlO0FBRXRCQyxRQUFJLEVBQUVILFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQlQsUUFBaEIsQ0FGZ0I7QUFHdEJVLFNBQUssRUFBRSxJQUFJQyw0REFBSjtBQUhlLEdBQWpCLENBQVA7QUFLRDs7QUFFTSxTQUFTQyxnQkFBVCxDQUNMdEIsT0FBK0IsR0FBRyxJQUQ3QixFQUVMdUIsWUFBdUIsR0FBRyxJQUZyQixFQUdMO0FBQUE7O0FBQ0EsUUFBTTtBQUFFaEI7QUFBRixNQUFZQyw0REFBWSxDQUFDUixPQUFELENBQTlCOztBQUNBLE1BQUksQ0FBQ08sS0FBRCxJQUFVUCxPQUFWLGFBQVVBLE9BQVYsZUFBVUEsT0FBTyxDQUFFd0IsR0FBdkIsRUFBNEI7QUFDMUJ4QixXQUFPLENBQUN3QixHQUFSLENBQVlDLFNBQVosQ0FBc0IsR0FBdEIsRUFBMkI7QUFDekJDLGNBQVEsRUFBRTtBQURlLEtBQTNCO0FBR0ExQixXQUFPLENBQUN3QixHQUFSLENBQVlHLEdBQVo7QUFDRDs7QUFDRCxRQUFNQyxhQUFhLHFCQUFHOUIsWUFBSCwyREFBbUJnQixrQkFBa0IsQ0FBQ2QsT0FBRCxDQUF4RCxDQVJBLENBVUE7QUFDQTs7O0FBQ0EsTUFBSXVCLFlBQUosRUFBa0I7QUFDaEI7QUFDQSxVQUFNTSxhQUFhLEdBQUdELGFBQWEsQ0FBQ0UsT0FBZCxFQUF0QixDQUZnQixDQUdoQjtBQUNBOzs7QUFDQUYsaUJBQWEsQ0FBQ1IsS0FBZCxDQUFvQlcsT0FBcEIsaUNBQWlDRixhQUFqQyxHQUFvRE4sWUFBcEQ7QUFDRCxHQWxCRCxDQW1CQTs7O0FBQ0EsWUFBbUMsT0FBT0ssYUFBUCxDQXBCbkMsQ0FxQkE7O0FBQ0EsTUFBSSxDQUFDOUIsWUFBTCxFQUFtQkEsWUFBWSxHQUFHOEIsYUFBZjtBQUVuQixTQUFPQSxhQUFQO0FBQ0Q7QUFFTSxTQUFTSSxTQUFULENBQW1CVCxZQUFuQixFQUFxQztBQUMxQyxRQUFNVSxLQUFLLEdBQUdDLHFEQUFPLENBQUMsTUFBTVosZ0JBQWdCLENBQUMsSUFBRCxFQUFPQyxZQUFQLENBQXZCLEVBQTZDLENBQ2hFQSxZQURnRSxDQUE3QyxDQUFyQjtBQUdBLFNBQU9VLEtBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9saWIvYXBvbGxvQ2xpZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBBcG9sbG9MaW5rLFxuICBmcm9tLFxuICBIdHRwTGluayxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgTm9ybWFsaXplZENhY2hlT2JqZWN0LFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PjtcblxuY29uc3QgYXV0aExpbmtXaXRoTmV4dENvbnRleHQgPSAoY29udGV4dDogTmV4dFBhZ2VDb250ZXh0IHwgbnVsbCkgPT5cbiAgbmV3IEFwb2xsb0xpbmsoKG9wZXJhdGlvbiwgZm9yd2FyZCkgPT4ge1xuICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KCh7IGhlYWRlcnMsIC4uLnJlc3QgfTogUmVxdWVzdCkgPT4ge1xuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBmb3J3YXJkKG9wZXJhdGlvbik7XG4gIH0pO1xuXG5jb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gIHVyaTogXCJodHRwczovL2NvZmZlZS1ncmluZHIuaGVyb2t1YXBwLmNvbS9cIiwgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIiwgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudChjb250ZXh0OiBOZXh0UGFnZUNvbnRleHQgfCBudWxsKSB7XG4gIGNvbnN0IGF1dGhMaW5rID0gYXV0aExpbmtXaXRoTmV4dENvbnRleHQoY29udGV4dCk7XG5cbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIsXG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKFxuICBjb250ZXh0OiBOZXh0UGFnZUNvbnRleHQgfCBudWxsID0gbnVsbCxcbiAgaW5pdGlhbFN0YXRlOiBudWxsIHwge30gPSBudWxsXG4pIHtcbiAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGNvbnRleHQpO1xuICBpZiAoIXRva2VuICYmIGNvbnRleHQ/LnJlcykge1xuICAgIGNvbnRleHQucmVzLndyaXRlSGVhZCgzMDEsIHtcbiAgICAgIExvY2F0aW9uOiBcIi9sb2dpblwiLFxuICAgIH0pO1xuICAgIGNvbnRleHQucmVzLmVuZCgpO1xuICB9XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KGNvbnRleHQpO1xuXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcbiAgLy8gZ2V0cyBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKTtcbiAgICAvLyBSZXN0b3JlIHRoZSBjYWNoZSB1c2luZyB0aGUgZGF0YSBwYXNzZWQgZnJvbSBnZXRTdGF0aWNQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAvLyBjb21iaW5lZCB3aXRoIHRoZSBleGlzdGluZyBjYWNoZWQgZGF0YVxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7IC4uLmV4aXN0aW5nQ2FjaGUsIC4uLihpbml0aWFsU3RhdGUgYXMge30pIH0pO1xuICB9XG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKGluaXRpYWxTdGF0ZToge30pIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8obnVsbCwgaW5pdGlhbFN0YXRlKSwgW1xuICAgIGluaXRpYWxTdGF0ZSxcbiAgXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/apolloClient.ts\n");

/***/ }),

/***/ "./src/lib/queries.ts":
/*!****************************!*\
  !*** ./src/lib/queries.ts ***!
  \****************************/
/*! exports provided: USER_QUERY, UPDATE_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_QUERY\", function() { return USER_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_USER\", function() { return UPDATE_USER; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n// random queries belong here for now\n\nconst USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n  query User {\n    user {\n      id\n      name\n      email\n      primaryMachine\n      coffeeMachines {\n        id\n        name\n      }\n    }\n  }\n`;\nconst UPDATE_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n  mutation updateUser($primaryMachine: Int) {\n    updateUser(primaryMachine: $primaryMachine) {\n      name\n      email\n      id\n      primaryMachine\n      coffeeMachines {\n        id\n        name\n      }\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3F1ZXJpZXMudHM/ZmZjZiJdLCJuYW1lcyI6WyJVU0VSX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1VTRVIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRU8sTUFBTUEsVUFBVSxHQUFHQyxrREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWJPO0FBZUEsTUFBTUMsV0FBVyxHQUFHRCxrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWJPIiwiZmlsZSI6Ii4vc3JjL2xpYi9xdWVyaWVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmFuZG9tIHF1ZXJpZXMgYmVsb25nIGhlcmUgZm9yIG5vd1xuXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IFVTRVJfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFVzZXIge1xuICAgIHVzZXIge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGVtYWlsXG4gICAgICBwcmltYXJ5TWFjaGluZVxuICAgICAgY29mZmVlTWFjaGluZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVIgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVVzZXIoJHByaW1hcnlNYWNoaW5lOiBJbnQpIHtcbiAgICB1cGRhdGVVc2VyKHByaW1hcnlNYWNoaW5lOiAkcHJpbWFyeU1hY2hpbmUpIHtcbiAgICAgIG5hbWVcbiAgICAgIGVtYWlsXG4gICAgICBpZFxuICAgICAgcHJpbWFyeU1hY2hpbmVcbiAgICAgIGNvZmZlZU1hY2hpbmVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/queries.ts\n");

/***/ }),

/***/ "./src/lib/userContext.tsx":
/*!*********************************!*\
  !*** ./src/lib/userContext.tsx ***!
  \*********************************/
/*! exports provided: ContextUser, useUserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextUser\", function() { return ContextUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useUserContext\", function() { return useUserContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queries */ \"./src/lib/queries.ts\");\n\nvar _jsxFileName = \"/home/sophia/projects/coffee-grinder-frontend/src/lib/userContext.tsx\";\n\n\n\n\nconst defaultUserContext = {\n  user: null,\n  updateUser: () => Promise.resolve()\n};\nconst UserContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(defaultUserContext);\nconst ContextUser = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n  const {\n    data,\n    refetch\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(_queries__WEBPACK_IMPORTED_MODULE_4__[\"USER_QUERY\"]);\n  const [updateUserMutation, {\n    data: updatedUser\n  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"])(_queries__WEBPACK_IMPORTED_MODULE_4__[\"UPDATE_USER\"]);\n\n  const logout = () => {\n    Object(nookies__WEBPACK_IMPORTED_MODULE_2__[\"destroyCookie\"])(null, \"token\");\n    setUser(null);\n  };\n\n  const updateUser = async value => {\n    try {\n      await updateUserMutation({\n        variables: value\n      });\n    } catch (error) {\n      throw new Error(error);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(() => {\n    if (data !== null && data !== void 0 && data.user && refetch) {\n      const {\n        user\n      } = data;\n      setUser(user);\n      refetch();\n    }\n\n    if (updatedUser && refetch) {\n      setUser(updatedUser.updateUser);\n      refetch();\n    }\n  }, [data, refetch, updatedUser]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserContext.Provider, {\n    value: {\n      logout,\n      user,\n      setUser,\n      updateUser\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, undefined);\n};\nconst useUserContext = () => {\n  const context = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(UserContext);\n  return context;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3VzZXJDb250ZXh0LnRzeD82ZjlkIl0sIm5hbWVzIjpbImRlZmF1bHRVc2VyQ29udGV4dCIsInVzZXIiLCJ1cGRhdGVVc2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJVc2VyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHRVc2VyIiwiY2hpbGRyZW4iLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJkYXRhIiwicmVmZXRjaCIsInVzZVF1ZXJ5IiwiVVNFUl9RVUVSWSIsInVwZGF0ZVVzZXJNdXRhdGlvbiIsInVwZGF0ZWRVc2VyIiwidXNlTXV0YXRpb24iLCJVUERBVEVfVVNFUiIsImxvZ291dCIsImRlc3Ryb3lDb29raWUiLCJ2YWx1ZSIsInZhcmlhYmxlcyIsImVycm9yIiwiRXJyb3IiLCJ1c2VFZmZlY3QiLCJ1c2VVc2VyQ29udGV4dCIsImNvbnRleHQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBbUJBLE1BQU1BLGtCQUErQixHQUFHO0FBQ3RDQyxNQUFJLEVBQUUsSUFEZ0M7QUFFdENDLFlBQVUsRUFBRSxNQUFNQyxPQUFPLENBQUNDLE9BQVI7QUFGb0IsQ0FBeEM7QUFLQSxNQUFNQyxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CUCxrQkFBcEIsQ0FBcEI7QUFFTyxNQUFNUSxXQUFxQixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ3JELFFBQU07QUFBQSxPQUFDUixJQUFEO0FBQUEsT0FBT1M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBYyxJQUFkLENBQWhDO0FBRUEsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBb0JDLCtEQUFRLENBQWlCQyxtREFBakIsQ0FBbEM7QUFDQSxRQUFNLENBQUNDLGtCQUFELEVBQXFCO0FBQUVKLFFBQUksRUFBRUs7QUFBUixHQUFyQixJQUE4Q0Msa0VBQVcsQ0FBQ0Msb0RBQUQsQ0FBL0Q7O0FBRUEsUUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDbkJDLGlFQUFhLENBQUMsSUFBRCxFQUFPLE9BQVAsQ0FBYjtBQUNBWCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxRQUFNUixVQUFVLEdBQUcsTUFBT29CLEtBQVAsSUFBNEI7QUFDN0MsUUFBSTtBQUNGLFlBQU1OLGtCQUFrQixDQUFDO0FBQUVPLGlCQUFTLEVBQUVEO0FBQWIsT0FBRCxDQUF4QjtBQUNELEtBRkQsQ0FFRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxZQUFNLElBQUlDLEtBQUosQ0FBVUQsS0FBVixDQUFOO0FBQ0Q7QUFDRixHQU5EOztBQVFBRSx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJZCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLElBQUFBLElBQUksQ0FBRVgsSUFBTixJQUFjWSxPQUFsQixFQUEyQjtBQUN6QixZQUFNO0FBQUVaO0FBQUYsVUFBV1csSUFBakI7QUFDQUYsYUFBTyxDQUFDVCxJQUFELENBQVA7QUFDQVksYUFBTztBQUNSOztBQUVELFFBQUlJLFdBQVcsSUFBSUosT0FBbkIsRUFBNEI7QUFDMUJILGFBQU8sQ0FBQ08sV0FBVyxDQUFDZixVQUFiLENBQVA7QUFDQVcsYUFBTztBQUNSO0FBQ0YsR0FYUSxFQVdOLENBQUNELElBQUQsRUFBT0MsT0FBUCxFQUFnQkksV0FBaEIsQ0FYTSxDQUFUO0FBYUEsc0JBQ0UscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxTQUFLLEVBQUU7QUFDTEcsWUFESztBQUVMbkIsVUFGSztBQUdMUyxhQUhLO0FBSUxSO0FBSkssS0FEVDtBQUFBLGNBUUdPO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsQ0E1Q007QUE4Q0EsTUFBTWtCLGNBQWMsR0FBRyxNQUFNO0FBQ2xDLFFBQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQ3hCLFdBQUQsQ0FBMUI7QUFDQSxTQUFPdUIsT0FBUDtBQUNELENBSE0iLCJmaWxlIjoiLi9zcmMvbGliL3VzZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSB9IGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29mZmVlTWFjaGluZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvZmZlZU1hY2hpbmUvdHlwZXNcIjtcbmltcG9ydCB7IFVTRVJfUVVFUlksIFVQREFURV9VU0VSIH0gZnJvbSBcIi4vcXVlcmllc1wiO1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBjb2ZmZWVNYWNoaW5lczogQ29mZmVlTWFjaGluZVtdO1xuICBwcmltYXJ5TWFjaGluZT86IG51bWJlcjtcbn07XG5cbnR5cGUgVXNlclZhbHVlID0gUGFydGlhbDxSZWNvcmQ8a2V5b2YgVXNlciwgYW55Pj47XG5cbnR5cGUgVXNlckNvbnRleHQgPSB7XG4gIHVzZXI6IG51bGwgfCBVc2VyO1xuICBzZXRVc2VyPzogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248VXNlciB8IG51bGw+PjtcbiAgbG9nb3V0PzogKCkgPT4gdm9pZDtcbiAgdXBkYXRlVXNlcjogKHZhbHVlOiBVc2VyVmFsdWUpID0+IFByb21pc2U8dm9pZD47XG59O1xuXG5jb25zdCBkZWZhdWx0VXNlckNvbnRleHQ6IFVzZXJDb250ZXh0ID0ge1xuICB1c2VyOiBudWxsLFxuICB1cGRhdGVVc2VyOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoKSxcbn07XG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0VXNlckNvbnRleHQpO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dFVzZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgeyBkYXRhLCByZWZldGNoIH0gPSB1c2VRdWVyeTx7IHVzZXI6IFVzZXIgfT4oVVNFUl9RVUVSWSk7XG4gIGNvbnN0IFt1cGRhdGVVc2VyTXV0YXRpb24sIHsgZGF0YTogdXBkYXRlZFVzZXIgfV0gPSB1c2VNdXRhdGlvbihVUERBVEVfVVNFUik7XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGRlc3Ryb3lDb29raWUobnVsbCwgXCJ0b2tlblwiKTtcbiAgICBzZXRVc2VyKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAodmFsdWU6IFVzZXJWYWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVVc2VyTXV0YXRpb24oeyB2YXJpYWJsZXM6IHZhbHVlIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhPy51c2VyICYmIHJlZmV0Y2gpIHtcbiAgICAgIGNvbnN0IHsgdXNlciB9ID0gZGF0YTtcbiAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICByZWZldGNoKCk7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZWRVc2VyICYmIHJlZmV0Y2gpIHtcbiAgICAgIHNldFVzZXIodXBkYXRlZFVzZXIudXBkYXRlVXNlcik7XG4gICAgICByZWZldGNoKCk7XG4gICAgfVxuICB9LCBbZGF0YSwgcmVmZXRjaCwgdXBkYXRlZFVzZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICB1c2VyLFxuICAgICAgICBzZXRVc2VyLFxuICAgICAgICB1cGRhdGVVc2VyLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICByZXR1cm4gY29udGV4dDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/userContext.tsx\n");

/***/ }),

/***/ "./src/materials/colors.ts":
/*!*********************************!*\
  !*** ./src/materials/colors.ts ***!
  \*********************************/
/*! exports provided: COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLORS\", function() { return COLORS; });\nconst COLORS = {\n  gray: \"rgba(67,43,27,0.3)\",\n  blue: \"rgba(61,154,183,1)\",\n  champain: \"#F0DDA3\",\n  orange: \"#D89800\",\n  black: \"rgba(0, 0, 0, 0.8)\",\n  lightYellow: \"#F9F7F1\",\n  white: \"#FFFFFF\",\n  offWhite: \"rgba(255, 255, 255, 0.8)\",\n  red: \"rgba(195,33,33,1)\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWF0ZXJpYWxzL2NvbG9ycy50cz9kYTA4Il0sIm5hbWVzIjpbIkNPTE9SUyIsImdyYXkiLCJibHVlIiwiY2hhbXBhaW4iLCJvcmFuZ2UiLCJibGFjayIsImxpZ2h0WWVsbG93Iiwid2hpdGUiLCJvZmZXaGl0ZSIsInJlZCJdLCJtYXBwaW5ncyI6IkFBV0E7QUFBQTtBQUFPLE1BQU1BLE1BQThCLEdBQUc7QUFDNUNDLE1BQUksRUFBRSxvQkFEc0M7QUFFNUNDLE1BQUksRUFBRSxvQkFGc0M7QUFHNUNDLFVBQVEsRUFBRSxTQUhrQztBQUk1Q0MsUUFBTSxFQUFFLFNBSm9DO0FBSzVDQyxPQUFLLEVBQUUsb0JBTHFDO0FBTTVDQyxhQUFXLEVBQUUsU0FOK0I7QUFPNUNDLE9BQUssRUFBRSxTQVBxQztBQVE1Q0MsVUFBUSxFQUFFLDBCQVJrQztBQVM1Q0MsS0FBRyxFQUFFO0FBVHVDLENBQXZDIiwiZmlsZSI6Ii4vc3JjL21hdGVyaWFscy9jb2xvcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBDb2xvcnMgPVxuICB8IFwicmVkXCJcbiAgfCBcImdyYXlcIlxuICB8IFwiYmx1ZVwiXG4gIHwgXCJjaGFtcGFpblwiXG4gIHwgXCJvcmFuZ2VcIlxuICB8IFwiYmxhY2tcIlxuICB8IFwibGlnaHRZZWxsb3dcIlxuICB8IFwid2hpdGVcIlxuICB8IFwib2ZmV2hpdGVcIjtcblxuZXhwb3J0IGNvbnN0IENPTE9SUzogUmVjb3JkPENvbG9ycywgc3RyaW5nPiA9IHtcbiAgZ3JheTogXCJyZ2JhKDY3LDQzLDI3LDAuMylcIixcbiAgYmx1ZTogXCJyZ2JhKDYxLDE1NCwxODMsMSlcIixcbiAgY2hhbXBhaW46IFwiI0YwRERBM1wiLFxuICBvcmFuZ2U6IFwiI0Q4OTgwMFwiLFxuICBibGFjazogXCJyZ2JhKDAsIDAsIDAsIDAuOClcIixcbiAgbGlnaHRZZWxsb3c6IFwiI0Y5RjdGMVwiLFxuICB3aGl0ZTogXCIjRkZGRkZGXCIsXG4gIG9mZldoaXRlOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiLFxuICByZWQ6IFwicmdiYSgxOTUsMzMsMzMsMSlcIixcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/materials/colors.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apolloClient */ \"./src/lib/apolloClient.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/userContext */ \"./src/lib/userContext.tsx\");\n/* harmony import */ var _materials_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../materials/colors */ \"./src/materials/colors.ts\");\n\nvar _jsxFileName = \"/home/sophia/projects/coffee-grinder-frontend/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"createGlobalStyle\"]`\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n  body {\n    font-family: \"Roboto\", sans-serif;\n    box-sizing: border-box;\n    background-color: ${_materials_colors__WEBPACK_IMPORTED_MODULE_6__[\"COLORS\"].lightYellow};\n  }\n  button, \n  a {\n    cursor: pointer;\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  input[type=\"submit\"] {\n    cursor: pointer;\n  }\n  input {\n    outline: 0;\n  }\n\n  // A reset of styles, including removing the default dropdown arrow\n  select {\n    appearance: none;\n    // Additional resets for further consistency\n    background-color: transparent;\n    border: none;\n    padding: 0 1em 0 0;\n    margin: 0;\n    width: 100%;\n    font-family: inherit;\n    font-size: inherit;\n    cursor: inherit;\n    line-height: inherit;\n  }\n\n  /* Remove arrows/spinners from number inputs on Chrome, Safari, Edge, Opera */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /*  Remove arrows/spinners from number inputs on Firefox */\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n`; // @ts-ignore\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const apolloClient = Object(_lib_apolloClient__WEBPACK_IMPORTED_MODULE_3__[\"useApollo\"])(pageProps.initialApolloState);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: apolloClient,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GlobalStyle, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_userContext__WEBPACK_IMPORTED_MODULE_5__[\"ContextUser\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ09MT1JTIiwibGlnaHRZZWxsb3ciLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJ1c2VBcG9sbG8iLCJpbml0aWFsQXBvbGxvU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLG1FQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0JDLHdEQUFNLENBQUNDLFdBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FyREEsQyxDQXVEQTs7QUFDZSxTQUFTQyxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFDcEQsUUFBTUMsWUFBWSxHQUFHQyxtRUFBUyxDQUFDRixTQUFTLENBQUNHLGtCQUFYLENBQTlCO0FBQ0Esc0JBQ0UscUVBQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFRixZQUF4QjtBQUFBLDRCQUNFLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsNERBQUQ7QUFBQSw2QkFDRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwiLi4vbGliL2Fwb2xsb0NsaWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENvbnRleHRVc2VyIH0gZnJvbSBcIi4uL2xpYi91c2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSBcIi4uL21hdGVyaWFscy9jb2xvcnNcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy5saWdodFllbGxvd307XG4gIH1cbiAgYnV0dG9uLCBcbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGlucHV0IHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbiAgLy8gQSByZXNldCBvZiBzdHlsZXMsIGluY2x1ZGluZyByZW1vdmluZyB0aGUgZGVmYXVsdCBkcm9wZG93biBhcnJvd1xuICBzZWxlY3Qge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLy8gQWRkaXRpb25hbCByZXNldHMgZm9yIGZ1cnRoZXIgY29uc2lzdGVuY3lcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMCAxZW0gMCAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB9XG5cbiAgLyogUmVtb3ZlIGFycm93cy9zcGlubmVycyBmcm9tIG51bWJlciBpbnB1dHMgb24gQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG4gIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC8qICBSZW1vdmUgYXJyb3dzL3NwaW5uZXJzIGZyb20gbnVtYmVyIGlucHV0cyBvbiBGaXJlZm94ICovXG4gIGlucHV0W3R5cGU9bnVtYmVyXSB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIH1cbmA7XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb250ZXh0VXNlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Db250ZXh0VXNlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCI/ZDk3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub29raWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nookies\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });
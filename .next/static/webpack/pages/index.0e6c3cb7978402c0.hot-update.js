"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/layouts/BottomMenu.tsx":
/*!***********************************************!*\
  !*** ./src/components/layouts/BottomMenu.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\nconst BottomMenu = ()=>{\n    _s();\n    const iconSize = 28;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const setMenuButton = (src, alt)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: src,\n                    alt: alt,\n                    width: iconSize,\n                    height: iconSize\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ryuic\\\\code\\\\JoetsuRamenNavi\\\\frontend\\\\src\\\\components\\\\layouts\\\\BottomMenu.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                \";\"\n            ]\n        }, void 0, true);\n    };\n    console.log(router.pathname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[65px] bg-white flex justify-around items-center\",\n        children: [\n            router.pathname != \"/\" ? setMenuButton(\"/icon/bottomMenu/ramen.png\", \"\") : setMenuButton(\"/icon/bottomMenu/ramenSelected.png\", \"\"),\n            router.pathname != \"/Search\" ? setMenuButton(\"/icon/bottomMenu/search.png\", \"\") : setMenuButton(\"/icon/bottomMenu/searchSelected.png\", \"\"),\n            router.pathname != \"/Mypage\" ? setMenuButton(\"/icon/bottomMenu/user.png\", \"\") : setMenuButton(\"/icon/bottomMenu/userSelected.png\", \"\")\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ryuic\\\\code\\\\JoetsuRamenNavi\\\\frontend\\\\src\\\\components\\\\layouts\\\\BottomMenu.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BottomMenu, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = BottomMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BottomMenu);\nvar _c;\n$RefreshReg$(_c, \"BottomMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0JvdHRvbU1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw0Q0FBNEM7O0FBRWI7QUFDUztBQUV4QyxNQUFNRSxhQUF1QixJQUFNOztJQUNqQyxNQUFNQyxXQUFXO0lBRWpCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxnQkFBZ0IsQ0FBQ0MsS0FBYUMsTUFBZ0I7UUFDbEQscUJBQ0U7OzhCQUNFLDhEQUFDUCxtREFBS0E7b0JBQUNNLEtBQUtBO29CQUFLQyxLQUFLQTtvQkFBS0MsT0FBT0w7b0JBQVVNLFFBQVFOOzs7Ozs7Z0JBQVk7OztJQUd0RTtJQUVBTyxRQUFRQyxHQUFHLENBQUNQLE9BQU9RLFFBQVE7SUFFM0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7O1lBQ1pWLE9BQU9RLFFBQVEsSUFBSSxNQUNoQlAsY0FBYyw4QkFBOEIsTUFDNUNBLGNBQWMsc0NBQXNDLEdBQUc7WUFFMURELE9BQU9RLFFBQVEsSUFBSSxZQUNoQlAsY0FBYywrQkFBK0IsTUFDN0NBLGNBQWMsdUNBQXVDLEdBQUc7WUFFM0RELE9BQU9RLFFBQVEsSUFBSSxZQUNoQlAsY0FBYyw2QkFBNkIsTUFDM0NBLGNBQWMscUNBQXFDLEdBQUc7Ozs7Ozs7QUFHaEU7R0E5Qk1IOztRQUdXRCxrREFBU0E7OztLQUhwQkM7QUFnQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0cy9Cb3R0b21NZW51LnRzeD9jNzAzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBCb3R0b21NZW51OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU2l6ZSA9IDI4O1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc2V0TWVudUJ1dHRvbiA9IChzcmM6IHN0cmluZywgYWx0OiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdH0gd2lkdGg9e2ljb25TaXplfSBoZWlnaHQ9e2ljb25TaXplfSAvPjtcclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs2NXB4XSBiZy13aGl0ZSBmbGV4IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICB7cm91dGVyLnBhdGhuYW1lICE9IFwiL1wiXHJcbiAgICAgICAgPyBzZXRNZW51QnV0dG9uKFwiL2ljb24vYm90dG9tTWVudS9yYW1lbi5wbmdcIiwgXCJcIilcclxuICAgICAgICA6IHNldE1lbnVCdXR0b24oXCIvaWNvbi9ib3R0b21NZW51L3JhbWVuU2VsZWN0ZWQucG5nXCIsIFwiXCIpfVxyXG5cclxuICAgICAge3JvdXRlci5wYXRobmFtZSAhPSBcIi9TZWFyY2hcIlxyXG4gICAgICAgID8gc2V0TWVudUJ1dHRvbihcIi9pY29uL2JvdHRvbU1lbnUvc2VhcmNoLnBuZ1wiLCBcIlwiKVxyXG4gICAgICAgIDogc2V0TWVudUJ1dHRvbihcIi9pY29uL2JvdHRvbU1lbnUvc2VhcmNoU2VsZWN0ZWQucG5nXCIsIFwiXCIpfVxyXG5cclxuICAgICAge3JvdXRlci5wYXRobmFtZSAhPSBcIi9NeXBhZ2VcIlxyXG4gICAgICAgID8gc2V0TWVudUJ1dHRvbihcIi9pY29uL2JvdHRvbU1lbnUvdXNlci5wbmdcIiwgXCJcIilcclxuICAgICAgICA6IHNldE1lbnVCdXR0b24oXCIvaWNvbi9ib3R0b21NZW51L3VzZXJTZWxlY3RlZC5wbmdcIiwgXCJcIil9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm90dG9tTWVudTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwiQm90dG9tTWVudSIsImljb25TaXplIiwicm91dGVyIiwic2V0TWVudUJ1dHRvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layouts/BottomMenu.tsx\n"));

/***/ })

});
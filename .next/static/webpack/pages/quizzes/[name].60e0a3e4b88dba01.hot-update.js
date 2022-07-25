"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quizzes/[name]",{

/***/ "./pages/quizzes/[name].js":
/*!*********************************!*\
  !*** ./pages/quizzes/[name].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/supabaseClient */ \"./utils/supabaseClient.js\");\n/* harmony import */ var _components_RenderQuiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/RenderQuiz */ \"./components/RenderQuiz.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\n// export async function getServerSideProps({ params }) {\n// const router = useRouter()\n//   const { data: questions, error } = await supabase\n//   .from('questions')\n//   .select('*')\n//   .eq('subject', router.pathname)\n//   if (error) {\n//     console.log(error.message)\n//   }\n//   return {\n//     props: {\n//       questions\n//     }\n//   }\n// }\nfunction Quiz() {\n    _s();\n    // const [selectedQuestions, setSelectedQuestions] = useState([])\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var selectedQuestions = [];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getData() {\n            return _getData.apply(this, arguments);\n        }\n        function _getData() {\n            _getData = _asyncToGenerator(_home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var ref, questions, error, remianingQuestions, i, randomIndex;\n                return _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_4__.supabase.from('questions').select('*').eq('subject', router.query.name);\n                        case 2:\n                            ref = _ctx.sent;\n                            questions = ref.data;\n                            error = ref.error;\n                            if (error) {\n                                console.log(error.message);\n                            }\n                            remianingQuestions = _toConsumableArray(questions);\n                            for(i = 0; i < 10; i++){\n                                randomIndex = Math.floor(Math.random() * remianingQuestions.length);\n                                // Add question to selected questions array\n                                selectedQuestions.push(remianingQuestions[randomIndex]);\n                                // Remove question from remaining questions array to avoid duplication\n                                remianingQuestions.splice(randomIndex, 1);\n                            }\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getData.apply(this, arguments);\n        }\n        getData();\n    }, []);\n    // console.log(remianingQuestions);\n    console.log(selectedQuestions);\n    // console.log(router.pathname)\n    // console.log(router.query)\n    // console.log(router.asPath)\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_RenderQuiz__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            selectedQuestions: selectedQuestions\n        }, void 0, false, {\n            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/quizzes/[name].js\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/quizzes/[name].js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this));\n};\n_s(Quiz, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6emVzL1tuYW1lXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2M7QUFDSTtBQUNVO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELEVBQXlEO0FBRXpELEVBQTZCO0FBRTdCLEVBQXNEO0FBQ3RELEVBQXVCO0FBQ3ZCLEVBQWlCO0FBQ2pCLEVBQW9DO0FBRXBDLEVBQWlCO0FBQ2pCLEVBQWlDO0FBQ2pDLEVBQU07QUFFTixFQUFhO0FBQ2IsRUFBZTtBQUNmLEVBQWtCO0FBQ2xCLEVBQVE7QUFDUixFQUFNO0FBQ04sRUFBSTtBQUVXLFFBQVEsQ0FBQ00sSUFBSSxHQUFHLENBQUM7O0lBQzlCLEVBQWlFO0lBR2pFLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixzREFBUztJQUN4QixHQUFHLENBQUNPLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUUxQkwsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7aUJBQ0FNLE9BQU87bUJBQVBBLFFBQU87O2lCQUFQQSxRQUFPO1lBQVBBLFFBQU8sZ0xBQXRCLFFBQVEsV0FBaUIsQ0FBQztvQkFFVyxHQUdBLEVBSHJCQyxTQUFTLEVBQUVDLEtBQUssRUFTMUJDLGtCQUFrQixFQUdiQyxDQUFDLEVBRUpDLFdBQVc7Ozs7O21DQWR3QlYsZ0VBQ2xDLENBQUMsQ0FBVyxZQUNoQlksTUFBTSxDQUFDLENBQUcsSUFDVkMsRUFBRSxDQUFDLENBQVMsVUFBRVYsTUFBTSxDQUFDVyxLQUFLLENBQUNDLElBQUk7OzRCQUhDLEdBR0E7NEJBSHJCVCxTQUFTLEdBQVksR0FHQSxDQUgzQlUsSUFBSTs0QkFBYVQsS0FBSyxHQUFLLEdBR0EsQ0FIVkEsS0FBSzs0QkFLOUIsRUFBRSxFQUFFQSxLQUFLLEVBQUUsQ0FBQztnQ0FDVlUsT0FBTyxDQUFDQyxHQUFHLENBQUNYLEtBQUssQ0FBQ1ksT0FBTzs0QkFDM0IsQ0FBQzs0QkFFR1gsa0JBQWtCLHNCQUFPRixTQUFTOzRCQUd0QyxHQUFHLENBQU1HLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsR0FBSSxDQUFDO2dDQUV4QkMsV0FBVyxHQUFHVSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEtBQUtkLGtCQUFrQixDQUFDZSxNQUFNO2dDQUN0RSxFQUEyQztnQ0FDM0NuQixpQkFBaUIsQ0FBQ29CLElBQUksQ0FBQ2hCLGtCQUFrQixDQUFDRSxXQUFXO2dDQUNyRCxFQUFzRTtnQ0FDdEVGLGtCQUFrQixDQUFDaUIsTUFBTSxDQUFDZixXQUFXLEVBQUUsQ0FBQzs0QkFDMUMsQ0FBQzs7Ozs7O1lBQ0gsQ0FBQzttQkF0QmNMLFFBQU87O1FBdUJ0QkEsT0FBTztJQUNULENBQUMsRUFBRSxDQUFDLENBQUM7SUFHTCxFQUFtQztJQUNuQ1ksT0FBTyxDQUFDQyxHQUFHLENBQUNkLGlCQUFpQjtJQUU3QixFQUErQjtJQUMvQixFQUE0QjtJQUM1QixFQUE2QjtJQUU3QixNQUFNLDZFQUNIc0IsQ0FBRzs4RkFFRHpCLDhEQUFVO1lBQUNHLGlCQUFpQixFQUFFQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FBR3RELENBQUM7R0FoRHVCRixJQUFJOztRQUlYTCxrREFBUzs7O0tBSkZLLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpenplcy9bbmFtZV0uanM/YzI4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3VwYWJhc2VDbGllbnQnXG5pbXBvcnQgUmVuZGVyUXVpeiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JlbmRlclF1aXonXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xuXG4vLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4vLyAgIGNvbnN0IHsgZGF0YTogcXVlc3Rpb25zLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Vcbi8vICAgLmZyb20oJ3F1ZXN0aW9ucycpXG4vLyAgIC5zZWxlY3QoJyonKVxuLy8gICAuZXEoJ3N1YmplY3QnLCByb3V0ZXIucGF0aG5hbWUpXG5cbi8vICAgaWYgKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIHF1ZXN0aW9uc1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6KCkge1xuICAvLyBjb25zdCBbc2VsZWN0ZWRRdWVzdGlvbnMsIHNldFNlbGVjdGVkUXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKVxuXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgbGV0IHNlbGVjdGVkUXVlc3Rpb25zID0gW11cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG5cbiAgICAgIGNvbnN0IHsgZGF0YTogcXVlc3Rpb25zLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oJ3F1ZXN0aW9ucycpXG4gICAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgICAuZXEoJ3N1YmplY3QnLCByb3V0ZXIucXVlcnkubmFtZSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXG4gICAgICB9XG5cbiAgICAgIGxldCByZW1pYW5pbmdRdWVzdGlvbnMgPSBbLi4ucXVlc3Rpb25zXVxuXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAvLyBHZW5lcmF0ZSByYW5kb20gaW5kZXhcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVtaWFuaW5nUXVlc3Rpb25zLmxlbmd0aClcbiAgICAgICAgLy8gQWRkIHF1ZXN0aW9uIHRvIHNlbGVjdGVkIHF1ZXN0aW9ucyBhcnJheVxuICAgICAgICBzZWxlY3RlZFF1ZXN0aW9ucy5wdXNoKHJlbWlhbmluZ1F1ZXN0aW9uc1tyYW5kb21JbmRleF0pXG4gICAgICAgIC8vIFJlbW92ZSBxdWVzdGlvbiBmcm9tIHJlbWFpbmluZyBxdWVzdGlvbnMgYXJyYXkgdG8gYXZvaWQgZHVwbGljYXRpb25cbiAgICAgICAgcmVtaWFuaW5nUXVlc3Rpb25zLnNwbGljZShyYW5kb21JbmRleCwgMSlcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0RGF0YSgpXG4gIH0sIFtdKVxuXG5cbiAgLy8gY29uc29sZS5sb2cocmVtaWFuaW5nUXVlc3Rpb25zKTtcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRRdWVzdGlvbnMpO1xuXG4gIC8vIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSlcbiAgLy8gY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KVxuICAvLyBjb25zb2xlLmxvZyhyb3V0ZXIuYXNQYXRoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2dldERhdGF9PlJlbmRlciBRdWl6PC9idXR0b24+ICovfVxuICAgICAgPFJlbmRlclF1aXogc2VsZWN0ZWRRdWVzdGlvbnM9e3NlbGVjdGVkUXVlc3Rpb25zfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1cGFiYXNlIiwiUmVuZGVyUXVpeiIsIlF1aXoiLCJyb3V0ZXIiLCJzZWxlY3RlZFF1ZXN0aW9ucyIsImdldERhdGEiLCJxdWVzdGlvbnMiLCJlcnJvciIsInJlbWlhbmluZ1F1ZXN0aW9ucyIsImkiLCJyYW5kb21JbmRleCIsImZyb20iLCJzZWxlY3QiLCJlcSIsInF1ZXJ5IiwibmFtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quizzes/[name].js\n");

/***/ })

});
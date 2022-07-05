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

/***/ "./components/RenderQuiz.js":
/*!**********************************!*\
  !*** ./components/RenderQuiz.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RenderQuiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_questionsArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/questionsArray */ \"./utils/questionsArray.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction RenderQuiz() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), questionIndex = ref[0], setQuestionIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), answerIndex = ref1[0], setAnswerIndex = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), quizState = ref3[0], setQuizState = ref3[1];\n    var nextQuestion = function() {\n        if (questionIndex !== _utils_questionsArray__WEBPACK_IMPORTED_MODULE_2__.selectedQuestions.length) {\n            setQuestionIndex(questionIndex + 1);\n            setAnswerIndex(answerIndex + 1);\n        } else if (quizState == false) {\n            setQuizState(function(prevState) {\n                return !prevState;\n            });\n            document.getElementById('trueButton').disable = true;\n        }\n    };\n    var answerSubmit = function(e) {\n        if (e.target.textContent == \"True Value\") {\n            if (quizState === true) {\n                console.log(\"Thanks for playing!\");\n            } else {\n                setScore(score + 1);\n                nextQuestion();\n            }\n        } else {\n            nextQuestion();\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-question text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"m-3 mt-20 text-center\",\n                children: \"Question \".concat(questionIndex, \" of 10\")\n            }, void 0, false, {\n                fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-5\",\n                children: [\n                    \"Current score: \",\n                    score,\n                    \"/10\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: Array.from(_utils_questionsArray__WEBPACK_IMPORTED_MODULE_2__.selectedQuestions).map(function(q, i) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: questionIndex === i + 1 ? \"question active-question\" : \"question\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"mt-16\",\n                                    children: q.question\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 9\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                                lineNumber: 43,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: answerIndex === i + 1 ? \"question active-question\" : \"question\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"blur hover:blur-none mt-16 answer-container m-auto\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"p-auto\",\n                                        children: [\n                                            q.answer,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 10\n                                    }, _this)\n                                }, i, false, {\n                                    fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 9\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                                lineNumber: 48,\n                                columnNumber: 8\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, _this));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-40\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"trueButton\",\n                        className: \"px-3\",\n                        value: true,\n                        onClick: answerSubmit,\n                        children: \"True Value\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 58,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"falseButton\",\n                        className: \"px-3\",\n                        value: false,\n                        onClick: answerSubmit,\n                        children: \"False Value\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maxmcleod/Desktop/WebDev/dev-quiz/devQuiz/components/RenderQuiz.js\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, this));\n};\n_s(RenderQuiz, \"ZCURgurWRPBhBg6+PzyxMhTlX4A=\");\n_c = RenderQuiz;\nvar _c;\n$RefreshReg$(_c, \"RenderQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsQ0FBb0Q7MEhBQ2hFQyxDQUFDO3dDQUFDRCxTQUFTLEVBQUMsQ0FBUTs7NENBQUVLLENBQUMsQ0FBQ0ksTUFBTTs0Q0FBQyxDQUFDOzs7Ozs7O21DQURzQ0gsQ0FBQzs7Ozs7K0JBRGhFQSxDQUFDOzs7Ozs7Ozs7OztnQkFPZCxDQUFDOzs7Ozs7d0ZBRURQLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFPOztnR0FDcEJVLENBQU07d0JBQUNDLEVBQUUsRUFBQyxDQUFZO3dCQUFDWCxTQUFTLEVBQUMsQ0FBTTt3QkFBQ1ksS0FBSyxFQUFFLElBQUk7d0JBQUVDLE9BQU8sRUFBRXBCLFlBQVk7a0NBQUUsQ0FFN0U7Ozs7OztnR0FDQ2lCLENBQU07d0JBQUNDLEVBQUUsRUFBQyxDQUFhO3dCQUFDWCxTQUFTLEVBQUMsQ0FBTTt3QkFBQ1ksS0FBSyxFQUFFLEtBQUs7d0JBQUVDLE9BQU8sRUFBRXBCLFlBQVk7a0NBQUUsQ0FFL0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlKLENBQUM7R0E5RHVCZixVQUFVO0tBQVZBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW5kZXJRdWl6LmpzP2E4MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RlZFF1ZXN0aW9ucyB9IGZyb20gXCIuLi91dGlscy9xdWVzdGlvbnNBcnJheVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVuZGVyUXVpeigpIHtcclxuXHRjb25zdCBbcXVlc3Rpb25JbmRleCwgc2V0UXVlc3Rpb25JbmRleF0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCBbYW5zd2VySW5kZXgsIHNldEFuc3dlckluZGV4XSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGNvbnN0IFtxdWl6U3RhdGUsIHNldFF1aXpTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3QgbmV4dFF1ZXN0aW9uID0gKCkgPT4ge1xyXG5cdFx0aWYgKHF1ZXN0aW9uSW5kZXggIT09IHNlbGVjdGVkUXVlc3Rpb25zLmxlbmd0aCkge1xyXG5cdFx0XHRzZXRRdWVzdGlvbkluZGV4KHF1ZXN0aW9uSW5kZXggKyAxKTtcclxuXHRcdFx0c2V0QW5zd2VySW5kZXgoYW5zd2VySW5kZXggKyAxKTtcclxuXHRcdH0gZWxzZSBpZiAocXVpelN0YXRlID09IGZhbHNlKXtcclxuXHRcdFx0c2V0UXVpelN0YXRlKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cnVlQnV0dG9uJykuZGlzYWJsZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYW5zd2VyU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcIlRydWUgVmFsdWVcIikge1xyXG5cdFx0XHRpZiAocXVpelN0YXRlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJUaGFua3MgZm9yIHBsYXlpbmchXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFNjb3JlKHNjb3JlICsgMSk7XHJcblx0XHRcdFx0bmV4dFF1ZXN0aW9uKClcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmV4dFF1ZXN0aW9uKCk7XHJcblx0XHR9XHJcblx0fTtcdFxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcXVlc3Rpb24gdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0PHAgY2xhc3NOYW1lPVwibS0zIG10LTIwIHRleHQtY2VudGVyXCI+e2BRdWVzdGlvbiAke3F1ZXN0aW9uSW5kZXh9IG9mIDEwYH08L3A+XHJcblx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTVcIj5DdXJyZW50IHNjb3JlOiB7c2NvcmV9LzEwPC9wPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcblx0XHRcdFx0e0FycmF5LmZyb20oc2VsZWN0ZWRRdWVzdGlvbnMpLm1hcCgocSwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e3F1ZXN0aW9uSW5kZXggPT09IGkgKyAxID8gXCJxdWVzdGlvbiBhY3RpdmUtcXVlc3Rpb25cIiA6IFwicXVlc3Rpb25cIn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibXQtMTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3EucXVlc3Rpb259XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2Fuc3dlckluZGV4ID09PSBpICsgMSA/IFwicXVlc3Rpb24gYWN0aXZlLXF1ZXN0aW9uXCIgOiBcInF1ZXN0aW9uXCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImJsdXIgaG92ZXI6Ymx1ci1ub25lIG10LTE2IGFuc3dlci1jb250YWluZXIgbS1hdXRvXCIga2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicC1hdXRvXCI+e3EuYW5zd2VyfSA8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTQwXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBpZD1cInRydWVCdXR0b25cIiBjbGFzc05hbWU9XCJweC0zXCIgdmFsdWU9e3RydWV9IG9uQ2xpY2s9e2Fuc3dlclN1Ym1pdH0+XHJcblx0XHRcdFx0XHRUcnVlIFZhbHVlXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBpZD1cImZhbHNlQnV0dG9uXCIgY2xhc3NOYW1lPVwicHgtM1wiIHZhbHVlPXtmYWxzZX0gb25DbGljaz17YW5zd2VyU3VibWl0fT5cclxuXHRcdFx0XHRcdEZhbHNlIFZhbHVlXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUXVlc3Rpb25zIiwiUmVuZGVyUXVpeiIsInF1ZXN0aW9uSW5kZXgiLCJzZXRRdWVzdGlvbkluZGV4IiwiYW5zd2VySW5kZXgiLCJzZXRBbnN3ZXJJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJxdWl6U3RhdGUiLCJzZXRRdWl6U3RhdGUiLCJuZXh0UXVlc3Rpb24iLCJsZW5ndGgiLCJwcmV2U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzYWJsZSIsImFuc3dlclN1Ym1pdCIsImUiLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwicSIsImkiLCJoMiIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYnV0dG9uIiwiaWQiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RenderQuiz.js\n");

/***/ })

});
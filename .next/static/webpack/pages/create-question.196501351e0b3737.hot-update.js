"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-question",{

/***/ "./pages/create-question.js":
/*!**********************************!*\
  !*** ./pages/create-question.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateQuestion; }\n/* harmony export */ });\n/* harmony import */ var _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/supabaseClient */ \"./utils/supabaseClient.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction CreateQuestion() {\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), questionTitle = ref3[0], setQuestionTitle = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), questionAnswers = ref1[0], setQuestionAnswers = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), questionSubject = ref2[0], setQuestionSubject = ref2[1];\n    var addQuestion = function() {\n        var _ref = _asyncToGenerator(_home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var i, ref, data, error;\n            return _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        for(i = 0; i < e.target.length; i++){\n                            if (i !== 0 | 1) {\n                                if (e.target[i].value !== '') {\n                                    setQuestionAnswers(questionAnswers.push({\n                                        answer: e.target[i].value,\n                                        value: Boolean(e.target[i].name)\n                                    }));\n                                }\n                            }\n                        }\n                        _ctx.next = 4;\n                        return _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from('questions').insert([\n                            {\n                                question: questionTitle,\n                                answers: questionAnswers,\n                                subject: questionSubject\n                            }, \n                        ]);\n                    case 4:\n                        ref = _ctx.sent;\n                        data = ref.data;\n                        error = ref.error;\n                        if (!error) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        throw error;\n                    case 9:\n                        return _ctx.abrupt(\"return\", {\n                            questionTitle: questionTitle,\n                            questionAnswers: questionAnswers,\n                            data: data\n                        });\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addQuestion(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var test = function(e) {\n        e.preventDefault();\n        for(var i = 0; i < e.target.length; i++){\n            if (i !== 0 || i !== 1) {\n                if (e.target[i].value !== '') {\n                    setQuestionAnswers(questionAnswers.push({\n                        answer: e.target[i].value,\n                        value: Boolean(e.target[i].name)\n                    }));\n                }\n            }\n        }\n        console.log(questionAnswers);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            onSubmit: function(e) {\n                return test(e);\n            },\n            className: \"container mt-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    htmlFor: \"subjects\",\n                    children: \"Select the Questions Subject\"\n                }, void 0, false, {\n                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                    className: \"text-black\",\n                    id: \"subjects\",\n                    defaultValue: \"1\",\n                    required: true,\n                    onChange: function(e) {\n                        return setQuestionSubject(e.target.value);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                            className: \"test-black\",\n                            value: \"1\",\n                            disabled: true,\n                            children: \"Select Subject\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                            className: \"text-black\",\n                            value: \"Maths\",\n                            children: \"Maths\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                            className: \"text-black\",\n                            value: \"Science\",\n                            children: \"Science\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                            className: \"text-black\",\n                            value: \"English\",\n                            children: \"English\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"pt-5\",\n                    htmlFor: \"questionTitle\",\n                    children: \"Enter a Question\"\n                }, void 0, false, {\n                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    id: \"questionTitle\",\n                    type: \"text\",\n                    onChange: function(e) {\n                        return setQuestionTitle(e.target.value);\n                    },\n                    value: questionTitle\n                }, void 0, false, {\n                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"pt-5\",\n                    htmlFor: \"correctAnswer\",\n                    children: \"Input the Correct Answer\"\n                }, void 0, false, {\n                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    id: \"correctAnswer\",\n                    type: \"text\",\n                    name: \"true\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"pt-5\",\n                    htmlFor: \"incorrectAnswers\",\n                    children: \"Input up to Three Incorrect Answers\"\n                }, void 0, false, {\n                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-3 gap-4\",\n                    id: \"incorrectAnswers\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"my-5\",\n                    type: \"submit\",\n                    children: \"Add Question\"\n                }, void 0, false, {\n                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/pages/create-question.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this));\n};\n_s(CreateQuestion, \"bFzuTJ6vumadoJlMV13RK++uxhg=\");\n_c = CreateQuestion;\nvar _c;\n$RefreshReg$(_c, \"CreateQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS1xdWVzdGlvbi5qcz8zYTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vdXRpbHMvc3VwYWJhc2VDbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVRdWVzdGlvbigpIHtcblxuICAgIGNvbnN0IFtxdWVzdGlvblRpdGxlLCBzZXRRdWVzdGlvblRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3F1ZXN0aW9uQW5zd2Vycywgc2V0UXVlc3Rpb25BbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtxdWVzdGlvblN1YmplY3QsIHNldFF1ZXN0aW9uU3ViamVjdF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgYWRkUXVlc3Rpb24gPSBhc3luYyAoZSkgPT4ge1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9PSAwIHwgMSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldFtpXS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb25BbnN3ZXJzKHF1ZXN0aW9uQW5zd2Vycy5wdXNoKHsgYW5zd2VyOiBlLnRhcmdldFtpXS52YWx1ZSwgdmFsdWU6IEJvb2xlYW4oZS50YXJnZXRbaV0ubmFtZSkgfSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgIC5mcm9tKCdxdWVzdGlvbnMnKVxuICAgICAgICAgICAgLmluc2VydChbXG4gICAgICAgICAgICAgICAgeyBxdWVzdGlvbjogcXVlc3Rpb25UaXRsZSwgYW5zd2VyczogcXVlc3Rpb25BbnN3ZXJzLCBzdWJqZWN0OiBxdWVzdGlvblN1YmplY3QgfSxcbiAgICAgICAgICAgIF0pXG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uVGl0bGUsXG4gICAgICAgICAgICBxdWVzdGlvbkFuc3dlcnMsXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0ZXN0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLnRhcmdldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgIT09IDAgfHwgaSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldFtpXS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb25BbnN3ZXJzKHF1ZXN0aW9uQW5zd2Vycy5wdXNoKHsgYW5zd2VyOiBlLnRhcmdldFtpXS52YWx1ZSwgdmFsdWU6IEJvb2xlYW4oZS50YXJnZXRbaV0ubmFtZSkgfSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25BbnN3ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0ZXN0KGUpfSBjbGFzc05hbWU9J2NvbnRhaW5lciBtdC0yMCc+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJqZWN0c1wiPlNlbGVjdCB0aGUgUXVlc3Rpb25zIFN1YmplY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrJyBpZD1cInN1YmplY3RzXCIgZGVmYXVsdFZhbHVlPVwiMVwiIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlc3Rpb25TdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPSd0ZXN0LWJsYWNrJyB2YWx1ZT1cIjFcIiBkaXNhYmxlZD17dHJ1ZX0+U2VsZWN0IFN1YmplY3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9J3RleHQtYmxhY2snIHZhbHVlPVwiTWF0aHNcIj5NYXRoczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT0ndGV4dC1ibGFjaycgdmFsdWU9XCJTY2llbmNlXCI+U2NpZW5jZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT0ndGV4dC1ibGFjaycgdmFsdWU9XCJFbmdsaXNoXCI+RW5nbGlzaDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3B0LTUnIGh0bWxGb3I9XCJxdWVzdGlvblRpdGxlXCI+RW50ZXIgYSBRdWVzdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPSdxdWVzdGlvblRpdGxlJyB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlc3Rpb25UaXRsZShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtxdWVzdGlvblRpdGxlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3B0LTUnIGh0bWxGb3I9XCJjb3JyZWN0QW5zd2VyXCI+SW5wdXQgdGhlIENvcnJlY3QgQW5zd2VyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2NvcnJlY3RBbnN3ZXInIHR5cGU9XCJ0ZXh0XCIgbmFtZT0ndHJ1ZScgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwdC01JyBodG1sRm9yPVwiaW5jb3JyZWN0QW5zd2Vyc1wiPklucHV0IHVwIHRvIFRocmVlIEluY29ycmVjdCBBbnN3ZXJzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtNCcgaWQ9XCJpbmNvcnJlY3RBbnN3ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9JycgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT0nJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPScnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J215LTUnIHR5cGU9J3N1Ym1pdCc+QWRkIFF1ZXN0aW9uPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdXBhYmFzZSIsInVzZVN0YXRlIiwiQ3JlYXRlUXVlc3Rpb24iLCJxdWVzdGlvblRpdGxlIiwic2V0UXVlc3Rpb25UaXRsZSIsInF1ZXN0aW9uQW5zd2VycyIsInNldFF1ZXN0aW9uQW5zd2VycyIsInF1ZXN0aW9uU3ViamVjdCIsInNldFF1ZXN0aW9uU3ViamVjdCIsImFkZFF1ZXN0aW9uIiwiZSIsImkiLCJkYXRhIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImxlbmd0aCIsInZhbHVlIiwicHVzaCIsImFuc3dlciIsIkJvb2xlYW4iLCJuYW1lIiwiZnJvbSIsImluc2VydCIsInF1ZXN0aW9uIiwiYW5zd2VycyIsInN1YmplY3QiLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwiZGVmYXVsdFZhbHVlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImRpc2FibGVkIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create-question.js\n");

/***/ })

});
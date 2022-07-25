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

/***/ "./components/RenderQuiz.js":
/*!**********************************!*\
  !*** ./components/RenderQuiz.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RenderQuiz; }\n/* harmony export */ });\n/* harmony import */ var _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import { selectedQuestions } from \"../utils/questionsArray\";\nfunction RenderQuiz(param) {\n    var selectedQuestions = param.selectedQuestions, getData = param.getData;\n    _s();\n    // console.log(selectedQuestions)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), questionIndex = ref[0], setQuestionIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), score = ref1[0], setScore = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), quizState = ref2[0], setQuizState = ref2[1];\n    var quizStart = function() {\n        var _ref = _asyncToGenerator(_home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var quizContainer, startButton;\n            return _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        quizContainer = document.getElementById('quiz-container');\n                        startButton = document.getElementById('start-btn');\n                        startButton.classList.add('hidden');\n                        quizContainer.classList.remove('hidden');\n                        _ctx.next = 6;\n                        return getData();\n                    case 6:\n                        _ctx.next = 8;\n                        return nextQuestion();\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function quizStart() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var nextQuestion = function() {\n        resetState();\n        if (questionIndex !== selectedQuestions.length) {\n            setQuestionIndex(questionIndex + 1);\n        }\n        showQuestion();\n    };\n    var showQuestion = function() {\n        var questionTitle = document.getElementById('question-title');\n        var buttonContainer = document.getElementById('btn-container');\n        questionTitle.innerText = selectedQuestions[questionIndex].question;\n        selectedQuestions[questionIndex].answers.forEach(function(answer) {\n            var button = document.createElement('button');\n            button.innerText = answer.answer;\n            button.classList.add('btn');\n            if (answer.value) {\n                button.value = answer.value;\n            }\n            button.addEventListener('click', selectAnswer);\n            buttonContainer.appendChild(button);\n        });\n        if (questionIndex + 1 == 10) {\n            setQuizState(function(prevState) {\n                return !prevState;\n            });\n            document.getElementById('next-btn').classList.add('hidden');\n        }\n    };\n    var resetState = function() {\n        var buttonContainer = document.getElementById('btn-container');\n        var nextButton = document.getElementById('next-btn');\n        nextButton.classList.add('hidden');\n        while(buttonContainer.firstChild){\n            buttonContainer.removeChild(buttonContainer.firstChild);\n        }\n    };\n    var fullReset = function() {\n        document.getElementById('quiz-container').classList.add('hidden');\n        document.getElementById('end-quiz-btn').classList.add('hidden');\n        document.getElementById('end-quiz').classList.remove('hidden');\n    };\n    var selectAnswer = function(e) {\n        var nextBtn = document.getElementById('next-btn');\n        var btns = document.getElementById('btn-container').children;\n        if (e.target.value) {\n            console.log('I am the right answer');\n            setScore(score + 1);\n        } else {\n            console.log('I am not the right answer');\n        }\n        for(var i = 0; i < btns.length; i++){\n            btns[i].disabled = true;\n        }\n        if (questionIndex + 1 < 10) {\n            nextBtn.classList.remove('hidden');\n        } else {\n            document.getElementById('end-quiz-btn').classList.remove('hidden');\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container-question\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"start-btn\",\n                onClick: function() {\n                    return quizStart();\n                },\n                children: \"Start\"\n            }, void 0, false, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 101,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"quiz-container\",\n                className: \" text-center hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"m-3 mt-20 text-center\",\n                        children: \"Question \".concat(questionIndex, \" of 10\")\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 103,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        id: \"question-title\",\n                                        className: \"mt-5\",\n                                        children: \"Question Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    id: \"btn-container\",\n                                    className: \"mt-16 grid grid-cols-2 m-auto gap-4\"\n                                }, void 0, false, {\n                                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                            lineNumber: 105,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 104,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mt-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                id: \"next-btn\",\n                                className: \"px-3\",\n                                onClick: nextQuestion,\n                                children: \"Next Question\"\n                            }, void 0, false, {\n                                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                lineNumber: 116,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                id: \"end-quiz-btn\",\n                                className: \"hidden\",\n                                onClick: fullReset,\n                                children: \"Finish Quiz\"\n                            }, void 0, false, {\n                                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                lineNumber: 119,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 115,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 102,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"end-quiz\",\n                className: \"hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: score == 10 ? \"Excellent job, your score was \".concat(score, \"/10! You got every question right! :)\") : score >= 7 ? \"Very well done, your socre was \".concat(score, \"/10. Keep it up!\") : score >= 5 ? \"Your score was \".concat(score, \"/10. Doing good, keep practicing! :)\") : \"Your score was \".concat(score, \"/10. Don't feel discouraged, you can do better! :)\")\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 125,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            children: \"Retry Quiz\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                            lineNumber: 127,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 126,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 124,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n        lineNumber: 100,\n        columnNumber: 3\n    }, this));\n};\n_s(RenderQuiz, \"RSeyr7CC0v/ZuOcCnAHCE7pUXAw=\");\n_c = RenderQuiz;\nvar _c;\n$RefreshReg$(_c, \"RenderQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZTtvQ0FBQ0QsU0FBUyxFQUFDLENBQXFDOzs7Ozs7Ozs7Ozs7Ozs7OztnR0FJeEVELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFPOzt3R0FDcEJyQixDQUFNO2dDQUFDc0IsRUFBRSxFQUFDLENBQVU7Z0NBQUNELFNBQVMsRUFBQyxDQUFNO2dDQUFDRSxPQUFPLEVBQUVsQyxZQUFZOzBDQUFFLENBRTlEOzs7Ozs7d0dBQ0NXLENBQU07Z0NBQUNzQixFQUFFLEVBQUMsQ0FBYztnQ0FBQ0QsU0FBUyxFQUFDLENBQVE7Z0NBQUNFLE9BQU8sRUFBRWIsU0FBUzswQ0FBRSxDQUVqRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUdEVSxDQUFHO2dCQUFDRSxFQUFFLEVBQUMsQ0FBVTtnQkFBQ0QsU0FBUyxFQUFDLENBQVE7O2dHQUNuQ0csQ0FBQztrQ0FBRS9DLEtBQUssSUFBSSxFQUFFLEdBQUksQ0FBOEIsZ0NBQVEsTUFBcUMsQ0FBM0NBLEtBQUssRUFBQyxDQUFxQywwQ0FBSUEsS0FBSyxJQUFJLENBQUMsR0FBSSxDQUErQixpQ0FBUSxNQUFnQixDQUF0QkEsS0FBSyxFQUFDLENBQWdCLHFCQUFJQSxLQUFLLElBQUksQ0FBQyxHQUFJLENBQWUsaUJBQVEsTUFBb0MsQ0FBMUNBLEtBQUssRUFBQyxDQUFvQyx5Q0FBSyxDQUFlLGlCQUFRLE1BQWtELENBQXhEQSxLQUFLLEVBQUMsQ0FBa0Q7Ozs7OztnR0FDalVpRCxDQUFDO3dCQUFDQyxJQUFJLEVBQUMsQ0FBRzs4R0FDVDNCLENBQU07c0NBQUMsQ0FFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLTCxDQUFDO0dBakl1QjVCLFVBQVU7S0FBVkEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlbmRlclF1aXouanM/YTgwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHNlbGVjdGVkUXVlc3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxzL3F1ZXN0aW9uc0FycmF5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW5kZXJRdWl6KHsgc2VsZWN0ZWRRdWVzdGlvbnMsIGdldERhdGEgfSkge1xyXG5cclxuXHQvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFF1ZXN0aW9ucylcclxuXHJcblx0Y29uc3QgW3F1ZXN0aW9uSW5kZXgsIHNldFF1ZXN0aW9uSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbcXVpelN0YXRlLCBzZXRRdWl6U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cdGNvbnN0IHF1aXpTdGFydCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHF1aXpDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpei1jb250YWluZXInKVxyXG5cdFx0Y29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnRuJylcclxuXHJcblx0XHRzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG5cdFx0cXVpekNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG5cclxuXHRcdGF3YWl0IGdldERhdGEoKVxyXG5cdFx0YXdhaXQgbmV4dFF1ZXN0aW9uKClcclxuXHR9XHJcblxyXG5cdGNvbnN0IG5leHRRdWVzdGlvbiA9ICgpID0+IHtcclxuXHRcdHJlc2V0U3RhdGUoKVxyXG5cclxuXHRcdGlmIChxdWVzdGlvbkluZGV4ICE9PSBzZWxlY3RlZFF1ZXN0aW9ucy5sZW5ndGgpIHtcclxuXHRcdFx0c2V0UXVlc3Rpb25JbmRleChxdWVzdGlvbkluZGV4ICsgMSlcclxuXHRcdH1cclxuXHJcblx0XHRzaG93UXVlc3Rpb24oKVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2hvd1F1ZXN0aW9uID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgcXVlc3Rpb25UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbi10aXRsZScpXHJcblx0XHRjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNvbnRhaW5lcicpXHJcblxyXG5cdFx0cXVlc3Rpb25UaXRsZS5pbm5lclRleHQgPSBzZWxlY3RlZFF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XS5xdWVzdGlvblxyXG5cclxuXHRcdHNlbGVjdGVkUXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdLmFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xyXG5cdFx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuXHRcdFx0YnV0dG9uLmlubmVyVGV4dCA9IGFuc3dlci5hbnN3ZXJcclxuXHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXHJcblxyXG5cdFx0XHRpZiAoYW5zd2VyLnZhbHVlKSB7XHJcblx0XHRcdFx0YnV0dG9uLnZhbHVlID0gYW5zd2VyLnZhbHVlXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdEFuc3dlcilcclxuXHRcdFx0YnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuXHRcdH0pXHJcblxyXG5cdFx0aWYgKHF1ZXN0aW9uSW5kZXggKyAxID09IDEwKSB7XHJcblx0XHRcdHNldFF1aXpTdGF0ZSgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKVxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1idG4nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVzZXRTdGF0ZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY29udGFpbmVyJylcclxuXHRcdGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1idG4nKVxyXG5cclxuXHRcdG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuXHJcblx0XHR3aGlsZSAoYnV0dG9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0YnV0dG9uQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJ1dHRvbkNvbnRhaW5lci5maXJzdENoaWxkKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgZnVsbFJlc2V0ID0gKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXotY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmQtcXVpei1idG4nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZC1xdWl6JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuXHR9XHJcblxyXG5cdGNvbnN0IHNlbGVjdEFuc3dlciA9IChlKSA9PiB7XHJcblx0XHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYnRuJylcclxuXHRcdGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNvbnRhaW5lcicpLmNoaWxkcmVuXHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0LnZhbHVlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdJIGFtIHRoZSByaWdodCBhbnN3ZXInKVxyXG5cdFx0XHRzZXRTY29yZShzY29yZSArIDEpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnSSBhbSBub3QgdGhlIHJpZ2h0IGFuc3dlcicpXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGJ0bnNbaV0uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChxdWVzdGlvbkluZGV4ICsgMSA8IDEwKSB7XHJcblx0XHRcdG5leHRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmQtcXVpei1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXF1ZXN0aW9uXCI+XHJcblx0XHRcdDxidXR0b24gaWQ9J3N0YXJ0LWJ0bicgb25DbGljaz17KCkgPT4gcXVpelN0YXJ0KCl9PlN0YXJ0PC9idXR0b24+XHJcblx0XHRcdDxkaXYgaWQ9J3F1aXotY29udGFpbmVyJyBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgaGlkZGVuXCI+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibS0zIG10LTIwIHRleHQtY2VudGVyXCI+e2BRdWVzdGlvbiAke3F1ZXN0aW9uSW5kZXh9IG9mIDEwYH08L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxoMiBpZD1cInF1ZXN0aW9uLXRpdGxlXCIgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0UXVlc3Rpb24gVGl0bGVcclxuXHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBpZD0nYnRuLWNvbnRhaW5lcicgY2xhc3NOYW1lPVwibXQtMTYgZ3JpZCBncmlkLWNvbHMtMiBtLWF1dG8gZ2FwLTRcIj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTIwXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwibmV4dC1idG5cIiBjbGFzc05hbWU9XCJweC0zXCIgb25DbGljaz17bmV4dFF1ZXN0aW9ufT5cclxuXHRcdFx0XHRcdFx0TmV4dCBRdWVzdGlvblxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwiZW5kLXF1aXotYnRuXCIgY2xhc3NOYW1lPVwiaGlkZGVuXCIgb25DbGljaz17ZnVsbFJlc2V0fT5cclxuXHRcdFx0XHRcdFx0RmluaXNoIFF1aXpcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBpZD1cImVuZC1xdWl6XCIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XHJcblx0XHRcdFx0PHA+e3Njb3JlID09IDEwID8gYEV4Y2VsbGVudCBqb2IsIHlvdXIgc2NvcmUgd2FzICR7c2NvcmV9LzEwISBZb3UgZ290IGV2ZXJ5IHF1ZXN0aW9uIHJpZ2h0ISA6KWAgOiBzY29yZSA+PSA3ID8gYFZlcnkgd2VsbCBkb25lLCB5b3VyIHNvY3JlIHdhcyAke3Njb3JlfS8xMC4gS2VlcCBpdCB1cCFgIDogc2NvcmUgPj0gNSA/IGBZb3VyIHNjb3JlIHdhcyAke3Njb3JlfS8xMC4gRG9pbmcgZ29vZCwga2VlcCBwcmFjdGljaW5nISA6KWAgOiBgWW91ciBzY29yZSB3YXMgJHtzY29yZX0vMTAuIERvbid0IGZlZWwgZGlzY291cmFnZWQsIHlvdSBjYW4gZG8gYmV0dGVyISA6KWB9PC9wPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRSZXRyeSBRdWl6XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVuZGVyUXVpeiIsInNlbGVjdGVkUXVlc3Rpb25zIiwiZ2V0RGF0YSIsInF1ZXN0aW9uSW5kZXgiLCJzZXRRdWVzdGlvbkluZGV4Iiwic2NvcmUiLCJzZXRTY29yZSIsInF1aXpTdGF0ZSIsInNldFF1aXpTdGF0ZSIsInF1aXpTdGFydCIsInF1aXpDb250YWluZXIiLCJzdGFydEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuZXh0UXVlc3Rpb24iLCJyZXNldFN0YXRlIiwibGVuZ3RoIiwic2hvd1F1ZXN0aW9uIiwicXVlc3Rpb25UaXRsZSIsImJ1dHRvbkNvbnRhaW5lciIsImlubmVyVGV4dCIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImZvckVhY2giLCJhbnN3ZXIiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0QW5zd2VyIiwiYXBwZW5kQ2hpbGQiLCJwcmV2U3RhdGUiLCJuZXh0QnV0dG9uIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZnVsbFJlc2V0IiwiZSIsIm5leHRCdG4iLCJidG5zIiwiY2hpbGRyZW4iLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaSIsImRpc2FibGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJvbkNsaWNrIiwicCIsImgyIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RenderQuiz.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RenderQuiz; }\n/* harmony export */ });\n/* harmony import */ var _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import { selectedQuestions } from \"../utils/questionsArray\";\nfunction RenderQuiz(param) {\n    var selectedQuestions = param.selectedQuestions;\n    _s();\n    // console.log(selectedQuestions)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), questionIndex = ref[0], setQuestionIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), score = ref1[0], setScore = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), quizState = ref2[0], setQuizState = ref2[1];\n    var quizStart = function() {\n        var _ref = _asyncToGenerator(_home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var quizContainer, startButton;\n            return _home_cloudyman_projects_cengiz_project_devQuiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        quizContainer = document.getElementById('quiz-container');\n                        startButton = document.getElementById('start-btn');\n                        startButton.classList.add('hidden');\n                        quizContainer.classList.remove('hidden');\n                        _ctx.next = 6;\n                        return getData();\n                    case 6:\n                        nextQuestion();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function quizStart() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var nextQuestion = function() {\n        resetState();\n        if (questionIndex !== selectedQuestions.length) {\n            setQuestionIndex(questionIndex + 1);\n        }\n        showQuestion();\n    };\n    var showQuestion = function() {\n        var questionTitle = document.getElementById('question-title');\n        var buttonContainer = document.getElementById('btn-container');\n        questionTitle.innerText = selectedQuestions[questionIndex].question;\n        selectedQuestions[questionIndex].answers.forEach(function(answer) {\n            var button = document.createElement('button');\n            button.innerText = answer.answer;\n            button.classList.add('btn');\n            if (answer.value) {\n                button.value = answer.value;\n            }\n            button.addEventListener('click', selectAnswer);\n            buttonContainer.appendChild(button);\n        });\n        if (questionIndex + 1 == 10) {\n            setQuizState(function(prevState) {\n                return !prevState;\n            });\n            document.getElementById('next-btn').classList.add('hidden');\n        }\n    };\n    var resetState = function() {\n        var buttonContainer = document.getElementById('btn-container');\n        var nextButton = document.getElementById('next-btn');\n        nextButton.classList.add('hidden');\n        while(buttonContainer.firstChild){\n            buttonContainer.removeChild(buttonContainer.firstChild);\n        }\n    };\n    var fullReset = function() {\n        document.getElementById('quiz-container').classList.add('hidden');\n        document.getElementById('end-quiz-btn').classList.add('hidden');\n        document.getElementById('end-quiz').classList.remove('hidden');\n    };\n    var selectAnswer = function(e) {\n        var nextBtn = document.getElementById('next-btn');\n        var btns = document.getElementById('btn-container').children;\n        if (e.target.value) {\n            console.log('I am the right answer');\n            setScore(score + 1);\n        } else {\n            console.log('I am not the right answer');\n        }\n        for(var i = 0; i < btns.length; i++){\n            btns[i].disabled = true;\n        }\n        if (questionIndex + 1 < 10) {\n            nextBtn.classList.remove('hidden');\n        } else {\n            document.getElementById('end-quiz-btn').classList.remove('hidden');\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container-question\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"start-btn\",\n                onClick: function() {\n                    return quizStart();\n                },\n                children: \"Start\"\n            }, void 0, false, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 101,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"quiz-container\",\n                className: \" text-center hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"m-3 mt-20 text-center\",\n                        children: \"Question \".concat(questionIndex, \" of 10\")\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 103,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        id: \"question-title\",\n                                        className: \"mt-5\",\n                                        children: \"Question Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    id: \"btn-container\",\n                                    className: \"mt-16 grid grid-cols-2 m-auto gap-4\"\n                                }, void 0, false, {\n                                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                            lineNumber: 105,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 104,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mt-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                id: \"next-btn\",\n                                className: \"px-3\",\n                                onClick: nextQuestion,\n                                children: \"Next Question\"\n                            }, void 0, false, {\n                                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                lineNumber: 116,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                id: \"end-quiz-btn\",\n                                className: \"hidden\",\n                                onClick: fullReset,\n                                children: \"Finish Quiz\"\n                            }, void 0, false, {\n                                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                lineNumber: 119,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 115,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 102,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"end-quiz\",\n                className: \"hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: score == 10 ? \"Excellent job, your score was \".concat(score, \"/10! You got every question right! :)\") : score >= 7 ? \"Very well done, your socre was \".concat(score, \"/10. Keep it up!\") : score >= 5 ? \"Your score was \".concat(score, \"/10. Doing good, keep practicing! :)\") : \"Your score was \".concat(score, \"/10. Don't feel discouraged, you can do better! :)\")\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 125,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            children: \"Retry Quiz\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                            lineNumber: 127,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 126,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 124,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n        lineNumber: 100,\n        columnNumber: 3\n    }, this));\n};\n_s(RenderQuiz, \"RSeyr7CC0v/ZuOcCnAHCE7pUXAw=\");\n_c = RenderQuiz;\nvar _c;\n$RefreshReg$(_c, \"RenderQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O2dHQUl4RUQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU87O3dHQUNwQnJCLENBQU07Z0NBQUNzQixFQUFFLEVBQUMsQ0FBVTtnQ0FBQ0QsU0FBUyxFQUFDLENBQU07Z0NBQUNFLE9BQU8sRUFBRWxDLFlBQVk7MENBQUUsQ0FFOUQ7Ozs7Ozt3R0FDQ1csQ0FBTTtnQ0FBQ3NCLEVBQUUsRUFBQyxDQUFjO2dDQUFDRCxTQUFTLEVBQUMsQ0FBUTtnQ0FBQ0UsT0FBTyxFQUFFYixTQUFTOzBDQUFFLENBRWpFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR0RVLENBQUc7Z0JBQUNFLEVBQUUsRUFBQyxDQUFVO2dCQUFDRCxTQUFTLEVBQUMsQ0FBUTs7Z0dBQ25DRyxDQUFDO2tDQUFFaEQsS0FBSyxJQUFJLEVBQUUsR0FBSSxDQUE4QixnQ0FBUSxNQUFxQyxDQUEzQ0EsS0FBSyxFQUFDLENBQXFDLDBDQUFJQSxLQUFLLElBQUksQ0FBQyxHQUFJLENBQStCLGlDQUFRLE1BQWdCLENBQXRCQSxLQUFLLEVBQUMsQ0FBZ0IscUJBQUlBLEtBQUssSUFBSSxDQUFDLEdBQUksQ0FBZSxpQkFBUSxNQUFvQyxDQUExQ0EsS0FBSyxFQUFDLENBQW9DLHlDQUFLLENBQWUsaUJBQVEsTUFBa0QsQ0FBeERBLEtBQUssRUFBQyxDQUFrRDs7Ozs7O2dHQUNqVWtELENBQUM7d0JBQUNDLElBQUksRUFBQyxDQUFHOzhHQUNUM0IsQ0FBTTtzQ0FBQyxDQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtMLENBQUM7R0FqSXVCNUIsVUFBVTtLQUFWQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVuZGVyUXVpei5qcz9hODA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgc2VsZWN0ZWRRdWVzdGlvbnMgfSBmcm9tIFwiLi4vdXRpbHMvcXVlc3Rpb25zQXJyYXlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbmRlclF1aXooeyBzZWxlY3RlZFF1ZXN0aW9ucyB9KSB7XHJcblxyXG5cdC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkUXVlc3Rpb25zKVxyXG5cclxuXHRjb25zdCBbcXVlc3Rpb25JbmRleCwgc2V0UXVlc3Rpb25JbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtxdWl6U3RhdGUsIHNldFF1aXpTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3QgcXVpelN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcXVpekNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6LWNvbnRhaW5lcicpXHJcblx0XHRjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKVxyXG5cclxuXHRcdHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcblx0XHRxdWl6Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcblxyXG5cdFx0YXdhaXQgZ2V0RGF0YSgpXHJcblx0XHRuZXh0UXVlc3Rpb24oKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbmV4dFF1ZXN0aW9uID0gKCkgPT4ge1xyXG5cdFx0cmVzZXRTdGF0ZSgpXHJcblxyXG5cdFx0aWYgKHF1ZXN0aW9uSW5kZXggIT09IHNlbGVjdGVkUXVlc3Rpb25zLmxlbmd0aCkge1xyXG5cdFx0XHRzZXRRdWVzdGlvbkluZGV4KHF1ZXN0aW9uSW5kZXggKyAxKVxyXG5cdFx0fVxyXG5cclxuXHRcdHNob3dRdWVzdGlvbigpXHJcblx0fVxyXG5cclxuXHRjb25zdCBzaG93UXVlc3Rpb24gPSAoKSA9PiB7XHJcblx0XHRjb25zdCBxdWVzdGlvblRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uLXRpdGxlJylcclxuXHRcdGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY29udGFpbmVyJylcclxuXHJcblx0XHRxdWVzdGlvblRpdGxlLmlubmVyVGV4dCA9IHNlbGVjdGVkUXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uXHJcblxyXG5cdFx0c2VsZWN0ZWRRdWVzdGlvbnNbcXVlc3Rpb25JbmRleF0uYW5zd2Vycy5mb3JFYWNoKGFuc3dlciA9PiB7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblxyXG5cdFx0XHRidXR0b24uaW5uZXJUZXh0ID0gYW5zd2VyLmFuc3dlclxyXG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcclxuXHJcblx0XHRcdGlmIChhbnN3ZXIudmFsdWUpIHtcclxuXHRcdFx0XHRidXR0b24udmFsdWUgPSBhbnN3ZXIudmFsdWVcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0QW5zd2VyKVxyXG5cdFx0XHRidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cdFx0fSlcclxuXHJcblx0XHRpZiAocXVlc3Rpb25JbmRleCArIDEgPT0gMTApIHtcclxuXHRcdFx0c2V0UXVpelN0YXRlKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXNldFN0YXRlID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jb250YWluZXInKVxyXG5cdFx0Y29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWJ0bicpXHJcblxyXG5cdFx0bmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG5cclxuXHRcdHdoaWxlIChidXR0b25Db250YWluZXIuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRidXR0b25Db250YWluZXIucmVtb3ZlQ2hpbGQoYnV0dG9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBmdWxsUmVzZXQgPSAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpei1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZC1xdWl6LWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kLXF1aXonKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2VsZWN0QW5zd2VyID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1idG4nKVxyXG5cdFx0Y29uc3QgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY29udGFpbmVyJykuY2hpbGRyZW5cclxuXHJcblx0XHRpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0kgYW0gdGhlIHJpZ2h0IGFuc3dlcicpXHJcblx0XHRcdHNldFNjb3JlKHNjb3JlICsgMSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdJIGFtIG5vdCB0aGUgcmlnaHQgYW5zd2VyJylcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0YnRuc1tpXS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHF1ZXN0aW9uSW5kZXggKyAxIDwgMTApIHtcclxuXHRcdFx0bmV4dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZC1xdWl6LWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcXVlc3Rpb25cIj5cclxuXHRcdFx0PGJ1dHRvbiBpZD0nc3RhcnQtYnRuJyBvbkNsaWNrPXsoKSA9PiBxdWl6U3RhcnQoKX0+U3RhcnQ8L2J1dHRvbj5cclxuXHRcdFx0PGRpdiBpZD0ncXVpei1jb250YWluZXInIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciBoaWRkZW5cIj5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtLTMgbXQtMjAgdGV4dC1jZW50ZXJcIj57YFF1ZXN0aW9uICR7cXVlc3Rpb25JbmRleH0gb2YgMTBgfTwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGgyIGlkPVwicXVlc3Rpb24tdGl0bGVcIiBjbGFzc05hbWU9XCJtdC01XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWVzdGlvbiBUaXRsZVxyXG5cdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdidG4tY29udGFpbmVyJyBjbGFzc05hbWU9XCJtdC0xNiBncmlkIGdyaWQtY29scy0yIG0tYXV0byBnYXAtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtMjBcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJuZXh0LWJ0blwiIGNsYXNzTmFtZT1cInB4LTNcIiBvbkNsaWNrPXtuZXh0UXVlc3Rpb259PlxyXG5cdFx0XHRcdFx0XHROZXh0IFF1ZXN0aW9uXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJlbmQtcXVpei1idG5cIiBjbGFzc05hbWU9XCJoaWRkZW5cIiBvbkNsaWNrPXtmdWxsUmVzZXR9PlxyXG5cdFx0XHRcdFx0XHRGaW5pc2ggUXVpelxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGlkPVwiZW5kLXF1aXpcIiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cclxuXHRcdFx0XHQ8cD57c2NvcmUgPT0gMTAgPyBgRXhjZWxsZW50IGpvYiwgeW91ciBzY29yZSB3YXMgJHtzY29yZX0vMTAhIFlvdSBnb3QgZXZlcnkgcXVlc3Rpb24gcmlnaHQhIDopYCA6IHNjb3JlID49IDcgPyBgVmVyeSB3ZWxsIGRvbmUsIHlvdXIgc29jcmUgd2FzICR7c2NvcmV9LzEwLiBLZWVwIGl0IHVwIWAgOiBzY29yZSA+PSA1ID8gYFlvdXIgc2NvcmUgd2FzICR7c2NvcmV9LzEwLiBEb2luZyBnb29kLCBrZWVwIHByYWN0aWNpbmchIDopYCA6IGBZb3VyIHNjb3JlIHdhcyAke3Njb3JlfS8xMC4gRG9uJ3QgZmVlbCBkaXNjb3VyYWdlZCwgeW91IGNhbiBkbyBiZXR0ZXIhIDopYH08L3A+XHJcblx0XHRcdFx0PGEgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHRcdDxidXR0b24+XHJcblx0XHRcdFx0XHRcdFJldHJ5IFF1aXpcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZW5kZXJRdWl6Iiwic2VsZWN0ZWRRdWVzdGlvbnMiLCJxdWVzdGlvbkluZGV4Iiwic2V0UXVlc3Rpb25JbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJxdWl6U3RhdGUiLCJzZXRRdWl6U3RhdGUiLCJxdWl6U3RhcnQiLCJxdWl6Q29udGFpbmVyIiwic3RhcnRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0RGF0YSIsIm5leHRRdWVzdGlvbiIsInJlc2V0U3RhdGUiLCJsZW5ndGgiLCJzaG93UXVlc3Rpb24iLCJxdWVzdGlvblRpdGxlIiwiYnV0dG9uQ29udGFpbmVyIiwiaW5uZXJUZXh0IiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiZm9yRWFjaCIsImFuc3dlciIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWxlY3RBbnN3ZXIiLCJhcHBlbmRDaGlsZCIsInByZXZTdGF0ZSIsIm5leHRCdXR0b24iLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJmdWxsUmVzZXQiLCJlIiwibmV4dEJ0biIsImJ0bnMiLCJjaGlsZHJlbiIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJpIiwiZGlzYWJsZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsIm9uQ2xpY2siLCJwIiwiaDIiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RenderQuiz.js\n");

/***/ })

});
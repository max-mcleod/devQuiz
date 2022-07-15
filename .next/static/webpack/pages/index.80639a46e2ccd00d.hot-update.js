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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RenderQuiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questionData */ \"./data/questionData.js\");\n/* harmony import */ var _utils_questionsArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/questionsArray */ \"./utils/questionsArray.js\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction RenderQuiz(param) {\n    var questions = param.questions;\n    var createQuiz = function createQuiz() {\n        for(var i = 0; i < 10; i++){\n            // Generate random index\n            var randomIndex = Math.floor(Math.random() * remainingQuestions.length);\n            // Add question to selected questions array\n            selectedQuestions1.push(remainingQuestions[randomIndex]);\n            // Remove question from remaining questions array to avoid duplication\n            remainingQuestions.splice(randomIndex, 1);\n        }\n        console.log(selectedQuestions1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), questionIndex = ref[0], setQuestionIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref1[0], setScore = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), quizState = ref2[0], setQuizState = ref2[1];\n    var remainingQuestions = _toConsumableArray(questions);\n    var selectedQuestions1 = [];\n    var quizStart = function() {\n        var quizContainer = document.getElementById('quiz-container');\n        var startButton = document.getElementById('start-btn');\n        startButton.classList.add('hidden');\n        quizContainer.classList.remove('hidden');\n        createQuiz();\n        setNextQuestion();\n    };\n    var setNextQuestion = function() {\n        resetState();\n        if (questionIndex !== selectedQuestions1.length) {\n            setQuestionIndex(questionIndex + 1);\n        }\n        console.log(questionIndex);\n        showQuestion(selectedQuestions1[questionIndex]);\n    };\n    var showQuestion = function(question) {\n        console.log(question);\n        var questionTitle = document.getElementById('question-title');\n        var buttonContainer = document.getElementById('btn-container');\n        questionTitle.innerText = question.question;\n        question.answers.forEach(function(answer) {\n            var button = document.createElement('button');\n            button.innerText = answer.answer;\n            button.classList.add('btn');\n            if (answer.value) {\n                button.value = answer.value;\n            }\n            button.addEventListener('click', selectAnswer);\n            buttonContainer.appendChild(button);\n        });\n    };\n    var resetState = function() {\n        var buttonContainer = document.getElementById('btn-container');\n        var nextButton = document.getElementById('next-btn');\n        nextButton.classList.add('hidden');\n        while(buttonContainer.firstChild){\n            buttonContainer.removeChild(buttonContainer.firstChild);\n        }\n    };\n    var selectAnswer = function(e) {\n        var nextBtn = document.getElementById('next-btn');\n        if (e.target.value) {\n            console.log('I am the right answer');\n            setScore(score + 1);\n        } else {\n            console.log('I am not the right answer');\n        }\n        nextBtn.classList.remove('hidden');\n    };\n    var nextQuestion = function() {\n        console.log('Next question!');\n        setQuestionIndex(questionIndex + 1);\n        setNextQuestion();\n    };\n    // const nextQuestion = () => {\n    // \tif (questionIndex !== selectedQuestions.length) {\n    // \t\tsetQuestionIndex(questionIndex + 1);\n    // \t\tsetAnswerIndex(answerIndex + 1);\n    // \t} else if (quizState == false) {\n    // \t\tsetQuizState((prevState) => !prevState)\n    // \t\tdocument.getElementById('trueButton').disable = true;\n    // \t}\n    // };\n    // const answerSubmit = (e) => {\n    // \tif (e.target.textContent == \"True Value\") {\n    // \t\tif (quizState === true) {\n    // \t\t\tconsole.log(\"Thanks for playing!\");\n    // \t\t} else {\n    // \t\t\tsetScore(score + 1);\n    // \t\t\tnextQuestion()\n    // \t\t}\n    // \t} else {\n    // \t\tnextQuestion();\n    // \t}\n    // };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-question\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"start-btn\",\n                onClick: function() {\n                    return quizStart();\n                },\n                children: \"Start\"\n            }, void 0, false, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 125,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"quiz-container\",\n                className: \" text-center hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"m-3 mt-20 text-center\",\n                        children: \"Question \".concat(questionIndex, \" of 10\")\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 127,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-5\",\n                        children: [\n                            \"Current score: \",\n                            score,\n                            \"/10\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 128,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        id: \"question-title\",\n                                        className: \"mt-5\",\n                                        children: \"Question Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"btn-container\",\n                                    className: \"mt-16 grid grid-cols-2 m-auto\"\n                                }, void 0, false, {\n                                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                            lineNumber: 130,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 129,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-40\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: \"next-btn\",\n                            className: \"px-3\",\n                            onClick: function() {\n                                return nextQuestion();\n                            },\n                            children: \"Next Question\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                            lineNumber: 141,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 140,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 126,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n        lineNumber: 124,\n        columnNumber: 3\n    }, this));\n};\n_s(RenderQuiz, \"RSeyr7CC0v/ZuOcCnAHCE7pUXAw=\");\n_c = RenderQuiz;\nvar _c;\n$RefreshReg$(_c, \"RenderQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUJELENBQUc7MEhBQ0ZLLENBQUU7d0NBQUNILEVBQUUsRUFBQyxDQUFnQjt3Q0FBQ0QsU0FBUyxFQUFDLENBQU07a0RBQUMsQ0FFekM7Ozs7Ozs7Ozs7OzRHQUVBRCxDQUFHO29DQUFDRSxFQUFFLEVBQUMsQ0FBZTtvQ0FBQ0QsU0FBUyxFQUFDLENBQStCOzs7Ozs7Ozs7Ozs7Ozs7OztnR0FJbEVELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFPOzhHQUNwQmQsQ0FBTTs0QkFBQ2UsRUFBRSxFQUFDLENBQVU7NEJBQUNELFNBQVMsRUFBQyxDQUFNOzRCQUFDRSxPQUFPLEVBQUUsUUFBUTtnQ0FBRkosTUFBTSxDQUFOQSxZQUFZOztzQ0FBSSxDQUV0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLTCxDQUFDO0dBOUl1QmxELFVBQVU7S0FBVkEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlbmRlclF1aXouanM/YTgwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcXVlc3Rpb25EYXRhIH0gZnJvbSBcIi4uL2RhdGEvcXVlc3Rpb25EYXRhXCI7XHJcbmltcG9ydCB7IHNlbGVjdGVkUXVlc3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxzL3F1ZXN0aW9uc0FycmF5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW5kZXJRdWl6KHsgcXVlc3Rpb25zIH0pIHtcclxuXHJcblx0Y29uc3QgW3F1ZXN0aW9uSW5kZXgsIHNldFF1ZXN0aW9uSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbcXVpelN0YXRlLCBzZXRRdWl6U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cdGxldCByZW1haW5pbmdRdWVzdGlvbnMgPSBbLi4ucXVlc3Rpb25zXVxyXG5cdGxldCBzZWxlY3RlZFF1ZXN0aW9ucyA9IFtdXHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVF1aXooKSB7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcblx0XHRcdC8vIEdlbmVyYXRlIHJhbmRvbSBpbmRleFxyXG5cdFx0XHRsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1haW5pbmdRdWVzdGlvbnMubGVuZ3RoKVxyXG5cdFx0XHQvLyBBZGQgcXVlc3Rpb24gdG8gc2VsZWN0ZWQgcXVlc3Rpb25zIGFycmF5XHJcblx0XHRcdHNlbGVjdGVkUXVlc3Rpb25zLnB1c2gocmVtYWluaW5nUXVlc3Rpb25zW3JhbmRvbUluZGV4XSlcclxuXHRcdFx0Ly8gUmVtb3ZlIHF1ZXN0aW9uIGZyb20gcmVtYWluaW5nIHF1ZXN0aW9ucyBhcnJheSB0byBhdm9pZCBkdXBsaWNhdGlvblxyXG5cdFx0XHRyZW1haW5pbmdRdWVzdGlvbnMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnNvbGUubG9nKHNlbGVjdGVkUXVlc3Rpb25zKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcXVpelN0YXJ0ID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgcXVpekNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6LWNvbnRhaW5lcicpXHJcblx0XHRjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKVxyXG5cdFx0c3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuXHRcdHF1aXpDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuXHRcdGNyZWF0ZVF1aXooKVxyXG5cdFx0c2V0TmV4dFF1ZXN0aW9uKClcclxuXHR9XHJcblxyXG5cdGNvbnN0IHNldE5leHRRdWVzdGlvbiA9ICgpID0+IHtcclxuXHRcdHJlc2V0U3RhdGUoKVxyXG5cdFx0aWYgKHF1ZXN0aW9uSW5kZXggIT09IHNlbGVjdGVkUXVlc3Rpb25zLmxlbmd0aCkge1xyXG5cdFx0XHRzZXRRdWVzdGlvbkluZGV4KHF1ZXN0aW9uSW5kZXggKyAxKVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2cocXVlc3Rpb25JbmRleCk7XHJcblx0XHRzaG93UXVlc3Rpb24oc2VsZWN0ZWRRdWVzdGlvbnNbcXVlc3Rpb25JbmRleF0pXHJcblx0fVxyXG5cclxuXHRjb25zdCBzaG93UXVlc3Rpb24gPSAocXVlc3Rpb24pID0+IHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhxdWVzdGlvbilcclxuXHJcblxyXG5cclxuXHRcdGNvbnN0IHF1ZXN0aW9uVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24tdGl0bGUnKVxyXG5cdFx0Y29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jb250YWluZXInKVxyXG5cdFx0cXVlc3Rpb25UaXRsZS5pbm5lclRleHQgPSBxdWVzdGlvbi5xdWVzdGlvblxyXG5cdFx0cXVlc3Rpb24uYW5zd2Vycy5mb3JFYWNoKGFuc3dlciA9PiB7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblx0XHRcdGJ1dHRvbi5pbm5lclRleHQgPSBhbnN3ZXIuYW5zd2VyXHJcblx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxyXG5cdFx0XHRpZiAoYW5zd2VyLnZhbHVlKSB7XHJcblx0XHRcdFx0YnV0dG9uLnZhbHVlID0gYW5zd2VyLnZhbHVlXHJcblx0XHRcdH1cclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0QW5zd2VyKVxyXG5cdFx0XHRidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc2V0U3RhdGUgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNvbnRhaW5lcicpXHJcblx0XHRjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYnRuJylcclxuXHRcdG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuXHRcdHdoaWxlIChidXR0b25Db250YWluZXIuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRidXR0b25Db250YWluZXIucmVtb3ZlQ2hpbGQoYnV0dG9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBzZWxlY3RBbnN3ZXIgPSAoZSkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1idG4nKVxyXG5cclxuXHRcdGlmIChlLnRhcmdldC52YWx1ZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnSSBhbSB0aGUgcmlnaHQgYW5zd2VyJylcclxuXHRcdFx0c2V0U2NvcmUoc2NvcmUgKyAxKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0kgYW0gbm90IHRoZSByaWdodCBhbnN3ZXInKVxyXG5cdFx0fVxyXG5cclxuXHRcdG5leHRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBuZXh0UXVlc3Rpb24gPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ05leHQgcXVlc3Rpb24hJyk7XHJcblxyXG5cdFx0c2V0UXVlc3Rpb25JbmRleChxdWVzdGlvbkluZGV4ICsgMSlcclxuXHRcdHNldE5leHRRdWVzdGlvbigpXHJcblx0fVxyXG5cclxuXHQvLyBjb25zdCBuZXh0UXVlc3Rpb24gPSAoKSA9PiB7XHJcblx0Ly8gXHRpZiAocXVlc3Rpb25JbmRleCAhPT0gc2VsZWN0ZWRRdWVzdGlvbnMubGVuZ3RoKSB7XHJcblx0Ly8gXHRcdHNldFF1ZXN0aW9uSW5kZXgocXVlc3Rpb25JbmRleCArIDEpO1xyXG5cdC8vIFx0XHRzZXRBbnN3ZXJJbmRleChhbnN3ZXJJbmRleCArIDEpO1xyXG5cdC8vIFx0fSBlbHNlIGlmIChxdWl6U3RhdGUgPT0gZmFsc2UpIHtcclxuXHQvLyBcdFx0c2V0UXVpelN0YXRlKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpXHJcblx0Ly8gXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cnVlQnV0dG9uJykuZGlzYWJsZSA9IHRydWU7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfTtcclxuXHJcblx0Ly8gY29uc3QgYW5zd2VyU3VibWl0ID0gKGUpID0+IHtcclxuXHQvLyBcdGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcIlRydWUgVmFsdWVcIikge1xyXG5cdC8vIFx0XHRpZiAocXVpelN0YXRlID09PSB0cnVlKSB7XHJcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJUaGFua3MgZm9yIHBsYXlpbmchXCIpO1xyXG5cdC8vIFx0XHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRcdHNldFNjb3JlKHNjb3JlICsgMSk7XHJcblx0Ly8gXHRcdFx0bmV4dFF1ZXN0aW9uKClcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0bmV4dFF1ZXN0aW9uKCk7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXF1ZXN0aW9uXCI+XHJcblx0XHRcdDxidXR0b24gaWQ9J3N0YXJ0LWJ0bicgb25DbGljaz17KCkgPT4gcXVpelN0YXJ0KCl9PlN0YXJ0PC9idXR0b24+XHJcblx0XHRcdDxkaXYgaWQ9J3F1aXotY29udGFpbmVyJyBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgaGlkZGVuXCI+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibS0zIG10LTIwIHRleHQtY2VudGVyXCI+e2BRdWVzdGlvbiAke3F1ZXN0aW9uSW5kZXh9IG9mIDEwYH08L3A+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtNVwiPkN1cnJlbnQgc2NvcmU6IHtzY29yZX0vMTA8L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxoMiBpZD1cInF1ZXN0aW9uLXRpdGxlXCIgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0UXVlc3Rpb24gVGl0bGVcclxuXHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBpZD0nYnRuLWNvbnRhaW5lcicgY2xhc3NOYW1lPVwibXQtMTYgZ3JpZCBncmlkLWNvbHMtMiBtLWF1dG9cIj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTQwXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwibmV4dC1idG5cIiBjbGFzc05hbWU9XCJweC0zXCIgb25DbGljaz17KCkgPT4gbmV4dFF1ZXN0aW9uKCl9PlxyXG5cdFx0XHRcdFx0XHROZXh0IFF1ZXN0aW9uXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJxdWVzdGlvbkRhdGEiLCJzZWxlY3RlZFF1ZXN0aW9ucyIsIlJlbmRlclF1aXoiLCJxdWVzdGlvbnMiLCJjcmVhdGVRdWl6IiwiaSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmVtYWluaW5nUXVlc3Rpb25zIiwibGVuZ3RoIiwicHVzaCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJxdWVzdGlvbkluZGV4Iiwic2V0UXVlc3Rpb25JbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJxdWl6U3RhdGUiLCJzZXRRdWl6U3RhdGUiLCJxdWl6U3RhcnQiLCJxdWl6Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YXJ0QnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0TmV4dFF1ZXN0aW9uIiwicmVzZXRTdGF0ZSIsInNob3dRdWVzdGlvbiIsInF1ZXN0aW9uIiwicXVlc3Rpb25UaXRsZSIsImJ1dHRvbkNvbnRhaW5lciIsImlubmVyVGV4dCIsImFuc3dlcnMiLCJmb3JFYWNoIiwiYW5zd2VyIiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlbGVjdEFuc3dlciIsImFwcGVuZENoaWxkIiwibmV4dEJ1dHRvbiIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImUiLCJuZXh0QnRuIiwidGFyZ2V0IiwibmV4dFF1ZXN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJvbkNsaWNrIiwicCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RenderQuiz.js\n");

/***/ })

});
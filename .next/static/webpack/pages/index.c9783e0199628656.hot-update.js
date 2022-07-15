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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RenderQuiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questionData */ \"./data/questionData.js\");\n/* harmony import */ var _utils_questionsArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/questionsArray */ \"./utils/questionsArray.js\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction RenderQuiz(param) {\n    var questions = param.questions;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), questionIndex = ref[0], setQuestionIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref1[0], setScore = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), quizState = ref2[0], setQuizState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), selectedQuestions1 = ref3[0], setSelectedQuestions = ref3[1];\n    var remainingQuestions = _toConsumableArray(questions);\n    // let selectedQuestions = []\n    console.log(selectedQuestions1);\n    var quizStart = function() {\n        var quizContainer = document.getElementById('quiz-container');\n        var startButton = document.getElementById('start-btn');\n        startButton.classList.add('hidden');\n        quizContainer.classList.remove('hidden');\n        createQuiz();\n    };\n    var createQuiz = function() {\n        for(var i = 0; i < 10; i++){\n            // Generate random index\n            var randomIndex = Math.floor(Math.random() * remainingQuestions.length);\n            // Add question to selected questions array\n            setSelectedQuestions(selectedQuestions1.push(remainingQuestions[randomIndex]));\n            // Remove question from remaining questions array to avoid duplication\n            remainingQuestions.splice(randomIndex, 1);\n        }\n        nextQuestion(selectedQuestions1);\n    // console.log(selectedQuestions)\n    };\n    var nextQuestion = function(question) {\n        console.log(selectedQuestions1);\n        resetStuff();\n        if (questionIndex !== question.length) {\n            setQuestionIndex(questionIndex + 1);\n        }\n        // console.log(selectedQuestions[questionIndex]);\n        showQuestion(selectedQuestions1[questionIndex]);\n    };\n    var showQuestion = function(question) {\n        // console.log(questionIndex)\n        // console.log(question)\n        var questionTitle = document.getElementById('question-title');\n        var buttonContainer = document.getElementById('btn-container');\n        questionTitle.innerText = question.question;\n        question.answers.forEach(function(answer) {\n            var button = document.createElement('button');\n            button.innerText = answer.answer;\n            button.classList.add('btn');\n            if (answer.value) {\n                button.value = answer.value;\n            }\n            button.addEventListener('click', selectAnswer);\n            buttonContainer.appendChild(button);\n        });\n    };\n    var resetStuff = function() {\n        var buttonContainer = document.getElementById('btn-container');\n        var nextButton = document.getElementById('next-btn');\n        nextButton.classList.add('hidden');\n        while(buttonContainer.firstChild){\n            buttonContainer.removeChild(buttonContainer.firstChild);\n        }\n    };\n    var selectAnswer = function(e) {\n        var nextBtn = document.getElementById('next-btn');\n        if (e.target.value) {\n            console.log('I am the right answer');\n            setScore(score + 1);\n        } else {\n            console.log('I am not the right answer');\n        }\n        nextBtn.classList.remove('hidden');\n    };\n    // const nextQuestion = () => {\n    // \tif (questionIndex !== selectedQuestions.length) {\n    // \t\tsetQuestionIndex(questionIndex + 1);\n    // \t\tsetAnswerIndex(answerIndex + 1);\n    // \t} else if (quizState == false) {\n    // \t\tsetQuizState((prevState) => !prevState)\n    // \t\tdocument.getElementById('trueButton').disable = true;\n    // \t}\n    // };\n    // const answerSubmit = (e) => {\n    // \tif (e.target.textContent == \"True Value\") {\n    // \t\tif (quizState === true) {\n    // \t\t\tconsole.log(\"Thanks for playing!\");\n    // \t\t} else {\n    // \t\t\tsetScore(score + 1);\n    // \t\t\tnextQuestion()\n    // \t\t}\n    // \t} else {\n    // \t\tnextQuestion();\n    // \t}\n    // };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-question\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"start-btn\",\n                onClick: function() {\n                    return quizStart();\n                },\n                children: \"Start\"\n            }, void 0, false, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 125,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"quiz-container\",\n                className: \" text-center hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"m-3 mt-20 text-center\",\n                        children: \"Question \".concat(questionIndex, \" of 10\")\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 127,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-5\",\n                        children: [\n                            \"Current score: \",\n                            score,\n                            \"/10\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 128,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        id: \"question-title\",\n                                        className: \"mt-5\",\n                                        children: \"Question Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"btn-container\",\n                                    className: \"mt-16 grid grid-cols-2 m-auto\"\n                                }, void 0, false, {\n                                    fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                            lineNumber: 130,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 129,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-40\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: \"next-btn\",\n                            className: \"px-3\",\n                            onClick: function(e) {\n                                return nextQuestion(e);\n                            },\n                            children: \"Next Question\"\n                        }, void 0, false, {\n                            fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                            lineNumber: 141,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                        lineNumber: 140,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n                lineNumber: 126,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cloudyman/projects/cengiz-project/devQuiz/components/RenderQuiz.js\",\n        lineNumber: 124,\n        columnNumber: 3\n    }, this));\n};\n_s(RenderQuiz, \"r1G/qn23969f4THrFy1kvfBe4KU=\");\n_c = RenderQuiz;\nvar _c;\n$RefreshReg$(_c, \"RenderQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SEFDRkssQ0FBRTt3Q0FBQ0gsRUFBRSxFQUFDLENBQWdCO3dDQUFDRCxTQUFTLEVBQUMsQ0FBTTtrREFBQyxDQUV6Qzs7Ozs7Ozs7Ozs7NEdBRUFELENBQUc7b0NBQUNFLEVBQUUsRUFBQyxDQUFlO29DQUFDRCxTQUFTLEVBQUMsQ0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUlsRUQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU87OEdBQ3BCYixDQUFNOzRCQUFDYyxFQUFFLEVBQUMsQ0FBVTs0QkFBQ0QsU0FBUyxFQUFDLENBQU07NEJBQUNFLE9BQU8sRUFBRSxRQUFRLENBQVBOLENBQUM7Z0NBQUtuQixNQUFNLENBQU5BLFlBQVksQ0FBQ21CLENBQUM7O3NDQUFHLENBRXhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtMLENBQUM7R0E5SXVCaEQsVUFBVTtLQUFWQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVuZGVyUXVpei5qcz9hODA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBxdWVzdGlvbkRhdGEgfSBmcm9tIFwiLi4vZGF0YS9xdWVzdGlvbkRhdGFcIjtcclxuaW1wb3J0IHsgc2VsZWN0ZWRRdWVzdGlvbnMgfSBmcm9tIFwiLi4vdXRpbHMvcXVlc3Rpb25zQXJyYXlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbmRlclF1aXooeyBxdWVzdGlvbnMgfSkge1xyXG5cclxuXHRjb25zdCBbcXVlc3Rpb25JbmRleCwgc2V0UXVlc3Rpb25JbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtxdWl6U3RhdGUsIHNldFF1aXpTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbc2VsZWN0ZWRRdWVzdGlvbnMsIHNldFNlbGVjdGVkUXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHRsZXQgcmVtYWluaW5nUXVlc3Rpb25zID0gWy4uLnF1ZXN0aW9uc11cclxuXHQvLyBsZXQgc2VsZWN0ZWRRdWVzdGlvbnMgPSBbXVxyXG5cclxuXHRjb25zb2xlLmxvZyhzZWxlY3RlZFF1ZXN0aW9ucyk7XHJcblxyXG5cdGNvbnN0IHF1aXpTdGFydCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHF1aXpDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpei1jb250YWluZXInKVxyXG5cdFx0Y29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnRuJylcclxuXHRcdHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcblx0XHRxdWl6Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcblx0XHRjcmVhdGVRdWl6KClcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGVRdWl6ID0gKCkgPT4ge1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG5cdFx0XHQvLyBHZW5lcmF0ZSByYW5kb20gaW5kZXhcclxuXHRcdFx0bGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVtYWluaW5nUXVlc3Rpb25zLmxlbmd0aClcclxuXHRcdFx0Ly8gQWRkIHF1ZXN0aW9uIHRvIHNlbGVjdGVkIHF1ZXN0aW9ucyBhcnJheVxyXG5cdFx0XHRzZXRTZWxlY3RlZFF1ZXN0aW9ucyhzZWxlY3RlZFF1ZXN0aW9ucy5wdXNoKHJlbWFpbmluZ1F1ZXN0aW9uc1tyYW5kb21JbmRleF0pKVxyXG5cdFx0XHQvLyBSZW1vdmUgcXVlc3Rpb24gZnJvbSByZW1haW5pbmcgcXVlc3Rpb25zIGFycmF5IHRvIGF2b2lkIGR1cGxpY2F0aW9uXHJcblx0XHRcdHJlbWFpbmluZ1F1ZXN0aW9ucy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpXHJcblx0XHR9XHJcblxyXG5cdFx0bmV4dFF1ZXN0aW9uKHNlbGVjdGVkUXVlc3Rpb25zKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coc2VsZWN0ZWRRdWVzdGlvbnMpXHJcblx0fVxyXG5cclxuXHRjb25zdCBuZXh0UXVlc3Rpb24gPSAocXVlc3Rpb24pID0+IHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZFF1ZXN0aW9ucyk7XHJcblxyXG5cdFx0cmVzZXRTdHVmZigpXHJcblx0XHRpZiAocXVlc3Rpb25JbmRleCAhPT0gcXVlc3Rpb24ubGVuZ3RoKSB7XHJcblx0XHRcdHNldFF1ZXN0aW9uSW5kZXgocXVlc3Rpb25JbmRleCArIDEpXHJcblx0XHR9XHJcblx0XHQvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XSk7XHJcblx0XHRzaG93UXVlc3Rpb24oc2VsZWN0ZWRRdWVzdGlvbnNbcXVlc3Rpb25JbmRleF0pXHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2hvd1F1ZXN0aW9uID0gKHF1ZXN0aW9uKSA9PiB7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2cocXVlc3Rpb25JbmRleClcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhxdWVzdGlvbilcclxuXHJcblx0XHRjb25zdCBxdWVzdGlvblRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uLXRpdGxlJylcclxuXHRcdGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY29udGFpbmVyJylcclxuXHRcdHF1ZXN0aW9uVGl0bGUuaW5uZXJUZXh0ID0gcXVlc3Rpb24ucXVlc3Rpb25cclxuXHRcdHF1ZXN0aW9uLmFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xyXG5cdFx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cdFx0XHRidXR0b24uaW5uZXJUZXh0ID0gYW5zd2VyLmFuc3dlclxyXG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcclxuXHRcdFx0aWYgKGFuc3dlci52YWx1ZSkge1xyXG5cdFx0XHRcdGJ1dHRvbi52YWx1ZSA9IGFuc3dlci52YWx1ZVxyXG5cdFx0XHR9XHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdEFuc3dlcilcclxuXHRcdFx0YnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRjb25zdCByZXNldFN0dWZmID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jb250YWluZXInKVxyXG5cdFx0Y29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWJ0bicpXHJcblx0XHRuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcblx0XHR3aGlsZSAoYnV0dG9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0YnV0dG9uQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJ1dHRvbkNvbnRhaW5lci5maXJzdENoaWxkKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2VsZWN0QW5zd2VyID0gKGUpID0+IHtcclxuXHJcblx0XHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYnRuJylcclxuXHJcblx0XHRpZiAoZS50YXJnZXQudmFsdWUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0kgYW0gdGhlIHJpZ2h0IGFuc3dlcicpXHJcblx0XHRcdHNldFNjb3JlKHNjb3JlICsgMSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdJIGFtIG5vdCB0aGUgcmlnaHQgYW5zd2VyJylcclxuXHRcdH1cclxuXHJcblx0XHRuZXh0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcblxyXG5cdH1cclxuXHJcblx0Ly8gY29uc3QgbmV4dFF1ZXN0aW9uID0gKCkgPT4ge1xyXG5cdC8vIFx0aWYgKHF1ZXN0aW9uSW5kZXggIT09IHNlbGVjdGVkUXVlc3Rpb25zLmxlbmd0aCkge1xyXG5cdC8vIFx0XHRzZXRRdWVzdGlvbkluZGV4KHF1ZXN0aW9uSW5kZXggKyAxKTtcclxuXHQvLyBcdFx0c2V0QW5zd2VySW5kZXgoYW5zd2VySW5kZXggKyAxKTtcclxuXHQvLyBcdH0gZWxzZSBpZiAocXVpelN0YXRlID09IGZhbHNlKSB7XHJcblx0Ly8gXHRcdHNldFF1aXpTdGF0ZSgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKVxyXG5cdC8vIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJ1ZUJ1dHRvbicpLmRpc2FibGUgPSB0cnVlO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH07XHJcblxyXG5cdC8vIGNvbnN0IGFuc3dlclN1Ym1pdCA9IChlKSA9PiB7XHJcblx0Ly8gXHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJUcnVlIFZhbHVlXCIpIHtcclxuXHQvLyBcdFx0aWYgKHF1aXpTdGF0ZSA9PT0gdHJ1ZSkge1xyXG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwiVGhhbmtzIGZvciBwbGF5aW5nIVwiKTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRzZXRTY29yZShzY29yZSArIDEpO1xyXG5cdC8vIFx0XHRcdG5leHRRdWVzdGlvbigpXHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdG5leHRRdWVzdGlvbigpO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1xdWVzdGlvblwiPlxyXG5cdFx0XHQ8YnV0dG9uIGlkPSdzdGFydC1idG4nIG9uQ2xpY2s9eygpID0+IHF1aXpTdGFydCgpfT5TdGFydDwvYnV0dG9uPlxyXG5cdFx0XHQ8ZGl2IGlkPSdxdWl6LWNvbnRhaW5lcicgY2xhc3NOYW1lPVwiIHRleHQtY2VudGVyIGhpZGRlblwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm0tMyBtdC0yMCB0ZXh0LWNlbnRlclwiPntgUXVlc3Rpb24gJHtxdWVzdGlvbkluZGV4fSBvZiAxMGB9PC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTVcIj5DdXJyZW50IHNjb3JlOiB7c2NvcmV9LzEwPC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDIgaWQ9XCJxdWVzdGlvbi10aXRsZVwiIGNsYXNzTmFtZT1cIm10LTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFF1ZXN0aW9uIFRpdGxlXHJcblx0XHRcdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgaWQ9J2J0bi1jb250YWluZXInIGNsYXNzTmFtZT1cIm10LTE2IGdyaWQgZ3JpZC1jb2xzLTIgbS1hdXRvXCI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtdC00MFwiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBpZD1cIm5leHQtYnRuXCIgY2xhc3NOYW1lPVwicHgtM1wiIG9uQ2xpY2s9eyhlKSA9PiBuZXh0UXVlc3Rpb24oZSl9PlxyXG5cdFx0XHRcdFx0XHROZXh0IFF1ZXN0aW9uXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJxdWVzdGlvbkRhdGEiLCJzZWxlY3RlZFF1ZXN0aW9ucyIsIlJlbmRlclF1aXoiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbkluZGV4Iiwic2V0UXVlc3Rpb25JbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJxdWl6U3RhdGUiLCJzZXRRdWl6U3RhdGUiLCJzZXRTZWxlY3RlZFF1ZXN0aW9ucyIsInJlbWFpbmluZ1F1ZXN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJxdWl6U3RhcnQiLCJxdWl6Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YXJ0QnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY3JlYXRlUXVpeiIsImkiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJuZXh0UXVlc3Rpb24iLCJxdWVzdGlvbiIsInJlc2V0U3R1ZmYiLCJzaG93UXVlc3Rpb24iLCJxdWVzdGlvblRpdGxlIiwiYnV0dG9uQ29udGFpbmVyIiwiaW5uZXJUZXh0IiwiYW5zd2VycyIsImZvckVhY2giLCJhbnN3ZXIiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0QW5zd2VyIiwiYXBwZW5kQ2hpbGQiLCJuZXh0QnV0dG9uIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZSIsIm5leHRCdG4iLCJ0YXJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsIm9uQ2xpY2siLCJwIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RenderQuiz.js\n");

/***/ })

});
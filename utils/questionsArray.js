import { questionData } from "../data/questionData";

// let array = [];

// let questionToRender = [];
// let answersToRender = [];

// const createQuiz = () => {
// 	for (let i = 1; i <= 10; i++) {
// 		let randomIndex = Math.floor(Math.random() * questionData.length);

// 		if (!array.includes(randomIndex)) {
// 			array.push(randomIndex);

// 			let questions = questionData[randomIndex].question;
// 			let answers = questionData[randomIndex].answer;

// 			questionToRender.push(questions);
// 			answersToRender.push(answers);
// 		} else {
// 			i--;
// 		}
// 	}
// };

// createQuiz();


let remianingQuestions = [...questionData]
let selectedQuestions = []

const createQuiz = () => {
	for(let i = 0; i < 10; i++){
		// Generate random index
		   let randomIndex = Math.floor(Math.random() * remianingQuestions.length)
		// Add question to selected questions array
		selectedQuestions.push(remianingQuestions[randomIndex])
		// Remove question from remaining questions array to avoid duplication
		remianingQuestions.splice(randomIndex, 1)
	}
}

createQuiz();

// export { questionToRender, answersToRender };

export { selectedQuestions }

import { useState, useEffect, useContext } from 'react';
import Score from './Score';

import {
	QuizScoreContext,
	QuizShowScoreContext,
} from '../../context/QuizContext';

import './Quiz.css';

function Quiz({ data }) {
	const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
	const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState('');
	const [score, setScore] = useContext(QuizScoreContext);
	const [showScore, setShowScore] = useContext(QuizShowScoreContext);
	const [finalQuestion, setFinalQuestion] = useState(false);
	const [disableForm, setDisableForm] = useState(false);

	useEffect(() => {
		currentQuestionNo === 9 && setFinalQuestion(true);
	}, [currentQuestionNo]);

	function nextQuestion(e) {
		e.preventDefault();
		//show score screen

		console.log(currentSelectedAnswer);
		let correctAnswersList = data[currentQuestionNo].correct_answers;

		Object.keys(correctAnswersList).map(function (key) {
			if (
				correctAnswersList[currentSelectedAnswer + '_correct'] ===
				'true'
			) {
				setScore(score + 10);
			}
		});

		if (finalQuestion) {
			setShowScore(true);
			return;
		}
		setCurrentQuestionNo(currentQuestionNo + 1);
	}

	function changeSelectedAnswer(e) {
		setCurrentSelectedAnswer(e.currentTarget.value);
	}
	return (
		<>
			<div className='mt-5 mb-4 text-center align-middle display-4'>
				Question {currentQuestionNo + 1}
			</div>
			<form>
				{console.log(data[currentQuestionNo])}
				<div className='mb-2 p-2 text-center align-middle'>
					{data[currentQuestionNo].question}
				</div>
				<hr />
				<div className='mx-5'>
					{Object.keys(data[currentQuestionNo].answers).map(function (
						key
					) {
						if (data[currentQuestionNo].answers[key] !== null)
							return (
								<>
									<div
										className='form-check mx-5 d-flex flex-row'
										key={key}
									>
										<div className='ml-5 d-flex justify-content-start'>
											<input
												className='form-check-input'
												type='radio'
												name='answer'
												id={key}
												value={key}
												onChange={(e) => {
													changeSelectedAnswer(e);
												}}
											/>
										</div>
										<div className=' mx-2 d-flex justify-content-center'>
											<label
												className='form-check-label'
												htmlFor={key}
											>
												{
													data[currentQuestionNo]
														.answers[key]
												}
											</label>
										</div>
									</div>
									<br />
								</>
							);
					})}
				</div>
				<div className='fixed-bottom d-flex justify-content-center'>
					<button
						className='col mx-2 my-3 btn btn-light btn-lg border border-primary'
						type='button'
						onClick={nextQuestion}
					>
						Save
					</button>
				</div>
			</form>
		</>
	);
}

export default Quiz;

import { useContext } from 'react';
import { QuizDifficultyContext } from '../../context/QuizContext';
import './Quiz.css';

function DifficultySelect() {
	const [difficulty, setDifficulty] = useContext(QuizDifficultyContext);

	function changeDifficulty(props) {
		setDifficulty(props.target.value);
	}

	return (
		<>
			<div className='mt-5 text-center align-middle display-4'>
				Choose A Difficulty
			</div>
			<div className='container'>
				<div className='row text-center'>
					<button
						type='button'
						className='col mx-2 my-3 p-2 btn btn-light btn-lg'
						value='easy'
						onClick={changeDifficulty}
					>
						Easy
					</button>
					<div className='w-100'></div>
					<button
						type='button'
						className='col mx-2 my-3 p-2 btn btn-light btn-lg'
						value='medium'
						onClick={changeDifficulty}
					>
						Medium
					</button>
					<div className='w-100'></div>
					<button
						type='button'
						className='col mx-2 my-3 p-2 btn btn-light btn-lg'
						value='hard'
						onClick={changeDifficulty}
					>
						Hard
					</button>
				</div>
			</div>
		</>
	);
}

export default DifficultySelect;

import { useContext } from 'react';
import { QuizCategoryContext } from '../../context/QuizContext';
import './Quiz.css';

function CategorySelect() {
	const [category, setCategory] = useContext(QuizCategoryContext);

	function changeCategory(props) {
		setCategory(props.target.value);
	}

	return (
		<>
			<div className='mt-5 text-center align-middle display-4'>
				Choose A Category
			</div>
			<div className='container'>
				<div className='row'>
					<button
						type='button'
						className='col mx-2 my-3 p-2 btn btn-light btn-lg border border-primary'
						value='php'
						onClick={changeCategory}
					>
						PHP
					</button>
					<div className='w-100'></div>
					<button
						type='button'
						className='col mx-2 my-3 p-2 btn btn-light btn-lg border border-primary'
						value='html'
						onClick={changeCategory}
					>
						HTML
					</button>
					<div className='w-100'></div>
					<button
						type='button'
						className='col mx-2 my-3 p-2 btn btn-light btn-lg border border-primary'
						value='mysql'
						onClick={changeCategory}
					>
						MySQL
					</button>
				</div>
			</div>
		</>
	);
}

export default CategorySelect;

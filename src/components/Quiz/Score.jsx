import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../supabase';

function Score({ score, category, difficulty }) {
	const history = useHistory();
	const { user } = useAuth();

	useEffect(() => {
		async function insertData() {
			const session = supabase.auth.session();
			const { data, error } = await supabase.from('scores').insert([
				{
					email: user,
					category: category,
					score: score,
					difficulty: difficulty,
				},
			]);
		}
		insertData();
	}, []);

	function showLeaderboard() {
		history.push('/page/QuizLeaderboard');
	}

	return (
		<>
			<div className='mt-5 text-center align-middle display-1'>
				{score >= 50 ? (
					<div className='text-success'>Pass</div>
				) : (
					<div className='text-danger'>Fail</div>
				)}
			</div>
			<div className='mt-5 text-center align-middle display-4'>
				Score: {score}
			</div>
			<div className='mt-2 text-center align-middle display-4'>
				Category: {category}
			</div>
			<div className='mt-2 text-center align-middle display-4'>
				Difficulty: {difficulty}
			</div>
			<div className='fixed-bottom d-flex justify-content-center'>
				<button
					className='mx-2 my-3 border col btn btn-light btn-lg border-primary'
					type='button'
					onClick={showLeaderboard}>
					Show Leaderboard
				</button>
			</div>
		</>
	);
}

export default Score;

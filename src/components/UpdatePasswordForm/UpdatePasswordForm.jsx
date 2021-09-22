import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { supabase } from '../../supabase';

function UpdatePasswordForm() {
	const history = useHistory();
	const [user, setUser] = useContext(UserContext);
	const [password, setPassword] = useState('');

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const submitController = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className='mt-5 text-center align-middle display-3'>
				Update Password
			</div>
			<hr />
			<div className='text-center align-middle'>
				{error && <h2 className='text-danger'> {errorMessage}</h2>}
			</div>

			<form onSubmit={submitController}>
				<div className='mx-5'>
					<div className='form-inner mx-5 flex'>
						<div className='form-group'>
							<label>{user}</label>
							<br />
						</div>
						<br />
						<div className='form-group'>
							<label htmlFor='password'>Password:</label>
							<br />
							<input
								type='password'
								name='password'
								id='password'
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
						</div>
						<br />
						<input type='submit' value='Login' />
					</div>
				</div>
			</form>
		</>
	);
}

export default UpdatePasswordForm;

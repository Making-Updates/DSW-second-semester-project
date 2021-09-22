import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { supabase } from '../../supabase';

function RegisterForm() {
	const history = useHistory();
	const [user, setUser] = useContext(UserContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const submitController = (e) => {
		e.preventDefault();
		// https://github.com/supabase/supabase/blob/6b678ced6fa0e5eecdb731ea36b9e1507f6fb11d/examples/javascript-auth/index.js#L27
		// From line 27 to 34
		// By repsonse.error, instead include an if else statement
		// if (response.error) then set error to true and the error message
		// else do set user to response.user.email then history.push('/page/Login')
	};

	return (
		<>
			<div className='mt-5 text-center align-middle display-3'>
				Register
			</div>
			<hr />
			<div className='text-center align-middle'>
				{error && <h2 className='text-danger'> {errorMessage}</h2>}
			</div>

			<form onSubmit={submitController}>
				<div className='mx-5'>
					<div className='form-inner mx-5 flex'>
						<div className='form-group'>
							<label htmlFor='email'>Email Address:</label>
							<br />
							<input
								type='email'
								name='email'
								id='email'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
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

export default RegisterForm;

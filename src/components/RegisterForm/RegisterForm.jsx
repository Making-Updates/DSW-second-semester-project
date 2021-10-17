import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { supabase } from '../../supabase';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import { useIonViewDidEnter, useIonViewDidLeave } from '@ionic/react';

function RegisterForm() {
	const history = useHistory();
	const [user, setUser] = useContext(UserContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const submitController = (e) => {
		e.preventDefault();
		setIsLoading(true);
		supabase.auth
			.signUp({ email, password })
			.then((response) => {
				if (response.error) {
					setError(true);
					setIsLoading(false);
					setErrorMessage(response.error.message);
				} else {
					setIsLoading(false);
					history.push('/page/Login');
				}
			})
			.catch((err) => {
				setError(true);
				setIsLoading(false);
				setErrorMessage(err);
			});
	};

	function clearErrors() {
		setError(false);
		setErrorMessage('');
	}

	function resetStates() {
		setEmail('');
		setPassword('');
	}

	function updateEmail(e) {
		setEmail(e.target.value);
		clearErrors();
	}

	function updatePassword(e) {
		setPassword(e.target.value);
		clearErrors();
	}

	useIonViewDidEnter(() => {
		clearErrors();
		resetStates();
	});

	useIonViewDidLeave(() => {
		clearErrors();
		resetStates();
	});

	return (
		<>
			<div className='mt-5 text-center align-middle display-3'>
				Register
			</div>
			<hr />
			<div className='text-center align-middle'>
				{error && <h2 className='text-danger'> {errorMessage}</h2>}
			</div>

			<div className='container-fluid'>
				<div>
					<div className='rounded d-flex justify-content-center'>
						<div className='col-md-4 col-sm-12'>
							<form onSubmit={submitController}>
								<div className='p-4'>
									<div className='input-group mb-3'>
										<input
											type='text'
											className='form-control'
											placeholder='Email'
											onChange={updateEmail}
											value={email}
										/>
									</div>
									<div className='input-group mb-3'>
										<input
											type='password'
											className='form-control'
											placeholder='Password'
											onChange={updatePassword}
											value={password}
										/>
									</div>
									<div className='d-flex justify-content-center'>
										<button
											className='btn btn-primary btn-lg me-3 w-75 border border-primary text-center mt-2'
											type='submit'
										>
											Register
										</button>
									</div>

									<p className='fs-5 text-center mt-5'>
										Have an account?
										<button
											type='button'
											className='btn btn-link ps-2'
											onClick={() => {
												history.replace('/page/Login');
											}}
										>
											Log In
										</button>
									</p>
								</div>
							</form>
							{isLoading && <LoadingIcon />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default RegisterForm;

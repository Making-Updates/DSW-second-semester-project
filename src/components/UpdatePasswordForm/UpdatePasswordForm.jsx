import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { supabase } from '../../supabase';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import { useIonViewDidEnter, useIonViewDidLeave } from '@ionic/react';

function UpdatePasswordForm() {
	const history = useHistory();
	const [user, setUser] = useContext(UserContext);
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const submitController = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		if (password === '') {
			setError(true);
			setIsLoading(false);
			setErrorMessage('Password required');
			return;
		}
		supabase.auth
			.update({ password: password })
			.then((response) => {
				if (response.error) {
					setError(true);
					setIsLoading(false);
					setErrorMessage(response.error.message);
				} else {
					supabase.auth
						.signOut()
						.then((response) => {
							setUser('Not Logged In');
							setIsLoading(false);
							history.push('/page/Login');
						})
						.catch((err) => {
							setError(true);
							setIsLoading(false);
							setErrorMessage(err);
						});
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
		setPassword('');
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
				Update Password
			</div>
			<hr />
			<div className='text-center align-middle'>
				{error && <h2 className='text-danger'> {errorMessage}</h2>}
			</div>

			<div className='container-fluid'>
				<div>
					<div className='rounded d-flex justify-content-center'>
						<div>
							<form onSubmit={submitController}>
								<div className='p-4'>
									<div className='input-group mb-3'>
										<input
											type='text'
											className='form-control'
											disabled
											placeholder={user}
										/>
									</div>
									<div className='input-group mb-3'>
										<input
											type='password'
											className='form-control'
											placeholder='New Password'
											required
											value={password}
											onChange={updatePassword}
										/>
									</div>
									<div className='d-flex justify-content-center'>
										<button
											className='btn btn-primary btn-lg me-3 w-50 border border-primary text-center mt-2'
											type='submit'
										>
											Update
										</button>
									</div>
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

export default UpdatePasswordForm;

import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { useNetwork } from '../context/NetworkContext';
import { supabase } from '../supabase';

const Page = () => {
	const history = useHistory();
	const { networkStatus } = useNetwork();
	const { user } = useAuth();

	const [isLoading, setIsLoading] = useState(false);

	function logout() {
		supabase.auth
			.signOut()
			.then((response) => {
				history.push('/page/Login');
			})
			.catch((err) => {
				alert(err);
			});
	}

	async function deleteData() {
		setIsLoading(true);
		const { data, error } = await supabase
			.from('scores')
			.delete()
			.match({ email: user });
		setIsLoading(false);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Settings</IonTitle>
					</IonToolbar>
				</IonHeader>
				{!networkStatus && (
					<div className='m-3 alert alert-warning' role='alert'>
						You are currently offline, some functions will be
						unavailable.
					</div>
				)}
				<hr />
				<div className='my-5 d-flex justify-content-center'>
					<button className='border btn btn-light btn-lg me-3 w-50 border-primary'>
						Lock the app
					</button>
				</div>
				<hr />
				<div className='my-5 d-flex justify-content-center'>
					<button
						className='border btn btn-light btn-lg me-3 w-50 border-primary'
						onClick={() => {
							history.push('/page/Update');
						}}
						disabled={!networkStatus}>
						Update Password
					</button>
				</div>
				<hr />
				<div className='my-5 d-flex justify-content-center'>
					<button
						className='border btn btn-light btn-lg me-3 w-50 border-primary'
						onClick={() => {
							history.push('/page/About');
						}}>
						About
					</button>
				</div>
				<hr />
				<div className='my-5 d-flex justify-content-center'>
					<button
						className='border btn btn-light btn-lg me-3 w-50 border-danger'
						onClick={logout}
						disabled={!networkStatus || isLoading}>
						Sign Out
					</button>
				</div>
				<hr />
				<div className='my-5 d-flex justify-content-center'>
					<button
						className='border btn btn-danger btn-lg me-3 w-50 border-danger'
						onClick={deleteData}
						disabled={!networkStatus || isLoading}>
						Delete My Data
					</button>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Page;

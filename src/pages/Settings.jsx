import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { supabase } from '../supabase';
import { useNetwork } from '../context/NetworkContext';

const Page = () => {
	const history = useHistory();
	const { networkStatus } = useNetwork();

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
					<div className='alert alert-warning m-3' role='alert'>
						You are currently offline, some functions will be
						unavailable.
					</div>
				)}
				<hr />
				<div className='d-flex justify-content-center my-5'>
					<button className='btn btn-light btn-lg me-3 w-50 border border-primary'>
						Lock the app
					</button>
				</div>
				<hr />
				<div className='d-flex justify-content-center my-5'>
					<button
						className='btn btn-light btn-lg me-3 w-50 border border-primary'
						onClick={() => {
							history.push('/page/Update');
						}}
						disabled={!networkStatus}
					>
						Update Password
					</button>
				</div>
				<hr />
				<div className='d-flex justify-content-center my-5'>
					<button
						className='btn btn-light btn-lg me-3 w-50 border border-primary'
						onClick={() => {
							history.push('/page/About');
						}}
					>
						About
					</button>
				</div>
				<hr />
				<div className='d-flex justify-content-center my-5'>
					<button
						className='btn btn-light btn-lg me-3 w-50 border border-danger'
						onClick={logout}
						disabled={!networkStatus}
					>
						Sign Out
					</button>
				</div>
				<hr />
			</IonContent>
		</IonPage>
	);
};

export default Page;

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
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const Page = () => {
	const [user, setUser] = useContext(UserContext);
	const history = useHistory();

	function logout() {
		supabase.auth
			.signOut()
			.then((response) => {
				setUser('Not Logged In');
				history.replace('/page/Login');
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

import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	IonListHeader,
	IonNote,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

// delete
import { useHistory } from 'react-router-dom';
import { supabase } from '../supabase';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
// delete

const Page = () => {
	const [user, setUser] = useContext(UserContext);
	const history = useHistory();
	function login() {
		history.push('/page/Login');
	}
	function register() {
		history.push('/page/Register');
	}
	function logout() {
		supabase.auth
			.signOut()
			.then((response) => {
				setUser('Not Logged In');
				history.push('/page/Login');
			})
			.catch((err) => {
				alert(err.response.text);
			});
	}
	// delete

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
					<button className='btn btn-light btn-lg me-3 w-50'>
						Lock the app
					</button>
				</div>
				<hr />
				<div className='d-flex justify-content-center my-5'>
					<button
						className='btn btn-light btn-lg me-3 w-50'
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
						className='btn btn-light btn-lg me-3 w-50'
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
						className='btn btn-light btn-lg me-3 w-50'
						onClick={logout}
					>
						Sign Out
					</button>
				</div>
				<hr />
				{/* delete */}
				<button onClick={login}>login</button>
				<button onClick={register}>register</button>
				{/* delete */}
			</IonContent>
		</IonPage>
	);
};

export default Page;

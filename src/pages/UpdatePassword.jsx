import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Page = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Update Password</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Update Password</IonTitle>
					</IonToolbar>
				</IonHeader>
				{/* Insert components under here */}
				<ExploreContainer name='Forgot Password' />
			</IonContent>
		</IonPage>
	);
};

export default Page;

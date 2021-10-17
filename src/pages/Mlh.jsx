import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import MLH from '../components/Mlh/MLH';

import { fetchMlhData } from '../api';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import { useState, useEffect } from 'react';

const Page = () => {
	const [eventData, setEventData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
		const fetchMyAPI = async () => {
			const initialMlhData = await fetchMlhData();
			setEventData(initialMlhData.data.currentEvents);
			setIsLoading(false);
		};

		fetchMyAPI();
	}, []);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonMenuButton />
					</IonButtons>
					<IonTitle>MLH</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>MLH</IonTitle>
					</IonToolbar>
				</IonHeader>
				{isLoading ? (
					<LoadingIcon />
				) : (
					eventData.map((element, index) => (
						<MLH data={element} itemNo={index} />
					))
				)}
			</IonContent>
		</IonPage>
	);
};

export default Page;

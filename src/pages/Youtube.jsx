import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import Youtube from '../components/Youtube/Youtube';

import { fetchYoutubeData } from '../api';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import { useState, useEffect } from 'react';

const Page = () => {
	const [initialYoutubeData, setInitialYoutubeData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
		const fetchMyAPI = async () => {
			const initialData = await fetchYoutubeData();
			console.log(initialData);
			setInitialYoutubeData(initialData.data.dataAsJson);
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
					<IonTitle>YouTube</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Youtube</IonTitle>
					</IonToolbar>
				</IonHeader>
				{/* <Youtube /> */}
				{isLoading ? (
					<LoadingIcon />
				) : (
					initialYoutubeData.map((element, index) => (
						<Youtube data={element} itemNo={index} />
					))
				)}
			</IonContent>
		</IonPage>
	);
};

export default Page;

import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewDidEnter,
} from '@ionic/react';
import { useEffect, useState } from 'react';

import { fetchYoutubeData } from '../api';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import Youtube from '../components/Youtube/Youtube';
import { useNetwork } from '../context/NetworkContext';
import { useStorage } from '../context/StorageContext';

const Page = () => {
	const [initialYoutubeData, setInitialYoutubeData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { networkStatus } = useNetwork();
	const { getItem, setItem } = useStorage();

	// Fetch data from the api
	async function fetchApiData() {
		setIsLoading(true);
		const initialData = await fetchYoutubeData();
		await setItem('youtubeData', JSON.stringify(initialData));
		setInitialYoutubeData(initialData.data.dataAsJson);
		setIsLoading(false);
	}

	// Fetch data from local storage
	async function fetchLocalData() {
		setIsLoading(true);
		let initialData = await getItem('youtubeData');
		if (initialData === null || initialData === undefined) {
			setInitialYoutubeData([]);
		} else {
			initialData = JSON.parse(initialData);
			setInitialYoutubeData(initialData.data.dataAsJson);
		}
		setIsLoading(false);
	}

	useIonViewDidEnter(() => {
		setIsLoading(true);
		if (networkStatus) {
			fetchApiData();
		} else {
			fetchLocalData();
		}
	});

	useEffect(() => {
		setIsLoading(true);
		if (networkStatus) {
			fetchApiData();
		} else {
			fetchLocalData();
		}
	}, []);

	// Run everytime the network status changes
	useEffect(() => {
		setIsLoading(true);
		if (networkStatus) {
			fetchApiData();
		} else {
			fetchLocalData();
		}
	}, [networkStatus]);

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
				{!networkStatus && (
					<div className='alert alert-warning m-3' role='alert'>
						You are currently offline. Using local data.
					</div>
				)}
				{isLoading ? (
					<LoadingIcon />
				) : initialYoutubeData.length === 0 ? (
					<div className='alert alert-danger m-3' role='alert'>
						No Data Found
					</div>
				) : (
					initialYoutubeData.map((element, index) => (
						<Youtube data={element} key={index} />
					))
				)}
			</IonContent>
		</IonPage>
	);
};

export default Page;

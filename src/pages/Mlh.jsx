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
import { useNetwork } from '../context/NetworkContext';
import { useStorage } from '../context/StorageContext';

const Page = () => {
	const [eventData, setEventData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { networkStatus } = useNetwork();
	const { getItem, setItem } = useStorage();

	// Fetch data from the api
	async function fetchApiData() {
		setIsLoading(true);
		const initialMlhData = await fetchMlhData();
		await setItem('mlhData', JSON.stringify(initialMlhData));
		setEventData(initialMlhData.data.currentEvents);
		setIsLoading(false);
	}

	// Fetch data from local storage
	async function fetchLocalData() {
		setIsLoading(true);
		let initialMlhData = await getItem('mlhData');

		if (initialMlhData === null || initialMlhData === undefined) {
			setEventData([]);
		} else {
			initialMlhData = JSON.parse(initialMlhData);
			setEventData(initialMlhData.data.currentEvents);
		}
		setIsLoading(false);
	}

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
					<IonTitle>MLH</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>MLH</IonTitle>
					</IonToolbar>
				</IonHeader>
				{!networkStatus && (
					<div className='alert alert-warning m-3' role='alert'>
						You are currently offline. Using local data.
					</div>
				)}
				{isLoading ? (
					<LoadingIcon />
				) : eventData.length === 0 ? (
					<div className='alert alert-danger m-3' role='alert'>
						No Data Found
					</div>
				) : (
					eventData.map((element, index) => (
						<MLH data={element} itemNo={index} key={index} />
					))
				)}
			</IonContent>
		</IonPage>
	);
};

export default Page;

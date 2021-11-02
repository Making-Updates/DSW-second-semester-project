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

import { fetchTwitterData } from '../api';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import Twitter from '../components/Twitter/Twitter';
import { useNetwork } from '../context/NetworkContext';
import { useStorage } from '../context/StorageContext';

const Page = () => {
	const [twitterData, setTwitterData] = useState([]);
	const [twitterName, setTwitterName] = useState('');
	const [twitterUserName, setTwitterUserName] = useState('');
	const [twitterImage, setTwitterImage] = useState('');

	const [isLoading, setIsLoading] = useState(true);

	const { networkStatus } = useNetwork();
	const { getItem, setItem } = useStorage();

	// Fetch data from the api
	async function fetchApiData() {
		const initialTwitterData = await fetchTwitterData();
		if (initialTwitterData === 'Error') {
			fetchLocalData();
		} else {
			await setItem('twitterData', JSON.stringify(initialTwitterData));
			console.log(initialTwitterData);
			let title = initialTwitterData.data.dataAsJson.title[0];
			setTwitterName(title.split('/')[0]);
			setTwitterUserName(title.split('/')[1]);
			setTwitterImage(initialTwitterData.data.dataAsJson.image[0].url[0]);
			setTwitterData(initialTwitterData.data.dataAsJson.item);
			setIsLoading(false);
		}
	}

	// Fetch data from local storage
	async function fetchLocalData() {
		setIsLoading(true);
		let initialTwitterData = await getItem('twitterData');
		if (initialTwitterData === null || initialTwitterData === undefined) {
			setTwitterName('');
			setTwitterUserName('');
			setTwitterImage('');
			setTwitterData([]);
		} else {
			let parseTwitterData = JSON.parse(initialTwitterData);
			let title = parseTwitterData.data.dataAsJson.title[0];
			setTwitterName(title.split('/')[0]);
			setTwitterUserName(title.split('/')[1]);
			setTwitterImage(parseTwitterData.data.dataAsJson.image[0].url[0]);
			setTwitterData(parseTwitterData.data.dataAsJson.item);
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

		fetchLocalData();
		// fetchApiData();
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
					<IonTitle>Twitter</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Twitter</IonTitle>
					</IonToolbar>
				</IonHeader>
				{!networkStatus && (
					<div className='m-3 alert alert-warning' role='alert'>
						You are currently offline. Using local data.
					</div>
				)}
				{isLoading ? (
					<LoadingIcon />
				) : twitterData.length === 0 ? (
					<div className='m-3 alert alert-danger' role='alert'>
						No Data Found
					</div>
				) : (
					twitterData.map((element, index) => (
						<Twitter
							data={element}
							itemNo={index}
							key={index}
							author={twitterName}
							user={twitterUserName}
							image={twitterImage}
						/>
					))
				)}
			</IonContent>
		</IonPage>
	);
};

export default Page;

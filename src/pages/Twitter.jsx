import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import Twitter from '../components/Twitter/Twitter';
import { fetchTwitterData } from '../api';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import { useState, useEffect } from 'react';
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
		setIsLoading(true);
		const initialTwitterData = await fetchTwitterData();
		await setItem('twitterData', JSON.stringify(initialTwitterData));
		let title = initialTwitterData.data.dataAsJson.title[0];
		setTwitterName(title.split('/')[0]);
		setTwitterUserName(title.split('/')[1]);
		setTwitterImage(initialTwitterData.data.dataAsJson.image[0].url[0]);
		setTwitterData(initialTwitterData.data.dataAsJson.item);
		setIsLoading(false);
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
			initialTwitterData = JSON.parse(initialTwitterData);
			let title = initialTwitterData.data.dataAsJson.title[0];
			setTwitterName(title.split('/')[0]);
			setTwitterUserName(title.split('/')[1]);
			setTwitterImage(initialTwitterData.data.dataAsJson.image[0].url[0]);
			setTwitterData(initialTwitterData.data.dataAsJson.item);
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
					<div className='alert alert-warning m-3' role='alert'>
						You are currently offline. Using local data.
					</div>
				)}
				{isLoading ? (
					<LoadingIcon />
				) : twitterData.length === 0 ? (
					<div className='alert alert-danger m-3' role='alert'>
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

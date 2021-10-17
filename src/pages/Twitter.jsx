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

const Page = () => {
	const [twitterData, setTwitterData] = useState([]);
	const [twitterName, setTwitterName] = useState('');
	const [twitterUserName, setTwitterUserName] = useState('');
	const [twitterImage, setTwitterImage] = useState('');

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const fetchMyAPI = async () => {
			const initialTwitterData = await fetchTwitterData();
			let title = initialTwitterData.data.dataAsJson.title[0];
			setTwitterName(title.split('/')[0]);
			setTwitterUserName(title.split('/')[1]);
			setTwitterImage(initialTwitterData.data.dataAsJson.image[0].url[0]);
			setTwitterData(initialTwitterData.data.dataAsJson.item);
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
					<IonTitle>Twitter</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Twitter</IonTitle>
					</IonToolbar>
				</IonHeader>
				{isLoading ? (
					<LoadingIcon />
				) : (
					twitterData.map((element, index) => (
						<Twitter
							data={element}
							itemNo={index}
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

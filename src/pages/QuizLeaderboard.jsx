import { useState, useEffect } from 'react';
import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	IonLabel,
	IonSegment,
	IonSegmentButton,
} from '@ionic/react';
import { supabase } from '../supabase';
import Leaderboard from '../components/Leaderboard/Leaderboard';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import { useNetwork } from '../context/NetworkContext';

const Page = () => {
	const [category, setCategory] = useState(null);
	const [difficulty, setDifficulty] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [tableData, setTableData] = useState([]);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const { networkStatus } = useNetwork();

	async function select() {
		const { data, error } = await supabase
			.from(category + difficulty)
			.select()
			.order('score', { ascending: false })
			.order('created_at', { ascending: false });
		console.log(data);
		if (error) {
			setError(true);
			setErrorMessage(error);
		} else {
			setTableData(data);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (!networkStatus) {
			setIsLoading(false);
			return;
		}
		if (difficulty != null && category != null) {
			setIsLoading(true);
			select();
		}
	}, [category, difficulty]);

	// Run everytime the network status changes
	useEffect(() => {
		if (networkStatus) {
			if (difficulty != null && category != null) {
				setIsLoading(true);
				select();
			}
		} else {
			setIsLoading(false);
		}
	}, [networkStatus]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Quiz Leaderboard</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Quiz leaderboard</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonSegment onIonChange={(e) => setCategory(e.detail.value)}>
					<IonSegmentButton value='php'>
						<IonLabel>PHP</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value='mysql'>
						<IonLabel>MySQL</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value='html'>
						<IonLabel>HTML</IonLabel>
					</IonSegmentButton>
				</IonSegment>
				<IonSegment onIonChange={(e) => setDifficulty(e.detail.value)}>
					<IonSegmentButton value='easy'>
						<IonLabel>Easy</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value='medium'>
						<IonLabel>Medium</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value='hard'>
						<IonLabel>Hard</IonLabel>
					</IonSegmentButton>
				</IonSegment>
				{!networkStatus ? (
					<div className='alert alert-warning m-3' role='alert'>
						You are currently offline. Please try again once you
						have a network connection.
					</div>
				) : category === null || difficulty === null ? (
					<div className='mt-5 text-center align-middle display-4'>
						Choose A Category and Difficulty
					</div>
				) : isLoading ? (
					<LoadingIcon />
				) : error ? (
					<div className='mt-5 text-center align-middle display-4 text-danger'>
						{errorMessage}
					</div>
				) : (
					<Leaderboard data={tableData} />
				)}
			</IonContent>
		</IonPage>
	);
};

export default Page;
